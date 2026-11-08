import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  LuArrowRight,
  LuCloudUpload,
  LuCodeXml,
  LuCpu,
  LuDownload,
  LuLaptop,
  LuLayers,
  LuSettings,
  LuUserPlus,
} from "react-icons/lu";
import { jrFont } from "./font";
import { contact, services, type Accent } from "./jr-data";

const TUR = "#00F2EC";
const AMB = "#FD9B02";

/** Cuadro de ícono por acento (sin brillo). */
const tile: Record<Accent, string> = {
  turquesa: "bg-[#00F2EC]/15 text-[#00F2EC]",
  ambar: "bg-[#FD9B02]/20 text-[#FD9B02]",
};

const serviceIcons: IconType[] = [LuCodeXml, LuCpu, LuLayers, LuSettings, LuCloudUpload];

const links: { label: string; href: string; icon: IconType; external: boolean }[] = [
  { label: "GitHub", href: contact.github, icon: FaGithub, external: true },
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedinIn, external: true },
  { label: "Portafolio", href: contact.site, icon: LuLaptop, external: false },
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

/** Título de sección con barra inclinada y línea. */
function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
      <span aria-hidden="true" className="h-6 w-1.5 -skew-x-[20deg] bg-[#00F2EC] sm:h-8 sm:w-2" />
      <h2 id={id} className="shrink-0 text-xl font-bold sm:text-3xl">
        {children}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-[#00F2EC]/60 to-transparent" />
    </div>
  );
}

export default function JrCard() {
  return (
    <main className={`${jrFont.className} relative min-h-screen overflow-hidden bg-[#05080A] text-white`}>
      {/* Fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_25%,#0C1215_0%,transparent_70%)]"
      />

      {/* Brochazos */}
      <Brush src="brochazo-ambar-sup" w={1270} h={883} className="left-0 top-0 w-[40%] sm:w-[28%] lg:w-[22%]" />
      <Brush src="brochazo-turquesa-sup" w={1270} h={883} className="right-0 top-0 w-[48%] -scale-x-100 opacity-80 sm:w-[34%] lg:w-[28%]" />
      <Brush src="brochazo-turquesa-der" w={595} h={722} className="right-0 top-[26%] hidden w-[14%] lg:block" />
      <Brush src="brochazo-turquesa-inf" w={715} h={541} className="bottom-0 left-0 w-[40%] sm:w-[26%] lg:w-[18%]" />
      <Brush src="brochazo-ambar-inf" w={1093} h={712} className="bottom-0 right-0 w-[48%] sm:w-[32%] lg:w-[24%]" />

      <div className="relative mx-auto flex w-full max-w-[1000px] flex-col gap-9 px-5 pb-10 pt-12 sm:gap-11 sm:px-10 sm:pt-16">
        {/* Encabezado */}
        <header>
          <div className="flex items-center gap-4 sm:gap-7">
            <Image
              src="/jr/monograma.png"
              alt="Monograma JR"
              width={1120}
              height={528}
              priority
              className="h-auto w-28 shrink-0 sm:w-44"
            />
            <span aria-hidden="true" className="h-14 w-px shrink-0 bg-white/80 sm:h-20" />
            <div className="min-w-0">
              <h1 className="text-[1.6rem] font-bold leading-none tracking-tight sm:text-[2.6rem]">Jair Rodríguez</h1>
              <p className="mt-2 text-[0.95rem] font-semibold tracking-[0.08em] text-[#00F2EC] sm:text-[1.6rem]">
                Software Engineer
              </p>
            </div>
          </div>
          <p className="mt-7 text-[0.7rem] font-semibold tracking-[0.3em] text-white/85 sm:mt-8 sm:text-sm">
            DESARROLLO • IA • INNOVACIÓN
          </p>
          <span aria-hidden="true" className="mt-3 block h-1 w-28 rounded-full bg-gradient-to-r from-[#00F2EC] to-[#FD9B02] sm:w-40" />
        </header>

        {/* Mensaje principal con marca de agua */}
        <section aria-labelledby="jr-mensaje" className="relative -mt-3">
          <Image
            src="/jr/monograma-marca-agua.png"
            alt=""
            aria-hidden="true"
            width={1120}
            height={528}
            className="pointer-events-none absolute -right-24 top-[-10%] h-auto w-[85%] max-w-none select-none opacity-60 sm:-right-10 sm:top-[-20%] sm:w-[48%] sm:opacity-80"
          />
          <h2 id="jr-mensaje" className="relative max-w-[16ch] text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-[3.1rem]">
            Desarrollo software con <span className="text-[#00F2EC]">tecnología e IA</span> para crear soluciones reales.
          </h2>
          <p className="relative mt-4 max-w-[34ch] text-base font-medium leading-snug text-white/85 sm:text-xl">
            Construyo productos web con enfoque en rendimiento, diseño y valor real.
          </p>
        </section>

        {/* Acciones principales */}
        <section aria-label="Contacto" className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            {...externalProps}
            aria-label="Contactar por WhatsApp"
            className="group flex min-h-[4.75rem] items-center gap-4 rounded-[1.4rem] border-2 border-[#00F2EC] bg-[#05080A]/70 px-6 transition hover:-translate-y-0.5 hover:bg-[#00F2EC]/10 sm:min-h-24 sm:px-8"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#25D366] sm:size-14">
              <FaWhatsapp aria-hidden="true" className="size-7 text-white sm:size-9" />
            </span>
            <span className="flex-1 leading-tight">
              <span className="block text-sm font-semibold sm:text-lg">Contactar por</span>
              <span className="block text-xl font-bold text-[#00F2EC] sm:text-[1.7rem]">WhatsApp</span>
            </span>
            <LuArrowRight aria-hidden="true" strokeWidth={2.5} className="size-7 shrink-0 transition group-hover:translate-x-1" />
          </a>
          <a
            href="/jr/jair-rodriguez.vcf"
            download="Jair-Rodriguez.vcf"
            className="group flex min-h-[4.75rem] items-center gap-4 rounded-[1.4rem] border-2 border-[#FD9B02] bg-[#05080A]/70 px-6 transition hover:-translate-y-0.5 hover:bg-[#FD9B02]/10 sm:min-h-24 sm:px-8"
          >
            <LuUserPlus aria-hidden="true" className="size-9 shrink-0 sm:size-10" />
            <span className="flex-1 text-lg font-bold sm:text-[1.45rem]">Guardar contacto</span>
            <LuDownload aria-hidden="true" className="size-7 shrink-0 transition group-hover:translate-y-0.5" />
          </a>
        </section>

        {/* Especialidades */}
        <section aria-labelledby="jr-especialidades">
          <SectionTitle id="jr-especialidades">Especialidades</SectionTitle>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              // Escritorio: 3 tarjetas verticales arriba y 2 horizontales abajo; en móvil la última ocupa todo el ancho.
              const wide = i >= 3;
              const last = i === services.length - 1;
              return (
                <li
                  key={s.title}
                  className={`rounded-[1.4rem] border border-white/[0.12] bg-[#121518]/90 p-4 sm:p-5 ${
                    wide ? "lg:col-span-3 lg:flex lg:items-center lg:gap-5" : "lg:col-span-2"
                  } ${last ? "col-span-2 flex items-center gap-4 lg:col-span-3" : ""}`}
                >
                  <span className={`grid size-12 shrink-0 place-items-center rounded-xl sm:size-16 ${tile[s.accent]}`}>
                    <Icon aria-hidden="true" strokeWidth={2.2} className="size-7 sm:size-9" />
                  </span>
                  <span className={`block ${last ? "" : "mt-3"} ${wide ? "lg:mt-0" : ""}`}>
                    <span className="block text-base font-bold leading-tight sm:text-[1.35rem]">{s.title}</span>
                    <span className="mt-1.5 block text-[0.85rem] font-medium leading-snug text-white/80 sm:text-base">
                      {s.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Conecta conmigo */}
        <section aria-labelledby="jr-conecta">
          <SectionTitle id="jr-conecta">Conecta conmigo</SectionTitle>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <ul className="grid grid-cols-3 gap-3 sm:flex sm:gap-4">
              {links.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? externalProps : {})}
                    className="flex h-full flex-col items-center justify-center gap-1.5 rounded-[1.2rem] border border-[#00F2EC]/60 bg-[#05080A]/70 px-3 py-3.5 text-sm font-semibold transition hover:border-[#00F2EC] hover:bg-[#00F2EC]/10 sm:min-w-36 sm:text-lg"
                  >
                    <Icon aria-hidden="true" className="size-8 sm:size-10" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="relative mx-auto -rotate-6 text-center text-xl font-semibold italic leading-tight sm:mx-0 sm:text-2xl">
              Construyamos
              <br />
              algo <span className="font-extrabold text-[#00F2EC]">increíble</span> juntos.
              <svg aria-hidden="true" viewBox="0 0 220 24" className="absolute -bottom-5 left-1/2 h-5 w-[110%] -translate-x-1/2" fill="none">
                <path d="M4 20 C 70 6, 150 2, 216 6" stroke={TUR} strokeWidth="4" strokeLinecap="round" />
              </svg>
            </p>
          </div>
        </section>

        {/* Pie */}
        <footer aria-hidden="true" className="relative mt-4 h-20 sm:h-24">
          <svg viewBox="0 0 1000 90" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
            <path d="M0 18 H330 L350 34 H650 L670 18 H1000" stroke={TUR} strokeOpacity="0.55" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d="M30 80 H150 L185 52 H400" stroke={AMB} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
            <path d="M970 80 H850 L815 52 H600" stroke={AMB} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          </svg>
          <Image
            src="/jr/monograma.png"
            alt=""
            width={1120}
            height={528}
            className="absolute left-1/2 top-[42%] h-auto w-24 -translate-x-1/2 sm:w-32"
          />
        </footer>
      </div>
    </main>
  );
}
