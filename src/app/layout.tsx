import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Metadata global do site — SEO técnico.
 * Cada página pode sobrescrever title e description via generateMetadata().
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://motivarep.com.br"),
  title: {
    default: "Motiva Representações Comerciais | Distribuição de Alimentos B2B",
    template: "%s | Motiva Representações Comerciais",
  },
  description:
    "Representação comercial especializada em produtos alimentícios para supermercados, atacadistas e distribuidoras. Solicite sua cotação.",
  keywords: [
    "representação comercial",
    "distribuição alimentos",
    "atacado alimentos",
    "fornecedor alimentos",
    "B2B alimentos",
    "cotação atacado",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Motiva Representações Comerciais",
    title: "Motiva Representações Comerciais | Distribuição de Alimentos B2B",
    description:
      "Representação comercial especializada em produtos alimentícios para supermercados, atacadistas e distribuidoras.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
