import ReactReadMoreReadLess from "react-read-more-read-less";
import moment from "moment";
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

export default function TopReview({ movie }) {
    return (
        <>
            <div className="mt-3 d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h2 className="h5 mb-0 me-md-4 text-light">Top Reviews</h2><span className="badge bg-info fs-xs">TMDB</span>
                </div>
            </div>
            {movie.reviews.results.length > 0 ?
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    ssr={true}
                    infinite={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {movie.reviews.results.map(review => (
                        <>
                            <div key={review.author} className="d-flex justify-content-between mb-3">
                                <div className="d-flex align-items-center pe-2">
                                    {review.author_details.avatar_path ?
                                        review.author_details.avatar_path.includes('/http') ?
                                            <img className="rounded-circle me-1" src={review.author_details.avatar_path.replace('/http', 'http')} width="48" alt="Avatar" />
                                            :
                                            <img className="rounded-circle me-1" src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`} width="48" alt="Avatar" />
                                        : <img className="rounded-circle me-1" src="/img/errors/grey.jpg" alt="No image" width="48" />}
                                    <div className="ps-2">
                                        <h6 className="fs-base mb-0 text-light">{review.author}</h6>
                                        <div className="star-rating">
                                            <h2 className="h5" style={{ "color": "white" }}>
                                                <span className="badge card-light">
                                                    <i className="star-rating-icon text-light opacity-70 fi-star-filled"></i>{' '}{review.author_details.rating}
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-muted fs-sm">{moment(review.created_at).format('LL')}</span>
                            </div>
                            <div className="text-light opacity-70 mt-2">
                                <ReactReadMoreReadLess
                                    charLimit={800}
                                    readMoreText={"Read more"}
                                    readLessText={"Read less"}
                                    readMoreStyle={{ color: "#33cabb" }}
                                    readLessStyle={{ color: "#33cabb" }}>
                                    {review.content}
                                </ReactReadMoreReadLess>
                            </div>
                        </>
                    ))}
                </Carousel>
                : <p>We don&apos;t have any review so far.</p>}
        </>
    )
}