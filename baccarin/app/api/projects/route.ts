import { NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";

/**
 * API para retornar a lista de projetos formatada para o frontend.
 * Suporta query param ?lang=pt ou ?lang=en
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "pt";

    const payload = await getPayloadClient();

    const projects = await payload.find({
      collection: "projects",
      locale: lang as "pt" | "en",
      depth: 1,
      sort: "-date",
    });

    return NextResponse.json(projects);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
