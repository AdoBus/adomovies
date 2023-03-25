import React from 'react'

export default function MovieDetailsTorrent({movie, torrent}) {
    return (
        <div className="btn-group" role="group" aria-label="Outline button group">
            {torrent && torrent.data.movie.torrents &&
                <>
                    {torrent.data.movie.torrents.map(t_link => (
                        <a key={t_link.hash} href={t_link.url} className="btn btn-sm btn-outline-light">
                            <i className='fi-cloud-download'></i> {t_link.quality}
                        </a>
                    ))}
                </>
            }
            {movie.videos.results.filter(video => video.type === "Trailer").length > 0 &&
                <a className="btn btn-sm btn-outline-light" id="play-button" href="#youtube-modal" data-bs-toggle="modal">
                    <i className='fi-youtube'></i> Trailer
                </a>
            }
        </div>
    )
}