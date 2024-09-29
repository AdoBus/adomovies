import React, { useEffect, useState } from "react";
import Footer from '../../../components/shared/Footer';
import Navbar from '../../../components/shared/Navbar';
import MovieDetails from '../../../components/shared/MovieDetails';
import EmbededComponent from '../../../components/shared/EmbededComponent';
import Casts from '../../../components/shared/CastsComponent';
import TopReview from '../../../components/shared/TopReview';
import ExtraDetails from '../../../components/shared/ExtraDetails';
import SimilarMovie from '../../../components/shared/SimilarMovies';
import YoutubeIframe from '../../../components/shared/YoutubeIframe';
import SeasonEpisodes from '../../../components/shared/SeasonEpisodes';
import Layout from '../../../components/shared/LayoutComponent';
import EpisodesError from '../../../components/shared/EpisodesErrors';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            series: props.children.props.series,
            episodes: props.children.props.episodes,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <EpisodesError url={`/watch/tv/${this.state.series.id}-${this.state.series.name.replaceAll(' ', '-')}`} />
            );
        }
        return this.props.children;
    }
}

export default function Streaming() {
    const [genres, setGenres] = useState([]);
    const [series, setSeries] = useState(null);
    const [episodes, setEpisodes] = useState(null);
    const [torrent, setTorrent] = useState({
        data: {
            movie: {
                torrents: null
            }
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            const path = window.location.pathname.split('/');
            const tv_id = path[3];
            const id = tv_id.split('-');

            const genresApi = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`);
            const genresData = await genresApi.json();

            const seriesApi = await fetch(
                `${process.env.tmdburl}/3/tv/${id[0]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=videos,credits,reviews,similar,seasons`
            );
            const seriesData = await seriesApi.json();

            const episodesApi = await fetch(
                `${process.env.tmdburl}/3/tv/${id[0]}/season/${id[1]}?api_key=${process.env.tmdbkey}&language=en-US&append_to_response=episodes`
            );
            const episodesData = await episodesApi.json();

            if (seriesData.success === false) {
                // Handle not found case
                return;
            }

            if (seriesData.imdb_id) {
                const torrentApi = await fetch(`https://yts.mx/api/v2/movie_details.json?imdb_id=${seriesData.imdb_id}`);
                if (torrentApi.status === 200) {
                    const torrentData = await torrentApi.json();
                    setTorrent(torrentData);
                }
            }

            setGenres(genresData.genres);
            setSeries(seriesData);
            setEpisodes(episodesData);
        };

        fetchData();
    }, []);

    return (
        <Layout title={`${series?.name} - ${series?.overview}`} meta={series?.overview}>
            <>
                <Navbar genres={genres} />

                {series ? <EmbededComponent movie={series} /> : <div className="container bg-position-top-center mt-5 mb-5 bg-repeat-0 pt-5">
                    <Skeleton height={400} />
                </div>}

                {series && <MovieDetails movie={series} type="tv" torrent={torrent} />}

                {series?.seasons?.length >= 1 &&
                    <ErrorBoundary>
                        <SeasonEpisodes series={series} episodes={episodes} />
                    </ErrorBoundary>
                }

                <section className="container mt-3 mb-3">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 radius-4 p-4">
                            {
                                series ? <Casts movie={series} /> :
                                    <div className='container mb-5'>
                                        <div className="row">
                                            {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={200} /></div>)}
                                        </div>
                                    </div>
                            }

                            {series && <TopReview movie={series} />}

                        </div>
                        {series && <ExtraDetails movie={series} />}
                    </div>
                </section>

                {
                    series ? <SimilarMovie movie={series} route="watch/tv/" /> :
                        <div className='container mb-5'>
                            <div className="row">
                                {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={300} /></div>)}
                            </div>
                        </div>
                }

                {series && <YoutubeIframe movie={series} />}
                <Footer />
            </>
        </Layout>
    );
}