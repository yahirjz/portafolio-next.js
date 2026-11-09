import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  LuArrowUpRight,
  LuBrain,
  LuCodeXml,
  LuDownload,
  LuIdCard,
  LuLaptop,
  LuLayers,
  LuMail,
  LuWorkflow,
} from "react-icons/lu";
import { jrFont } from "./font";
import { contact, intro, services } from "./jr-data";

const serviceIcons: Record<(typeof services)[number]["icon"], IconType> = {
  code: LuCodeXml,
  ai: LuBrain,
  automation: LuLayers,
  integrations: LuWorkflow,
};

const links: { label: string; href: string; icon: IconType; external: boolean }[] = [
  { label: "GitHub", href: contact.github, icon: FaGithub, external: true },
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedinIn, external: true },
  { label: "Correo", href: `mailto:${contact.email}`, icon: LuMail, external: false },
];

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Borde ámbar delgado con brillo leve (sin neón). */
const card = "border border-[#FD9B02]/35 bg-[#14110D]/85 shadow-[0_0_22px_-12px_rgba(253,155,2,0.6)]";

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <h2 id={id} className="shrink-0 text-xl font-bold sm:text-[1.7rem]">
        {children}
      </h2>
      <span aria-hidden="true" className="h-1 w-16 rounded-full bg-[#FD9B02] sm:w-24" />
    </div>
  );
}

export default function JrCard() {
  return (
    <main className={`${jrFont.className} relative min-h-screen overflow-hidden bg-[#0B0D0F] text-white`}>
      {/* Fondo: rayos ámbar y resplandores en las esquinas (decorativos) */}
      <Image
        src="/hero-fondo.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-[80%_top] opacity-35"
      />
      <span aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#FD9B02] opacity-20 blur-[100px]" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#FD9B02] opacity-20 blur-[110px]" />

      <div className="relative mx-auto flex w-full max-w-[880px] flex-col gap-9 px-5 pb-12 pt-10 sm:gap-11 sm:px-10 sm:pt-14">
        {/* Encabezado + personaje */}
        <header className="grid grid-cols-[1.35fr_1fr] items-center gap-3 sm:gap-8">
          <div className="min-w-0">
            <Image src="/jr/monograma.png" alt="Monograma JR" width={1120} height={528} priority className="h-auto w-24 sm:w-36" />
            <h1 className="mt-5 text-[1.75rem] font-bold leading-none tracking-tight sm:mt-7 sm:text-6xl">{contact.name}</h1>
            <p className="mt-2 text-base font-bold text-[#FD9B02] sm:text-3xl">{contact.role}</p>
            <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-[#FD9B02] sm:mt-4 sm:w-20" />
            <p className="mt-3 text-[0.82rem] leading-snug text-white/85 sm:mt-5 sm:text-xl sm:leading-relaxed">{intro}</p>
          </div>
          <div className="relative flex justify-center">
            <span aria-hidden="true" className="absolute left-1/2 top-[55%] size-[85%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[28%] bg-gradient-to-br from-[#FD9B02]/45 to-[#FD9B02]/5 blur-[2px]" />
            <Image
              src="/jr/mascota.webp"
              alt="Mascota JR: un robot con sudadera de capucha haciendo un pulgar arriba"
              width={474}
              height={900}
              priority
              className="relative h-auto w-full max-w-[260px]"
            />
          </div>
        </header>

        {/* Acciones principales */}
        <section aria-label="Contacto" className="grid gap-3 sm:grid-cols-[1.15fr_1fr] sm:gap-5">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            {...externalProps}
            className="group flex min-h-[4.25rem] items-center gap-3 rounded-2xl bg-[#FD9B02] px-5 text-[#0B0D0F] shadow-[0_0_28px_-10px_rgba(253,155,2,0.9)] transition hover:-translate-y-0.5 hover:bg-[#FFAE2E] sm:min-h-20 sm:px-7"
          >
            <FaWhatsapp aria-hidden="true" className="size-8 shrink-0" />
            <span className="flex-1 text-lg font-bold sm:text-xl">Hablemos por WhatsApp</span>
            <LuArrowUpRight aria-hidden="true" strokeWidth={2.5} className="size-6 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/jr/jair-rodriguez.vcf"
            download="Jair-Rodriguez.vcf"
            className={`group flex min-h-[4.25rem] items-center gap-3 rounded-2xl px-5 transition hover:-translate-y-0.5 hover:border-[#FD9B02]/70 sm:min-h-20 sm:px-7 ${card}`}
          >
            <LuIdCard aria-hidden="true" className="size-8 shrink-0" />
            <span className="flex-1 text-lg font-bold sm:text-xl">Guardar contacto</span>
            <LuDownload aria-hidden="true" className="size-6 shrink-0 transition group-hover:translate-y-0.5" />
          </a>
        </section>

        {/* Servicios */}
        <section aria-labelledby="jr-ayuda">
          <SectionTitle id="jr-ayuda">¿En qué puedo ayudarte?</SectionTitle>
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <li key={s.title} className={`flex items-center gap-4 rounded-2xl p-4 sm:p-5 ${card}`}>
                  <span className="grid size-14 shrink-0 place-items-center rounded-full border border-[#FD9B02]/30 bg-[#FD9B02]/10 text-[#FD9B02]">
                    <Icon aria-hidden="true" className="size-7" />
                  </span>
                  <span>
                    <span className="block font-bold leading-tight sm:text-lg">{s.title}</span>
                    <span className="mt-1 block text-sm leading-snug text-white/70">{s.description}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Portafolio y enlaces */}
        <section aria-labelledby="jr-trabajo">
          <SectionTitle id="jr-trabajo">Conoce más de mi trabajo</SectionTitle>
          <a
            href={contact.site}
            className="group flex items-center gap-4 rounded-2xl border border-[#FD9B02]/55 bg-gradient-to-r from-[#14110D] to-[#3A2507] p-4 shadow-[0_0_26px_-12px_rgba(253,155,2,0.8)] transition hover:-translate-y-0.5 sm:gap-6 sm:p-6"
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-white/5 text-[#FD9B02] sm:size-20">
              <LuLaptop aria-hidden="true" className="size-8 sm:size-11" />
            </span>
            <span className="flex-1">
              <span className="block text-lg font-bold leading-tight sm:text-2xl">Mi portafolio profesional</span>
              <span className="mt-1 block text-sm leading-snug text-white/75 sm:text-base">
                Conoce mi trayectoria, proyectos y experiencia en desarrollo de software.
              </span>
            </span>
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#FD9B02]/90 text-[#0B0D0F] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-14">
              <LuArrowUpRight aria-hidden="true" strokeWidth={2.5} className="size-6 sm:size-7" />
            </span>
          </a>

          <ul className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
            {links.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? externalProps : {})}
                  className={`flex h-full items-center justify-center gap-2 rounded-2xl px-2 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[#FD9B02]/70 sm:justify-between sm:px-5 sm:text-base ${card}`}
                >
                  <span className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="size-6 shrink-0" />
                    {label}
                  </span>
                  <LuArrowUpRight aria-hidden="true" className="hidden size-5 sm:block" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Pie */}
        <footer className="flex flex-col items-center gap-2 pt-2 text-center">
          <Image src="/jr/monograma.png" alt="" aria-hidden="true" width={1120} height={528} className="h-auto w-20 sm:w-24" />
          <p className="m-0 text-lg font-bold">{contact.name}</p>
          <p className="m-0 text-sm text-white/75">
            Software Engineer <span className="text-[#FD9B02]">•</span> Desarrollo <span className="text-[#FD9B02]">•</span> IA
          </p>
          <span aria-hidden="true" className="h-1 w-10 rounded-full bg-[#FD9B02]" />
          <p className="m-0 mt-1 text-lg font-bold italic text-[#FD9B02]">Construyamos algo increíble juntos.</p>
        </footer>
      </div>
    </main>
  );
}
