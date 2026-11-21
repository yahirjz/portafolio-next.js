import Link from "next/link";
import { LuArrowRight, LuBriefcaseBusiness, LuGraduationCap } from "react-icons/lu";
import type { IconType } from "react-icons";
import { getContent } from "@/data/content";
import { getDictionary, paths, type Locale } from "@/lib/i18n";

type Entry = { date: string; title: string; org: string; detail?: string; current?: boolean };

/** Una línea de tiempo vertical con nodos numerados. */
const Timeline = ({
    label,
    icon: Icon,
    entries,
    currentLabel,
    startIndex,
    extra,
}: {
    label: string;
    icon: IconType;
    entries: Entry[];
    currentLabel: string;
    startIndex: number;
    extra?: Record<number, React.ReactNode>;
}) => (
    <div>
        <p className="m-0 flex items-center gap-3 font-heading text-[15px] font-semibold text-white">
            <span className="grid size-9 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-gold">
                <Icon aria-hidden="true" className="size-[18px]" />
            </span>
            {label}
        </p>

        <ol className="relative m-0 mt-8 list-none p-0">
            {/* Línea vertical */}
            <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-gold via-white/20 to-transparent" />
            {entries.map((entry, i) => {
                const current = entry.current ?? /curso|progress/i.test(entry.date);
                return (
                <li key={entry.title} data-reveal data-reveal-delay={String(i * 120)} className="relative pb-12 pl-10 last:pb-0">
                    {/* Nodo */}
                    <span
                        aria-hidden="true"
                        className={`absolute left-0 top-2 size-[15px] rounded-full border-2 ${
                            current
                                ? "border-gold bg-gold shadow-[0_0_0_5px_rgba(252,163,17,0.18),0_0_18px_rgba(252,163,17,0.8)]"
                                : "border-white/50 bg-night"
                        }`}
                    />
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="font-mono text-[12px] text-white/35">{String(startIndex + i).padStart(2, "0")}</span>
                        <span className="font-heading text-[clamp(20px,2vw,26px)] font-bold tracking-[-0.02em] text-white">{entry.date}</span>
                    </div>
                    <h3 className="m-0 mt-3 font-heading text-[19px] font-semibold text-white">{entry.title}</h3>
                    <p className="m-0 mt-1 text-[14px] font-semibold text-gold/90">{entry.org}</p>
                    {entry.detail && <p className="m-0 mt-3 max-w-[460px] text-[15px] leading-relaxed text-white/65">{entry.detail}</p>}
                    {current && <span className="sr-only">{currentLabel}</span>}
                    {extra?.[i]}
                </li>
                );
            })}
        </ol>
    </div>
);

const Experience = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);
    const mbqIndex = data.career.work.findIndex((w) => w.title.startsWith("MBQ"));

    const tisaxLink = (
        <Link
            href={paths.project(locale, "reportes-tisax")}
            className="group mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-gold transition-colors hover:text-gold-hover"
        >
            {t.experience.tisax}
            <LuArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    );

    return (
        <section id={t.ids.experience} className="relative isolate overflow-hidden bg-night py-24 text-white sm:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-[10%] top-[5%] h-[70%] w-[50%] rounded-full bg-navy/60 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-14">
                <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <p className="eyebrow m-0 flex items-center gap-4 text-white/50">
                            <span className="font-mono text-[13px] tracking-normal text-gold">05</span>
                            <span aria-hidden="true" className="h-px w-10 bg-white/30" />
                            {t.experience.heading}
                        </p>
                        <h2 className="m-0 mt-5 font-heading text-[clamp(40px,5vw,72px)] font-extrabold leading-none tracking-[-0.04em]">
                            {t.experience.title}
                            <span className="text-gold">.</span>
                        </h2>
                    </div>
                    <span aria-hidden="true" className="hidden h-[3px] w-40 rounded-full bg-gold lg:mb-4 lg:block" />
                </div>

                <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
                    <Timeline
                        label={t.experience.work}
                        icon={LuBriefcaseBusiness}
                        entries={data.career.work}
                        currentLabel={t.experience.current}
                        startIndex={1}
                        extra={mbqIndex >= 0 ? { [mbqIndex]: tisaxLink } : undefined}
                    />
                    <Timeline
                        label={t.experience.education}
                        icon={LuGraduationCap}
                        entries={data.career.education}
                        currentLabel={t.experience.current}
                        startIndex={data.career.work.length + 1}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
