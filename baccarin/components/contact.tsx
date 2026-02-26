"use client";
import { RiMailLine, RiWhatsappLine } from "@remixicon/react";
import { useLanguage } from "@/context/language-context";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 px-6 border-t border-border/10 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6 font-jetbrains">
            {t.footer?.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight mb-10 font-jetbrains">
            {(t.footer?.title || "").split(" ").map((word: string, i: number, arr: string[]) => (
              <span key={i}>{i === arr.length - 1 ? <span className="text-primary">{word}</span> : word} </span>
            ))}
          </h2>

          <div className="space-y-4">
            <a
              href="mailto:joaopedrobaccarin123@gmail.com"
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group font-jetbrains no-underline"
            >
              <RiMailLine className="w-5 h-5 text-primary" />
              <span className="group-hover:text-primary transition-all">joaopedrobaccarin123@gmail.com</span>
            </a>

            <a
              href="https://wa.me/5519995078743"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group font-jetbrains no-underline"
            >
              <RiWhatsappLine className="w-5 h-5 text-primary" />
              <span className="group-hover:text-primary transition-all">+55 (19) 99507-8743</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
