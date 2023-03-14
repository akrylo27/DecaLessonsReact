/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles', 'scss')],
  },
  images: {
    domains: ['via.placeholder.com'],
  },
};

module.exports = nextConfig;
