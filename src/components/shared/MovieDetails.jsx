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
            <section className="container pt-5 p-4">
                <article className="card border-0 shadow-sm card-hover card-horizontal">
                    <a rel="noreferrer" target="_blank" href={movie.homepage} className="card-img-top" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path})` }}></a>
                    <div className="card-body">
                        <a rel="noreferrer" target="_blank" href={movie.homepage} className="fs-xs text-uppercase text-decoration-none">{movie.status}</a>
                        <h3 className="fs-base pt-1 mb-2">
                            <a href={movie.homepage} rel="noreferrer" target="_blank" className="nav-link">{movie.title ? movie.title : movie.name} <span className="badge bg-info fs-xs">{movie.tagline}</span>
                            </a>
                        </h3>
                        <p className="fs-sm text-muted">{movie.overview}</p>
                        <div className="d-flex flex-wrap flex-column flex-sm-row">
                            {movie.genres.map(genre => (
                                <a key={genre.id} className="icon-box card flex-row bg-warning align-items-center flex-shrink-0 
                                card-hover border-0 bg-secondary rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" >
                                    <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0 text-center">{genre.name}</h3>
                                </a>
                            ))}
                        </div>
                        <div className="row mb-3">
                            <div className="fs-sm col-md-4 pt-2 mb-1">
                                <strong>Release date</strong>: {moment(movie.release_date).format('LL')}
                            </div>
                            <div className="fs-sm col-md-4 pt-2 mb-1">
                                <strong>IMDb Rating</strong>: {movie.vote_average}
                            </div>
                            <div className="fs-sm col-md-4 pt-2 mb-1">
                                <strong>Duration</strong>: {movie.runtime ? movie.runtime : 0} min
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
                                {torrent.data.movie.torrents ?
                                    <>
                                        {torrent.data.movie.torrents.map(t_link => (
                                            <a key={t_link.hash} href={t_link.url} className="btn btn-sm btn-outline-primary"><i className='fi-cloud-download'></i> {t_link.quality}</a>
                                        ))}
                                    </>
                                    : ''
                                }
                                <a className="btn btn-sm btn-outline-primary" id="play-button" href="#youtube-modal" data-bs-toggle="modal"><i className='fi-youtube'></i> Trailers</a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}