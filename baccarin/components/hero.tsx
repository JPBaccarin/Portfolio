"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const chars = nameRef.current?.querySelectorAll(".char");
      if (!chars) return;

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 100,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
        },
      );

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="gradient-animated" />

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <h1
          ref={nameRef}
          className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8 font-jetbrains"
        >
          {"BACCARIN".split("").map((char, i) => (
            <span key={i} className="char inline-block" style={{ transformOrigin: "50% 100%" }}>
              {char}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle text-sm md:text-base font-medium text-muted-foreground uppercase tracking-[0.3em] max-w-2xl mx-auto">
          Desenvolvedor Full Stack — Design & Code
        </p>
      </div>

      {/* Smooth transition fade */}
      <div className="hero-fade" />
    </section>
  );
}
