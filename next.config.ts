import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Ibi bituma idakenera ya sharp yari yanze kuri Vercel
  },
};

export default nextConfig;
