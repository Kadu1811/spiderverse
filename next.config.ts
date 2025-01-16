import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: "https://67868f4df80b78923aa7595d.mockapi.io",
    DOMAIN_ORIGIN:
      process.env.NODE_ENV === "production"
        ? "https://spiderverse-3p1pdf1zj-kadus-projects-62123fb7.vercel.app/"
        : "http://localhost:3000",
  },
};

export default nextConfig;
