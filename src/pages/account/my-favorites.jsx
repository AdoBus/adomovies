import React from "react";
import Layout from "../../components/shared/LayoutComponent";
import Navbar from "../../components/shared/Navbar";
import AccountLeftNav from "../../components/shared/AccountLeftNav";
import Footer from "../../components/shared/Footer";
import ProfileBreadCumb from "../../components/shared/ProfileBreadCumb"
import AccountMoviesAndTv from "../../components/shared/AccountMoviesAndTv";

export default function Favorites({ genres }) {
    return (
        <Layout title="Adomovies - Porpular Movies">
            <main className="page-wrapper">
                <Navbar genres={genres} />
                <div className="pt-5 pb-lg-4 mt-5 mb-sm-2 container">
                    <ProfileBreadCumb />
                    <div className="row">
                        <div className="pe-xl-4 mb-5 col-lg-4 col-md-5">
                            <AccountLeftNav />
                        </div>
                        <div className="col-lg-8 col-md-7 mb-5">
                            <AccountMoviesAndTv header="Favorites"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const genres_api = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const genres = await genres_api.json()
    return {
        props: {
            genres: genres.genres,
        }
    }
}