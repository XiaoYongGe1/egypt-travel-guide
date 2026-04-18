/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/egypt-travel-guide',
  assetPrefix: '/egypt-travel-guide/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
