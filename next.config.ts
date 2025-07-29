import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "freeiconspng.com" }],
  },
};

export default nextConfig;
