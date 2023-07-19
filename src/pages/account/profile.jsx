import React from "react";
import Layout from "../../components/shared/LayoutComponent";
import Navbar from "../../components/shared/Navbar";
import AccountLeftNav from "../../components/shared/AccountLeftNav";
import Footer from "../../components/shared/Footer";
import ProfileBreadCumb from "../../components/shared/ProfileBreadCumb"
import ProfileForm from "../../components/shared/ProfileInfoForm"
import { getSession } from 'next-auth/react';

export default function Profile({ genres, countries, session, S3 }) {
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
                        <div className="mb-5 col-lg-8 col-md-7">
                            <h1 className="h2 text-light">Personal Info</h1>
                            <ProfileForm s3Bucket={S3} session={session} countries={countries} />
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
    const countries_api = await fetch('https://users.shuledirect.co.tz/user/auth/get-all-countries')
    const countries = await countries_api.json()
    const S3 = {
        vc57fccddsd54355: process.env.s3_access_id,
        fxsr679964fhmk553: process.env.s3_secret_key,
        lljppojbc4435fv: process.env.s3_region,
    }
    return {
        props: {
            genres: genres.genres,
            countries: countries,
            session: session,
            S3: S3
        }
    }
}