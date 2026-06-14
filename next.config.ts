import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow Next.js Image component to load from any domain
  images: {
    unoptimized: true,
  },
  // Disable strict mode that breaks some web components in dev
  reactStrictMode: false,
};

export default nextConfig;
