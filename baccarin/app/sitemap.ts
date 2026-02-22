import { getAllProjectSlugs } from "@/lib/projects";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Gera o sitemap.xml para o Google Search Console.
 * Define as rotas principais e os projetos dinamicamente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jpbaccarin.github.io/Portfolio/"; // Adicionada barra no final
  const projects = getAllProjectSlugs();

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}projects/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Rotas principais e projetos
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
