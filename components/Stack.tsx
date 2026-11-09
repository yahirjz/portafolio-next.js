import type { IconType } from "react-icons";
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
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Logo y color oficial de cada tecnología (por nombre, como aparece en data.tech). */
const logos: Record<string, { icon: IconType; color: string }> = {
    "Next.js": { icon: SiNextdotjs, color: "#000000" },
    React: { icon: SiReact, color: "#0EA5C6" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
    "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
    FastAPI: { icon: SiFastapi, color: "#009688" },
    Python: { icon: SiPython, color: "#3776AB" },
    PostgreSQL: { icon: SiPostgresql, color: "#336791" },
    Supabase: { icon: SiSupabase, color: "#3ECF8E" },
    Vercel: { icon: SiVercel, color: "#000000" },
    Docker: { icon: SiDocker, color: "#2496ED" },
    Git: { icon: SiGit, color: "#F05032" },
};

const Tile = ({ name }: { name: string }) => {
    const logo = logos[name];
    const Icon = logo?.icon;
    return (
        <li
            className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-sand-line bg-white px-2 py-4 text-sm font-medium text-ink"
        >
            {Icon && <Icon aria-hidden="true" className="size-8" style={{ color: logo.color }} />}
            {name}
        </li>
    );
};

const Stack = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.stack} className="px-4 py-14 sm:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
                <SectionHeading eyebrow={t.stack.eyebrow} title={t.stack.title} />
                <div>
                    <ul className="m-0 grid list-none grid-cols-3 gap-3 p-0 sm:grid-cols-4 lg:grid-cols-6">
                        {data.tech.build.map((name) => <Tile key={name} name={name} />)}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Stack;
