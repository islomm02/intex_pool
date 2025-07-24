/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rizesport.uz',
        port: '',
        pathname: '**',
      },
    ],
  }};

export default nextConfig;
