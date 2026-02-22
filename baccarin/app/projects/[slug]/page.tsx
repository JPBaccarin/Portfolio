import { getProjectData, getAllProjectSlugs } from "@/lib/projects";
import { ProjectContent } from "@/components/project-content";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

/**
 * Gera os metadados dinâmicos para SEO em cada página de projeto.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectData(slug, "pt");

  if (!project) {
    return {
      title: "Projeto não encontrado | Baccarin",
    };
  }

  const baseUrl = "https://jpbaccarin.github.io/Portfolio";

  return {
    title: `${project.title} | Baccarin - Projetos`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${baseUrl}/projects/${slug}/`,
      siteName: "Baccarin",
      images: [
        {
          url: project.image.startsWith("http") ? project.image : `${baseUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "pt-BR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image.startsWith("http") ? project.image : `${baseUrl}${project.image}`],
    },
  };
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
