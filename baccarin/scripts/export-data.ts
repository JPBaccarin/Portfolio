import { getPayload } from "payload";
import config from "../payload.config";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function exportData() {
  console.log("🚀 Iniciando exportação de dados (LOCAL)...");

  const payload = await getPayload({ config });
  const backup: any = {
    collections: {},
    globals: {},
  };

  try {
    // Exportar Coleções
    const collections = ["media", "projects", "users"];
    for (const slug of collections) {
      console.log(`Exportando coleção: ${slug}...`);
      const { docs } = await payload.find({
        collection: slug as any,
        limit: 1000,
        locale: "all", // Pega todos os idiomas
      });
      backup.collections[slug] = docs;
    }

    // Exportar Globais
    const globals = ["site-settings"];
    for (const slug of globals) {
      console.log(`Exportando global: ${slug}...`);
      const doc = await payload.findGlobal({
        slug: slug as any,
        locale: "all",
      });
      backup.globals[slug] = doc;
    }

    const backupPath = path.resolve(process.cwd(), "payload-backup.json");
    fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2));
    console.log(`\n✅ Backup concluído! Arquivo salvo em: ${backupPath}`);
  } catch (err) {
    console.error("❌ Erro na exportação:");
    console.error(err);
  }
}

exportData();
