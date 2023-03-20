import React from "react";
import Layout from "../../components/shared/LayoutComponent";
import Navbar from "../../components/shared/Navbar";
import AccountLeftNav from "../../components/shared/AccountLeftNav";
import Footer from "../../components/shared/Footer";
import ProfileBreadCumb from "../../components/shared/ProfileBreadCumb"
import ProfileForm from "../../components/shared/ProfileInfoForm"
import { getSession } from 'next-auth/react';
import { useSession } from "next-auth/react"

export default function Profile({ genres, countries, session }) {
    return (
        <Layout title="Adomovies - Porpular Movies">
            <main className="page-wrapper">
                <Navbar genres={genres} />
                <div className="pt-5 pb-lg-4 mt-5 mb-sm-2 container">
                    <ProfileBreadCumb />
                    <div className="row">
                        <div className="pe-xl-4 mb-5 col-lg-4 col-md-5">
                            <AccountLeftNav session={session} />
                        </div>
                        <div className="mb-5 col-lg-8 col-md-7">
                            <h1 className="h2 text-light">Personal Info</h1>
                            <ProfileForm session={session} countries={countries}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </Layout>
    )
}

export const getServerSideProps = async ({req}) => {
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
    const countries_api = await fetch('https://restcountries.com/v3.1/all')
    const countries = await countries_api.json()
    return {
        props: {
            genres: genres.genres,
            countries: countries,
            session: session
        }
    }
}