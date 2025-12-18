/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;