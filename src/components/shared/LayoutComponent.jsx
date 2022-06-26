import Head from 'next/head'
import { Fragment } from 'react'

export default function Layout({
    children,
    title = 'AdoMovies - Stream Latest Movies and TV Shows For Free',
    meta
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <meta name="theme-color" content="#fff" />
                <meta name="description" content={meta} />
            </Head>
            <div className="bg-dark">
                {children}
            </div>
        </div>
    )
}