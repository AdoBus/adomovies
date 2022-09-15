import Link from "next/link"
import moment from "moment"


export default function TrendingToday({ trending, genres }) {
    return (
        <>
            <section className="bg-position-top-center mt-5 mb-5 bg-repeat-0 pt-5">
                    {trending.slice(0, 1).map(t => (
                        <div key={t.id} className="card trend-img border-0 overflow-hidden"
                            style={{
                                backgroundImage: `url(api/getImage?q=${t.backdrop_path})`,
                                padding: "100px", backgroundSize: "auto"
                            }}>
                            <span className="img-gradient-overlay"></span>
                            <div className="card-body content-overlay pb-0">
                                <span className="badge bg-info fs-sm">Trending Today</span>
                            </div>
                            <div className="card-footer content-overlay border-0 pt-0 pb-4">
                                <div className="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                                    <Link href={`watch/today-favorite/${t.media_type}?q=${t.id}-1-${t.original_title ? t.original_title : t.original_name}`}>
                                        <a className="text-decoration-none text-light pe-2">
                                            <h3 className="h5 text-light mb-1">
                                                {t.original_title ? t.original_title : t.original_name}
                                            </h3>
                                            <div className="fs-sm text-uppercase pt-2 mb-1">
                                                <strong>Released</strong>: {moment(t.release_date ? t.release_date : t.first_air_date).format('LL')}
                                            </div>
                                            <div className="fs-sm text-uppercase pt-2 mb-1">
                                                <strong>Genres</strong>: {t.genre_ids.map(genre_id => (
                                                    genres.map(genre => (genre_id === genre.id ? genre.name : null)).join(' ')
                                                ))}
                                            </div>
                                            <div className="fs-sm text-uppercase pt-2 mb-1">
                                                <strong>IMDB RATING</strong>: {t.vote_average}
                                            </div>
                                            <div className="fs-sm opacity-70">
                                                {t.overview}
                                            </div>
                                        </a>
                                    </Link>
                                    <div className="btn-group ms-n2 ms-sm-0 mt-3">
                                        <Link href={`watch/today-favorite/${t.media_type}?q=${t.id}-1-${t.original_title ? t.original_title : t.original_name}`}>
                                            <a className="btn btn-primary px-3">Watch <i className="fi-play"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </section>
        </>
    )
}