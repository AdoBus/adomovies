import React, { useEffect } from "react";
import $ from 'jquery'

export default function PersonTvAndMovieDropdown() {
    useEffect(() => {
        $('#moviesShow').on('click', function () {
            $('#popularSeries').hide()
            $('#popularMovie').show()
        })
        $('#TVShow').on('click', function () {
            $('#popularMovie').hide()
            $('#popularSeries').show()
        })
        $('#movieMobile').on('click', function () {
            $('#popularSeries').hide()
            $('#popularMovie').show()
        })
        $('#TVMobile').on('click', function () {
            $('#popularMovie').hide()
            $('#popularSeries').show()
        })
    }, [])
    return (
        <>
            <div className="dropdown d-md-none" data-bs-toggle="select">
                <button className="btn btn-outline-secondary btn-dark btn-sm dropdown-toggle"
                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="dropdown-toggle-label text-light opacity-70">Movies</span>
                </button>
                <input type="hidden" />
                <div className="dropdown-menu dropdown-menu-dark">
                    <a id="movieMobile" className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Movies</span>
                    </a>
                    <a id="TVMobile" className="dropdown-item" href="#">
                        <span className="dropdown-item-label">TV Series</span>
                    </a>
                </div>
            </div>
            <ul className="nav nav-pills nav-pills-light d-none d-md-flex ps-lg-2 mb-0" role="tablist">
                <li className="nav-item">
                    <a href="#" className="nav-link active" id="moviesShow" data-bs-toggle="pill" role="tab"
                        aria-controls="popularMovie" aria-selected="true">Movies</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" id="TVShow" data-bs-toggle="pill" role="tab"
                        aria-controls="popularSeries" aria-selected="false">
                        TV Series</a>
                </li>
            </ul>
        </>
    )
}