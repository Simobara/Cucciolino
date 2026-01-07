import type { NextConfig } from "next";

console.log("✅ next.config.ts loaded");
const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.18.27:3000",
  ],
};

export default nextConfig;
