import $ from 'jquery'
import Link from 'next/link'
import { useEffect } from 'react'

export default function SeasonEpisodes({ series, episodes }) {
    useEffect(() => {
        try {
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl)
            })
        } catch {
            console.log('popover error')
        }
    }, [])
    return (
        <>
            <section className="container">
                <article className="card card-light border-0 shadow-sm card-hover card-horizontal">
                    <div className="card-body">
                        <div className="mb-2">
                            <div className="dropdown w-sm-50" data-bs-toggle="select">
                                <button className="btn dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fi-align-justify me-2"></i>
                                    <span id="xyz" className="dropdown-toggle-label text-light opacity-70">{episodes.name ? episodes.name : 'Select season'}</span>
                                </button>
                                <input type="hidden" value="New York" />
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {series.seasons.slice(0, series.seasons.length).map(season => (
                                        <li key={season.id}>
                                            <Link className="dropdown-item" href={`/watch/tv/${series.id}-${season.season_number}-${series.name.replaceAll(' ', '-')}`}>
                                                    <span className="dropdown-item-label">Season {season.season_number}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div id="episodesRow" className="row g-2">
                            {episodes.episodes ?
                                episodes.episodes.map(episode => (
                                    <div key={episode.id} className="col-md-2 col-6">
                                        <a id={`episode${episode.episode_number}`} href="#iframeContainer"
                                            onClick={() => $('#iframe').attr('src', `https://www.2embed.to/embed/tmdb/tv?id=${series.id}&s=${episode.season_number}&e=${episode.episode_number}`)}
                                            style={{ 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}
                                            type="button" className="btn btn-outline-light w-100"
                                            data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover"
                                            title={`Episode ${episode.episode_number}`} data-bs-content={episode.name}>
                                            <strong>Eps {episode.episode_number}: {episode.name}</strong>
                                        </a>
                                    </div>
                                )) : null}
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}