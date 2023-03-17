import React from "react";
import Link from "next/link";

export default function EpisodesError({ url }) {
    return (
        <>
            <section className="container">
                <article className="card card-light border-0 shadow-sm card-hover card-horizontal">
                    <div className="card-body">
                        <div className="mb-2">
                            <div className="dropdown w-sm-50" data-bs-toggle="select">
                                <Link className="btn ps-2 ps-sm-3" type="button" href={url}>
                                    <i className="fi-refresh me-2"></i>
                                    <span id="xyz" className="dropdown-toggle-label text-light opacity-70">Refresh episodes</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}