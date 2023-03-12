import React from "react";
import Link from "next/link";

export default function NavBrand() {
    return (
        <>
            <Link href='/'>
                <a className="navbar-brand d-flex justify-content-star me-2 me-xl-4">
                    <img style={{ marginTop: "-11px" }} className="d-block me-2" src="/img/logo/logo.svg" width="30" alt="Adomovies.com" />
                    <h5 className="mt-2 text-light">Adomovies.com</h5>
                </a>
            </Link>
            <button type="button" className="navbar-toggler ms-auto" data-bs-toggle="collapse" data-bs-target="#navbarUserNav"
                aria-controls="navbarUserNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    )
}