import type { Metadata } from "next";
import { JetBrains_Mono, Archivo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Baccarin | Desenvolvedor Full Stack",
  description: "Portfólio profissional de desenvolvimento web e design criativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-archivo bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            {/* Global Moving Grainy Background */}
            <div className="global-bg">
              <div className="accent-gradient" style={{ top: "10%", left: "10%" }} />
              <div className="accent-gradient" style={{ bottom: "10%", right: "10%", animationDelay: "-15s" }} />
            </div>
            <div className="noise-overlay" />

            <div className="relative z-10">{children}</div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
