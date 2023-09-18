/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['localhost', "cdn.sanity.io"],
    }
}

module.exports = nextConfig
