import Navbar from "../components/shared/Navbar"
import TrendingToday from "../components/home/TrendingToday";
import PopularToday from "../components/home/PopularToday";
import LatestMoviesAndTVs from "../components/home/LatestMoviesAndTVs";
import Footer from "../components/shared/Footer"
import Script from "next/script";
import AdsComponent from "../components/shared/AdsComponent";


export default function Index({ movies, trending, series, genres, latest_movie, latest_series, upcoming_movies }) {
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
      <div className="container mt-5">
        <Navbar genres={genres} />
        <TrendingToday trending={trending} genres={genres} />
        <AdsComponent />
        <PopularToday movies={movies} series={series} />
        <AdsComponent />
        <LatestMoviesAndTVs latest={latest_movie} type="Latest Movies" route="watch/movie?q=" />
        <AdsComponent />
        <LatestMoviesAndTVs latest={latest_series} route="watch/tv?q=" type="Latest TV Series" />
        <AdsComponent />
        <LatestMoviesAndTVs latest={upcoming_movies} type="Coming Soon" route="watch/movie?q=" />
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const trending_all_api = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.tmdbkey}`)
  const trending_movies_api = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.tmdbkey}`)
  const popular_series_api = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.tmdbkey}`)
  const genres_api = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
  const latest_movie_api = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.tmdbkey}&language=en-US&page=1`)
  const latest_series_api = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.tmdbkey}&language=en-US&page=1`)
  const upcoming_movies_api = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.tmdbkey}&language=en-US&page=1`)

  const movies = await trending_movies_api.json()
  const series = await popular_series_api.json()
  const genres = await genres_api.json()
  const trending = await trending_all_api.json()
  const latest_movie = await latest_movie_api.json()
  const latest_series = await latest_series_api.json()
  const upcoming_movies = await upcoming_movies_api.json()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3660'
  )

  return {
    props: {
      trending: trending.results,
      movies: movies.results,
      series: series.results,
      genres: genres.genres,
      latest_movie: latest_movie.results,
      latest_series: latest_series.results,
      upcoming_movies: upcoming_movies.results
    }
  }
}