"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

gsap.registerPlugin(ScrollTrigger);

const projectImages = [
  "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="projetos" ref={sectionRef} className="py-24 px-6 border-t border-border/10">
      <div className="container mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-3 block font-jetbrains">
            {t.projects.label}
          </span>
          <h2 className="text-3xl font-bold tracking-tight uppercase font-jetbrains">{t.projects.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((p: any, i: number) => (
            <Link key={i} href={`/projects/${p.slug}`} className="project-card group block">
              <div className="relative aspect-4/5 overflow-hidden bg-secondary rounded-md border border-border/5">
                <Image
                  src={projectImages[i]}
                  alt={p.title}
                  fill
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center bg-background rounded-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-border/10">
                  <RiArrowRightLine className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="mt-6 space-y-1.5">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                  {p.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors font-jetbrains">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
