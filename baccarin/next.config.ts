import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio", // Substitua pelo nome do seu repositório se for diferente
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
