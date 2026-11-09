import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Los 4 pasos de "Así trabajamos juntos" (van dentro de la franja final del contacto). */
const Process = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <div>
            <h2 className="m-0 font-heading text-2xl font-bold">{t.process.title}</h2>
            <ol className="m-0 mt-6 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
                {data.process.map((step, index) => (
                    <li key={step.title} className="flex flex-col gap-1.5 border-t-2 border-[#FD9B02] pt-4">
                        <span className="font-mono text-sm text-[#FD9B02]">{String(index + 1).padStart(2, "0")}</span>
                        <strong className="font-heading text-lg">{step.title}</strong>
                        <span className="text-[15px] text-white/70">{step.detail}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Process;
