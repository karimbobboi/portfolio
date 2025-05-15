import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'portfolio';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
