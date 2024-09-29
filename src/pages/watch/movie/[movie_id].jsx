import React, { useEffect, useState } from 'react';
import Footer from '../../../components/shared/Footer';
import Navbar from '../../../components/shared/Navbar';
import MovieDetails from '../../../components/shared/MovieDetails';
import EmbededComponent from '../../../components/shared/EmbededComponent';
import Casts from '../../../components/shared/CastsComponent';
import TopReview from '../../../components/shared/TopReview';
import ExtraDetails from '../../../components/shared/ExtraDetails';
import SimilarMovie from '../../../components/shared/SimilarMovies';
import YoutubeIframe from '../../../components/shared/YoutubeIframe';
import Layout from '../../../components/shared/LayoutComponent';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Streaming() {
    const [genres, setGenres] = useState([]);
    const [movie, setMovie] = useState(null);
    const [torrent, setTorrent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const path = window.location.pathname.split('/');
            const movie_id = path[3];
            const id = movie_id.split('-');

            const genresApi = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`);
            const genresData = await genresApi.json();

            const movieApi = await fetch(
                `${process.env.tmdburl}/3/movie/${id[0]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=videos,credits,reviews,similar`
            );
            const movieData = await movieApi.json();

            if (movieData.success === false) {
                // Handle not found case
                return;
            }

            let torrentData;

            if (movieData.imdb_id) {
                const torrentApi = await fetch(`https://yts.mx/api/v2/movie_details.json?imdb_id=${movieData.imdb_id}`);
                if (torrentApi.status === 200) {
                    torrentData = await torrentApi.json();
                } else {
                    torrentData = null;
                }
            } else {
                torrentData = {
                    data: {
                        movie: {
                            torrents: null
                        }
                    }
                };
            }

            setGenres(genresData.genres);
            setMovie(movieData);
            setTorrent(torrentData);
        };

        fetchData();
    }, []);

    return (
        <Layout title={`${movie?.title} - ${movie?.overview}`} meta={movie?.overview}>
            <>
                <Navbar genres={genres} />

                {movie ? <EmbededComponent movie={movie} /> : <div className="container bg-position-top-center mt-5 mb-5 bg-repeat-0 pt-5">
                    <Skeleton height={400} />
                </div>}

                {movie && <MovieDetails movie={movie} type="movie" torrent={torrent} />}

                <section className="container mt-3 mb-3">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 radius-4 p-4">
                            {
                                movie ? <Casts movie={movie} /> :
                                    <div className='container mb-5'>
                                        <div className="row">
                                            {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={200} /></div>)}
                                        </div>
                                    </div>
                            }

                            {movie && <TopReview movie={movie} />}

                        </div>
                        {movie && <ExtraDetails movie={movie} />}
                    </div>
                </section>

                {
                    movie ? <SimilarMovie movie={movie} route="watch/movie/" /> :
                        <div className='container mb-5'>
                            <div className="row">
                                {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={300} /></div>)}
                            </div>
                        </div>
                }

                {movie && <YoutubeIframe movie={movie} />}
                <Footer />
            </>
        </Layout>
    );
}