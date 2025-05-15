import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
