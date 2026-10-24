import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
  async redirects() {
    // Sportixa ahora se llama Inphera: los enlaces viejos siguen funcionando.
    return [
      { source: "/proyecto/sportixa", destination: "/proyecto/inphera", permanent: true },
    ];
  },
};

export default nextConfig;
