import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar"
import Script from "next/script";
import Aside from "../../components/shared/FilterAside";
import dynamic from "next/dynamic";

const Pagination = dynamic(() => import("../../components/home/GenresComponent"), {ssr: false })

export default function Genres({ genres, discover }) {
    return (
        <>
            <Script src='/js/bootstrap.bundle.min.js' />
            <Script src='/js/smooth-scroll.polyfills.min.js' />
            <Script src='/js/lightgallery.min.js' />
            <Script src='/js/lg-zoom.min.js' />
            <Script src='/js/lg-fullscreen.min.js' />
            <Script src='/js/lg-video.min.js' />
            <Script src='/js/theme.js' />
            <Script src='/js/tiny-slider.js' />

            <Navbar genres={genres} />
            <div className="container-fluid mt-5 pt-5 p-0">
                <div className="row g-0 mt-n3">
                    {/* <!-- Filters sidebar (Offcanvas on mobile)--> */}
                    <Aside />
                    {/* <!-- Page content--> */}
                    <Pagination discover={discover}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export const getServerSideProps = async () => {
    const genres_api = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)
    const discover_api = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdbkey}&language=en-US&page=1&with_genres=28&sort_by=popularity.desc`
    )

    const genres = await genres_api.json()
    const discover = await discover_api.json()

    return {
        props: {
            genres: genres.genres,
            discover: discover
        }
    };
};