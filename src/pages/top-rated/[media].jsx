import Navbar from "../../components/shared/Navbar"
import SortBy from "../../components/shared/GenresSort";
import Footer from "../../components/shared/Footer";
import dynamic from "next/dynamic";
import Layout from "../../components/shared/LayoutComponent";
import { getSession } from "next-auth/react";

const Pagination = dynamic(() => import("../../components/shared/Pagination"), { ssr: false })

export default function Tv({ genres, topRated, media_type, session }) {
    return (
        <Layout title="Adomovies - Top Rated Movies and Tv Shows">
            <>
                <Navbar session={session} genres={genres} />
                <div className="container mt-5 pt-5 p-0">
                    <div className="row g-0 mt-n3">
                        <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                            <SortBy discover={topRated} media_type={media_type} />
                            <Pagination discover={topRated} media_type={media_type} pagination_type="top-rated" />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </Layout>
    )
}

export const getServerSideProps = async ({ query, req, res }) => {
    const session = await getSession({ req })
    if (!session) {
        return {
            redirect: {
                destination: '/welcome',
                permanent: false,
            },
        }
    }
    const q = query.media
    
    if (q !== 'movie' && q !== 'tv'){
        return {
            notFound: true
        }
    }

    const genres_api = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const genres = await genres_api.json()

    const topRatedAPI = await fetch(
        `${process.env.tmdburl}/3/${q}/top_rated?api_key=${process.env.tmdbkey}&language=en-US&page=1`)
    const topRated = await topRatedAPI.json()

    return {
        props: {
            genres: genres.genres,
            topRated: topRated,
            media_type: q,
            session
        }
    }
}