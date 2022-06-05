import Head from "next/head"
import NProgress from "nprogress"
import Router from "next/router"
import { useRouter } from 'next/router'
import Script from "next/script";

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
    const router = useRouter()
    return (
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="propeller" content="ade3739f5cb895e538b883d2513c8761"></meta>
                
                {/* PropellerAds */}
                <Script src="/js/propeller-ads.js" />

                {/* Favicon icon */}
                <link rel="shortcut icon" type="image/x-icon" href="/img/logo/logo.svg" />
                <title>AdoMovies - Stream Latest Movies and TV Shows For Free</title>
            </Head>
            <Component key={router.asPath} {...pageProps} />
        </>
    )
}

export default MyApp