"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/language-context";

export default function Page() {
  const { t } = useLanguage();

  return (
    <main>
      <Header />

      <Hero />

      <section id="sobre" className="py-24 px-6 border-y border-border/10">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-10 block font-jetbrains">
              {t.about.label}
            </span>
            <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight uppercase mb-12 font-jetbrains">
              {t.about.title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] font-medium uppercase tracking-wider text-muted-foreground leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
