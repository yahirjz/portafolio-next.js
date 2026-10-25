import { getContent } from "@/data/content";
import { notFound } from "next/navigation";
import LanguageSwitch from "@/components/LanguageSwitch";
import { getDictionary, locales, paths, type Locale } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getPublicSiteUrl } from "@/lib/public-site-url";

const siteUrl = getPublicSiteUrl();

type DescriptionBlock =
  | { type: "paragraph"; text: string }
  | { type: "callout"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "heading"; text: string }
  | { type: "stats"; items: { icon: string; label: string; value: string }[] };

const EMOJI_STAT = /^(\p{Emoji}️?)\s*(.+?):\s*(.+)$/u;


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

// Convierte **texto** dentro de un párrafo en <strong>.
function renderInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-bold text-ink">{part}</strong> : part
  );
}

// blocke de descripción
function DescriptionBlocks({ blocks }: { blocks: DescriptionBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, idx) => {
        if (block.type === "paragraph") {
          return (
            <p key={idx} className="leading-relaxed text-ink-soft">
              {renderInline(block.text)}
            </p>
          );
        }

        if (block.type === "callout") {
          return (
            <p key={idx} className="rounded-r-xl border-l-4 border-terra bg-peach py-3 pl-5 pr-4 text-ink">
              {renderInline(block.text)}
            </p>
          );
        }

        if (block.type === "steps") {
          return (
            <ol key={idx} className="space-y-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs font-bold text-cream">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed text-ink-soft">{item}</span>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "bullets") {
          return (
            <ul key={idx} className="space-y-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-1 shrink-0 text-terra">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="leading-relaxed text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "heading") {
          return (
            <div key={idx} className="flex items-center gap-3 pt-2">
              <span className="h-px w-8 bg-terra" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-terra">{block.text}</h3>
            </div>
          );
        }

        return (
          <div key={idx} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {block.items.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-2xl border border-sand-line bg-white p-5">
                <span className="text-2xl" aria-hidden="true">{stat.icon}</span>
                <span className="font-heading text-lg font-bold leading-snug text-terra">{stat.value}</span>
                <span className="text-sm text-ink-soft">{stat.label}</span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function InpheraArchitecture({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).detail;
  return (
    <section aria-labelledby="inphera-pipeline-title" className="mb-16">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-terra">{t.pipelineEyebrow}</p>
          <h2 id="inphera-pipeline-title" className="font-heading text-2xl font-bold text-ink sm:text-3xl">{t.pipelineTitle}</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">{t.pipelineIntro}</p>
      </div>

      <div className="rounded-3xl bg-ink p-4 text-cream sm:p-6">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-terra-soft">{t.pipelineSequence}</p>
        <ol className="grid grid-cols-1 gap-3 lg:grid-cols-4">
          {t.flow.map((step, index) => (
            <li key={step.label} className="relative min-w-0 rounded-xl border border-ink-line bg-ink-deep p-4">
              <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-terra font-mono text-xs font-bold text-white">
                {index + 1}
              </span>
              <p className="font-heading text-sm font-bold leading-snug">{step.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#D6D3D1]">{step.detail}</p>
              {index < t.flow.length - 1 && (
                <span aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 text-terra-soft lg:-right-2 lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2">↓</span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-relaxed text-[#D6D3D1]"><strong className="text-white">{t.pipelineLimitLabel}</strong> {t.pipelineLimit}</p>
      </div>
    </section>
  );
}

function InpheraResponsibleUse({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).detail;
  return (
    <aside aria-labelledby="inphera-responsible-use" className="mb-16 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span aria-hidden="true" className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-200 font-bold text-amber-900">!</span>
        <div>
          <h2 id="inphera-responsible-use" className="font-heading text-base font-bold text-amber-900">{t.responsibleTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.responsibleText}</p>
        </div>
      </div>
    </aside>
  );
}

export function projectStaticParams() {
  return getContent("es").projects.map((p) => ({ slug: p.slug }));
}

export function projectMetadata(locale: Locale, slug: string): Metadata {
  const t = getDictionary(locale);
  const project = getContent(locale).projects.find((p) => p.slug === slug);
  if (!project) return { title: t.detail.notFound };

  const description = project.isPrivate ? `${project.summary} ${t.detail.privateMetaSuffix}` : project.summary;
  const pathname = paths.project(locale, project.slug);

  return {
    title: project.title,
    description,
    ...(siteUrl
      ? {
          alternates: {
            canonical: pathname,
            languages: Object.fromEntries(locales.map((l) => [l, paths.project(l, project.slug)])),
          },
        }
      : {}),
    openGraph: {
      type: "article",
      locale: t.ogLocale,
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

export default function ProjectDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDictionary(locale).detail;
  const project = getContent(locale).projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  // Extract stack from description string
  const descParts = project.description.split("Stack:");
  const mainDesc = descParts[0].trim();
  const stackRaw = descParts.length > 1 ? descParts[1] : "";
  const stack = stackRaw.split("·").map(s => s.trim()).filter(Boolean);
  const isInphera = project.slug === "inphera";

  return (
    <main className="relative min-h-screen bg-cream pb-32 text-ink">
        <div className="relative mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-16">
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <Link href={`${paths.home(locale)}#${getDictionary(locale).ids.projects}`} className="inline-flex items-center gap-2 font-medium text-ink-soft transition-colors hover:text-terra">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
                {t.back}
            </Link>
            <LanguageSwitch locale={locale} />
            </div>

            <header className="mb-16">
                <p className="mb-3 font-mono text-sm text-terra">git show {project.slug}</p>
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
                    <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl">{project.title}</h1>
                    {project.isPrivate && (
                        <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-ink px-3 py-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-terra-soft"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span className="text-xs font-bold uppercase tracking-wider text-cream">{t.privateBadge}</span>
                        </div>
                    )}
                </div>

                {stack.length > 0 && (
                    <div className="mb-8 flex flex-wrap gap-2">
                        {stack.map((tech, i) => (
                            <span key={i} className="rounded-md bg-sand px-3 py-1.5 font-mono text-sm text-ink">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-3">
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-terra px-6 py-3 font-bold text-white transition-colors hover:bg-terra-dark">
                            {t.viewProject} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    )}
                    {(project.github || project.githubBackend) && (
                        <a href={project.github || project.githubBackend} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border-2 border-ink px-6 py-2.5 font-bold text-ink transition-colors hover:bg-ink hover:text-cream">
                            {t.viewCode} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                    )}
                </div>
            </header>

            <div className="relative mb-16 aspect-video w-full overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_-24px_rgba(41,37,36,0.45)] md:aspect-[21/9]">
                <Image
                  src={project.img}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="100vw"
                  className={project.imageContain ? "object-contain" : "object-cover"}
                />
            </div>

            {isInphera && (
              <>
                <InpheraArchitecture locale={locale} />
                <InpheraResponsibleUse locale={locale} />
              </>
            )}

            <article className="max-w-none">
                <h2 className="mb-8 font-heading text-3xl font-bold">{t.about}</h2>
                <DescriptionBlocks blocks={parseDescriptionBlocks(mainDesc)} />
            </article>

            {project.gallery && project.gallery.length > 0 && (
                <div className="mt-20">
                    <h2 className="mb-3 font-heading text-3xl font-bold">{isInphera ? t.evidence : t.gallery}</h2>
                    {isInphera && (
                      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-ink-soft">{t.evidenceNote}</p>
                    )}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {project.gallery.map((img, i) => (
                            <div key={i} className={`relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-lg ${i === 0 && project.gallery.length % 2 === 1 ? "md:col-span-2 md:aspect-[21/9]" : ""}`}>
                                <Image
                                  src={img}
                                  alt={project.galleryAlts[i] ?? `${project.title} screenshot ${i+1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className={project.galleryContain ? "object-contain transition-transform duration-500 hover:scale-[1.02]" : "object-cover transition-transform duration-500 hover:scale-105"}
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
