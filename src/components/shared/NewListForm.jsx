import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function NewListForm({ user, setLists }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    const fetchLists = async () => {
        try {
            const res = await fetch("/api/user-list",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: user._id,
                    }),
                });
            const { data } = await res.json();
            setLists(data);
        } catch (err) {
            console.error("Error fetching user lists:", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/create-list", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    description,
                    isPublic,
                    userId: user._id,
                }),
            });

            const { error, message } = await res.json();

            await toast.promise(
                new Promise((resolve, reject) => {
                    if (error) {
                        reject(message);
                    } else {
                        resolve(message);
                    }
                }),
                {
                    loading: "Creating...",
                    success: "List created",
                    error: (e) => `${e}`,
                },
                {
                    style: {
                        borderRadius: "10px",
                        background: "#1D1929",
                        color: "#fff",
                        border: "solid 1px white"
                    },
                },
            );

            // Fetch the updated lists after creating a new one
            fetchLists();
        } catch (err) {
            console.error("Error creating list:", err);
        }
    };

    useEffect(() => {
        fetchLists();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setLists, user._id]);


    return (
        <>
            <div id="listForm" className="modal fade" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title text-light opacity-70">Create List</h5>
                        </div>
                        <div className="modal-body tab-content py-4">
                            <form autocomplete="off" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label text-light opacity-70" for="name">Name</label>
                                    <input onChange={({ target }) => setName(target.value)} className="form-control form-control-light" id="name" type="text" placeholder="List name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-light opacity-70" for="description">Description</label>
                                    <textarea onChange={({ target }) => setDescription(target.value)} className="form-control form-control-light" id="description" type="text" placeholder="List description" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-light opacity-70" for="pass2">Public</label>
                                    <div className="password-toggle">
                                        <select onChange={({ target }) => setIsPublic(target.value)} className="form-select-light mt-3 form-select" id="lists">
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="btn btn-primary d-block w-100" type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}