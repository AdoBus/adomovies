import React from "react";


export default function WhereYouSignedIn() {
    return (
        <>
            <div className="border-top border-light pt-4 mt-3"></div>
            <h2 className="h5 text-light pt-2 mb-4">Where you're signed in on</h2>
            <div className="d-flex border-bottom border-light pb-3 mb-3">
                <i className="fi-device-desktop fs-5 text-light me-1"></i>
                <div className="ps-2 text-light">
                    <div className="fw-bold mb-1">Mac – New York, USA</div>
                    <span className="d-inline-block fs-sm border-end border-light pe-2 me-2">
                        <span className="opacity-70">Chrome</span>
                    </span>
                    <span className="fs-sm fw-bold text-success">Active now</span>
                </div>
            </div>
            <div className="d-flex border-bottom border-light pb-3 mb-3">
                <i className="fi-device-mobile fs-5 text-light me-1"></i>
                <div className="ps-2 text-light">
                    <div className="fw-bold mb-1">iPhone 12 – New York, USA</div>
                    <span className="d-inline-block fs-sm border-end border-light pe-2 me-2">
                        <span className="opacity-70">Finder App</span>
                    </span>
                    <span className="fs-sm opacity-70">20 hours ago</span>
                </div>
                <div className="align-self-center ms-auto">
                    <div className="dropdown">
                        <button className="btn btn-icon btn-translucent-light btn-xs rounded-circle" type="button" id="contextMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fi-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark pb-3 my-1" aria-labelledby="contextMenu1">
                            <li><a className="dropdown-item" href="#">Not you?</a></li>
                            <li><a className="d-block px-3" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <a className="nav-link nav-link-light px-0 mt-4" href="#">Sign out of all sessions     </a>
        </>
    )
}