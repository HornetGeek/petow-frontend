import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'petow.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.petow.app',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'api.petow.app',
        port: '',
        pathname: '/media/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return [
      {
        source: '/media/:path*',
        destination: 'https://api.petow.app/media/:path*',
      },
    ];
  },
};

export default nextConfig;
