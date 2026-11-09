import type { IconType } from "react-icons";
import { LuChartColumn, LuCodeXml, LuDatabase, LuLaptop } from "react-icons/lu";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

const icons: Record<string, IconType> = { code: LuCodeXml, automation: LuDatabase, data: LuChartColumn, product: LuLaptop };

const About = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.about} className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-[1200px]">
                <div className="grid gap-8 lg:grid-cols-[1fr_1px_1.3fr] lg:gap-12">
                    <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
                    <span aria-hidden="true" className="hidden bg-sand-line lg:block" />
                    <p className="m-0 self-center text-lg leading-relaxed text-ink-soft">
                        {t.about.intro} <strong className="font-bold text-ink">{data.name}</strong>, {data.about.intro}
                    </p>
                </div>
                <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-sand-line pt-8 lg:grid-cols-4 lg:gap-0">
                    {data.about.focus.map((item, i) => {
                        const Icon = icons[item.icon];
                        return (
                            <li
                                key={item.label}
                                className={`flex items-center gap-3 font-semibold text-ink lg:px-6 ${i > 0 ? "lg:border-l lg:border-sand-line" : "lg:pl-0"}`}
                            >
                                <Icon aria-hidden="true" className="size-7 shrink-0 text-terra" />
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default About;
