"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/language-context";
import { RiMessage2Line, RiDownloadLine } from "@remixicon/react";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getLinkHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-border/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-base font-bold tracking-tight font-jetbrains text-foreground uppercase">
          Baccarin
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          <Link href={getLinkHref("#projetos")} className="hover:text-primary transition-colors">
            {t.nav.projects}
          </Link>
          <Link href={getLinkHref("#sobre")} className="hover:text-primary transition-colors">
            {t.nav.about}
          </Link>
          <a
            href={t.hero.resumeFile}
            download
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <RiDownloadLine className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            {t.hero.resumeDownload}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={getLinkHref("#contato")}
            className="flex items-center gap-2 rounded-md bg-foreground px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:bg-primary hover:text-primary-foreground group"
          >
            <RiMessage2Line className="w-4 h-4" />
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
