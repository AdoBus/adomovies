import React from "react"

export default function NewListForm() {
    return (
        <>
            <div id="listForm" className="modal fade" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content bg-dark">
                        <div class="modal-header">
                            <h5 class="modal-title text-light opacity-70">Create List</h5>
                        </div>
                        <div class="modal-body tab-content py-4">
                            <form autocomplete="off" id="signup">
                                <div class="mb-3">
                                    <label class="form-label text-light opacity-70" for="name">Name</label>
                                    <input class="form-control form-control-light" id="name" type="text" placeholder="List name" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-light opacity-70" for="description">Description</label>
                                    <textarea class="form-control form-control-light" id="description" type="text" placeholder="List description" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-light opacity-70" for="pass2">Is public</label>
                                    <div class="password-toggle">
                                        <select className="form-select-light mt-3 form-select" id="lists">
                                            <option value="Other">Yes</option>
                                            <option value="Male">No</option>
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