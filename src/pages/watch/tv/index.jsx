import Footer from '../../../components/shared/Footer'
import Navbar from '../../../components/shared/Navbar'
import MovieDetails from '../../../components/shared/MovieDetails'
import EmbededComponent from '../../../components/shared/EmbededComponent'
import Casts from '../../../components/shared/CastsComponent'
import TopReview from '../../../components/shared/TopReview'
import ExtraDetails from '../../../components/shared/ExtraDetails'
import SimilarMovie from '../../../components/shared/SimilarMovies'
import YoutubeIframe from '../../../components/shared/YoutubeIframe'


export const getServerSideProps = async ({ res, req, query }) => {
    const { q } = query
    var id = q.split('-')

    const genres_api = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const series_api = await fetch(
        `https://api.themoviedb.org/3/tv/${id[0]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=videos,credits,reviews,similar,seasons`
    )
    const episodes_api = await fetch(
        `https://api.themoviedb.org/3/tv/${id[0]}/season/1?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=episodes`
    )

    const { genres } = await genres_api.json()
    const series = await series_api.json()
    const episodes = await episodes_api.json()

    if (series.success == false) {
        return {
            notFound: true,
        }
    }

    let torrent;

    // if (movie.imdb_id) {
    //     const torrent_api = await fetch(`https://yts.mx/api/v2/movie_details.json?imdb_id=${movie.imdb_id}`)
    //     torrent = await torrent_api.json()
    // } else {
    //     torrent = {
    //         data: {
    //             movie: {
    //                 torrents: null
    //             }
    //         }
    //     }
    // }

    torrent = {
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

export default function Streaming({ genres, series, torrent, episodes }) {
    return (
        <>
            <Navbar genres={genres} />
            <EmbededComponent movie={series} />
            <MovieDetails movie={series} torrent={torrent} />

            {series.seasons.length >= 1 ?
                <section className="container">
                    <article className="card border-0 shadow-sm card-hover card-horizontal">
                        <div className="card-body">
                            <div className="mb-2">
                                <div className="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                                    <button className="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fi-align-justify me-2"></i>
                                        <span className="dropdown-toggle-label">Season 1</span>
                                    </button>
                                    <input type="hidden" value="New York" />
                                    <ul className="dropdown-menu">
                                        {series.seasons.slice(1, series.seasons.length).map(season => (
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <span className="dropdown-item-label">Season {season.season_number}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="row g-2">
                                {episodes.episodes.map(episode => (
                                    <div className="col-md-2 col-6">
                                        <button style={{'overflow': 'hidden', 'textOverflow': 'ellipsis'}} type="button" className="btn btn-secondary w-100">Eps {episode.episode_number}: {episode.name}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </section>
                : ''
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
    )
}
