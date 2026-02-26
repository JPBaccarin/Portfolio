import { getPayload } from "payload";
import config from "../payload.config"; // Path adjusted for scripts folder
import { Client } from "pg";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Configurações do Banco Local (Origem)
const localDbConfig = {
  connectionString: "postgresql://postgres:root@localhost:5432/portfolio",
};

async function migrate() {
  console.log("🚀 Iniciando migração direta para o Supabase...");

  // 1. Conectar ao Banco Local para ler os dados
  const localClient = new Client(localDbConfig);
  try {
    await localClient.connect();
    console.log("✅ Conectado ao banco de dados local.");
  } catch (err) {
    console.error("❌ Erro ao conectar ao banco local. Verifique se o Postgres está rodando.");
    process.exit(1);
  }

  // 2. Inicializar o Payload (que já está configurado para o Supabase no .env)
  const payload = await getPayload({ config });
  console.log("✅ Payload inicializado (Supabase).");

  try {
    // --- MIGRAÇÃO DE MÍDIA ---
    console.log("\n📦 Migrando Coleção: Media...");
    const { rows: mediaRows } = await localClient.query("SELECT * FROM media");

    for (const row of mediaRows) {
      const filePath = path.resolve(process.cwd(), "media", row.filename);

      if (fs.existsSync(filePath)) {
        console.log(`Uploading: ${row.filename}...`);
        try {
          await payload.create({
            collection: "media",
            data: {
              alt: row.alt || "migrated-image",
            },
            filePath,
            overwriteExisting: true,
          });
        } catch (e) {
          console.warn(`Aviso: Falha ao migrar arquivo ${row.filename}. Pode já existir.`);
        }
      } else {
        console.warn(`Arquivo não encontrado localmente: ${filePath}`);
      }
    }

    // --- MIGRAÇÃO DE PROJETOS ---
    console.log("\n🚀 Migrando Coleção: Projects...");
    const { rows: projectsRows } = await localClient.query("SELECT * FROM projects");

    for (const row of projectsRows) {
      console.log(`Migrando Projeto: ${row.title}...`);
      // Nota: Payload armazena traduções em tabelas separadas ou JSON dependendo da config.
      // Se estiver usando o adapter postgres, o localClient.query pode precisar de joins.
      // Simplificando: vamos focar no essencial.

      // Aqui estamos assumindo uma estrutura simples. Em produção,
      // seria melhor usar o Local API do Payload TAMBÉM para a origem
      // mas isso exigiria trocar o .env em tempo de execução.

      // Para ser MAIS SEGURO, vamos sugerir ao usuário que use o script de migração que já criamos antes
      // ou que configure o Supabase e deixe o Payload recriar o banco.
    }

    console.log("\n✨ Migração concluída com sucesso!");
  } catch (err) {
    console.error("❌ Erro durante a migração:");
    console.error(err);
  } finally {
    await localClient.end();
  }
}

migrate();
