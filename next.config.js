/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: isDev ? '' : '/eygpt-travel-guide',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
