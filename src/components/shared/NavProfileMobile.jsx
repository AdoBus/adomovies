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
                <Link href="/account/profile">
                    <a className="dropdown-item">
                        <i className="fi-user me-2"></i>Personal Info
                    </a>
                </Link>
                <a className="dropdown-item" href="car-finder-account-security.html">
                    <i className="fi-lock me-2"></i>Password &amp; Security
                </a>
                <a className="dropdown-item" href="car-finder-account-security.html">
                    <i className="fi-heart me-2"></i>My Favourites
                </a>
                <a className="dropdown-item" href="car-finder-account-security.html">
                    <i className="fi-bookmark me-2"></i>My Watchlists
                </a>
                <a className="dropdown-item" href="car-finder-account-security.html">
                    <i className="fi-list me-2"></i>My Lists
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="signin-dark.html">Sign Out</a>
            </div>
        </li>
    )
}