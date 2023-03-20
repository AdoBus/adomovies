import Navbar from "../../components/shared/Navbar"
import dynamic from "next/dynamic";
import Footer from "../../components/shared/Footer";
import Layout from "../../components/shared/LayoutComponent";
import { getSession } from "next-auth/react";

const Pagination = dynamic(() => import("../../components/shared/Pagination"), { ssr: false })

export default function Movies({ genres, people }) {
    return (
        <Layout title="Adomovies - Porpular Movies">
            <>
                <Navbar genres={genres} />
                <div className="container mt-5 pt-5 p-0">
                    <div className="row g-0 mt-n3">
                        <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                            <h2 className="h5 mb-5 mt-md-3 mt-5 text-light">Popular People</h2>
                            <Pagination discover={people} media_type='popular' pagination_type="people" />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
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

    const people_api = await fetch(
        `${process.env.tmdburl}/3/person/popular?api_key=${process.env.tmdbkey}&language=en-US&page=1`)
    const people = await people_api.json()

    return {
        props: {
            genres: genres.genres,
            people: people
        }
    }
}