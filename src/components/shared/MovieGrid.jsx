import Link from 'next/link'

export default function MovieGrid({ movies, divID, divInfo, style, route }) {
    return (
        <>
            <div id={divID} className={divInfo} style={{ "display": style }}>
                {movies.length > 0 ?
                    movies.slice(0, 18).map((movie, index) =>
                        <div key={index} className="col-md-2 col-6 mb-3">
                            {/* <!-- Item --> */}
                            <Link href={`/${route}${movie.id}-${movie.original_title ? movie.original_title : movie.original_name}`}>
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
        </>
    )
}