"use client";

import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiTimeLine, RiStackLine, RiArrowRightLine, RiMessage2Line } from "@remixicon/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactDialog } from "./contact-dialog";

interface ProjectContentProps {
  pt: any;
  en: any;
}

const projectImages: Record<string, string> = {
  "vortex-system": "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200",
  "nova-finance": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
  "eco-sphere": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
};

export function ProjectContent({ pt, en }: ProjectContentProps) {
  const { language, t } = useLanguage();
  const data = language === "pt" ? pt : en;

  if (!data) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

  // Filter other projects to show at the bottom
  const otherProjects = t.projects.items.filter((p: any) => p.slug !== data.slug);

  return (
    <main className="min-h-screen">
      <Header />

      <article className="pt-32 pb-24 px-6 border-b border-border/10">
        <div className="container mx-auto max-w-7xl">
          <Link
            href="/#projetos"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <RiArrowLeftLine className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {language === "pt" ? "Voltar_Projetos" : "Back_To_Projects"}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-20">
            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4 block font-jetbrains">
                {data.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12 font-jetbrains">
                {data.title}
              </h1>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-border/10 mb-16 group">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="markdown-content" dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
            </div>

            <aside className="space-y-12 lg:pt-32">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  <RiTimeLine className="w-4 h-4 text-primary" />
                  {language === "pt" ? "Data do Projeto" : "Project Date"}
                </div>
                <p className="text-sm font-jetbrains font-bold uppercase">{data.date}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  <RiStackLine className="w-4 h-4 text-primary" />
                  {language === "pt" ? "Tecnologias" : "Stack"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "GSAP", "MDX"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-[10px] font-bold uppercase tracking-wider rounded-sm border border-border/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  {language === "pt" ? "Gostou do projeto?" : "Liked the project?"}
                </p>
                <ContactDialog
                  trigger={
                    <button className="flex items-center justify-center gap-3 w-full py-3.5 px-8 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] rounded-md hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/10 cursor-pointer">
                      <RiMessage2Line className="w-4 h-4" />
                      {language === "pt" ? "Contato" : "Contact"}
                    </button>
                  }
                />
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Other Projects Section */}
      <section className="py-24 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4 block font-jetbrains">
                {language === "pt" ? "Mais_Projetos" : "More_Projects"}
              </span>
              <h2 className="text-3xl font-bold tracking-tight uppercase font-jetbrains">
                {language === "pt" ? "Continue_Explorando" : "Keep_Exploring"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((p: any) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-video rounded-md overflow-hidden border border-border/5 mb-6">
                  <Image
                    src={projectImages[p.slug]}
                    alt={p.title}
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center bg-background rounded-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-border/10">
                    <RiArrowRightLine className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                  {p.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors font-jetbrains mt-2">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
