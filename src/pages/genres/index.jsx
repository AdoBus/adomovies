import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar"
import Script from "next/script";
import dynamic from "next/dynamic";

const Pagination = dynamic(() => import("../../components/home/GenresComponent"), { ssr: false })

export default function Genres({ genres, discover, genres_id, media_type, genres_name, tv_genre }) {
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
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5496971688522015" crossOrigin="anonymous" />
            <Navbar genres={genres} />
            <div className="container mt-5 pt-5 p-0">
                <div className="row g-0 mt-n3">
                    <Pagination discover={discover} genres_id={genres_id} media_type={media_type} genres_name={genres_name} tv_genre={tv_genre}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export const getServerSideProps = async ({ query }) => {
    const { q, m } = query
    var id = q.split('-')
    var media = m
    let genre_id = []

    const genres_api = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.tmdbkey}&language=en-US`)

    const genres = await genres_api.json()

    if (media === 'movie'){
        genre_id.push(id[0])
    }else{
        const tv_genres_api = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.tmdbkey}&language=en-US`)
        const tv_genres = await tv_genres_api.json()

       tv_genres.genres.map(genre => {
           genre.name.includes(id[1]) === true ? genre_id.push(genre.id) : null
       })
    }

    const discover_api = await fetch(
        `https://api.themoviedb.org/3/discover/${media}?api_key=${process.env.tmdbkey}&language=en-US&page=1&with_genres=${genre_id[0]}&sort_by=popularity.desc`)

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