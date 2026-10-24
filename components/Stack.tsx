import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

const Str = ({ children }: { children: React.ReactNode }) => (
    <span className="text-code-string">&quot;{children}&quot;</span>
);

const Key = ({ children, color }: { children: React.ReactNode; color?: string }) => (
    <span style={color ? { color } : undefined} className={color ? undefined : "text-code-key"}>&quot;{children}&quot;</span>
);

const List = ({ items }: { items: string[] }) => (
    <>
        [
        {items.map((item, i) => (
            <span key={item}>
                <Str>{item}</Str>
                {i < items.length - 1 ? ", " : ""}
            </span>
        ))}
        ]
    </>
);

const Stack = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);
    const totalSkills = data.stack.reduce((sum, group) => sum + group.items.length, 0);

    return (
        <section id={t.ids.stack} className="bg-sand px-4 py-[88px] sm:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12">
                <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
                    <p className="m-0 font-mono text-sm text-terra">{t.stack.eyebrow}</p>
                    <h2 className="m-0 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.1]">{t.stack.title}</h2>
                    <p className="m-0 text-lg text-ink-soft">{t.stack.intro}</p>
                    <ul className="m-0 flex list-none flex-col gap-3 p-0">
                        {data.stack.map((group) => (
                            <li key={group.key} className="flex items-baseline gap-3">
                                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 shrink-0 rounded-[3px]" style={{ background: group.color }} />
                                <span>
                                    <strong>{group.label}</strong> <span className="text-ink-soft">— {group.detail}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex min-w-0 flex-[999_1_520px] flex-col overflow-hidden rounded-[20px] shadow-[0_30px_60px_-24px_rgba(41,37,36,0.45)]">
                    <div className="flex items-center gap-2 border-b border-ink-line bg-ink px-[18px] py-3.5" aria-hidden="true">
                        <span className="h-3 w-3 rounded-full bg-[#F87171]" />
                        <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
                        <span className="h-3 w-3 rounded-full bg-[#4ADE80]" />
                        <span className="ml-2 rounded-md bg-ink-line px-2.5 py-1 font-mono text-[13px] text-code-text">package.json</span>
                    </div>
                    <div className="overflow-x-auto bg-ink py-[18px] font-mono text-sm leading-[1.9] text-code-text">
                        <span className="code-line">{"{"}</span>
                        <span className="code-line">  <Key>name</Key>: <Str>jaime-jair</Str>,</span>
                        <span className="code-line">  <Key>{t.stack.experienceKey}</Key>: <Str>{data.experience}</Str>,</span>
                        <span className="code-line">  <Key>dependencies</Key>: {"{"}</span>
                        {data.stack.map((group, i) => (
                            <span key={group.key} className="code-line">
                                {"    "}<Key color={group.color}>{group.key}</Key>: <List items={group.items} />{i < data.stack.length - 1 ? "," : ""}
                            </span>
                        ))}
                        <span className="code-line">  {"},"}</span>
                        <span className="code-line">  <Key>devDependencies</Key>: {"{"}</span>
                        <span className="code-line">    <Key>{t.stack.learningKey}</Key>: <List items={data.learning} /></span>
                        <span className="code-line">  {"}"}</span>
                        <span className="code-line">{"}"}</span>
                    </div>
                    <div className="border-t border-ink-line bg-ink-deep px-[22px] py-4 font-mono text-sm leading-[1.8] text-code-text">
                        <div><span className="text-terra-soft">$</span> npm install jaime-jair</div>
                        <div className="text-code-string">
                            ✔ {t.stack.installed(totalSkills)}<span className="cursor" aria-hidden="true" style={{ height: 15 }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stack;
