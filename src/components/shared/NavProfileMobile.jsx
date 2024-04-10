import React from "react";
import Link from "next/link";

export default function NavProfileMobile() {
    return (
        <li className="nav-item dropdown d-lg-none">
            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="rounded-circle me-2" src="https://finder-react.createx.studio/_next/image?url=%2Fimages%2Favatars%2F03.jpg&w=48&q=75" width="30" alt="Robert Fox" />Robert Fox
            </a>
            <div className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                <div className="d-flex align-items-start px-3 py-1 mb-2" style={{ "width": "16rem" }}>
                    <div className="ps-2">
                        <div className="fs-xs py-2">(302) 555-0107<br />robert_fox@email.com</div>
                    </div>
                </div>
                <Link className="dropdown-item" href="/account/profile">
                    <i className="fi-user me-2"></i>Personal Info
                </Link>
                <Link className="dropdown-item" href="/account/password">
                    <i className="fi-lock me-2"></i>Password & Security
                </Link>
                <Link className="dropdown-item" href="/account/my-favorites">
                    <i className="fi-heart me-2"></i>My Favorites
                </Link>
                <Link className="dropdown-item" href="/account/my-watchlists">
                    <i className="fi-bookmarj me-2"></i>My Watchlists
                </Link>
                <div className="dropdown-divider"></div>
                <a href="signin-dark.html">Sign Out</a>
            </div>
        </li>
    )
}