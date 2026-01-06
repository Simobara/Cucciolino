import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve in dev quando apri il sito da un altro origin (es. IP LAN o proxy https)
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.18.27:3000",
    "https://localhost:3001",
  ],
};

export default nextConfig;
