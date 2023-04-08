import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import saveCollection from "../../helpers/save_collection"
import getCollection from "../../helpers/get_collection"
import NewList from "./NewList"

export default function MovieDetailsTitle({ movie, type, session }) {
    const [favorite, setFavorite] = useState(false)
    const [watchlist, setWatchlist] = useState(false)
    const router = useRouter()
    const user = session.user

    useEffect(() => {
        getCollection(movie.id, 'favorite', user._id, type, setFavorite, setWatchlist)
        getCollection(movie.id, 'watchlist', user._id, type, setFavorite, setWatchlist)
    }, [movie.id, router, type, user._id])
    return (
        <>
            <a rel="noreferrer" target="_blank" href={movie.homepage} className="fs-xs text-uppercase text-decoration-none">{movie.status} </a>
            <span className="badge text-dark bg-warning fs-xs">{movie.adult === true && "Adult Film"}</span>
            <h3 className="fs-base pt-1 mb-2">
                <a className="nav-link text-light opacity-70 mb-3">
                    {movie.title ? movie.title : movie.name} <span className="badge bg-info fs-xs">{movie.tagline}</span>
                </a>
            </h3>
            <p className="fs-sm text-muted mb-3">{movie.overview}</p>
            <div className="d-flex flex-wrap mt-3 flex-column flex-sm-row mb-3">
                {movie.genres.map(genre => (
                    <Link className="btn btn-translucent-light btn-xs rounded-pill fs-sm me-2 mb-2" key={genre.id} href={`/genres/${type}/${genre.id}-${genre.name}`}>
                        <strong>{genre.name}</strong>
                    </Link>
                ))}
            </div>
            <div className="d-flex align-items-center text-decoration-none mb-3">
                <div className="ps-2">
                    <div className="d-flex text-body fs-sm">
                        <a type="button" onClick={() => saveCollection(movie.id, 'favorite', user._id, type, setFavorite, setWatchlist)}>
                            <span className="me-3 pe-1 opacity-70 text-light">
                                {favorite ? <i className="fi-heart-filled active opacity-70 text-light me-2"></i> : <i className="fi-heart active opacity-70 text-light me-2"></i>}
                                Favorite
                            </span>
                        </a>
                        <a type="button" onClick={() => saveCollection(movie.id, 'watchlist', user._id, type, setFavorite, setWatchlist)}>
                            <span className="me-3 pe-1 opacity-70 text-light">
                                {watchlist ? <i className="fi-bookmark-filled active opacity-70 text-light me-2"></i> : <i className="fi-bookmark active opacity-70 text-light me-2"></i>}
                                Watchlist
                            </span>
                        </a>
                        <div class="nav-item dropdown active">
                            <a className="text-decoration-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="me-3 pe-1 opacity-70 text-light">
                                    <i className="fi-list active opacity-70 text-light me-2"></i>
                                    List
                                </span>
                            </a>
                            <NewList user={user} movie={movie.id} type={type} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}