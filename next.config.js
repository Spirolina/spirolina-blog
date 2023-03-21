/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    STRAPI_HOST: process.env.STRAPI_HOST,
  },
  images: {
    domains: ["127.0.0.1"]
  }
}

module.exports = nextConfig
