import Link from "next/link"
import moment from "moment"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function TrendingToday({ trending, genres }) {
    return (
        <>
            <section className="bg-position-top-center mt-5 mb-5 bg-repeat-0 pt-5">
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    autoPlay={true}
                    autoPlaySpeed={8000}
                    ssr={true}
                    infinite={true}
                    transitionDuration={5000}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                    {trending.map(t => (
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
                                                {trending[0].overview}
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
                </Carousel>
            </section>
        </>
    )
}