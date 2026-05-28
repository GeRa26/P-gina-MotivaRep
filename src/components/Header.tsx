"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Header corporativo com navegação fixa.
 * - Logo à esquerda
 * - Links de navegação centralizados
 * - CTA "Fale com um Representante" à direita
 * - Menu hamburger em mobile
 * - Backdrop blur no scroll (via Tailwind)
 */

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contato", label: "Contato" },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gray-light bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Motiva — Página Inicial">
          <Image
            src="/images/logo-motiva.png"
            alt="Motiva Representações Comerciais"
            width={160}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray-dark transition-colors duration-200 hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contato"
          className="hidden rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-blue-dark hover:shadow-lg md:inline-flex"
        >
          Fale com um Representante
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-gray-dark md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? (
            /* Ícone X (fechar) */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Ícone Hamburger */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="animate-fade-in border-t border-brand-gray-light bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-brand-gray-dark transition-colors hover:bg-brand-gray-light hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark"
            >
              Fale com um Representante
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
