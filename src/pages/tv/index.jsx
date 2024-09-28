export const runtime = 'edge';

import Navbar from "../../components/shared/Navbar"
import dynamic from "next/dynamic";
import Footer from "../../components/shared/Footer";
import Layout from "../../components/shared/LayoutComponent";

const Pagination = dynamic(() => import("../../components/shared/Pagination"), { ssr: false })

export default function Tv({ genres, discover }) {
    return (
        <Layout title="Adomovies - Porpular TV Series">
            <>
                <Navbar genres={genres} />
                <div className="container mt-5 pt-5 p-0">
                    <div className="row g-0 mt-n3">
                        <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                            <h2 className="h5 mb-5 mt-md-3 mt-5 text-light">Porpular TV Series</h2>
                            <Pagination discover={discover} media_type='tv' pagination_type="discover" />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const genres_api = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const genres = await genres_api.json()

    const discover_api = await fetch(
        `${process.env.tmdburl}/3/discover/tv?api_key=${process.env.tmdbkey}&language=en-US&page=1&sort_by=popularity.desc`)
    const discover = await discover_api.json()

    return {
        props: {
            genres: genres.genres,
            discover: discover
        }
    }
}
