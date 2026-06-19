import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from a subpath
// (https://<user>.github.io/<repo>/). The deploy workflow sets
// PAGES_BASE_PATH to "/asaulyuk-website". When we move to the apex
// custom domain (asaulyuk.com), drop the env var and it serves from root.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
