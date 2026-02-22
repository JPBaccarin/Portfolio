import { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Gera o sitemap.xml para o Google Search Console.
 * Define as rotas principais e a frequência de atualização.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jpbaccarin.github.io/Portfolio";

  // Rota principal
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Você pode adicionar rotas dinâmicas aqui se necessário
  ];
}
