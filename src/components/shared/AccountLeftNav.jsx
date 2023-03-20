import React from "react";
import AccountLeftNavProfile from "./AccountLeftNavProfile";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AccountLeftNav({session}) {
    const router = useRouter()
    return (
        <div className="card card-body card-light border-0 shadow-sm pb-1 me-lg-1">
            <AccountLeftNavProfile session={session} />
            <a className="btn btn-outline-light d-block d-md-none w-100 mb-3 collapsed" href="#account-menu" data-bs-toggle="collapse" aria-expanded="false">
                <i className="fi-align-justify me-2"></i>Menu
            </a>
            <div id="account-menu" className="d-md-block collapse">
                <nav className="card-nav pt-3">
                    <Link className={`card-nav-link ${router.pathname == "/account/profile" ? "active" : ""}`} href="/account/profile">
                        <i className="fi-user me-2"></i>Personal Info
                    </Link>
                    <Link className={`card-nav-link ${router.pathname == "/account/password" ? "active" : ""}`} href="/account/password">
                            <i className="fi-lock me-2"></i>Password & Security
                    </Link>
                    <Link className={`card-nav-link ${router.pathname == "/account/my-favorites" ? "active" : ""}`} href="/account/my-favorites">
                            <i className="fi-heart me-2"></i>My Favorites
                    </Link>
                    <Link className={`card-nav-link ${router.pathname == "/account/my-watchlists" ? "active" : ""}`} href="/account/my-watchlists">
                            <i className="fi-bookmark me-2"></i>My Watchlists
                    </Link>
                    <Link className={`card-nav-link ${router.pathname == "/account/my-lists" ? "active" : ""}`} href="/account/my-lists">
                            <i className="fi-list me-2"></i>My Lists
                    </Link>
                    <a className="card-nav-link" href="/real-estate/account-wishlist">
                        <i className="fi-logout me-2"></i>Sign Out
                    </a>
                </nav>
            </div>
        </div>
    )
}