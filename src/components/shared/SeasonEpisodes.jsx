import $ from 'jquery'
import Link from 'next/link'
import { useEffect } from 'react'

export default function SeasonEpisodes({ series, episodes }) {
    useEffect(() => {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    }, [])
    return (
        <>
            <section className="container">
                <article className="card border-0 shadow-sm card-hover card-horizontal">
                    <div className="card-body">
                        <div className="mb-2">
                            <div className="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                                <button className="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fi-align-justify me-2"></i>
                                    <span id="xyz" className="dropdown-toggle-label">{episodes.name ? episodes.name : 'Select season'}</span>
                                </button>
                                <input type="hidden" value="New York" />
                                <ul className="dropdown-menu">
                                    {series.seasons.slice(0, series.seasons.length).map(season => (
                                        <li key={season.id}>
                                            <Link href={`/watch/tv/?q=${series.id}-${season.season_number}-${series.name}`}>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item-label">Season {season.season_number}</span>
                                                </a>
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
                                            onClick={() => $('#iframe').attr('src', `https://www.2embed.ru/embed/tmdb/tv?id=${series.id}&s=${episode.season_number}&e=${episode.episode_number}`)}
                                            style={{ 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}
                                            type="button" className="btn btn-secondary w-100"
                                            data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover"
                                            title={`Episode ${episode.episode_number}`} data-bs-content={episode.name}>Eps {episode.episode_number}: {episode.name}
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