
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
})

module.exports = nextConfig