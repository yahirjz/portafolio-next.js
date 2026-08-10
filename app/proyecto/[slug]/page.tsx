import { data } from "@/data/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

type DescriptionBlock =
  | { type: "paragraph"; text: string }
  | { type: "callout"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "heading"; text: string }
  | { type: "stats"; items: { icon: string; label: string; value: string }[] };

const EMOJI_STAT = /^(\p{Emoji}️?)\s*(.+?):\s*(.+)$/u;

const SPORTIXA_RECOMMENDATION_FLOW = [
  { label: "Entradas estadísticas y matemáticas", detail: "Promedios directos, Poisson y calibración heurística forman el contexto" },
  { label: "Análisis estructurado con Claude", detail: "Emite mercados, probabilidades y razones candidatas, condicionadas por las entradas recibidas" },
  { label: "Post-filtro determinista ≥65%", detail: "filterRecommendedBets evalúa cada candidato después de Claude" },
  { label: "UI de mercados recomendados", detail: "La interfaz presenta solo candidatos que superan el post-filtro" },
];

// Turns the free-text project description into semantic blocks so numbered
// steps, feature bullets and impact metrics each get their own treatment
// instead of showing up as raw "**", "-" and "1." characters.
function parseDescriptionBlocks(raw: string): DescriptionBlock[] {
  const lines = raw.split("\n").map((l) => l.trim());
  const blocks: DescriptionBlock[] = [];
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return;
    const text = paragraphBuffer.join(" ");
    
    // Caja de enfasis (Callout)
    blocks.push(/^[^:]+:/i.test(text) ? { type: "callout", text } : { type: "paragraph", text });
    paragraphBuffer = [];
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (line === "") {
      flushParagraph();
      i++;
      continue;
    }

    const heading = line.match(/^\*\*(.+)\*\*$/);
    if (heading) {
      flushParagraph();
      blocks.push({ type: "heading", text: heading[1] });
      i++;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "steps", items });
      continue;
    }

    if (/^-\s+/.test(line)) {
      flushParagraph();
      const items: string[] = [];
      while (i < lines.length && /^-\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^-\s+/, ""));
        i++;
      }
      const matches = items.map((item) => item.match(EMOJI_STAT));
      if (matches.every((m): m is RegExpMatchArray => m !== null)) {
        blocks.push({ type: "stats", items: matches.map((m) => ({ icon: m[1], label: m[2], value: m[3] })) });
      } else {
        blocks.push({ type: "bullets", items });
      }
      continue;
    }

    paragraphBuffer.push(line);
    i++;
  }
  flushParagraph();
  return blocks;
}

// blocke de descripción
function DescriptionBlocks({ blocks }: { blocks: DescriptionBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, idx) => {
        if (block.type === "paragraph") {
          return (
            <p key={idx} className="text-slate-300 font-light leading-relaxed">
              {block.text}
            </p>
          );
        }

        if (block.type === "callout") {
          return (
            <p key={idx} className="border-l-2 border-accent-pink/50 bg-white/[0.02] rounded-r-lg pl-5 py-3 text-slate-300 italic">
              {block.text}
            </p>
          );
        }

        if (block.type === "steps") {
          return (
            <ol key={idx} className="space-y-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="shrink-0 w-7 h-7 mt-0.5 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xs font-heading font-semibold text-slate-500">
                    {i + 1}
                  </span>
                  <span className="text-slate-400 font-light leading-relaxed pt-1">{item}</span>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "bullets") {
          return (
            <ul key={idx} className="space-y-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1 text-brand-300">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-slate-300 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "heading") {
          return (
            <div key={idx} className="flex items-center gap-3 pt-2">
              <span className="w-8 h-px bg-brand-400/60" />
              <h3 className="font-heading text-xs font-bold tracking-[0.2em] text-brand-300 uppercase">{block.text}</h3>
            </div>
          );
        }

        return (
          <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {block.items.map((stat, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5 flex flex-col gap-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="font-heading text-lg font-bold text-white leading-snug">{stat.value}</span>
                <span className="text-sm text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function SportixaArchitecture() {
  return (
    <section aria-labelledby="sportixa-pipeline-title" className="mb-16">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Pipeline actual</p>
          <h2 id="sportixa-pipeline-title" className="font-heading text-2xl font-bold text-white sm:text-3xl">De candidatos estructurados a recomendaciones</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate-400">Claude propone candidatos dentro del contexto suministrado. El código aplica después el umbral que decide qué llega a la interfaz de recomendados.</p>
      </div>

      <div className="rounded-2xl border border-brand-400/20 bg-brand-500/[0.04] p-4 sm:p-5">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-brand-300">Secuencia de recomendación</p>
        <ol className="grid grid-cols-1 gap-3 lg:grid-cols-4">
          {SPORTIXA_RECOMMENDATION_FLOW.map((step, index) => (
            <li key={step.label} className="relative min-w-0 rounded-xl border border-white/10 bg-dark-bg/70 p-4">
              <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 font-mono text-xs font-bold text-brand-300">
                {index + 1}
              </span>
              <p className="font-heading text-sm font-bold leading-snug text-white">{step.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.detail}</p>
              {index < SPORTIXA_RECOMMENDATION_FLOW.length - 1 && (
                <span aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 text-brand-400 lg:-right-2 lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2">↓</span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-relaxed text-slate-400"><strong className="text-slate-200">Límite explícito:</strong> un candidato emitido por Claude no aparece como mercado recomendado si su probabilidad no alcanza 65%.</p>
      </div>
    </section>
  );
}

function SportixaResponsibleUse() {
  return (
    <aside aria-labelledby="sportixa-responsible-use" className="mb-16 rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span aria-hidden="true" className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-200">!</span>
        <div>
          <h2 id="sportixa-responsible-use" className="font-heading text-base font-bold text-amber-100">Beta privada · Uso responsable</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">Producto experimental en desarrollo. Las probabilidades y explicaciones ayudan a revisar información; no garantizan resultados, no son asesoría financiera y siempre deben interpretarse con criterio propio.</p>
        </div>
      </div>
    </aside>
  );
}

export function generateStaticParams() {
  return data.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proyecto no encontrado" };

  const description = project.isPrivate
    ? `${project.summary} Caso de estudio de una beta privada en desarrollo; su contenido es informativo y no constituye asesoría financiera.`
    : project.summary;
  const pathname = `/proyecto/${project.slug}`;

  return {
    title: project.title,
    description,
    ...(siteUrl ? { alternates: { canonical: pathname } } : {}),
    openGraph: {
      type: "article",
      locale: "es_MX",
      title: `${project.title} | Jaime Jair`,
      description,
      ...(siteUrl ? { url: pathname } : {}),
    },
    twitter: {
      card: "summary",
      title: `${project.title} | Jaime Jair`,
      description,
    },
    robots: project.isPrivate
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Extract stack from description string 
  const descParts = project.description.split("Stack:");
  const mainDesc = descParts[0].trim();
  const stackRaw = descParts.length > 1 ? descParts[1] : "";
  const stack = stackRaw.split("·").map(s => s.trim()).filter(Boolean);

  return (
    <main className="min-h-screen bg-dark-bg text-slate-50 relative pb-32">
        {/* Floating background effects */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-500/10 blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-pink/10 blur-[120px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-32 relative z-10">
            <Link href="/#proyectos" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Volver al portafolio
            </Link>

            <header className="mb-16">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight">{project.title}</h1>
                    {project.isPrivate && (
                        <div className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 backdrop-blur-sm mt-2 md:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span className="text-rose-400 text-sm font-bold tracking-wider uppercase">Beta privada · En desarrollo</span>
                        </div>
                    )}
                </div>

                {stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {stack.map((tech, i) => (
                            <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-brand-300 font-mono shadow-inner">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-4">
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="px-6 py-3 bg-brand-500 text-dark-bg font-bold rounded-xl hover:bg-brand-400 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                            Ver Proyecto <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    )}
                    {(project.github || project.githubBackend) && (
                        <a href={project.github || project.githubBackend} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                            Ver Código <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                    )}
                </div>
            </header>

            <div className="w-full aspect-video md:aspect-[21/9] bg-black rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl relative">
                <Image
                  src={project.img}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="100vw"
                  className={project.imageContain ? "object-contain opacity-90" : "object-cover opacity-80"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
            </div>

            {project.slug === "sportixa" && (
              <>
                <SportixaArchitecture />
                <SportixaResponsibleUse />
              </>
            )}

            <article className="max-w-none">
                <h2 className="font-heading text-3xl font-bold text-white mb-8">Acerca del Proyecto</h2>
                <DescriptionBlocks blocks={parseDescriptionBlocks(mainDesc)} />
            </article>

            {project.gallery && project.gallery.length > 0 && (
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-white mb-3">{project.slug === "sportixa" ? "Evidencia visual disponible" : "Galería de Imágenes"}</h2>
                    {project.slug === "sportixa" && (
                      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-400">Esta vista documenta el análisis contextual. Solo se publica evidencia compatible con el guardrail vigente de 65% para mercados recomendados.</p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.gallery.map((img, i) => (
                            <div key={i} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-lg hover:border-brand-500/50 transition-colors relative">
                                <Image
                                  src={img}
                                  alt={project.galleryAlts[i] ?? `${project.title} screenshot ${i+1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className={project.galleryContain ? "object-contain hover:scale-[1.02] transition-transform duration-500" : "object-cover hover:scale-105 transition-transform duration-500"}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </main>
  );
}
