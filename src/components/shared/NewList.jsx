import React from "react";
import NewListForm from "./NewListForm";

export default function NewList() {
    return (
        <>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                    <a href="#listForm" data-bs-toggle="modal" data-bs-dismiss="modal" class="dropdown-item">
                        <i className="fi fi-plus"></i> <strong>New List</strong>
                    </a>
                </li>
                <li>
                    <div className="dropdown-item" id="gender-collapse">
                        <label htmlFor="lists"><strong>Select List</strong></label>
                        <select className="form-select-light mt-3 form-select" id="lists">
                            <option value="Other">Other</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </li>
            </ul>
            <NewListForm />
        </>
    )
}