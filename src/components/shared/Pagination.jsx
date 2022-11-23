import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link"
import React, { useState } from "react";
import $ from 'jquery'
import Image from "next/image";

export default function Pagination({ discover, media_type, genres_id, tv_genre, pagination_type, query }) {
    const data = discover.results

    const [movies, setMovies] = useState(data);
    const [hasMore, setHasMore] = useState(true);

    const getMoreMovie = async () => {
        const res = await fetch(
            `/api/pagination?t=${pagination_type}&m=${media_type}&p=${$("#xyzz").attr('name')}&g=${$("#pagination").attr('name')}&q=${query}`
        );

        const newMovies = await res.json();

        setMovies((movie) => [...movie, ...newMovies.results]);

        $("#xyzz").attr('name', `${parseInt($("#xyzz").attr('name')) + 1}`)

        if (parseInt($("#xyzz").attr('name')) >= newMovies.total_pages) {
            setHasMore(false)
        }
    };

    return (
        <>
            <InfiniteScroll
                dataLength={movies.length}
                next={getMoreMovie}
                hasMore={hasMore}
                loader={<p>loading...</p>}
                endMessage={<></>}
            >
                <div id="pagination" name={media_type === 'movie' ? genres_id : tv_genre} className="row g-4" style={{ "display": "show" }}>
                    {movies.length > 0 ?
                        movies.map((movie, index) =>
                            movie.media_type != 'person' &&
                                <div key={index} className="col-md-2 col-6 mb-3">
                                    {/* <!-- Item --> */}
                                    <Link href={`/watch/${movie.media_type ? movie.media_type : media_type}/${movie.id}-${media_type === 'tv' ? '1-' : ''}${movie.original_title ?
                                        movie.original_title.replaceAll(' ', '-') : movie.original_name.replaceAll(' ', '-')}`}>
                                        <a className="card h-100 card-light shadow-sm card-hover border-0">
                                            <div className="card-img-top card-img-hover">
                                                <span className="img-overlay opacity-65"></span>
                                                <Image width="195" height="288" src={movie.poster_path ? `/api/getImage?q=${movie.poster_path}` : '/img/errors/grey.jpg'}
                                                    alt={movie.original_title ? movie.original_title : movie.original_name} />
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
                                                <p className="mb-0 fs-sm text-light opacity-70">{movie.original_title ? movie.original_title : movie.original_name}</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                        ) : <>Something went wrong.</>}
                </div>
            </InfiniteScroll>
        </>
    )
}