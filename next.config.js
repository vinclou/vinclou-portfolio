/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: []
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react']
  }
};

module.exports = nextConfig;