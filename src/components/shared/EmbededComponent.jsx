import YouTube from 'react-youtube';
import Link from 'next/link';

const _onReady = ((event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
})

export default function EmbededComponent({ movie, season_number }) {
    return (
        <>
            <section id='iframeContainer' className="container pt-5 mt-5">
                {/* <!-- Breadcrumb--> */}
                <nav className="mb-md-3 pt-md-3 pt-lg-3 pt-5 mt-4" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        {movie.hasOwnProperty("seasons") ?
                            <li className="breadcrumb-item">
                                <Link href="/tv">
                                    <a>Tv</a>
                                </Link>
                            </li>
                            :
                            <li className="breadcrumb-item">
                                <Link href="/movies">
                                    <a>Movies</a>
                                </Link>
                            </li>
                        }
                        <li className="breadcrumb-item active" aria-current="page">
                            {movie.original_title ? movie.original_title : movie.name}
                        </li>
                    </ol>
                </nav>
                <p className="h6 bg-warning p-3 rounded-2">
                    <strong>If you get an error when trying to stream, switch to another streaming server or refresh the page.</strong>
                </p>
            </section>

            <section className=" container">
                {/* <!-- Center slide carousel --> */}
                <div className="card border-0 overflow-hidden">
                    {movie.status === 'Released' || movie.status === 'Ended' || movie.status === 'Returning Series' || movie.status === 'Canceled' ?
                        <>
                            {movie.hasOwnProperty("seasons") ?
                                <iframe id='iframe' src={`https://www.2embed.ru/embed/tmdb/tv?id=${movie.id}&s=${season_number}&e=1`} width="100%" height="500px" frameBorder="0" allow="fullscreen 'src'"></iframe>
                                :
                                <iframe src={`https://www.2embed.ru/embed/tmdb/movie?id=${movie.id}`} width="100%" height="500px"
                                    frameBorder="0" allow="fullscreen 'src'" scrolling="no" allowtransparency="true"></iframe>
                            }
                        </>
                        :
                        movie.videos.results.filter(video => video.type === 'Teaser').slice(0, 1).map(teaser => (
                            <YouTube key={teaser.key} videoId={teaser.key} opts={{
                                height: '500',
                                width: '100%',
                                playerVars: {
                                    autoplay: 0
                                },
                            }} onReady={_onReady} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}