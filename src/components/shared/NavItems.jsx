import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavProfileMobile from "./NavProfileMobile";


export default function NavItems({ genres }) {
    const router = useRouter();
    return (
        <>
            <div className="collapse navbar-collapse order-lg-2" id="navbarUserNav">
                <ul className="navbar-nav">
                    <li className={`nav-item ${router.pathname == "/" && "active"}`}>
                        <Link className="nav-link" href={`${router.pathname == "/" ? "/" : "/"}`}>
                            HOME
                        </Link>
                    </li>
                    <li className={`nav-item dropdown ${router.pathname.includes('/genres') && "active"}`}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">GENRE</a>
                        <ul className="dropdown-menu dropdown-menu-dark row">
                            {genres.map(genre => (
                                <li key={genre.id} className="col-6">
                                    <Link className="dropdown-item" href={`/genres/movie/${genre.id}-${genre.name}`}>
                                        {genre.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={`nav-item ${router.pathname == "/movies" && "active"}`}>
                        <Link className="nav-link" href="/movies">
                            MOVIES
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/tv" && "active"}`}>
                        <Link className="nav-link" href="/tv">
                            TV SERIES
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname.includes('/top-rated') && "active"}`}>
                        <Link className="nav-link" href="/top-rated/movie">
                            TOP RATED
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/people" && "active"}`}>
                        <Link className="nav-link" href="/people">
                            PEOPLE
                        </Link>
                    </li>
                    <NavProfileMobile />
                </ul>
            </div>
        </>
    )
}