import MovieGrid from "./MovieGrid"

export default function SimilarMovie({movie, route}) {
    return (
        <section className="container mb-5">
            <div className="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-3">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h2 className="h5 mb-0 text-light">Similar Movies</h2>
                </div>
            </div>
            <MovieGrid movies={movie.similar.results} total_vid="18" route={route} divID="similarMovies" divInfo='row g-4' style="show" />
        </section>
    )
}