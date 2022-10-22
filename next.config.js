const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/tolerate2/" : "",
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
