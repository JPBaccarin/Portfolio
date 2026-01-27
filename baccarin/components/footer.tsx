"use client";
import { RiGithubFill, RiLinkedinFill, RiWhatsappLine, RiMailLine } from "@remixicon/react";

export function Footer() {
  return (
    <footer id="contato" className="py-24 px-6 border-t border-border/10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6 font-jetbrains">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight mb-10 font-jetbrains">
            Vamos criar algo <span className="text-primary">marcante.</span>
          </h2>

          <div className="space-y-4 mb-16">
            <a
              href="mailto:contato@baccarin.dev"
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group font-jetbrains"
            >
              <RiMailLine className="w-5 h-5 text-primary" />
              <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-all">
                contato@baccarin.dev
              </span>
            </a>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group font-jetbrains"
            >
              <RiWhatsappLine className="w-5 h-5 text-primary" />
              <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-all">
                +55 11 99999-9999
              </span>
            </a>
          </div>

          <div className="flex gap-10">
            {[
              { icon: RiGithubFill, href: "#", name: "GitHub" },
              { icon: RiLinkedinFill, href: "#", name: "LinkedIn" },
              { icon: RiWhatsappLine, href: "https://wa.me/5511999999999", name: "WhatsApp" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>

          <p className="mt-24 text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 font-jetbrains">
            © 2026 Baccarin — Code & Craft
          </p>
        </div>
      </div>
    </footer>
  );
}
