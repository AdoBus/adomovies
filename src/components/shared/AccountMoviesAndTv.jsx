import React from "react";
import AccountMoviesAndTvHeader from "./AccountMoviAndTvHeader";


export default function AccountMoviesAndTv({ header }) {
    return (
        <>
            <AccountMoviesAndTvHeader header={header} />
            <article className="card card-light border-0 shadow-sm card-hover card-horizontal">
                <a href="#" className="card-img-top" style={{ "backgroundImage": "url(https://image.tmdb.org/t/p/original/eN6R6mb3ntHwA3y3MhSwpP78ljN.jpg)", padding: "100px", backgroundSize: "cover" }}></a>
                <div className="card-body">
                    <a href="#" className="fs-xs text-uppercase text-decoration-none">Realeased</a>
                    <h3 className="fs-base pt-1 mb-2">
                        <a href="#" className="nav-link text-light">Die Hart</a>
                    </h3>
                    <div className="fs-sm text-light opacity-70 mb-2">Feb 12, 2023</div>
                    <p className="fs-sm text-muted">Ac sit tincidunt lacus dignissim volutpat dui scelerisque porttitor non. Elit at ullamcorper feugiat porta adipiscing...</p>
                    <a href="#" className="d-flex align-items-center text-decoration-none">
                        <div className="ps-2">
                            <div className="d-flex text-body fs-sm">
                                <span className="me-3 pe-1 opacity-70 text-light">
                                    <i className="fi-heart opacity-70 text-light me-2"></i>
                                    Favorite
                                </span>
                                <span className="me-3 pe-1 opacity-70 text-light">
                                    <i className="fi-bookmark-filled active opacity-70 text-light me-2"></i>
                                    Watchlist
                                </span>
                                <span className="me-3 pe-1 opacity-70 text-light">
                                    <i className="fi-list active opacity-70 text-light me-2"></i>
                                    Add to list
                                </span>
                                <span className="me-3 pe-1 opacity-70 text-light">
                                    <i className="fi-trash active opacity-70 text-light me-2"></i>
                                    Remove
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </article>
        </>
    )
}