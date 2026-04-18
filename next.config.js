/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: '/egypt-travel-guide/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
