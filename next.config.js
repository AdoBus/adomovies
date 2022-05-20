/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['www.themoviedb.org', 'www.youtube.com'],
    },
    env: {
        tmdbkey: '18f3f02b0654a16553d20e9dd898b7a5',
    },
}

module.exports = nextConfig