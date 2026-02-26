import { getPayload } from "payload";
import config from "../payload.config";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function importData() {
  console.log("🚀 Iniciando importação de dados para o SUPABASE...");

  const backupPath = path.resolve(process.cwd(), "payload-backup.json");
  if (!fs.existsSync(backupPath)) {
    console.error("❌ Arquivo de backup não encontrado!");
    return;
  }

  const backup = JSON.parse(fs.readFileSync(backupPath, "utf-8"));
  const payload = await getPayload({ config });

  try {
    // 1. Importar Mídia primeiro (necessário para referências em Projetos)
    console.log("\n📦 Importando media...");
    const mediaMapping: Record<string, string> = {}; // De ID antigo para novo se necessário

    for (const doc of backup.collections.media) {
      const filePath = path.resolve(process.cwd(), "media", doc.filename);
      if (fs.existsSync(filePath)) {
        console.log(`Subindo: ${doc.filename}...`);
        try {
          const newMedia = await payload.create({
            collection: "media",
            data: {
              alt: doc.alt,
            },
            filePath,
            overwriteExistingFiles: true,
          });
          mediaMapping[doc.id.toString()] = newMedia.id.toString();
        } catch (e) {
          console.warn(`Aviso: Falha ao subir ${doc.filename}.`);
        }
      }
    }

    // 2. Importar Projetos
    console.log("\n🚀 Importando projects...");
    for (const doc of backup.collections.projects) {
      console.log(`Criando projeto: ${doc.slug}...`);

      // Limpar campos de sistema
      const { id, createdAt, updatedAt, ...cleanData } = doc;

      // Atualizar referência de imagem se mudou o ID
      if (cleanData.image && mediaMapping[cleanData.image]) {
        cleanData.image = mediaMapping[cleanData.image];
      }

      try {
        await payload.create({
          collection: "projects",
          data: cleanData,
        });
      } catch (e) {
        console.warn(`Aviso: Falha ao criar projeto ${doc.slug}. Pode já existir.`);
      }
    }

    // 3. Importar Globais
    console.log("\n🌍 Importando Configurações Globais...");
    for (const slug in backup.globals) {
      console.log(`Atualizando global: ${slug}...`);
      const { updatedAt, ...cleanData } = backup.globals[slug];

      // Atualizar currículo no global site-settings se necessário
      if (slug === "site-settings" && cleanData.hero?.resumeFile && mediaMapping[cleanData.hero.resumeFile]) {
        cleanData.hero.resumeFile = mediaMapping[cleanData.hero.resumeFile];
      }

      await payload.updateGlobal({
        slug: slug as any,
        data: cleanData,
      });
    }

    console.log("\n✨ Importação concluída com sucesso!");
  } catch (err) {
    console.error("❌ Erro na importação:");
    console.error(err);
  }
}

importData();
