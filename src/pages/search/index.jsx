import React, { useEffect, useState } from "react";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import dynamic from "next/dynamic";
import Layout from "../../components/shared/LayoutComponent";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Pagination = dynamic(() => import("../../components/shared/Pagination"), { ssr: false });

export default function SearchPage() {
    const [genres, setGenres] = useState([]);
    const [results, setResults] = useState([]);
    const [q, setQ] = useState();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search).get('q');
        setQ(query);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const genresApi = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`);
            const genresData = await genresApi.json();

            const query = new URLSearchParams(window.location.search).get('q');

            const searchApi = await fetch(`${process.env.tmdburl}/3/search/multi?api_key=${process.env.tmdbkey}&language=en-US&page=1&include_adult=false&query=${query}`);
            const searchData = await searchApi.json();

            setGenres(genresData.genres);
            setResults(searchData);
        };

        fetchData();
    }, [q]);

    return (
        <Layout title={`Adomovies - Search Results: ${q}`}>
            <>
                <Navbar genres={genres} />
                <div className="container mt-5 pt-5 p-0">
                    <div className="row g-0 mt-n3">
                        <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                            <h2 className="h5 mb-5 mt-md-3 mt-5 text-light">Search Results: {q}</h2>
                            {
                                results.results && results.results.length > 0 ? <Pagination discover={results} pagination_type="search" query={q} /> :
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