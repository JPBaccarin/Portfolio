import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Header />

      <Hero />

      <section id="sobre" className="py-24 px-6 border-y border-border/10">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-10 block font-jetbrains">
              Apresentação
            </span>
            <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight uppercase mb-12 font-jetbrains">
              Ajudando marcas a traduzir sua visão em produtos{" "}
              <span className="text-primary italic">digitais de alto impacto</span> através de design minimalista e
              código eficiente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] font-medium uppercase tracking-wider text-muted-foreground leading-relaxed">
              <p>
                Focado em simplicidade. Cada projeto é uma oportunidade de destacar o essencial, unindo a neutralidade
                técnica do cinza com a expressividade do laranja.
              </p>
              <p>
                Desenvolvimento moderno utilizando Next.js, GSAP e Tailwind, garantindo performance e uma estética
                contemporânea polida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <Footer />
    </main>
  );
}
