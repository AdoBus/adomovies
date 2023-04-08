import React, { useEffect, useState } from "react";
import NewListForm from "./NewListForm";
import toast from "react-hot-toast"

export default function NewList({user, movie, type}) {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        const fetchLists = async () => {
            const res = await fetch("/api/user-lists",
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
        };
        fetchLists();
    }, [user._id]);

    const addMediaToList = async (list_id) => {
        if (list_id === "Select list") { return; }
        const media_id = movie
        const media_type = type
        const user_id = user._id
        const res = await fetch("/api/add-media-to-list", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                list_id,
                media_id,
                media_type,
                user_id
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
                loading: 'Adding...',
                success: (() => {
                    return `Movie added to list`;
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
            }
        );
    }
    return (
        <>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                    <a href="#listForm" data-bs-toggle="modal" data-bs-dismiss="modal" class="dropdown-item">
                        <i className="fi fi-plus"></i> <strong>New List</strong>
                    </a>
                </li>
                {
                    lists.length > 0 &&
                    <li>
                        <div className="dropdown-item" id="gender-collapse">
                            <label htmlFor="lists"><strong>Select List</strong></label>
                            <select onChange={({ target }) => addMediaToList(target.value)} className="form-select-light mt-3 form-select" id="lists">
                                <option>Select list</option>
                                {
                                    lists.map((list, index) => (
                                        <option key={index} value={list._id}>{list.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </li>

                }
            </ul>
            <NewListForm user={user} setLists={setLists} />
        </>
    )
}