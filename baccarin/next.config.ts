import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

/**
 * Configuração do Next.js para modo dinâmico com Payload CMS.
 * Removidas as configurações de exportação estática (basePath, trailingSlash, unoptimized).
 */
const nextConfig: NextConfig = {
  // Imagens otimizadas pelo Next.js (modo dinâmico)
  images: {
    remotePatterns: [],
  },
};

export default withPayload(nextConfig);
