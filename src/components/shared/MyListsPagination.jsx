import React from "react";
import AccountMoviesAndTvHeader from "./AccountMoviAndTvHeader";
import Link from "next/link";

export default function MyListPagination({ header }) {
    return (
        <>
            <AccountMoviesAndTvHeader header={header} />
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-xl-4">
                {[1, 2, 4, 6, 6, 7, 9, 9, 0].map(i => (
                    <div className="col pb-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                                <div className="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
                                    <button className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fi-dots-vertical"></i>
                                    </button>
                                    <ul className="dropdown-menu my-1" aria-labelledby="contextMenu1">
                                        <li>
                                            <button className="dropdown-item" type="button"><i className="fi-edit opacity-60 me-2"></i>Edit</button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button"><i className="fi-flame opacity-60 me-2"></i>Promote</button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button"><i className="fi-power opacity-60 me-2"></i>Deactivate</button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button"><i className="fi-trash opacity-60 me-2"></i>Delete</button>
                                        </li>
                                    </ul>
                                </div>
                                <img className="rounded-3" src="https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg" alt="Image" />
                            </div>
                            <h3 className="mb-0 fs-lg text-light">
                                <Link href="/list/1">
                                    <a className="nav-link stretched-link">Marvel</a>
                                </Link>
                            </h3>
                            <ul className="list-inline mb-0 fs-s">
                                <li className="list-inline-item pe-1 text-bold">
                                    <i className="fi-item mt-n1 me-1 align-middle"></i>
                                    5 Items
                                </li>
                                <li className="list-inline-item pe-1 text-bold">
                                    <i className="fi-globe mt-n1 me-1 fs-base text-muted align-middle"></i>
                                    Private
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}