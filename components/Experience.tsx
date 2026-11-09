import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

type Item = { date: string; title: string; org: string; detail?: string; current?: boolean };

const Timeline = ({ label, items }: { label: string; items: Item[] }) => (
    <div>
        <h3 className="m-0 mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/60">{label}</h3>
        <ol className="m-0 list-none p-0">
            {items.map((item) => (
                <li key={item.title} className="relative ml-1.5 border-l-2 border-white/15 pb-7 pl-6 last:pb-0">
                    <span
                        aria-hidden="true"
                        className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 ${
                            item.current ? "border-[#FD9B02] bg-[#FD9B02]" : "border-[#FD9B02] bg-[#0B0D0F]"
                        }`}
                    />
                    <p className="m-0 font-mono text-sm text-[#FD9B02]">{item.date}</p>
                    <p className="m-0 mt-1 font-heading text-xl font-bold text-white">{item.title}</p>
                    <p className="m-0 text-white/75">{item.org}</p>
                    {item.detail && <p className="m-0 mt-2 max-w-[520px] text-[15px] text-white/60">{item.detail}</p>}
                </li>
            ))}
        </ol>
    </div>
);

const Experience = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.experience} className="bg-[#0B0D0F] px-4 py-14 sm:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
                <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} dark />
                <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                    <Timeline label={t.experience.work} items={data.career.work} />
                    <Timeline label={t.experience.education} items={data.career.education} />
                </div>
            </div>
        </section>
    );
};

export default Experience;
