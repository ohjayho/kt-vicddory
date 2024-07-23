/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wizzap.ktwiz.co.kr',
      },
    ],
  },
};

export default nextConfig;
