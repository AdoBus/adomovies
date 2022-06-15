import Footer from '../../../components/shared/Footer'
import Navbar from '../../../components/shared/Navbar'
import MovieDetails from '../../../components/shared/MovieDetails'
import EmbededComponent from '../../../components/shared/EmbededComponent'
import Casts from '../../../components/shared/CastsComponent'
import TopReview from '../../../components/shared/TopReview'
import ExtraDetails from '../../../components/shared/ExtraDetails'
import SimilarMovie from '../../../components/shared/SimilarMovies'
import YoutubeIframe from '../../../components/shared/YoutubeIframe'
import Script from 'next/script'

export const getServerSideProps = async ({ res, req, query }) => {
    const { q } = query
    var id = q.split('-')

    const genres_api = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const movie_api = await fetch(
        `${process.env.tmdburl}/3/movie/${id[0]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=videos,credits,reviews,similar`
    )

    const { genres } = await genres_api.json()
    const movie = await movie_api.json()

    if (movie.success == false) {
        return {
            notFound: true,
        }
    }

    let torrent;

    if (movie.imdb_id) {
        const torrent_api = await fetch(`https://yts.mx/api/v2/movie_details.json?imdb_id=${movie.imdb_id}`)
        torrent = await torrent_api.json()
    } else {
        torrent = {
            data: {
                movie: {
                    torrents: null
                }
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
            movie: movie,
            torrent: torrent,
        }
    }
}

export default function Streaming({ genres, movie, torrent }) {
    return (
        <>
            <Navbar genres={genres} />
            <EmbededComponent movie={movie} />

            <MovieDetails movie={movie} torrent={torrent} />

            <section className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 radius-4 p-4">
                        <Casts movie={movie} />
                        <TopReview movie={movie} />
                    </div>
                    <ExtraDetails movie={movie} />
                </div>
            </section>

            <SimilarMovie movie={movie} route="watch/movie?q=" />
            <YoutubeIframe movie={movie} />
            <Footer />
        </>
    )
}
