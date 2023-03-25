import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import MovieDetailsInfo from "./MovieDetailsInfo";
import MovieDetailsTitle from "./MovieDetailsTitle";
import MovieDetailsTorrent from "./MovieDetailsTorrent";


export default function MovieDetails({ movie, type, torrent, session }) {
    return (
        <>
            <section className="container mt-4 pt-2 pl-4 pr-4 pb-4">
                <article className="card card-light border-0 shadow-sm card-hover card-horizontal">
                    <a rel="noreferrer" target="_blank" href={movie.homepage} className="card-img-top"
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, padding: "100px", backgroundSize: "cover" }}>
                    </a>
                    <div className="card-body">
                        <MovieDetailsTitle session={session} movie={movie} type={type} />
                        <MovieDetailsInfo movie={movie} />
                        <MovieDetailsTorrent movie={movie} torrent={torrent} />
                    </div>
                </article>
                <Tooltip id="my-tooltip" />
            </section>
        </>
    )
}