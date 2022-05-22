import $ from 'jquery'
import Link from 'next/link'

const changeEpisodes = ((url) => {
    $('#iframe').attr('src', url)
})

export default function SeasonEpisodes({ series, episodes }) {
    return (
        <>
            <section className="container">
                <article className="card border-0 shadow-sm card-hover card-horizontal">
                    <div className="card-body">
                        <div className="mb-2">
                            <div className="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                                <button className="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fi-align-justify me-2"></i>
                                    <span id="xyz" className="dropdown-toggle-label">{episodes.name}</span>
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
                            {episodes.episodes.map(episode => (
                                <div key={episode.id} className="col-md-2 col-6">
                                    <a id={`episode${episode.episode_number}`} href="#iframeContainer" onClick={() => changeEpisodes(`https://imdbembed.xyz/tv/tmdb/${series.id}-${episode.season_number}-${episode.episode_number}`)}
                                        style={{ 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}
                                        type="button" className="btn btn-secondary w-100">Eps {episode.episode_number}: {episode.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}