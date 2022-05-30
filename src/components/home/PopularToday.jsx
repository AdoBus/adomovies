import { useEffect } from "react";
import MovieGrid from "../shared/MovieGrid";
import $ from 'jquery'

export default function PopularToday({ movies, series }) {
    useEffect(()=>{
        $('#moviesShow').on('click', function (){
            $('#popularSeries').hide()
            $('#popularMovie').show()
        })
        $('#TVShow').on('click', function (){
            $('#popularMovie').hide()
            $('#popularSeries').show()
        })
        $('#movieMobile').on('click', function (){
            $('#popularSeries').hide()
            $('#popularMovie').show()
        })
        $('#TVMobile').on('click', function (){
            $('#popularMovie').hide()
            $('#popularSeries').show()
        })
    }, [])
    return (
        <section className="container pb-4 pt-1 mb-2">
            <div className="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h2 className="h5 mb-0 me-md-4">Porpular today</h2>
                    <div className="dropdown d-md-none" data-bs-toggle="select">
                        <button className="btn btn-outline-secondary btn-sm dropdown-toggle"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false"><span className="dropdown-toggle-label">Movies</span></button>
                        <input type="hidden" />
                        <div className="dropdown-menu">
                            <a id="movieMobile" className="dropdown-item" href="javascript:"><span className="dropdown-item-label">Movies</span></a>
                            <a id="TVMobile" className="dropdown-item" href="javascript:"><span className="dropdown-item-label">TV Series</span></a>
                        </div>
                    </div>
                    <ul className="nav nav-pills d-none d-md-flex ps-lg-2 mb-0" role="tablist">
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
                </div>
            </div>
            {/* <!-- Gallery grid with gutters --> */}
            <MovieGrid movies={movies} route="watch/movie?q=" divID="popularMovie" divInfo='row g-4' total_vid="18" style="show"/>
            <MovieGrid movies={series} route="watch/tv?q=" divID="popularSeries" divInfo='row g-4' total_vid="18" style="none"/>
        </section>
    )
}