import type { IconType } from "react-icons";
import { LuArrowRight, LuCodeXml, LuLayers, LuRocket, LuSearch } from "react-icons/lu";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

const icons: Record<string, IconType> = { search: LuSearch, layers: LuLayers, code: LuCodeXml, rocket: LuRocket };

/** Bloque "De la idea al producto": cómo trabajo, en 4 pasos. */
const Process = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.process} className="px-4 pt-14 sm:px-6">
            <div className="mx-auto grid max-w-[1200px] items-center gap-8 rounded-[28px] bg-ink-deep p-7 text-white sm:p-9 lg:grid-cols-[0.9fr_1px_2fr] lg:gap-10">
                <div>
                    <p className="m-0 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        <span aria-hidden="true" className="inline-block h-0.5 w-7 bg-[#FD9B02]" />
                        {t.process.eyebrow}
                    </p>
                    <h2 className="m-0 mt-2 font-heading text-[clamp(28px,3vw,36px)] font-bold leading-tight">{t.process.title}</h2>
                    <p className="m-0 mt-3 text-white/70">{t.process.intro}</p>
                </div>
                <span aria-hidden="true" className="hidden h-full bg-white/15 lg:block" />
                <ol className="m-0 grid list-none grid-cols-2 gap-4 p-0 lg:grid-cols-4 lg:gap-0">
                    {data.process.map((step, index) => {
                        const Icon = icons[step.icon];
                        return (
                            <li key={step.title} className="flex items-center gap-3 lg:gap-0">
                                <div className="flex flex-1 flex-col items-center gap-2.5 rounded-2xl border border-white/15 px-3 py-4 text-center">
                                    {Icon && <Icon aria-hidden="true" className="size-8 text-[#FD9B02]" />}
                                    <p className="m-0 text-[15px] font-bold leading-tight">
                                        <span className="text-[#FD9B02]">{String(index + 1).padStart(2, "0")}.</span> {step.title}
                                    </p>
                                </div>
                                {index < data.process.length - 1 && (
                                    <LuArrowRight aria-hidden="true" className="mx-2 hidden size-5 shrink-0 text-[#FD9B02] lg:block" />
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default Process;
