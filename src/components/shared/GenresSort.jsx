import Link from 'next/link'

export default function SortBy({ discover, genres_id, genres_name, media_type }) {
    return (
        <>
            <div className="d-flex flex-sm-row flex-column align-items-sm-center mt-5 mb-5 align-items-stretch my-2">
                <div className="d-flex align-items-center flex-shrink-0">
                    <label className="fs-sm me-2 pe-1 text-nowrap text-light opacity-70" htmlFor="sortby">
                        <i className="fi-tv text-muted mt-n1 me-2"></i>Media Type:</label>
                    <div className="dropdown w-sm-50" data-bs-toggle="select">
                        <button className="btn btn-dark btn-outline-secondary 
                        dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span id="xyz" className="dropdown-toggle-label">
                                {media_type === 'movie' ? <>Movies</> : <>Tv Series</>}
                            </span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <Link className="dropdown-item" href={genres_id ? `/genres/movie/${genres_id}-${genres_name}` : `/top-rated?q=movie`}>
                                    <span className="dropdown-item-label">Movies</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href={genres_id ? `/genres/tv/${genres_id}-${genres_name}` : `/top-rated?q=tv`}>
                                    <span className="dropdown-item-label">Tv Series</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="d-none d-sm-block w-100 mx-4" />
                <div className="d-none d-sm-flex align-items-center flex-shrink-0 text-muted">
                    <i className="fi-check-circle me-2"></i><span className="fs-sm mt-n1">{discover.total_results} results</span>
                </div>
            </div>
        </>
    )
}