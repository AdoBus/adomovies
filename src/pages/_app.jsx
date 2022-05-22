import Head from "next/head"
import NProgress from "nprogress"
import Router from "next/router"

import '../../assets/styles/theme.min.css';
import '../../assets/styles/flatpickr.min.css';
import '../../assets/styles/tiny-slider.css';
import '../../assets/styles/lightgallery-bundle.min.css';
import '../../assets/styles/nprogress.css'

Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                {/* Favicon icon */}
                <link rel="shortcut icon" type="image/x-icon" href="/img/logo/logo.svg" />
                <title>AdoMovies - Stream Latest Movies and TV Shows For Free</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp