import Footer from '../../../../components/shared/Footer'
import Navbar from '../../../../components/shared/Navbar'
import MovieDetails from '../../../../components/shared/MovieDetails'
import EmbededComponent from '../../../../components/shared/EmbededComponent'
import Casts from '../../../../components/shared/CastsComponent'
import TopReview from '../../../../components/shared/TopReview'
import ExtraDetails from '../../../../components/shared/ExtraDetails'
import SimilarMovie from '../../../../components/shared/SimilarMovies'
import YoutubeIframe from '../../../../components/shared/YoutubeIframe'

export const getStaticPaths = async () => {
    const trending_all_api = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.tmdbkey}`)
    const { results } = await trending_all_api.json()
    const paths = results.slice(0, 1).map(data => {
        return {
            params: {
                params: `${data.original_title ? data.original_title : data.original_name}-${data.id}`
            }
        }
    })
    return {
        paths, fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    var x = params.params.split("-").length - 1
    var id = params.params.split('-')[x]

    const genres_api = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const movie_api = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=videos,credits,reviews,similar`
    )

    const { genres } = await genres_api.json()
    const movie = await movie_api.json()

    const torrent_api = await fetch(`https://yts.mx/api/v2/movie_details.json?imdb_id=${movie.imdb_id}`)
    const torrent = await torrent_api.json()

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
            <SimilarMovie movie={movie} route="watch/movie/similar?q="/>
            <YoutubeIframe movie={movie} />
            <Footer />
        </>
    )
}
