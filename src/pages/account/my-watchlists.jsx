import React from "react";
import Layout from "../../components/shared/LayoutComponent";
import Navbar from "../../components/shared/Navbar";
import AccountLeftNav from "../../components/shared/AccountLeftNav";
import Footer from "../../components/shared/Footer";
import ProfileBreadCumb from "../../components/shared/ProfileBreadCumb"
import AccountMoviesAndTv from "../../components/shared/AccountMoviesAndTv";
import { getSession } from 'next-auth/react';

export default function Watchlists({ genres, session, watchlist }) {
    return (
        <Layout title="Adomovies - Porpular Movies">
            <main className="page-wrapper">
                <Navbar session={session} genres={genres} />
                <div className="pt-5 pb-lg-4 mt-5 mb-sm-2 container">
                    <ProfileBreadCumb />
                    <div className="row">
                        <div className="pe-xl-4 mb-5 col-lg-4 col-md-5">
                            <AccountLeftNav session={session} />
                        </div>
                        <div className="col-lg-8 col-md-7 mb-5">
                            <AccountMoviesAndTv session={session} type="watchlist" medias={watchlist} header="Watchlist" />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </Layout>
    )
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
    if (!session) {
        return {
            redirect: {
                destination: '/welcome',
                permanent: false,
            },
        }
    }
    const genres_api = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const genres = await genres_api.json()
    
    const watchlist_api = await fetch('http://localhost:3000/api/collection-list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: session.user._id,
            type: 'watchlist'
        })
    })

    const watchlist = await watchlist_api.json()
    return {
        props: {
            genres: genres.genres,
            session: session,
            watchlist: watchlist.results
        }
    }
}