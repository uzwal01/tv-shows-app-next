/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**', // This matches TMDB image paths like /t/p/w500/xyz.jpg
      },
    ],
  },
};

export default nextConfig;
