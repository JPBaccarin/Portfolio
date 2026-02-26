import { getPayloadClient } from "./payload";

export interface Project {
  id: string | number;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image?: { url: string } | string;
  tech?: { name: string }[];
  content: { root: { children: any[] } };
}

export interface ProjectData {
  id: string | number;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  contentHtml: string;
  image: string;
  tech: string[];
  content: { root: { children: any[] } };
}

/**
 * Busca os dados de um projeto específico pelo slug e idioma.
 */
export async function getProjectData(slug: string, lang: string): Promise<ProjectData | null> {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug,
      },
    },
    locale: lang as "pt" | "en",
    depth: 1,
  });

  if (!docs.length) {
    return null;
  }

  const project = docs[0] as unknown as Project;

  return {
    ...project,
    contentHtml: "",
    image: (project.image as { url?: string })?.url || "",
    tech: project.tech?.map((t) => t.name) || [],
    content: project.content,
  };
}

/**
 * Retorna todos os slugs de projetos para geração de páginas ou sitemaps.
 */
export async function getAllProjectSlugs() {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "projects",
    select: {
      slug: true,
    },
    pagination: false,
  });

  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

/**
 * Retorna a lista resumida de projetos para o idioma selecionado.
 */
export async function getProjectList(lang: string) {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "projects",
    locale: lang as "pt" | "en",
    depth: 1,
    sort: "-date",
  });

  return (docs as unknown as Project[]).map((project) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    image: (project.image as { url?: string })?.url || "",
    date: project.date,
    description: project.description,
  }));
}
