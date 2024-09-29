import React, { useEffect, useState } from "react";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import SortBy from "../../components/shared/GenresSort";
import dynamic from "next/dynamic";
import Layout from "../../components/shared/LayoutComponent";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Pagination = dynamic(() => import("../../components/shared/Pagination"), { ssr: false });


export default function Genres() {
    const [genres, setGenres] = useState([]);
    const [discover, setDiscover] = useState([]);
    const [genresId, setGenresId] = useState('');
    const [mediaType, setMediaType] = useState('');
    const [genresName, setGenresName] = useState('');
    const [tvGenre, setTvGenre] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const path = window.location.pathname.split('/');
            const media = path[2];
            const lastPart = path[3];
            const id = lastPart.split('-')[0];
            const name = lastPart.split('-')[1];

            let genreId = [];

            const genresApi = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`);
            const genresData = await genresApi.json();

            if (media === 'movie') {
                genreId.push(id);
            } else {
                const tvGenresApi = await fetch(`${process.env.tmdburl}/3/genre/tv/list?api_key=${process.env.tmdbkey}&language=en-US`);
                const tvGenresData = await tvGenresApi.json();

                tvGenresData.genres.map(genre => {
                    genre.name.includes(name) && genreId.push(genre.id);
                    console.log(genre.name, name);
                    genre.name === 'Sci-Fi & Fantasy' && name === 'Science%20Fiction' && genreId.push(genre.id);
                });
            }

            const discoverApi = await fetch(
                `${process.env.tmdburl}/3/discover/${media}?api_key=${process.env.tmdbkey}&language=en-US&page=1&with_genres=${genreId[0]}&sort_by=popularity.desc`
            );
            const discoverData = await discoverApi.json();

            setGenres(genresData.genres);
            setDiscover(discoverData);
            setGenresId(id);
            setGenresName(name);
            setMediaType(media);
            setTvGenre(genreId);
        };

        fetchData();
    }, []);

    return (
        <Layout title={`Adomovies - Best ${genresName} ${mediaType === "movie" ? 'Movies' : 'Tv Shows'}`}>
            <>
                <Navbar genres={genres} />
                <div className="container mt-5 pt-5 p-0">
                    <div className="row g-0 mt-n3">
                        <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                            <SortBy discover={discover} genres_id={genresId} genres_name={genresName} media_type={mediaType} />
                            {
                                discover.results && discover.results.length > 0 ? <Pagination discover={discover} media_type={mediaType} genres_id={genresId} tv_genre={tvGenre} pagination_type="discover" /> :
                                    <div className="row mb-5">
                                        {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={300} /></div>)}
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </Layout>
    );
}