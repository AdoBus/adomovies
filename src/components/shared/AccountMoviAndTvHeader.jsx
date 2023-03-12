import React from "react";


export default function AccountMoviesAndTvHeader({header}) {
    return (
        <>
            <div className="mb-4 pb-2">
                <h1 className="h2 text-light mb-0">
                    {header}<span className="badge bg-faded-light fs-base align-middle ms-3">4</span>
                </h1>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom border-light mb-4">
                <ul className="nav nav-tabs nav-tabs-light flex-column flex-sm-row align-items-stretch align-items-sm-start mb-0" role="tablist">
                    <li className="nav-item me-sm-3 mb-3" role="presentation">
                        <a className="nav-link text-center active" href="#reviews-about-you" data-bs-toggle="tab" role="tab" aria-controls="reviews-about-you" aria-selected="true">
                            Movies
                        </a>
                    </li>
                    <li className="nav-item mb-3" role="presentation">
                        <a className="nav-link text-center" href="#reviews-by-you" data-bs-toggle="tab" role="tab" aria-controls="reviews-by-you" aria-selected="false" tabindex="-1">
                            Tv Series
                        </a>
                    </li>
                </ul>
                <a className="nav-link-light fw-bold mb-0" href="#">
                    <i className="fi-trash fs-xs mt-n1 me-2"></i>Remove all
                </a>
            </div>
            <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-end pb-4 mb-2 mb-md-3">
                <div className="d-flex align-items-center ms-sm-4">
                    <label className="fs-sm text-light me-2 pe-1 text-nowrap" for="review-sorting2"><i className="fi-arrows-sort mt-n1 me-2"></i>Sort by:</label>
                    <select className="form-select form-select-light form-select-sm" id="review-sorting2">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Popular</option>
                        <option>High rating</option>
                        <option>Low rating</option>
                    </select>
                </div>
            </div>
        </>
    )
}