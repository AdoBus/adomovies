import YouTube from 'react-youtube';

const _onReady = ((event) => {
    event.target.pauseVideo();
})

export default function YoutubeIframe({ movie }) {
    return (
        <div className="modal fade" id="youtube-modal" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{ maxWidth: '950px' }}>
                <div className="modal-content bg-dark">
                    <div className="modal-body px-0 py-2 py-sm-0">
                        <button id='stop-button' className="btn btn-link position-absolute text-light top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal">X</button>
                        <div className="row mx-0 align-items-center">
                            <div className="col p-4 p-sm-5">
                                {movie.videos.results.filter(video => video.type === 'Trailer').slice(0, 1).map(video => (
                                    <YouTube key={video.key} videoId={video.key} opts={{
                                        height: '390',
                                        width: '640',
                                        playerVars: {
                                            autoplay: 0
                                        },
                                    }} onReady={_onReady} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}