import React from "react";
import Layout from "../../components/shared/LayoutComponent";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import Biography from "../../components/shared/Biography";
import PersonInfoComponents from "../../components/shared/PersonInfoComponents";
import PersonTvAndMovies from "../../components/shared/PersonTvAndMovies";
import PersonTvAndMovieDropdown from '../../components/shared/PersonTvAndMovieDropdown'
import { getSession } from 'next-auth/react';

export default function Person({ genres, person, session }) {
    return (
        <>
            <Layout title={`Adomovies - ${person.name}`} meta={person.biography}>
                <Navbar session={session} genres={genres} />
                <div className="container mt-5 pt-5">
                    <div className="row g-0 mt-5">
                        <div className="col-lg-4 col-12 order-lg-1">
                            <PersonInfoComponents person={person} />
                        </div>
                        <div className="col-lg-8 order-lg-2">
                            <Biography person={person} />
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
                        </div>
                    </div>
                </div>
                <Footer />
            </Layout>
        </>
    )
}

export async function getServerSideProps({ query, req }) {
    const session = await getSession({ req })
    if (!session) {
        return {
            redirect: {
                destination: '/welcome',
                permanent: false,
            },
        }
    }
    const { person_id } = query
    var id = person_id.split('-')

    const genres_api = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const person_api = await fetch(`${process.env.tmdburl}/3/person/${id}?api_key=${process.env.tmdbkey}&append_to_response=movie_credits,tv_credits,external_ids`)

    const person = await person_api.json()
    const genres = await genres_api.json()
    return {
        props: {
            genres: genres.genres,
            person: person,
            session: session
        }
    }
}