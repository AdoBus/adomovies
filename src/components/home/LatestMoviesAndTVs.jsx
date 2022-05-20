import MovieGrid from "../shared/MovieGrid"

export default function LatestMoviesAndTVs({latest, type, route}) {
    return (
        <>
            <section className="container pb-4 pt-1 mb-2">
                <div className="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2">
                    <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                        <h2 className="h5 mb-0 me-md-4">{type}</h2>
                    </div>
                </div>
                {/* <!-- Gallery grid with gutters --> */}
                <MovieGrid movies={latest} divID={type} route={route} divInfo='row g-4' style="show" />
            </section>
        </>
    )
}