/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
    reactStrictMode: false,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development'
    },
    images: {
        domains: ['www.themoviedb.org', 'www.youtube.com'],
    },
    env: {
        tmdbkey: '18f3f02b0654a16553d20e9dd898b7a5',
    },
})

module.exports = nextConfig