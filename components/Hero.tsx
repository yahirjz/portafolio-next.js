import Link from "next/link";
import { data } from "@/data/data";

const Hero = () => {
    return (
        <section id="inicio" className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
            <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
                <p className="m-0 inline-flex items-center gap-2 self-start rounded-full bg-sand px-3.5 py-1.5 text-sm font-medium text-ink-soft">
                    <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green-700" aria-hidden="true" />
                    Disponible para proyectos y empleo remoto
                </p>
                <h1 className="rise m-0 font-heading text-[clamp(40px,6vw,76px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
                    Desarrollo aplicaciones web que resuelven <span className="text-terra">problemas reales</span> de negocio.
                </h1>
                <p className="rise rise-2 m-0 max-w-[620px] text-xl text-ink-soft">
                    Soy {data.name}, desarrollador full stack en Xalapa, Veracruz. Construyo con Next.js, TypeScript, Node.js y FastAPI, desde la base de datos hasta el deploy.
                </p>
                <div className="rise rise-3 flex flex-wrap gap-3 pt-2">
                    <Link href="#proyectos" className="rounded-xl bg-terra px-6 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-terra-dark">
                        Ver proyectos
                    </Link>
                    <Link href="#contacto" className="rounded-xl border-2 border-ink px-[22px] py-3 font-bold text-ink transition-transform hover:-translate-y-0.5">
                        Hablemos de tu proyecto
                    </Link>
                </div>
            </div>

            <div className="relative flex min-w-0 flex-[1_1_380px] justify-center py-8">
                <div aria-hidden="true" className="absolute -right-5 -top-2.5 h-[340px] w-[340px] rounded-full bg-terra opacity-[0.14]" />
                <div aria-hidden="true" className="absolute bottom-0 left-0 h-[120px] w-[120px] rotate-12 rounded-[28px] bg-terra-soft opacity-50" />

                <div className="float-a relative w-full max-w-[440px] overflow-hidden rounded-[20px] bg-ink shadow-[0_30px_60px_-20px_rgba(41,37,36,0.45)]">
                    <div className="flex items-center gap-2 border-b border-ink-line px-[18px] py-3.5" aria-hidden="true">
                        <span className="h-3 w-3 rounded-full bg-[#F87171]" />
                        <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
                        <span className="h-3 w-3 rounded-full bg-[#4ADE80]" />
                        <span className="ml-2 font-mono text-[13px] text-code-key">jaime-jair.ts</span>
                    </div>
                    <pre className="m-0 overflow-x-auto whitespace-pre-wrap p-[22px] font-mono text-sm leading-[1.75] text-code-text">
<span className="text-terra-soft">const</span> jaimeJair = {"{"}{"\n"}
{"  "}rol: <span className="text-code-string">&quot;Fullstack dev&quot;</span>,{"\n"}
{"  "}base: <span className="text-code-string">&quot;Xalapa, MX&quot;</span>,{"\n"}
{"  "}experiencia: <span className="text-code-number">&quot;{data.experience}&quot;</span>,{"\n"}
{"  "}construyendo: <span className="text-code-string">&quot;Inphera&quot;</span>,{"\n"}
{"  "}abierto: <span className="text-terra-soft">true</span>,{"\n"}
{"}"};<span className="cursor" aria-hidden="true" />
                    </pre>
                </div>

                <div className="float-b absolute bottom-2 right-0 flex items-center gap-2.5 rounded-[14px] bg-white px-4 py-3 shadow-[0_12px_30px_-10px_rgba(41,37,36,0.3)]">
                    <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-green-700" aria-hidden="true" />
                    <span className="text-sm font-bold">Inphera · en beta</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
