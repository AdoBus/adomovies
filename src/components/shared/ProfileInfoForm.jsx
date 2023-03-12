import React from "react";
import UploadPicture from "./UploadPicture";
import FormInputs from "./ProfileFormInputs";

export default function ProfileForm({ countries }) {
    return (
        <>
            <div className="pt-2 row">
                <div className="mb-2 mb-m-4 col-lg-9 col-md-12 col-sm-8">
                    <FormInputs countries={countries}/>
                </div>
                <div className="mb-4 col-lg-3 col-md-12 col-sm-4">
                    <UploadPicture />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9">
                    <div className="d-flex align-items-center justify-content-between pb-1">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-light btn-link px-0 btn-sm">
                            <i className="fi-trash me-2"></i>Delete account
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}