import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcos Macedo — Desenvolvedor Fullstack | Sistemas Web",
  description:
    "Sistemas web sob medida, do zero ao deploy. Trabalho ponta a ponta, sozinho — você fala direto comigo.",
  openGraph: {
    title: "Marcos Macedo — Desenvolvedor Fullstack | Sistemas Web",
    description:
      "Sistemas web sob medida, do zero ao deploy. Trabalho ponta a ponta, sozinho — você fala direto comigo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
