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
      // El CV viejo ya enviado en solicitudes ahora abre el CV actualizado en español.
      { source: "/CV_Jair_Formato_Base.pdf", destination: "/cv/Jaime_Jair_Rodriguez_CV_ES.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
