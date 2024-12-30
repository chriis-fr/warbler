/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bing.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
    // images: {
    //   domains: ["flowbite.s3.amazonaws.com", 'images.unsplash.com', "www.bing.com"],
    // },
  };
  
  export default nextConfig;