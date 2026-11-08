import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  LuArrowRight,
  LuBrain,
  LuChartNoAxesColumnIncreasing,
  LuCodeXml,
  LuDownload,
  LuGlobe,
  LuMail,
  LuSettings,
  LuUserPlus,
} from "react-icons/lu";
import { contact, services, type Accent } from "./jr-data";

/** Clases por acento: el turquesa y el ámbar de la marca JR. */
const accent: Record<Accent, { text: string; tint: string }> = {
  turquesa: { text: "text-[#14E6C5]", tint: "bg-[#14E6C5]/12 ring-1 ring-[#14E6C5]/20" },
  ambar: { text: "text-[#E5A13B]", tint: "bg-[#E5A13B]/12 ring-1 ring-[#E5A13B]/20" },
};

const serviceIcons: IconType[] = [LuCodeXml, LuChartNoAxesColumnIncreasing, LuBrain, LuSettings];

const links: { label: string; href: string; icon: IconType; external: boolean }[] = [
  { label: "GitHub", href: contact.github, icon: FaGithub, external: true },
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedinIn, external: true },
  { label: "¿Quieres conocer más sobre mí?", href: contact.site, icon: LuGlobe, external: false },
  { label: "Correo", href: `mailto:${contact.email}`, icon: LuMail, external: false },
];

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Brochazos decorativos (SVG en /public/jr). Puramente visuales. */
function Brush({ color, className }: { color: Accent; className: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/jr/brochazo-${color}.svg`}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
    />
  );
}

export default function JrCard() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0E0E0E] text-white">
      {/* Fondo: degradado carbón y formas geométricas sutiles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#1E1D1C_0%,transparent_60%),radial-gradient(ellipse_at_80%_90%,#1A1918_0%,transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[18%] h-[38%] w-[55%] -skew-x-[35deg] bg-gradient-to-r from-transparent via-[#14E6C5]/[0.05] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-25%] top-[8%] h-[30%] w-[45%] -skew-x-[35deg] bg-white/[0.025]"
      />

      {/* Brochazos en las esquinas */}
      <Brush color="turquesa" className="-left-24 -top-28 w-72 sm:w-[26rem]" />
      <Brush color="turquesa" className="-bottom-24 -left-28 w-56 opacity-80 sm:-bottom-32 sm:w-96" />
      <Brush color="ambar" className="-right-40 top-[16%] hidden w-80 lg:block" />
      <Brush color="ambar" className="-bottom-24 -right-24 w-60 sm:-bottom-28 sm:w-[26rem]" />

      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-5 pb-36 pt-12 lg:pb-40 sm:gap-12 sm:px-10 sm:pt-16 lg:pt-20">
        {/* Encabezado */}
        <header className="flex items-center justify-center gap-4 sm:gap-8">
          <Image
            src="/jr/monograma.png"
            alt="Monograma JR"
            width={1448}
            height={708}
            priority
            className="h-auto w-28 shrink-0 sm:w-48 lg:w-60"
          />
          <span aria-hidden="true" className="h-16 w-px shrink-0 bg-white/70 sm:h-32" />
          <div className="min-w-0">
            <h1 className="font-heading text-[1.7rem] font-bold leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Jair Rodríguez
            </h1>
            <p className="mt-2 text-[0.95rem] font-bold tracking-[0.18em] text-[#14E6C5] sm:mt-4 sm:text-2xl sm:tracking-[0.22em] lg:text-3xl">
              Software Engineer
            </p>
          </div>
        </header>

        {/* Mensaje principal con marca de agua */}
        <section aria-labelledby="jr-mensaje" className="relative">
          <Image
            src="/jr/monograma-marca-agua.png"
            alt=""
            aria-hidden="true"
            width={1448}
            height={708}
            className="pointer-events-none absolute -right-16 top-1/2 h-auto w-[115%] max-w-none -translate-y-1/2 select-none opacity-[0.06] sm:-right-6 sm:w-[66%] lg:w-[58%]"
          />
          <h2
            id="jr-mensaje"
            className="relative max-w-[18ch] font-heading text-[2.15rem] font-bold leading-[1.1] tracking-tight sm:text-6xl"
          >
            Desarrollo soluciones digitales que resuelven{" "}
            <em className="text-[#14E6C5]">necesidades reales de negocio.</em>
          </h2>
          <span aria-hidden="true" className="relative mt-6 block h-1.5 w-28 rounded-full bg-[#E5A13B] sm:w-44" />
        </section>

        {/* Servicios */}
        <section aria-label="Servicios">
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              const a = accent[s.accent];
              return (
                <li
                  key={s.title}
                  className="flex flex-col rounded-3xl border border-white/[0.07] bg-[#1B1A19] p-4 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.9)] sm:p-6"
                >
                  <span className={`grid size-12 place-items-center rounded-2xl sm:size-16 ${a.tint} ${a.text}`}>
                    <Icon aria-hidden="true" strokeWidth={2} className="size-7 sm:size-10" />
                  </span>
                  <h3 className="mt-4 font-heading text-[1.05rem] font-bold leading-tight sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-snug text-[#B8B3AD] sm:text-base">{s.description}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Acciones principales */}
        <section aria-label="Contacto" className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            {...externalProps}
            className="group flex min-h-[4.5rem] items-center gap-4 rounded-full bg-[#14E6C5] px-6 text-[#0E0E0E] transition hover:-translate-y-0.5 hover:bg-[#3DEDD1] sm:min-h-24 sm:px-7 lg:px-10"
          >
            <FaWhatsapp aria-hidden="true" className="size-9 shrink-0 sm:size-12" />
            <span aria-hidden="true" className="h-10 w-px shrink-0 bg-[#0E0E0E]/30" />
            <span className="flex-1 font-heading text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
              Hablemos por WhatsApp
            </span>
            <LuArrowRight aria-hidden="true" className="size-7 shrink-0 transition group-hover:translate-x-1 sm:size-9" />
          </a>
          <a
            href="/jr/jair-rodriguez.vcf"
            download="Jair-Rodriguez.vcf"
            className="group flex min-h-[4.5rem] items-center gap-4 rounded-full border-2 border-[#E5A13B] px-6 transition hover:-translate-y-0.5 hover:bg-[#E5A13B]/10 sm:min-h-24 sm:px-7 lg:px-10"
          >
            <LuUserPlus aria-hidden="true" className="size-8 shrink-0 sm:size-10" />
            <span aria-hidden="true" className="h-10 w-px shrink-0 bg-white/40" />
            <span className="flex-1 font-heading text-xl font-bold sm:text-2xl lg:text-3xl">Guardar contacto</span>
            <LuDownload aria-hidden="true" className="size-7 shrink-0 transition group-hover:translate-y-0.5 sm:size-9" />
          </a>
        </section>

        {/* Enlaces */}
        <nav aria-label="Enlaces" className="border-t border-white/15 pt-6 sm:pt-8">
          <ul className="grid grid-cols-3 gap-y-3 lg:flex lg:items-center lg:justify-between lg:divide-x lg:divide-white/20">
            {links.map(({ label, href, icon: Icon, external }) => {
              const wide = href === contact.site;
              return (
                <li
                  key={label}
                  className={`flex justify-center lg:flex-1 ${wide ? "order-last col-span-3 lg:order-none lg:flex-[1.8]" : ""}`}
                >
                  <a
                    href={href}
                    {...(external ? externalProps : {})}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-[0.95rem] font-semibold transition hover:text-[#14E6C5] sm:gap-3 sm:text-xl lg:flex-row ${wide ? "flex-row" : "flex-col sm:flex-row"}`}
                  >
                    <Icon aria-hidden="true" className="size-7 shrink-0 sm:size-9" />
                    <span className="leading-tight">{label}</span>
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
