/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'solvy-static.nyc3.cdn.digitaloceanspaces.com',
          pathname: '/images/**',
        },
      ],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 1024, 2048],
    },
  };  
  
  export default nextConfig;
  