export default function TopReview({ movie }) {
    return (
        <>
            <div className="mt-5 d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h2 className="h5 mb-0 me-md-4">Top Review</h2><span className="badge bg-info fs-xs">TMDB</span>
                </div>
            </div>
            {movie.reviews.results.length > 0 ?
                movie.reviews.results.slice(0, 1).map(review => (
                    <>
                        <div className="d-flex justify-content-between mb-3">
                            <div className="d-flex align-items-center pe-2">
                                {review.author_details.avatar_path ?
                                    review.author_details.avatar_path.includes('/http') ?
                                        <img className="rounded-circle me-1" src={review.author_details.avatar_path.replace('/http', 'http')} width="48" alt="Avatar" />
                                        :
                                        <img className="rounded-circle me-1" src={`https://www.themoviedb.org/t/p/w440_and_h660_face${review.author_details.avatar_path}`} width="48" alt="Avatar" />
                                    : <img className="rounded-circle me-1" src="" width="48" />}
                                <div className="ps-2">
                                    <h6 className="fs-base mb-0">{review.author}</h6>
                                    <div className="star-rating">
                                        <i className="star-rating-icon fi-star-filled active"></i>
                                        <i className="star-rating-icon fi-star-filled active"></i>
                                        <i className="star-rating-icon fi-star-filled active"></i>
                                        <i className="star-rating-icon fi-star-filled active"></i>
                                        <i className="star-rating-icon fi-star"></i>
                                    </div>
                                </div>
                            </div>
                            <span className="text-muted fs-sm">Jan 17, 2021</span>
                        </div>
                        <p>{review.content}</p>
                    </>
                )) : <p>We don&apos;t have any review so far.</p>}
        </>
    )
}