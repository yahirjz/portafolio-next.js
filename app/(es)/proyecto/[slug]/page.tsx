import type { Metadata } from "next";
import ProjectDetail, { projectMetadata, projectStaticParams } from "@/components/ProjectDetail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return projectMetadata("es", slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetail locale="es" slug={slug} />;
}
