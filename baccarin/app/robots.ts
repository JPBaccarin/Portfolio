import { MetadataRoute } from "next";

/**
 * Configuração do robots.txt para os mecanismos de busca.
 * Permite que todos os bots indexem o conteúdo do site.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/sitemap.xml`,
  };
}
