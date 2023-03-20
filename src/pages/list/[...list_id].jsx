import React from "react";
import Layout from "../../components/shared/LayoutComponent";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import Pagination from "../../components/shared/Pagination";
import { getSession } from "next-auth/react";

export default function Lists({ genres, discover }) {
    return (
        <Layout title="Adomovies - Porpular Movies">
            <main className="page-wrapper">
                <Navbar genres={genres} />
                <section className="bg-position-top-center mt-5 mb-5 bg-repeat-0 pt-5">
                    <div className="card radius-0 trend-img border-0 overflow-hidden"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg)`,
                            backgroundSize: "cover", borderRadius: 0, padding: "50px"
                        }}>
                        <span className="img-gradient-overlay"></span>
                        <div className="card-body content-overlay pb-0">
                            <h2 className="h3 text-light mb-3">
                                <i className="fi-lock me-2"></i>Marvel
                            </h2>
                            <div className="flex-sm-row mb-3">
                                <img className="rounded-circle me-3" src="https://finder-react.createx.studio/_next/image?url=%2Fimages%2Favatars%2F03.jpg&w=48&q=75"
                                    width="50" alt="Robert Fox" />
                                <div className="fs-sm pt-2 mb-1 text-light me-4">
                                    <strong>Created by</strong><br /> <b>Adolph Mapunda</b>
                                </div>
                                <ul className="nav nav-tabs nav-tabs-light flex-sm-row mb-0">
                                    <li className="nav-item me-sm-3 mb-3">
                                        <a className="nav-link text-center active" href="#reviews-about-you">
                                            Movies
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3">
                                        <a className="nav-link text-center active" href="#reviews-by-you">
                                            Tv Series
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container p-0">
                    <div className="row g-0 mt-n3">
                        <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                            <Pagination discover={discover} media_type='movie' pagination_type="discover" />
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
    const discover_api = await fetch(
        `${process.env.tmdburl}/3/discover/movie?api_key=${process.env.tmdbkey}&language=en-US&page=1&sort_by=popularity.desc`)
    const discover = await discover_api.json()
    return {
        props: {
            genres: genres.genres,
            discover: discover
        }
    }
}