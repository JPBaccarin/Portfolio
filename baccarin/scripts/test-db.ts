import { Client } from "pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

async function testConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URI,
  });

  try {
    console.log("Tentando conectar ao Supabase...");
    await client.connect();
    console.log("✅ Conexão estabelecida com sucesso!");

    const res = await client.query("SELECT NOW()");
    console.log("Horário no servidor:", res.rows[0].now);

    await client.end();
  } catch (err) {
    console.error("❌ Erro ao conectar:");
    console.error(err);
    process.exit(1);
  }
}

testConnection();
