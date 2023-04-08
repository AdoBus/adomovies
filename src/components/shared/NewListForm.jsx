import React, { useState } from "react"
import toast from "react-hot-toast"

export default function NewListForm({ user, setLists }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/create-list", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                description,
                isPublic,
                userId: user.user._id,
            }),
        });

        const data = await res.json();

        await toast.promise(
            new Promise((resolve, reject) => {
                if (data.error) {
                    reject(data); // Pass error message to error handler
                } else {
                    resolve(data); // Pass data to success handler
                }
            }),
            {
                loading: 'Creating...',
                success: (() => {
                    const fetchLists = async () => {
                        const res = await fetch("/api/user-lists",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    userId: user.user._id,
                                }),
                            });
                        const { data } = await res.json();
                        setLists(data);
                    };
                    fetchLists();
                    return `List created`;
                }),
                error: (e) => {
                    return `${e.error}`;
                },
            },
            {
                style: {
                    borderRadius: '10px',
                    background: '#1D1929',
                    color: '#fff',
                    border: "solid 1px white"
                },
            },
        );
    };

    return (
        <>
            <div id="listForm" className="modal fade" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content bg-dark">
                        <div class="modal-header">
                            <h5 class="modal-title text-light opacity-70">Create List</h5>
                        </div>
                        <div class="modal-body tab-content py-4">
                            <form autocomplete="off" onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label class="form-label text-light opacity-70" for="name">Name</label>
                                    <input onChange={({ target }) => setName(target.value)} class="form-control form-control-light" id="name" type="text" placeholder="List name" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-light opacity-70" for="description">Description</label>
                                    <textarea onChange={({ target }) => setDescription(target.value)} class="form-control form-control-light" id="description" type="text" placeholder="List description" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-light opacity-70" for="pass2">Public</label>
                                    <div class="password-toggle">
                                        <select onChange={({ target }) => setIsPublic(target.value)} className="form-select-light mt-3 form-select" id="lists">
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                </div>
                                <button class="btn btn-primary d-block w-100" type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}