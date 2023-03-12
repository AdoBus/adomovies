import React from "react";
import AccountLeftNavProfile from "./AccountLeftNavProfile";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AccountLeftNav() {
    const router = useRouter()
    return (
        <div className="card card-body card-light border-0 shadow-sm pb-1 me-lg-1">
            <AccountLeftNavProfile />
            <a className="btn btn-outline-light d-block d-md-none w-100 mb-3 collapsed" href="#account-menu" data-bs-toggle="collapse" aria-expanded="false">
                <i className="fi-align-justify me-2"></i>Menu
            </a>
            <div id="account-menu" className="d-md-block collapse">
                <nav className="card-nav pt-3">
                    <Link href="/account/profile">
                    <a className={`card-nav-link ${router.pathname == "/account/profile" ? "active" : ""}`}>
                            <i className="fi-user me-2"></i>Personal Info
                        </a>
                    </Link>
                    <Link href="/account/password">
                        <a className={`card-nav-link ${router.pathname == "/account/password" ? "active" : ""}`}>
                            <i className="fi-lock me-2"></i>Password & Security
                        </a>
                    </Link>
                    <Link href="/account/my-favorites">
                        <a className={`card-nav-link ${router.pathname == "/account/my-favorites" ? "active" : ""}`}>
                            <i className="fi-heart me-2"></i>My Favorites
                        </a>
                    </Link>
                    <Link href="/account/my-watchlists">
                        <a className={`card-nav-link ${router.pathname == "/account/my-watchlists" ? "active" : ""}`}>
                            <i className="fi-bookmark me-2"></i>My Watchlists
                        </a>
                    </Link>
                    <Link href="/account/my-lists">
                        <a className={`card-nav-link ${router.pathname == "/account/my-lists" ? "active" : ""}`}>
                            <i className="fi-list me-2"></i>My Lists
                        </a>
                    </Link>
                    <a className="card-nav-link" href="/real-estate/account-wishlist">
                        <i className="fi-logout me-2"></i>Sign Out
                    </a>
                </nav>
            </div>
        </div>
    )
}