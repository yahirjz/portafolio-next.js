"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight, LuDatabase, LuServer, LuTimer } from "react-icons/lu";

export type Flow = {
    source: string;
    sourceDetail: string;
    collector: string;
    collectorDetail: string;
    db: string;
    dbDetail: string;
    note: string;
};

export type Slide = {
    id: string;
    label: string;
    status: string;
    title: string;
    logo?: string;
    summary: string;
    tags: string[];
    image?: { src: string; alt: string; width: number; height: number };
    flow?: Flow;
    caseStudy?: { href: string; label: string };
    live?: { href: string; label: string };
};

type Labels = { prev: string; next: string; goTo: string };

/** Pantalla de laptop hecha con CSS. */
const Laptop = ({ children }: { children: React.ReactNode }) => (
    <div className="relative">
        <div className="rounded-t-[14px] border border-white/15 bg-[#05070d] p-[6px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] sm:rounded-t-[18px] sm:p-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-navy-deep">{children}</div>
        </div>
        {/* Base */}
        <div className="relative mx-[-5%] h-3 rounded-b-[14px] bg-gradient-to-b from-[#c9ccd3] to-[#6d717a] sm:h-4">
            <div className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-md bg-[#8c9099]" />
        </div>
    </div>
);

/** Representación del flujo del Market Data Collector (no es una captura). */
const FlowDiagram = ({ flow }: { flow: Flow }) => {
    const nodes = [
        { icon: LuServer, title: flow.source, detail: flow.sourceDetail },
        { icon: LuTimer, title: flow.collector, detail: flow.collectorDetail },
        { icon: LuDatabase, title: flow.db, detail: flow.dbDetail },
    ];
    return (
        <div className="absolute inset-0 flex flex-col bg-[radial-gradient(ellipse_at_50%_40%,#1b2a4d_0%,#0a1124_70%)] p-3 sm:p-5">
            <p className="m-0 flex items-center gap-2 font-mono text-[9px] text-white/45 sm:text-[11px]">
                <span className="size-1.5 rounded-full bg-gold sm:size-2" aria-hidden="true" />
                market-data-collector · v0.1
            </p>
            <div className="flex flex-1 items-center justify-between gap-0">
                {nodes.map((node, i) => {
                    const Icon = node.icon;
                    return (
                        <div key={node.title} className="contents">
                            <div className="flex w-[24%] shrink-0 flex-col items-center gap-1.5 text-center sm:gap-2.5">
                                <span className="grid size-9 place-items-center rounded-xl border border-gold/50 bg-navy text-gold shadow-[0_0_24px_-6px_rgba(252,163,17,0.7)] sm:size-14 sm:rounded-2xl">
                                    <Icon aria-hidden="true" className="size-4 sm:size-6" />
                                </span>
                                <span className="font-heading text-[10px] font-semibold leading-tight text-white sm:text-[14px]">{node.title}</span>
                                <span className="font-mono text-[8px] leading-tight text-white/50 sm:text-[11px]">{node.detail}</span>
                            </div>
                            {i < nodes.length - 1 && (
                                <span aria-hidden="true" className="flow-dash mb-10 h-[2px] min-w-4 flex-1 rounded-full sm:mb-14" />
                            )}
                        </div>
                    );
                })}
            </div>
            <p className="m-0 text-center font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">{flow.note}</p>
        </div>
    );
};

const ProjectShowcase = ({ slides, labels }: { slides: Slide[]; labels: Labels }) => {
    const [index, setIndex] = useState(0);
    const slide = slides[index];
    const total = slides.length;
    const go = (step: number) => setIndex((i) => (i + step + total) % total);
    const pad = (n: number) => String(n).padStart(2, "0");

    return (
        <div aria-roledescription="carousel" className="relative">
            {/* Contador y flechas */}
            <div className="mb-8 flex items-center justify-between gap-4 lg:absolute lg:right-0 lg:top-0 lg:z-10 lg:mb-0">
                <p className="m-0 font-heading text-lg font-semibold text-white" aria-live="polite">
                    {pad(index + 1)} <span className="text-white/40">/ {pad(total)}</span>
                </p>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label={labels.prev}
                        className="grid size-12 place-items-center rounded-full border border-white/40 text-white transition duration-300 hover:-translate-x-0.5 hover:border-white"
                    >
                        <LuArrowLeft aria-hidden="true" className="size-5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label={labels.next}
                        className="grid size-12 place-items-center rounded-full bg-gold text-night shadow-[0_8px_24px_-8px_rgba(252,163,17,0.8)] transition duration-300 hover:translate-x-0.5 hover:bg-gold-hover"
                    >
                        <LuArrowRight aria-hidden="true" className="size-5" />
                    </button>
                </div>
            </div>

            <div key={slide.id} role="group" aria-roledescription="slide" aria-label={`${pad(index + 1)} / ${pad(total)}: ${slide.title}`} className="slide-in grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                {/* Visual */}
                <div className="relative px-2 pb-10 pt-6 sm:px-8 lg:px-0">
                    {/* Panel dorado inclinado */}
                    <div aria-hidden="true" className="absolute bottom-0 left-[2%] h-[78%] w-[62%] -skew-x-[14deg] rounded-[28px] bg-gradient-to-br from-[#ffc04d] via-gold to-[#b86e00] shadow-[0_30px_80px_-30px_rgba(252,163,17,0.8)]" />
                    {/* Sombra bajo la laptop */}
                    <div aria-hidden="true" className="absolute bottom-[4%] left-[14%] h-[10%] w-[76%] rounded-[50%] bg-black/70 blur-2xl" />
                    <div className="relative mx-auto w-[88%] -rotate-[4deg] transition-transform duration-500 hover:rotate-0">
                        <Laptop>
                            {slide.image ? (
                                <Image
                                    src={slide.image.src}
                                    alt={slide.image.alt}
                                    width={slide.image.width}
                                    height={slide.image.height}
                                    sizes="(min-width: 1024px) 560px, 90vw"
                                    className="absolute inset-0 h-full w-full object-cover object-top"
                                />
                            ) : slide.flow ? (
                                <FlowDiagram flow={slide.flow} />
                            ) : null}
                        </Laptop>
                    </div>
                </div>

                {/* Texto */}
                <div className="lg:pt-16">
                    <p className="eyebrow m-0 flex items-center gap-3 text-white/60">
                        <span aria-hidden="true" className="h-[2px] w-8 rounded-full bg-gold" />
                        {slide.label}
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                        {slide.logo && <Image src={slide.logo} alt="" aria-hidden="true" width={256} height={256} className="size-12 rounded-xl sm:size-14" />}
                        <h3 className="m-0 font-heading text-[clamp(34px,4vw,54px)] font-bold leading-[1.05] tracking-[-0.03em] text-white">{slide.title}</h3>
                    </div>
                    <span aria-hidden="true" className="mt-5 block h-[3px] w-24 rounded-full bg-gold" />
                    <p className="m-0 mt-5 font-mono text-[12px] uppercase tracking-[0.15em] text-gold">{slide.status}</p>
                    <p className="m-0 mt-4 max-w-[520px] text-[17px] leading-relaxed text-white/75">{slide.summary}</p>
                    <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
                        {slide.tags.map((tag) => (
                            <li key={tag} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[13px] font-semibold text-white/85">
                                {tag}
                            </li>
                        ))}
                    </ul>
                    {(slide.caseStudy || slide.live) && (
                        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                            {slide.caseStudy && (
                                <Link href={slide.caseStudy.href} className="group inline-flex items-center gap-2 font-bold text-gold transition-colors hover:text-gold-hover">
                                    {slide.caseStudy.label}
                                    <LuArrowRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            )}
                            {slide.live && (
                                <a href={slide.live.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 font-semibold text-white/80 transition-colors hover:text-white">
                                    {slide.live.label}
                                    <LuArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Puntos para ir directo a un proyecto */}
            <div className="mt-12 flex items-center gap-3">
                {slides.map((s, i) => (
                    <button
                        key={s.id}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`${labels.goTo} ${pad(i + 1)}: ${s.title}`}
                        aria-current={i === index ? "true" : undefined}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-10 bg-gold" : "w-5 bg-white/25 hover:bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectShowcase;
