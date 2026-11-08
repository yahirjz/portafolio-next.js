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
    tile: "bg-[#00F2EC]/10 ring-1 ring-[#00F2EC]/25",
  },
  ambar: {
    text: "text-[#FD9B02]",
    tile: "bg-[#FD9B02]/10 ring-1 ring-[#FD9B02]/25",
  },
};

const serviceIcons: IconType[] = [LuCodeXml, LuChartNoAxesCombined, LuBrain, LuSettings];

const links: { label: string; href: string; icon: IconType; external: boolean }[] = [
  { label: "GitHub", href: contact.github, icon: FaGithub, external: true },
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedinIn, external: true },
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
        <section aria-label="Contacto" className="grid gap-4 sm:gap-5">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            {...externalProps}
            aria-label="¿Tienes un proyecto en mente? Hablemos por WhatsApp"
            className="group block rounded-full bg-gradient-to-r from-[#00F2EC] via-[#00F2EC]/40 to-[#FD9B02] p-[2px] transition hover:-translate-y-0.5"
          >
            <span className="flex min-h-[5rem] items-center gap-3 rounded-full bg-[#07090B] px-5 sm:min-h-24 sm:gap-6 sm:px-10 xl:min-h-[6.5rem]">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#25D366] sm:size-16">
                <FaWhatsapp aria-hidden="true" className="size-6 text-white sm:size-10" />
              </span>
              <span className="flex-1 leading-tight">
                <span className="block whitespace-nowrap text-[0.8rem] font-semibold text-white sm:text-xl xl:text-2xl">
                  ¿Tienes un proyecto en mente?
                </span>
                <span className="mt-0.5 block whitespace-nowrap text-[1.02rem] font-bold text-[#FD9B02] sm:text-3xl xl:text-[2.2rem]">
                  Hablemos por WhatsApp.
                </span>
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#F8F5EF] sm:rounded-2xl text-[#05080A] transition group-hover:translate-x-1 sm:size-14">
                <LuArrowRight aria-hidden="true" strokeWidth={2.5} className="size-6 sm:size-7" />
              </span>
            </span>
          </a>
          <a
            href="/jr/jair-rodriguez.vcf"
            download="Jair-Rodriguez.vcf"
            className="group flex min-h-[5rem] items-center gap-4 rounded-full border-2 border-[#D9AE6E] px-7 transition hover:-translate-y-0.5 hover:bg-[#FD9B02]/10 sm:min-h-24 sm:px-12 xl:min-h-[6.5rem]"
          >
            <LuUserPlus aria-hidden="true" className="size-9 shrink-0 sm:size-11" />
            <span aria-hidden="true" className="h-12 w-px shrink-0 bg-white/40" />
            <span className="flex-1 whitespace-nowrap text-lg font-bold sm:text-[1.65rem] xl:text-[1.85rem]">Guardar contacto</span>
            <LuDownload aria-hidden="true" className="size-8 shrink-0 transition group-hover:translate-y-0.5 sm:size-10" />
          </a>
        </section>

        {/* Portafolio */}
        <a
          href={contact.site}
          className="group -mt-2 flex items-center gap-4 rounded-[2rem] border border-white/[0.12] bg-gradient-to-b from-[#1E2023] to-[#15171A] px-5 py-5 shadow-[0_18px_34px_-20px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:border-[#00F2EC]/50 sm:gap-6 sm:px-8 sm:py-6 lg:-mt-3"
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#00F2EC]/10 text-[#00F2EC] ring-1 ring-[#00F2EC]/25 sm:size-16">
            <LuGlobe aria-hidden="true" className="size-7 sm:size-9" />
          </span>
          <span className="flex-1">
            <span className="block text-lg font-bold leading-tight sm:text-2xl">¿Quieres conocer más sobre mí?</span>
            <span className="mt-1 block text-sm font-medium leading-snug text-[#C9C9C9] sm:text-lg">
              Conoce mi trayectoria, proyectos y experiencia.
            </span>
          </span>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#FD9B02] text-[#05080A] transition group-hover:translate-x-1 sm:size-14">
            <LuArrowRight aria-hidden="true" strokeWidth={2.5} className="size-6 sm:size-7" />
          </span>
        </a>

        {/* Enlaces */}
        <nav aria-label="Enlaces" className="border-t border-white/15 pt-6 sm:pt-8">
          <ul className="grid grid-cols-3 divide-x divide-white/25">
            {links.map(({ label, href, icon: Icon, external }) => (
              <li key={label} className="flex justify-center">
                <a
                  href={href}
                  {...(external ? externalProps : {})}
                  className="flex flex-col items-center gap-2 rounded-xl px-3 py-2 text-[0.95rem] font-semibold transition hover:text-[#00F2EC] sm:flex-row sm:gap-4 sm:text-xl xl:text-[1.35rem]"
                >
                  <Icon aria-hidden="true" className="size-8 shrink-0 sm:size-10" />
                  <span className="leading-tight">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
