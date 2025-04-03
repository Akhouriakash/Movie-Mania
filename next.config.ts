/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'], // ✅ Allow external images from TMDb
  },
};

module.exports = nextConfig;
