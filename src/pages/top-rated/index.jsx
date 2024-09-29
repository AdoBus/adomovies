import React, { useEffect, useState } from "react";
import Navbar from "../../components/shared/Navbar";
import SortBy from "../../components/shared/GenresSort";
import Footer from "../../components/shared/Footer";
import dynamic from "next/dynamic";
import Layout from "../../components/shared/LayoutComponent";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Pagination = dynamic(() => import("../../components/shared/Pagination"), { ssr: false });

export default function Tv() {
    const [genres, setGenres] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [mediaType, setMediaType] = useState('');

    useEffect(() => {
        const query = new URLSearchParams(window.location.search).get('q');
        setMediaType(query);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const genresApi = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`);
            const genresData = await genresApi.json();

            const query = new URLSearchParams(window.location.search).get('q');

            const topRatedApi = await fetch(`${process.env.tmdburl}/3/${query}/top_rated?api_key=${process.env.tmdbkey}&language=en-US&page=1`);
            const topRatedData = await topRatedApi.json();

            setGenres(genresData.genres);
            setTopRated(topRatedData);
        };

        fetchData();
    }, [mediaType]);

    return (
        <Layout title="Adomovies - Top Rated Movies and Tv Shows">
            <>
                <Navbar genres={genres} />
                <div className="container mt-5 pt-5 p-0">
                    <div className="row g-0 mt-n3">
                        <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                            <SortBy discover={topRated} media_type={mediaType} />
                            {
                                topRated.results && topRated.results.length > 0 ? <Pagination discover={topRated} media_type={mediaType} pagination_type="top-rated" /> :
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