import moment from "moment";

const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export default function MovieDetails({ movie, torrent }) {
    return (
        <>
            <section className="container mt-4 pt-2 pl-4 pr-4 pb-4">
                <article className="card card-light border-0 shadow-sm card-hover card-horizontal">
                    <a rel="noreferrer" target="_blank" href={movie.homepage} className="card-img-top"
                        style={{ backgroundImage: `url(/api/getImage?q=${movie.poster_path})` }}>
                    </a>
                    <div className="card-body">
                        <a rel="noreferrer" target="_blank" href={movie.homepage} className="fs-xs text-uppercase text-decoration-none">{movie.status} </a>
                        <span className="badge text-dark bg-warning fs-xs">{movie.adult === true && "Adult Film"}</span>
                        <h3 className="fs-base pt-1 mb-2">
                            <a href={movie.homepage} rel="noreferrer" target="_blank" className="nav-link text-light opacity-70">
                                {movie.title ? movie.title : movie.name} <span className="badge bg-info fs-xs">{movie.tagline}</span>
                            </a>
                        </h3>
                        <p className="fs-sm text-muted">{movie.overview}</p>
                        <div className="d-flex flex-wrap flex-column flex-sm-row">
                            {movie.genres.map(genre => (
                                <a key={genre.id} href="#" className="btn btn-translucent-light btn-xs rounded-pill fs-sm me-2 mb-2" >
                                    <strong>{genre.name}</strong>
                                </a>
                            ))}
                        </div>
                        <div className="row mb-3 text-light opacity-70">
                            <div className="fs-sm col-md-4 pt-2 mb-1">
                                <strong>Release date</strong>: {moment(movie.last_air_date ? movie.last_air_date : movie.release_date).format('LL')}
                            </div>
                            <div className="fs-sm col-md-4 pt-2 mb-1">
                                <strong>IMDb Rating</strong>: {movie.vote_average}
                            </div>
                            <div className="fs-sm col-md-4 pt-2 mb-1">
                                <strong>Duration</strong>: {movie.runtime ? movie.runtime : movie.episode_run_time} min
                            </div>
                            <div className="row">
                                <div className="fs-sm col-md-4 pt-2 mb-1">
                                    <strong>Country</strong>: {movie.production_countries.slice(0, 1).map(p_country => (p_country.name))}
                                </div>
                                <div className="fs-sm col-md-4 pt-2 mb-1">
                                    <strong>Production</strong>: {movie.production_companies.map(company => (
                                        company.name
                                    )).join(', ')}
                                </div>
                                <div className="fs-sm col-md-4 pt-2 mb-1">
                                    <strong>Revenue</strong>: {movie.budget ? `$${formatCash(movie.revenue)}` : 'No Data'}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="btn-group" role="group" aria-label="Outline button group">
                                {torrent && torrent.data.movie.torrents ?
                                    <>
                                        {torrent.data.movie.torrents.map(t_link => (
                                            <a key={t_link.hash} href={t_link.url} className="btn btn-sm btn-outline-light">
                                                <i className='fi-cloud-download'></i> {t_link.quality}
                                            </a>
                                        ))}
                                    </>
                                    : ''
                                }
                                <a className="btn btn-sm btn-outline-light" id="play-button" href="#youtube-modal" data-bs-toggle="modal">
                                    <i className='fi-youtube'></i> Trailers
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}