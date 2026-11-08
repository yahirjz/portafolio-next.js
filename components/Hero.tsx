import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuCodeXml, LuMessageSquare } from "react-icons/lu";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

const CREAM = "#FAF7F2";

const Hero = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);
    const c = t.hero.code;

    const lines: React.ReactNode[] = [
        <><span className="text-[#FD9B02]">const</span> jairRodriguez = {"{"}</>,
        <>{"  "}{c.role}: <span className="text-[#4ADE80]">&quot;{c.roleValue}&quot;</span>,</>,
        <>{"  "}{c.base}: <span className="text-[#4ADE80]">&quot;{data.location}&quot;</span>,</>,
        <>{"  "}{c.experience}: <span className="text-[#4ADE80]">&quot;{data.experience}&quot;</span>,</>,
        <>{"  "}{c.building}: <span className="text-[#4ADE80]">&quot;Inphera&quot;</span>,</>,
        <>{"  "}{c.open}: <span className="text-[#FD9B02]">true</span>,</>,
        <>{"}"};<span className="cursor" aria-hidden="true" /></>,
    ];

    return (
        <section id="inicio" className="relative overflow-hidden bg-[#0B0D0F] text-white">
            {/* Brochazos de pintura (decorativos) */}
            <Image src="/jr/brochazo-turquesa-sup.png" alt="" aria-hidden="true" width={1270} height={883} className="pointer-events-none absolute right-0 top-0 h-auto w-[55%] -scale-x-100 select-none opacity-60 sm:w-[34%] lg:w-[26%]" />
            <Image src="/jr/brochazo-ambar-der.png" alt="" aria-hidden="true" width={595} height={722} className="pointer-events-none absolute right-0 top-[45%] hidden h-auto w-[9%] select-none opacity-70 lg:block" />
            <Image src="/jr/brochazo-turquesa-inf.png" alt="" aria-hidden="true" width={715} height={541} className="pointer-events-none absolute bottom-10 left-0 h-auto w-[38%] select-none opacity-50 sm:w-[22%] lg:w-[15%]" />
            <Image src="/jr/brochazo-ambar-inf.png" alt="" aria-hidden="true" width={1093} height={712} className="pointer-events-none absolute bottom-10 right-0 h-auto w-[40%] select-none opacity-60 sm:w-[26%] lg:w-[18%]" />
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-10 relative px-4 pb-32 pt-28 sm:px-6 sm:pb-40 sm:pt-36">
                <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-6">
                    <p className="m-0 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-sm font-medium text-white/85">
                        <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                        {t.hero.badge}
                    </p>
                    <h1 className="rise m-0 font-heading text-[clamp(40px,5.6vw,72px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
                        {t.hero.titleStart} <span className="text-[#FD9B02]">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
                    </h1>
                    <p className="rise rise-2 m-0 max-w-[600px] text-xl text-white/80">{t.hero.intro(data.name)}</p>
                    <div className="rise rise-3 flex flex-wrap gap-3 pt-2">
                        <Link
                            href={`#${t.ids.projects}`}
                            className="inline-flex items-center gap-2.5 rounded-xl bg-[#FD9B02] px-6 py-3.5 font-bold text-[#0B0D0F] transition hover:-translate-y-0.5 hover:bg-[#FFAE2E]"
                        >
                            <LuCodeXml aria-hidden="true" className="size-5" />
                            {t.hero.ctaProjects}
                            <LuArrowRight aria-hidden="true" className="size-5" />
                        </Link>
                        <Link
                            href={`#${t.ids.contact}`}
                            className="inline-flex items-center gap-2.5 rounded-xl border border-white/30 px-[22px] py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:border-white/60"
                        >
                            <LuMessageSquare aria-hidden="true" className="size-5" />
                            {t.hero.ctaContact}
                        </Link>
                    </div>
                </div>

                {/* Editor de código: borde fino turquesa → naranja, sin brillo */}
                <div className="float-a relative min-w-0 flex-[1_1_420px] rounded-[22px] bg-gradient-to-br from-[#00F2EC] via-[#00F2EC]/30 to-[#FD9B02] p-[1.5px]">
                    <div className="overflow-hidden rounded-[21px] bg-[#0F1214]">
                        <div className="flex items-center gap-2 border-b border-white/[0.08] pl-[18px]" aria-hidden="true">
                            <span className="h-3 w-3 rounded-full bg-[#F87171]" />
                            <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
                            <span className="h-3 w-3 rounded-full bg-[#4ADE80]" />
                            <span className="ml-3 mt-2 flex items-center gap-2 rounded-t-xl bg-white/[0.07] px-4 py-2.5 font-mono text-[13px] text-white/85">
                                <LuCodeXml className="size-4 text-[#FD9B02]" />
                                jair-rodriguez.ts
                            </span>
                        </div>
                        <pre className="m-0 overflow-x-auto py-5 font-mono text-[13px] leading-[1.9] text-white/90 sm:text-sm">
                            {lines.map((line, i) => (
                                <div key={i} className="flex">
                                    <span aria-hidden="true" className="w-12 shrink-0 select-none border-r border-white/[0.08] pr-4 text-right text-white/35">
                                        {i + 1}
                                    </span>
                                    <span className="whitespace-pre pl-5">{line}</span>
                                </div>
                            ))}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Onda hacia la sección de proyectos */}
            <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-16 w-full sm:h-24">
                <path d="M0 80 C 240 30, 420 30, 640 70 S 1080 110, 1440 20 V120 H0 Z" fill={CREAM} />
            </svg>

        </section>
    );
};

export default Hero;
