
const nextEnv = require('next-env');
const dontenvLoad = require('dotenv-load')

dontenvLoad()
const withNextEnv = nextEnv();

const nextConfig = withNextEnv({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['www.themoviedb.org', 'www.youtube.com', 'image.tmdb.org', 'finder-react.createx.studio'],
    },
    webpack: (
        config,
        { isServer } // { dev, isWorker, defaultLoaders, webpack }
    ) => {
        if (!isServer) {
            // don't resolve fs to avoid errors during build webpack build
            config.resolve.fallback = {
                fs: false,
                module: false,
                net: false,
                path: false,
                process: false,
                dns: false,
                tls: false,
            };
        }
        return config;
    }
})

module.exports = nextConfig