import Footer from '../../../components/shared/Footer'
import Navbar from '../../../components/shared/Navbar'
import MovieDetails from '../../../components/shared/MovieDetails'
import EmbededComponent from '../../../components/shared/EmbededComponent'
import Casts from '../../../components/shared/CastsComponent'
import TopReview from '../../../components/shared/TopReview'
import ExtraDetails from '../../../components/shared/ExtraDetails'
import SimilarMovie from '../../../components/shared/SimilarMovies'
import YoutubeIframe from '../../../components/shared/YoutubeIframe'
import AdsComponent from '../../../components/shared/AdsComponent'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const SeasonEpisodes = dynamic(() => import("../../../components/shared/SeasonEpisodes"), { ssr: false })

export const getServerSideProps = async ({ res, req, query }) => {
    const { q } = query
    var id = q.split('-')

    const genres_api = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const series_api = await fetch(
        `https://api.themoviedb.org/3/tv/${id[0]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=videos,credits,reviews,similar,seasons`
    )
    const episodes_api = await fetch(
        `https://api.themoviedb.org/3/tv/${id[0]}/season/${id[1]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=episodes`
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

export default function Streaming({ genres, series, torrent, episodes }) {
    return (
        <>
            <Script src='/js/bootstrap.bundle.min.js' />
            <Script src='/js/smooth-scroll.polyfills.min.js' />
            <Script src='/js/lightgallery.min.js' />
            <Script src='/js/lg-zoom.min.js' />
            <Script src='/js/lg-fullscreen.min.js' />
            <Script src='/js/lg-video.min.js' />
            <Script src='/js/theme.js' />
            <Script src='/js/tiny-slider.js' />
            {/* PropellerAds */}
            {/* <Script src="/js/propeller-ads.js" />
            <Script src="/js/sw.js" /> */}
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5496971688522015" crossOrigin="anonymous" />
            <Navbar genres={genres} />
            <EmbededComponent movie={series} season_number={episodes.season_number} />
            <div className="container mt-3">
                <AdsComponent />
            </div>
            <MovieDetails movie={series} torrent={torrent} />

            {series.seasons.length >= 1 ?
                <SeasonEpisodes series={series} episodes={episodes} />
                : ''
            }
            <div className="container mt-3">
                <AdsComponent />
            </div>
            <section className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 radius-4 p-4">
                        <Casts movie={series} />
                        <TopReview movie={series} />
                    </div>
                    <ExtraDetails movie={series} />
                </div>
            </section>
            <div className="container mt-3">
                <AdsComponent />
            </div>
            <SimilarMovie movie={series} route="watch/tv?q=" />
            <YoutubeIframe movie={series} />
            <Footer />
        </>
    )
}
