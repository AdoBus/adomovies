import Footer from '../../../../components/shared/Footer'
import Navbar from '../../../../components/shared/Navbar'
import MovieDetails from '../../../../components/shared/MovieDetails'
import EmbededComponent from '../../../../components/shared/EmbededComponent'
import Casts from '../../../../components/shared/CastsComponent'
import TopReview from '../../../../components/shared/TopReview'
import ExtraDetails from '../../../../components/shared/ExtraDetails'
import SimilarMovie from '../../../../components/shared/SimilarMovies'
import YoutubeIframe from '../../../../components/shared/YoutubeIframe'
import dynamic from 'next/dynamic'
import React from 'react'
import Layout from '../../../../components/shared/LayoutComponent'
import EpisodesError from '../../../../components/shared/EpisodesErrors'
import { getSession } from 'next-auth/react'

const SeasonEpisodes = dynamic(() => import("../../../../components/shared/SeasonEpisodes"), { ssr: false })

export const getServerSideProps = async ({ res, req, query }) => {
    const session = await getSession({ req })
    if (!session) {
        return {
            redirect: {
                destination: '/welcome',
                permanent: false,
            },
        }
    }

    const { tv_id } = query
    var id = tv_id.split('-')

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
            session:session
        }
    }
}

// Lets catch client side error on seasons listing due to bootstrap not defined
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            'series': props.children.props.series,
            'episodes': props.children.props.episodes,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <EpisodesError url={`/watch/today-favorite/tv/${this.state.series.id}-${this.state.series.name.replaceAll(' ', '-')}`} />
            );
        }
        return this.props.children;
    }
}

export default function Streaming({ genres, series, torrent, episodes, session }) {
    return (
        <Layout title={`${series.name} - ${series.overview}`} meta={series.overview}>
            <>
                <Navbar genres={genres} />
                <EmbededComponent movie={series} season_number={episodes.season_number} />

                <MovieDetails session={session} movie={series} type="tv" torrent={torrent} />

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

                <SimilarMovie movie={series} route="watch/tv/" />
                <YoutubeIframe movie={series} />
                <Footer />
            </>
        </Layout>
    )
}
