import type { IconType } from "react-icons";
import { LuCheck, LuCodeXml } from "react-icons/lu";
import {
    SiDocker,
    SiFastapi,
    SiGit,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Logo de n8n (Simple Icons, CC0): react-icons todavía no lo incluye. */
const N8nIcon: IconType = ({ className, style }) => (
    <svg viewBox="0 3 24 18" fill="currentColor" aria-hidden="true" className={className} style={style}>
        <path d="M4.8 16.8c.45 0 .6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4H9c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6s.6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4h1.2c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6s.6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4h1.2c.45 0 .6-.15.6-.6s-.15-.6-.6-.6h-1.2c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H15c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H7.8c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H.6c-.45 0-.6.15-.6.6s.15.6.6.6h1.2c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6" />
    </svg>
);

/** Logo y color de cada tecnología (por nombre, como aparece en data.tech). */
const logos: Record<string, { icon: IconType; color: string }> = {
    "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
    React: { icon: SiReact, color: "#61DAFB" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    Tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
    "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
    FastAPI: { icon: SiFastapi, color: "#05998B" },
    Python: { icon: SiPython, color: "#FFD43B" },
    PostgreSQL: { icon: SiPostgresql, color: "#6B9BD1" },
    Supabase: { icon: SiSupabase, color: "#3ECF8E" },
    Vercel: { icon: SiVercel, color: "#ffffff" },
    Docker: { icon: SiDocker, color: "#2496ED" },
    Git: { icon: SiGit, color: "#F05032" },
    n8n: { icon: N8nIcon, color: "#FF91AC" },
};

/** Órbita: el código al centro y cada tecnología conectada alrededor. */
const Orbit = ({ names, label }: { names: string[]; label: string }) => {
    const radius = 42; // % del contenedor
    const points = names.map((name, i) => {
        const angle = (i / names.length) * Math.PI * 2 - Math.PI / 2;
        return { name, x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
    });

    return (
        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            {/* Anillos y conexiones */}
            <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <circle cx="50" cy="50" r={radius} fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="0.3" />
                <circle cx="50" cy="50" r="27" fill="none" stroke="#fca311" strokeOpacity="0.55" strokeWidth="0.4" className="ring-glow" />
                <circle cx="50" cy="50" r="27" fill="none" stroke="#fca311" strokeOpacity="0.25" strokeWidth="2.5" style={{ filter: "blur(2px)" }} />
                {points.map((p) => (
                    <line key={p.name} x1="50" y1="50" x2={p.x} y2={p.y} stroke="#5b7bbd" strokeOpacity="0.28" strokeWidth="0.25" strokeDasharray="1 1.2" />
                ))}
            </svg>

            {/* Centro */}
            <div className="absolute left-1/2 top-1/2 grid size-[24%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] place-items-center rounded-[22%] border border-white/15 bg-gradient-to-br from-[#2a3550] to-[#0a1124] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9),0_0_40px_-8px_rgba(252,163,17,0.55)]">
                <LuCodeXml aria-hidden="true" className="size-[46%] rotate-[8deg] text-gold drop-shadow-[0_0_10px_rgba(252,163,17,0.8)]" />
            </div>

            {/* Tecnologías */}
            <ul aria-label={label} className="m-0 list-none p-0">
                {points.map((p, i) => {
                    const logo = logos[p.name];
                    const Icon = logo?.icon;
                    return (
                        <li
                            key={p.name}
                            data-reveal
                            data-reveal-delay={String(i * 40)}
                            className="group absolute -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${p.x}%`, top: `${p.y}%` }}
                        >
                            <span
                                tabIndex={0}
                                className="grid size-11 place-items-center rounded-full border border-white/15 bg-[#0b1224] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.9)] outline-none transition duration-300 group-hover:scale-110 group-hover:border-gold/70 focus-visible:scale-110 focus-visible:border-gold sm:size-14"
                            >
                                {Icon && <Icon aria-hidden="true" className="size-5 sm:size-6" style={{ color: logo.color }} />}
                                <span className="sr-only">{p.name}</span>
                            </span>
                            {/* Nombre al pasar el cursor */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gold px-2 py-0.5 text-[11px] font-bold text-night opacity-0 transition duration-200 group-focus-within:opacity-100 group-hover:opacity-100"
                            >
                                {p.name}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const Stack = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.stack} className="relative isolate overflow-hidden bg-night py-20 text-white sm:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-[30%] top-[10%] h-[80%] w-[45%] rounded-full bg-navy/60 blur-[120px]" />
            </div>

            <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-10 lg:grid-cols-[0.85fr_1.1fr_0.95fr] lg:gap-8 lg:px-14">
                {/* Panel claro inclinado con el título */}
                <div data-reveal className="relative py-12 lg:py-20">
                    <div aria-hidden="true" className="absolute -left-[40%] inset-y-0 right-[-6%] -skew-x-[12deg] rounded-[32px] bg-mist shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] lg:right-[2%]" />
                    <div className="relative pl-1 lg:pl-0">
                        <p className="eyebrow m-0 flex items-center gap-3 text-navy/70">
                            <span className="font-mono text-[13px] tracking-normal text-navy">03</span>
                            <span aria-hidden="true" className="h-px w-8 bg-navy/40" />
                            {t.stack.eyebrow}
                        </p>
                        <h2 className="m-0 mt-5 max-w-[270px] font-heading text-[clamp(30px,3vw,40px)] font-bold leading-[1.08] tracking-[-0.03em] text-night">
                            {t.stack.title}
                        </h2>
                        <span aria-hidden="true" className="mt-6 block h-[3px] w-14 rounded-full bg-gold" />
                    </div>
                </div>

                {/* Órbita */}
                <div className="px-4 sm:px-10 lg:px-0">
                    <Orbit names={data.tech.build} label={t.stack.orbitLabel} />
                </div>

                {/* Grupos */}
                <ul className="m-0 flex list-none flex-col gap-6 p-0 lg:border-l lg:border-white/15 lg:pl-10">
                    {t.stack.groups.map((group, i) => (
                        <li key={group.title} data-reveal data-reveal-delay={String(i * 90)} className="flex items-start gap-4">
                            <span aria-hidden="true" className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-gold text-night shadow-[0_0_16px_-2px_rgba(252,163,17,0.7)]">
                                <LuCheck className="size-4" strokeWidth={3} />
                            </span>
                            <div>
                                <p className="m-0 font-heading text-[16px] font-semibold text-white">{group.title}</p>
                                <p className="m-0 mt-1 text-[14px] text-white/60">{group.items.join(", ")}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Stack;
