import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Enables static export
  images: {
    unoptimized: true, // Required for static export (if using next/image)
  },
  trailingSlash: true, // Optional but recommended for static hosting
  // eslint: {
  //   ignoreDuringBuilds: true, 
  // }
};

export default nextConfig;