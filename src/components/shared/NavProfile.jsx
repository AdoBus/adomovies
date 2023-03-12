import React from "react";
import Link from "next/link";

export default function NavProfile() {
    return (
        <>
            <div className="dropdown d-none d-lg-block order-lg-3 my-n2 me-3">
                <a className="d-block py-2" href="#">
                    <img className="rounded-circle" src="https://finder-react.createx.studio/_next/image?url=%2Fimages%2Favatars%2F03.jpg&w=48&q=75" width="40" alt="Robert Fox" /></a>
                <div className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                    <div className="d-flex align-items-start border-bottom border-light px-3 py-1 mb-2" style={{ "width": "16rem" }}>
                        <img className="rounded-circle" src="https://finder-react.createx.studio/_next/image?url=%2Fimages%2Favatars%2F03.jpg&w=48&q=75" width="48" alt="Robert Fox" />
                        <div className="ps-2">
                            <h6 className="fs-base text-light mb-0">Robert Fox</h6>
                            <div className="fs-xs py-2">(302) 555-0107<br />robert_fox@email.com</div>
                        </div>
                    </div>
                    <Link href="/account/profile">
                        <a className="dropdown-item">
                            <i className="fi-user me-2"></i>Personal Info
                        </a>
                    </Link>
                    <Link href="/account/password">
                        <a className="dropdown-item">
                            <i className="fi-lock me-2"></i>Password & Security
                        </a>
                    </Link>
                    <Link href="/account/my-favorites">
                        <a className="dropdown-item">
                            <i className="fi-heart me-2"></i>My Favorites
                        </a>
                    </Link>
                    <Link href="/account/my-watchlists">
                        <a className="dropdown-item">
                            <i className="fi-bookmark me-2"></i>My Watchlists
                        </a>
                    </Link>
                    <Link href="/account/my-lists">
                        <a className="dropdown-item">
                            <i className="fi-list me-2"></i>My Lists
                        </a>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="signin-dark.html">Sign Out</a>
                </div>
            </div>
        </>
    )
}