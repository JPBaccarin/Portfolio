import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Utilitário para obter a instância do Payload CMS.
 * Útil para chamadas de API no lado do servidor (Server Actions, RSCs).
 */
export const getPayloadClient = async () => {
  return await getPayload({
    config,
  });
};

/**
 * Busca as configurações globais do site para um idioma específico.
 */
export const getSiteSettings = async (lang: string = "pt") => {
  const payload = await getPayloadClient();
  return await payload.findGlobal({
    slug: "site-settings",
    locale: lang as "pt" | "en",
    depth: 1,
  });
};
