import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import TrendingToday from "../components/home/TrendingToday";
import PopularToday from "../components/home/PopularToday";
import LatestMoviesAndTVs from "../components/home/LatestMoviesAndTVs";
import Footer from "../components/shared/Footer";
import Layout from "../components/shared/LayoutComponent";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Index() {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [series, setSeries] = useState([]);
  const [genres, setGenres] = useState([]);
  const [latestMovie, setLatestMovie] = useState([]);
  const [latestSeries, setLatestSeries] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trendingAllApi = await fetch(`${process.env.tmdburl}/3/trending/movie/day?api_key=${process.env.tmdbkey}`);
      const trendingMoviesApi = await fetch(`${process.env.tmdburl}/3/trending/movie/day?api_key=${process.env.tmdbkey}`);
      const popularSeriesApi = await fetch(`${process.env.tmdburl}/3/trending/tv/day?api_key=${process.env.tmdbkey}`);
      const genresApi = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`);
      const latestMovieApi = await fetch(`${process.env.tmdburl}/3/movie/now_playing?api_key=${process.env.tmdbkey}&language=en-US&page=1`);
      const latestSeriesApi = await fetch(`${process.env.tmdburl}/3/tv/on_the_air?api_key=${process.env.tmdbkey}&language=en-US&page=1`);
      const upcomingMoviesApi = await fetch(`${process.env.tmdburl}/3/movie/upcoming?api_key=${process.env.tmdbkey}&language=en-US&page=1`);

      const movies = await trendingMoviesApi.json();
      const series = await popularSeriesApi.json();
      const genres = await genresApi.json();
      const trending = await trendingAllApi.json();
      const latestMovie = await latestMovieApi.json();
      const latestSeries = await latestSeriesApi.json();
      const upcomingMovies = await upcomingMoviesApi.json();

      setMovies(movies.results);
      setSeries(series.results);
      setGenres(genres.genres);
      setTrending(trending.results);
      setLatestMovie(latestMovie.results);
      setLatestSeries(latestSeries.results);
      setUpcomingMovies(upcomingMovies.results);
    };
    console.log(process.env.tmdburl);
    fetchData();
  }, []);
  return (
    <Layout>
      <div className="container mt-5">
        <Navbar genres={genres} />
        {
          trending.length > 0 ? <TrendingToday trending={trending} genres={genres} /> : <div className="bg-position-top-center mt-5 mb-5 bg-repeat-0 pt-5">
            <Skeleton height={400} />
          </div>
        }
        {
          movies.length > 0 || series.length < 0 ? <PopularToday movies={movies} series={series} genres={genres} /> :
            <div className="row mb-5">
              {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={300} /></div>)}
            </div>
        }
        {
          latestMovie.length > 0 ? <LatestMoviesAndTVs latest={latestMovie} type="Latest Movies" route="watch/movie/" /> :
            <div className="row mb-5">
              {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={300} /></div>)}
            </div>
        }
        {
          latestSeries.length > 0 ? <LatestMoviesAndTVs latest={latestSeries} route="watch/tv/" type="Latest TV Series" /> :
            <div className="row mb-5">
              {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={300} /></div>)}
            </div>
        }
        {
          upcomingMovies.length > 0 ? <LatestMoviesAndTVs latest={upcomingMovies} type="Upcoming Movies" route="watch/movie/" /> :
            <div className="row mb-5">
              {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={300} /></div>)}
            </div>
        }
      </div>
      <Footer />
    </Layout>
  );
}