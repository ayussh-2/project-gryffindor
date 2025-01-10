import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'sacnitrkl.blr1.cdn.digitaloceanspaces.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
    ],
}
  }

export default nextConfig;
