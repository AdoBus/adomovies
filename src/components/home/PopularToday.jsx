import MovieGrid from "../shared/MovieGrid";
import PersonTvAndMovieDropdown from '../shared/PersonTvAndMovieDropdown'


export default function PopularToday({ movies, series }) {
    return (
        <section className="container pb-4 pt-1 mb-2">
            <div className="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h2 className="h5 mb-0 me-md-4 text-light">Porpular today</h2>
                    <PersonTvAndMovieDropdown/>
                </div>
            </div>
            {/* <!-- Gallery grid with gutters --> */}
            <MovieGrid movies={movies} route="watch/movie/" divID="popularMovie" divInfo='row g-4' total_vid="18" style="show" />
            <MovieGrid movies={series} route="watch/tv/" divID="popularSeries" divInfo='row g-4' total_vid="18" style="none" />
        </section>
    )
}