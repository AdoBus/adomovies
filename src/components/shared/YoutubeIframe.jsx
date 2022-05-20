export default function YoutubeIframe({movie}) {
    return (
        <div className="modal fade" id="youtube-modal" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{ maxWidth: '950px' }}>
                <div className="modal-content">
                    <div className="modal-body px-0 py-2 py-sm-0">
                        <button id='stop-button' className="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
                        <div className="row mx-0 align-items-center">
                            <div className="col p-4 p-sm-5">
                                {movie.videos.results.map(video => (
                                    video.name.includes('Trailer') || video.name.includes('trailer')  ? <iframe id="player" type="text/html" width="640" height="390"
                                        src={`http://www.youtube.com/embed/${video.key}?enablejsapi=1&origin=http://example.com`}
                                        frameBorder="0"></iframe> : ''
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}