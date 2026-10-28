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
      // La dirección vieja de Vercel manda todo al dominio oficial, conservando la ruta.
      {
        source: "/:path*",
        has: [{ type: "host", value: "portafolio-next-js-psi.vercel.app" }],
        destination: "https://jaimejair.dev/:path*",
        permanent: true,
      },
      { source: "/proyecto/sportixa", destination: "/proyecto/inphera", permanent: true },
      // El CV viejo ya enviado en solicitudes ahora abre el CV actualizado en español.
      { source: "/CV_Jair_Formato_Base.pdf", destination: "/cv/Jaime_Jair_Rodriguez_CV_ES.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
