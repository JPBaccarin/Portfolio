import type { Metadata } from "next";
import { JetBrains_Mono, Archivo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body className="antialiased font-archivo">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="noise-bg" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
