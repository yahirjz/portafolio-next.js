import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  LuArrowRight,
  LuBrain,
  LuChartNoAxesCombined,
  LuCodeXml,
  LuDownload,
  LuGlobe,
  LuMail,
  LuSettings,
  LuUserPlus,
} from "react-icons/lu";
import { jrFont } from "./font";
import { contact, services, type Accent } from "./jr-data";

/** Clases por acento: el turquesa y el ámbar de la marca JR. */
const accent: Record<Accent, { text: string; tile: string }> = {
  turquesa: {
    text: "text-[#00F2EC]",
    tile: "bg-[#00F2EC]/10 shadow-[0_0_22px_-6px_rgba(0,242,236,0.55)] ring-1 ring-[#00F2EC]/25",
  },
  ambar: {
    text: "text-[#FD9B02]",
    tile: "bg-[#FD9B02]/10 shadow-[0_0_22px_-6px_rgba(253,155,2,0.55)] ring-1 ring-[#FD9B02]/25",
  },
};

const serviceIcons: IconType[] = [LuCodeXml, LuChartNoAxesCombined, LuBrain, LuSettings];

const links: { label: string; href: string; icon: IconType; external: boolean }[] = [
  { label: "GitHub", href: contact.github, icon: FaGithub, external: true },
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedinIn, external: true },
  { label: "¿Quieres conocer más sobre mí?", href: contact.site, icon: LuGlobe, external: false },
  { label: "Correo", href: `mailto:${contact.email}`, icon: LuMail, external: false },
];

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Brochazos de la marca (PNG transparentes en /public/jr). Puramente decorativos. */
function Brush({ src, w, h, className }: { src: string; w: number; h: number; className: string }) {
  return (
    <Image
      src={`/jr/${src}.png`}
      alt=""
      aria-hidden="true"
      width={w}
      height={h}
      sizes="(min-width: 1024px) 40vw, 70vw"
      className={`pointer-events-none absolute h-auto select-none ${className}`}
    />
  );
}

export default function JrCard() {
  return (
    <main className={`${jrFont.className} relative min-h-screen overflow-hidden bg-[#05080A] text-white`}>
      {/* Fondo: carbón con formas geométricas sutiles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,#0C1114_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[4%] h-[44%] w-[34%] -skew-x-[38deg] bg-gradient-to-b from-white/[0.035] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[22%] h-[20%] w-[22%] -skew-x-[38deg] bg-gradient-to-br from-[#00F2EC]/[0.07] to-transparent"
      />

      {/* Brochazos en las esquinas */}
      <Brush src="brochazo-turquesa-sup" w={1270} h={883} className="left-0 top-0 w-[62%] sm:w-[42%] lg:w-[36%]" />
      <Brush src="brochazo-turquesa-inf" w={715} h={541} className="bottom-0 left-0 w-[46%] sm:w-[30%] lg:w-[21%]" />
      <Brush src="brochazo-ambar-der" w={595} h={722} className="right-0 top-[12%] hidden w-[16%] lg:block" />
      <Brush src="brochazo-ambar-inf" w={1093} h={712} className="bottom-0 right-0 w-[62%] sm:w-[42%] lg:w-[31%]" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-9 px-5 pb-36 pt-14 sm:gap-11 sm:px-10 sm:pt-20 lg:px-8 lg:pb-40">
        {/* Encabezado */}
        <header className="flex items-center justify-center gap-4 sm:gap-9">
          <Image
            src="/jr/monograma.png"
            alt="Monograma JR"
            width={1120}
            height={528}
            priority
            className="h-auto w-28 shrink-0 sm:w-52 lg:w-64"
          />
          <span aria-hidden="true" className="h-16 w-px shrink-0 bg-white/80 sm:h-28 lg:h-36" />
          <div className="min-w-0">
            <h1 className="text-[1.6rem] font-bold leading-none tracking-tight sm:text-5xl lg:text-[4rem]">
              Jair Rodríguez
            </h1>
            <p className="mt-2 text-[0.9rem] font-semibold tracking-[0.2em] text-[#00F2EC] sm:mt-4 sm:text-2xl sm:tracking-[0.25em] lg:text-[2.1rem]">
              Software Engineer
            </p>
          </div>
        </header>

        {/* Mensaje principal */}
        <section aria-labelledby="jr-mensaje">
          <h2
            id="jr-mensaje"
            className="text-[1.95rem] font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem]"
          >
            Desarrollo soluciones <br className="hidden sm:block" />
            digitales que resuelven <br className="hidden sm:block" />
            <em className="font-bold text-[#00F2EC] [text-shadow:0_0_24px_rgba(0,242,236,0.35)]">
              necesidades reales <br className="hidden sm:block" />
              de negocio.
            </em>
          </h2>
          <span aria-hidden="true" className="mt-6 block h-1.5 w-28 rounded-full bg-[#FD9B02] sm:w-40" />
        </section>

        {/* Servicios */}
        <section aria-label="Servicios">
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              const a = accent[s.accent];
              return (
                <li
                  key={s.title}
                  className="flex flex-col rounded-[1.6rem] border border-white/[0.1] bg-gradient-to-b from-[#1E2023] to-[#15171A] p-4 shadow-[0_18px_34px_-20px_rgba(0,0,0,1)] sm:p-6"
                >
                  <span className={`grid size-14 place-items-center rounded-2xl sm:size-[4.5rem] xl:size-20 ${a.tile} ${a.text}`}>
                    <Icon aria-hidden="true" strokeWidth={2.3} className="size-8 sm:size-11 xl:size-12" />
                  </span>
                  <h3 className="mt-4 text-[1.02rem] font-bold leading-tight sm:text-[1.45rem] lg:text-[1.55rem] xl:text-[1.75rem] tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[0.88rem] font-medium leading-snug text-[#E2E2E2] sm:text-[1.05rem] xl:text-[1.15rem]">{s.description}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Acciones principales */}
        <section aria-label="Contacto" className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-8">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            {...externalProps}
            aria-label="Hablemos por WhatsApp"
            className="group flex min-h-[5rem] items-center gap-5 rounded-full bg-[#00F2EC] px-7 text-[#05080A] shadow-[0_0_36px_-4px_rgba(0,242,236,0.75)] transition hover:-translate-y-0.5 hover:bg-[#5EF8F3] sm:min-h-24 sm:px-12 xl:min-h-[6.5rem]"
          >
            <FaWhatsapp aria-hidden="true" className="size-10 shrink-0 sm:size-14" />
            <span aria-hidden="true" className="h-12 w-px shrink-0 bg-[#05080A]/30" />
            <span className="flex-1 leading-none">
              <span className="block text-base font-bold sm:text-xl xl:text-2xl">Hablemos por</span>
              <span className="mt-1 block text-[1.6rem] font-extrabold sm:text-[2rem] xl:text-[2.3rem]">WhatsApp</span>
            </span>
            <LuArrowRight aria-hidden="true" strokeWidth={2.5} className="size-8 shrink-0 transition group-hover:translate-x-1 sm:size-10" />
          </a>
          <a
            href="/jr/jair-rodriguez.vcf"
            download="Jair-Rodriguez.vcf"
            className="group flex min-h-[5rem] items-center gap-4 rounded-full border-2 border-[#D9AE6E] px-7 shadow-[0_0_24px_-10px_rgba(253,155,2,0.8)] transition hover:-translate-y-0.5 hover:bg-[#FD9B02]/10 sm:min-h-24 sm:px-12 xl:min-h-[6.5rem]"
          >
            <LuUserPlus aria-hidden="true" className="size-9 shrink-0 sm:size-11" />
            <span aria-hidden="true" className="h-12 w-px shrink-0 bg-white/40" />
            <span className="flex-1 whitespace-nowrap text-lg font-bold sm:text-[1.65rem] xl:text-[1.85rem]">Guardar contacto</span>
            <LuDownload aria-hidden="true" className="size-8 shrink-0 transition group-hover:translate-y-0.5 sm:size-10" />
          </a>
        </section>

        {/* Enlaces */}
        <nav aria-label="Enlaces" className="border-t border-white/15 pt-6 sm:pt-8">
          <ul className="grid grid-cols-3 gap-y-3 lg:flex lg:items-center lg:justify-between lg:divide-x lg:divide-white/25">
            {links.map(({ label, href, icon: Icon, external }) => {
              const wide = href === contact.site;
              return (
                <li
                  key={label}
                  className={`flex justify-center lg:flex-1 ${wide ? "order-last col-span-3 lg:order-none lg:flex-[1.9]" : ""}`}
                >
                  <a
                    href={href}
                    {...(external ? externalProps : {})}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-[0.95rem] font-semibold transition hover:text-[#00F2EC] sm:gap-4 sm:text-xl lg:flex-row lg:text-lg xl:text-[1.35rem] ${wide ? "flex-row" : "flex-col sm:flex-row"}`}
                  >
                    <Icon aria-hidden="true" className="size-8 shrink-0 sm:size-10" />
                    <span className="leading-tight lg:whitespace-nowrap">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </main>
  );
}
