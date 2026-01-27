import { getProjectData, getAllProjectSlugs } from "@/lib/projects";
import { ProjectContent } from "@/components/project-content";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const ptData = await getProjectData(slug, "pt");
  const enData = await getProjectData(slug, "en");

  if (!ptData && !enData) {
    notFound();
  }

  return <ProjectContent pt={ptData} en={enData} />;
}
