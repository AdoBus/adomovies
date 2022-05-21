import YouTube from 'react-youtube';

const _onReady = ((event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
})

export default function EmbededComponent({ movie }) {
    return (
        <>
            <section className="container pt-5 mt-5">
                {/* <!-- Breadcrumb--> */}
                <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="real-estate-home-v1.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="real-estate-catalog-rent.html">Movies</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{movie.original_title}</li>
                    </ol>
                </nav>
                <p className="h6 bg-warning p-3 rounded-2">
                    <strong>If you get an error when trying to stream, refresh the page or switch to another streaming server.</strong>
                </p>
            </section>

            <section className=" container">
                {/* <!-- Center slide carousel --> */}
                <div className="card border-0 overflow-hidden">
                    {movie.status === 'Released' || movie.status === 'Ended' ?
                        <iframe src={`https://imdbembed.xyz/movie/tmdb/${movie.id}`} width="100%" height="500px" frameBorder="0" allow="fullscreen 'src'"></iframe>
                        : movie.videos.results.map(video => (
                            video.type === 'Teaser' ? <YouTube videoId={video.key} opts={{
                                height: '500',
                                width: '100%',
                                playerVars: {
                                    autoplay: 0
                                },
                            }} onReady={_onReady} /> : ''
                        ))}
                </div>
            </section>
        </>
    )
}