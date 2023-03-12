import React from "react";
import { Fragment } from "react";


export default function ProfileFormLayout({ children, title, content, divId, border = true }) {
    return (
        <Fragment>
            <div className={`${border && "border-bottom border-light pb-3 mb-3"}`}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="opacity-75 pe-2">
                        <h2 className="form-label text-light fw-bold">{title}</h2>
                        <p className="text-light mb-0">{content}</p>
                    </div>
                    <div data-bs-toggle="tooltip" aria-label="Edit" data-bs-original-title="Edit">
                        <a className="nav-link nav-link-light py-0 collapsed" href={`#${divId}`} data-bs-toggle="collapse" aria-expanded="false">
                            <i className="fi-edit"></i>
                        </a>
                    </div>
                </div>
                {children}
            </div>
        </Fragment>
    )
}