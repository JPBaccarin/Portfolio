import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-border/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-base font-bold tracking-tight font-jetbrains text-foreground uppercase">
          Baccarin
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          <Link href="#projetos" className="hover:text-primary transition-colors">
            Projetos
          </Link>
          <Link href="#sobre" className="hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <a
            href="#contato"
            className="rounded-md bg-foreground px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Saber Mais
          </a>
        </div>
      </div>
    </header>
  );
}
