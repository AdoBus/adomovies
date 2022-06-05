import SortBy from "../../components/shared/GenresSort";
import Link from "next/link"
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import $ from 'jquery'

export default function Pagination({ discover, genres_id }) {
    const data = discover.results

    const [movies, setPosts] = useState(data);

    const getMorePost = async () => {
        const res = await fetch(
            `/api/pagination?t=discover&m=movie&p=${$("#xyzz").attr('name')}&g=${$("#pagination").attr('name')}`
        );

        const newMovies = await res.json();

        setPosts((movie) => [...movie, ...newMovies.results]);

        $("#xyzz").attr('name', `${parseInt($("#xyzz").attr('name')) + 1}`)
    };
    return (
        <>
            <div id="xyzz" name="2" className="col-lg-8 col-xl-9 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                {/* <!-- Sorting--> */}
                <SortBy discover={discover} />
                {/* <!-- Catalog grid--> */}
                <InfiniteScroll
                    dataLength={movies.length}
                    next={getMorePost}
                    hasMore={true}
                    loader={<p>loading...</p>}
                    endMessage={<h4>Nothing more to show</h4>}
                >
                    <div id="pagination" name={genres_id} className="row g-4" style={{ "display": "show" }}>
                        {movies.length > 0 ?
                            movies.map((movie, index) =>
                                <div key={index} className="col-md-2 col-6 mb-3">
                                    {/* <!-- Item --> */}
                                    <Link href={`/watch/movie?q=${movie.id}-${movie.original_title ? movie.original_title : movie.original_name}`}>
                                        <a className="card h-100 shadow-sm card-hover border-0">
                                            <div className="card-img-top card-img-hover">
                                                <span className="img-overlay opacity-65"></span>
                                                <img width="300" height="400" src={`/api/getImage?q=${movie.poster_path}`} alt={movie.original_title} />
                                                <div className="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                                                    <div className="w-100 p-1">
                                                        <div className="mb-2">
                                                            <div className="d-flex align-items-center">
                                                                <i className="fi-play-circle" style={{
                                                                    "fontSize": "50px", "lineHeight": "20px", "width": "200px",
                                                                    "marginTop": "-10px", "marginLeft": "-7px", "zIndex": "2", "color": "#08AB4B", "textAlign": "center"
                                                                }}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body text-center">
                                                <p className="mb-0 text-nav fs-sm">{movie.original_title ? movie.original_title : movie.original_name}</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ) : <>Something went wrong</>}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}