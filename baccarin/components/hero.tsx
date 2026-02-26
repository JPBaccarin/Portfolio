"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/language-context";
import { RiArrowDownLine } from "@remixicon/react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Shutter reveal for the name
      tl.from(".char", {
        yPercent: 100,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
      });

      // Subtle fade for the description and button
      tl.from(
        ".hero-content",
        {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-start gap-8">
          {/* Main Name */}
          <div className="relative overflow-hidden py-2">
            <h1
              ref={nameRef}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none font-jetbrains flex flex-wrap"
            >
              {"BACCARIN".split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <span className="char inline-block">{char}</span>
                </span>
              ))}
            </h1>
          </div>

          {/* Simple Description */}
          <p className="hero-content text-lg md:text-xl font-medium text-muted-foreground leading-relaxed max-w-xl uppercase tracking-tight">
            {t.hero?.description}
          </p>

          {/* Action Button */}
          <div className="hero-content mt-4 flex flex-wrap gap-10">
            <a
              href="#projetos"
              className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.4em] transition-all hover:text-primary"
            >
              <span className="relative inline-block pb-1">
                {t.hero?.cta}
                <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left" />
              </span>
              <RiArrowDownLine className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
