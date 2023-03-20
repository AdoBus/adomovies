import React from "react";
import Layout from "../components/shared/LayoutComponent";
import Footer from "../components/shared/Footer";
import SignIn from "../components/home/SignIn"
import { Toaster } from "react-hot-toast";
import "react-multi-carousel/lib/styles.css";
import WelcomeSectionOne from "../components/shared/WelcomeSectionOne";
import WelcomeSectionTwo from "../components/shared/WelcomeSectionTwo";
import WelcomeSectionThree from "../components/shared/WelcomeSectionThree";
import WelcomeSectionFour from "../components/shared/WelcomeSectionFour";
import WelcomeSectionFive from "../components/shared/WelcomeSectionFive";
import WelcomeSectionSix from "../components/shared/WelcomeSectionSix";
import { getSession } from 'next-auth/react';
import SignUp from "../components/home/SignUp";


export default function Lists({ movies, tv, people }) {
    return (
        <Layout title="Adomovies - Porpular Movies">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <main className="page-wriper">
                <WelcomeSectionOne />
                <WelcomeSectionTwo movies={movies} />
                <WelcomeSectionThree />
                <WelcomeSectionFour people={people} />
                <WelcomeSectionFive tv={tv} />
                <WelcomeSectionSix />
            </main>
            <Footer />
            <SignIn />
            <SignUp/>
        </Layout>
    )
}

export const getServerSideProps = async ({req}) => {
    const session = await getSession({ req })
    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    const movies_api = await fetch(`${process.env.tmdburl}/3/discover/movie/?api_key=${process.env.tmdbkey}`)
    const movies = await movies_api.json()
    const tv_api = await fetch(`${process.env.tmdburl}/3/trending/tv/day?api_key=${process.env.tmdbkey}`)
    const tv = await tv_api.json()
    const people_api = await fetch(
        `${process.env.tmdburl}/3/person/popular?api_key=${process.env.tmdbkey}&language=en-US&page=1`)
    const people = await people_api.json()
    return {
        props: {
            movies: movies,
            tv: tv,
            people: people
        }
    }
}