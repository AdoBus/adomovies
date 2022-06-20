import Footer from '../../../components/shared/Footer'
import Navbar from '../../../components/shared/Navbar'
import MovieDetails from '../../../components/shared/MovieDetails'
import EmbededComponent from '../../../components/shared/EmbededComponent'
import Casts from '../../../components/shared/CastsComponent'
import TopReview from '../../../components/shared/TopReview'
import ExtraDetails from '../../../components/shared/ExtraDetails'
import SimilarMovie from '../../../components/shared/SimilarMovies'
import YoutubeIframe from '../../../components/shared/YoutubeIframe'
import SeasonEpisodes from '../../../components/shared/SeasonEpisodes'
import React from "react";
import Layout from '../../../components/shared/LayoutComponent'

export const getServerSideProps = async ({ res, req, query }) => {
    const { q } = query
    var id = q.split('-')

    const genres_api = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const series_api = await fetch(
        `${process.env.tmdburl}/3/tv/${id[0]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=videos,credits,reviews,similar,seasons`
    )
    const episodes_api = await fetch(
        `${process.env.tmdburl}/3/tv/${id[0]}/season/${id[1]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=episodes`
    )

    const { genres } = await genres_api.json()
    const series = await series_api.json()
    const episodes = await episodes_api.json()

    if (series.success == false) {
        return {
            notFound: true,
        }
    }

    const torrent = {
        data: {
            movie: {
                torrents: null
            }
        }
    }

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=3600, stale-while-revalidate=3660'
    )

    return {
        props: {
            genres: genres,
            series: series,
            episodes: episodes,
            torrent: torrent,
        }
    }
}

// Lets catch client side error on seasons listing due to bootstrap not defined
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <section className="container">
                        <article className="card border-0 shadow-sm card-hover card-horizontal">
                            <div className="card-body">
                                <p>Something went wrong while displaying episodes</p>
                            </div>
                        </article>
                    </section>
                </>
            );
        }
        return this.props.children;
    }
}


export default function Streaming({ genres, series, torrent, episodes }) {
    return (
        <Layout title={`${series.name} - ${series.overview}`} meta={series.overview}>
            <>
                <Navbar genres={genres} />
                <EmbededComponent movie={series} season_number={episodes.season_number} />

                <MovieDetails movie={series} torrent={torrent} />

                {series.seasons.length >= 1 &&
                    <ErrorBoundary>
                        <SeasonEpisodes series={series} episodes={episodes} />
                    </ErrorBoundary>
                }

                <section className="container mt-3 mb-3">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 radius-4 p-4">
                            <Casts movie={series} />
                            <TopReview movie={series} />
                        </div>
                        <ExtraDetails movie={series} />
                    </div>
                </section>

                <SimilarMovie movie={series} route="watch/tv?q=" />
                <YoutubeIframe movie={series} />
                <Footer />
            </>
        </Layout>
    )
}
