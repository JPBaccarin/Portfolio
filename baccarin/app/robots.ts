import { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Configuração do robots.txt para o mecanismo de busca.
 * Permite que todos os bots indexem o conteúdo do site.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jpbaccarin.github.io/Portfolio/sitemap.xml",
  };
}
