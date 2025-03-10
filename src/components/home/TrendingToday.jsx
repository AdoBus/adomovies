import Link from "next/link"
import moment from "moment"


export default function TrendingToday({ trending, genres }) {
    return (
        <>
            <section className="bg-position-top-center mt-5 mb-5 bg-repeat-0 pt-5">
                <div key={trending[0].id} className="card trend-img border-0 overflow-hidden"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${trending[0].backdrop_path})`,
                        padding: "100px", backgroundSize: "cover"
                    }}>
                    <span className="img-gradient-overlay"></span>
                    <div className="card-body content-overlay pb-0">
                        <span className="badge bg-info fs-sm">Trending Today</span>
                    </div>
                    <div className="card-footer content-overlay border-0 pt-0 pb-4">
                        <div className="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                            <Link href={`watch/today-favorite/${trending[0].media_type}/${trending[0].id}-1-${trending[0].original_title ?
                                 String(trending[0].original_title).replaceAll(' ', '-') : String(trending[0].original_name).replaceAll(' ', '-')}`}>
                                <a className="text-decoration-none text-light pe-2">
                                    <h3 className="h5 text-light mb-1">
                                        {trending[0].original_title ? trending[0].original_title : trending[0].original_name}
                                    </h3>
                                    <div className="fs-sm text-uppercase pt-2 mb-1">
                                        <strong>Released</strong>: {moment(trending[0].release_date ? trending[0].release_date : trending[0].first_air_date).format('LL')}
                                    </div>
                                    <div className="fs-sm text-uppercase pt-2 mb-1">
                                        <strong>Genres</strong>: {trending[0].genre_ids.map(genre_id => (
                                            genres.map(genre => (genre_id === genre.id ? genre.name : null)).join(' ')
                                        ))}
                                    </div>
                                    <div className="fs-sm text-uppercase pt-2 mb-1">
                                        <strong>IMDB RATING</strong>: {trending[0].vote_average}
                                    </div>
                                    <div className="fs-sm opacity-70">
                                        {trending[0].overview}
                                    </div>
                                </a>
                            </Link>
                            <div className="btn-group ms-n2 ms-sm-0 mt-3">
                                <Link href={`watch/today-favorite/${trending[0].media_type}/${trending[0].id}-1-${trending[0].original_title ?
                                     String(trending[0].original_title).replaceAll(' ', '-') : String(trending[0].original_name).replaceAll(' ', '-')}`}>
                                    <a className="btn btn-primary px-3">Watch <i className="fi-play"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}