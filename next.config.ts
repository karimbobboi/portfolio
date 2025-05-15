import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '',
  basePath: "/portfolio",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
