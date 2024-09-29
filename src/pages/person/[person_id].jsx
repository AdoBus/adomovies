import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/LayoutComponent";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import Biography from "../../components/shared/Biography";
import PersonInfoComponents from "../../components/shared/PersonInfoComponents";
import PersonTvAndMovies from "../../components/shared/PersonTvAndMovies";
import PersonTvAndMovieDropdown from '../../components/shared/PersonTvAndMovieDropdown';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Person() {
    const [genres, setGenres] = useState([]);
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const path = window.location.pathname.split('/');
            const person_id = path[2];
            const id = person_id.split('-');

            const genresApi = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`);
            const genresData = await genresApi.json();

            const personApi = await fetch(`${process.env.tmdburl}/3/person/${id}?api_key=${process.env.tmdbkey}&append_to_response=movie_credits,tv_credits,external_ids`);
            const personData = await personApi.json();

            setGenres(genresData.genres);
            setPerson(personData);
        };

        fetchData();
    }, []);

    return (
        <>
            <Layout title={`Adomovies - ${person?.name}`} meta={person?.biography}>
                <Navbar genres={genres} />
                <div className="container mt-5 pt-5">
                    <div className="row g-0 mt-5">
                        <div className="col-lg-4 col-12 order-lg-1">
                            {
                                person ? <PersonInfoComponents person={person} /> :
                                    <div className="container px-5">
                                        <Skeleton className="mb-5" height={500} />
                                        <Skeleton className="mb-3" count={10} />
                                    </div>
                            }
                        </div>
                        <div className="col-lg-8 order-lg-2">
                            {person ? <Biography person={person} /> :
                                <div className="container px-5">
                                    <Skeleton className="mb-5" width={"50%"} />
                                    <Skeleton className="mb-3" count={10} />
                                </div>
                            }
                            {
                                person ?
                                    <>
                                        <div className="mt-3 pt-3">
                                            <div className="d-flex mb-3 align-items-end align-items-lg-center justify-content-between pb-md-2">
                                                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                                                    <h2 className="h5 mb-0 me-md-4 text-light">Known For</h2>
                                                    <PersonTvAndMovieDropdown />
                                                </div>
                                            </div>
                                            <PersonTvAndMovies route="watch/movie/" media_credits={person.movie_credits.cast} divID="popularMovie" style="show" />
                                            <PersonTvAndMovies route="watch/tv/" media_credits={person.tv_credits.cast} divID="popularSeries" style="none" />
                                        </div>
                                    </>
                                    :
                                    <div className='container mt5 pt-5 mb-5'>
                                        <div className="row">
                                            {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton className="mb-3" height={200} /></div>)}
                                        </div>
                                        <div className="row">
                                            {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="col"><Skeleton height={200} /></div>)}
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </Layout>
        </>
    );
}