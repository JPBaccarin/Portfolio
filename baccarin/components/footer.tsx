"use client";
import { RiGithubFill, RiLinkedinFill, RiWhatsappLine } from "@remixicon/react";
import { useLanguage } from "@/context/language-context";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-10">
            {[
              { icon: RiGithubFill, href: "https://github.com/JPBaccarin", name: "GitHub" },
              {
                icon: RiLinkedinFill,
                href: "https://linkedin.com/in/joão-pedro-baccarin-sardinha-424806283",
                name: "LinkedIn",
              },
              { icon: RiWhatsappLine, href: "https://wa.me/5519995078743", name: "WhatsApp" },
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

          {/* Controls: Language and Theme */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 border-r border-border/20 pr-6">
              <button
                onClick={() => setLanguage("pt")}
                className={`text-[10px] uppercase font-bold tracking-tighter transition-colors ${language === "pt" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                PT
              </button>
              <span className="text-muted-foreground/20 text-[10px]">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-[10px] uppercase font-bold tracking-tighter transition-colors ${language === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                EN
              </button>
            </div>

            <ThemeToggle />

            <p className="hidden md:block text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 font-jetbrains">
              © 2026 Baccarin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
