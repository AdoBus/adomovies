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
                    <li className={`nav-item ${router.pathname == "/" ? "active" : ""}`}>
                        <Link href={`${router.pathname == "/" ? "/" : "/"}`}>
                            <a className="nav-link">HOME</a>
                        </Link>
                    </li>
                    <li className={`nav-item dropdown ${router.pathname == "/genres" ? "active" : ""}`}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">GENRE</a>
                        <ul className="dropdown-menu dropdown-menu-dark row">
                            {genres.map(genre => (
                                <li key={genre.id} className="col-6">
                                    <Link href={`/genres/movie/${genre.id}-${genre.name}`}>
                                        <a className="dropdown-item">{genre.name}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={`nav-item ${router.pathname == "/movies" ? "active" : ""}`}>
                        <Link href="/movies">
                            <a className="nav-link">MOVIES</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/tv" ? "active" : ""}`}>
                        <Link href="/tv">
                            <a className="nav-link">TV SERIES</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/top-rated" ? "active" : ""}`}>
                        <Link href="/top-rated?q=movie">
                            <a className="nav-link">TOP RATED</a>
                        </Link>
                    </li>
                    <li className={`nav-item dropdown ${router.pathname == "/genres" ? "active" : ""}`}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">MORE</a>
                        <ul className="dropdown-menu dropdown-menu-dark row">
                            <li className="col-6">
                                <Link href="/people">
                                    <a className="dropdown-item">People</a>
                                </Link>
                                <Link href="/lists">
                                    <a className="dropdown-item">Lists</a>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <NavProfileMobile />
                </ul>
            </div>
        </>
    )
}