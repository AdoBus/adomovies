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
        `https://api.themoviedb.org/3/tv/${id[0]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=videos,credits,reviews,similar`
    )

    const { genres } = await genres_api.json()
    const series = await series_api.json()


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
            torrent: torrent,
        }
    }
}

export default function Streaming({ genres, series, torrent }) {
    return (
        <>
            <Navbar genres={genres} />
            <EmbededComponent movie={series} />
            <MovieDetails movie={series} torrent={torrent} />

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
