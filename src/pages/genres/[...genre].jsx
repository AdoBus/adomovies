export const runtime = 'edge';

import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar"
import SortBy from "../../components/shared/GenresSort";
import dynamic from "next/dynamic";
import Layout from "../../components/shared/LayoutComponent"

const Pagination = dynamic(() => import("../../components/shared/Pagination"), { ssr: false })

export default function Genres({ genres, discover, genres_id, media_type, genres_name, tv_genre }) {
    return (
        <Layout title={`Adomovies - Best ${genres_name} ${media_type === "movie" ? 'Movies' : 'Tv Shows'}`}>
            <>
                <Navbar genres={genres} />
                <div className="container mt-5 pt-5 p-0">
                    <div className="row g-0 mt-n3">
                        <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                            <SortBy discover={discover} genres_id={genres_id} genres_name={genres_name} media_type={media_type} />
                            <Pagination discover={discover} media_type={media_type} genres_id={genres_id} tv_genre={tv_genre} pagination_type="discover" />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </Layout>
    );
}

export const getServerSideProps = async ({ query }) => {
    const media = query.genre[0]
    const id = query.genre[1].split('-')
    let genre_id = []

    const genres_api = await fetch(`${process.env.tmdburl}/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)

    const genres = await genres_api.json()

    if (media === 'movie') {
        genre_id.push(id[0])
    } else {
        const tv_genres_api = await fetch(`${process.env.tmdburl}/3/genre/tv/list?api_key=${process.env.tmdbkey}&language=en-US`)
        const tv_genres = await tv_genres_api.json()

        tv_genres.genres.map(genre => {
            genre.name.includes(id[1]) === true && genre_id.push(genre.id)
        })
    }

    const discover_api = await fetch(
        `${process.env.tmdburl}/3/discover/${media}?api_key=${process.env.tmdbkey}&language=en-US&page=1&with_genres=${genre_id[0]}&sort_by=popularity.desc`)

    const discover = await discover_api.json()

    return {
        props: {
            genres: genres.genres,
            discover: discover,
            genres_id: id[0],
            genres_name: id[1],
            media_type: media,
            tv_genre: genre_id
        }
    };
};
