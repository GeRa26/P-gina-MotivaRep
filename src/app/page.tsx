import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import catalogData from "@/data/catalog.json";
import type { Product } from "@/types/product";

/**
 * Página Inicial — Landing page institucional B2B
 * 
 * Estrutura de conversão:
 * 1. Hero → Credibilidade + CTA principal
 * 2. Diferenciais → Proposta de valor logístico/comercial
 * 3. Produtos em destaque → Prova social / portfólio
 * 4. CTA Final → Captura de lead
 * 
 * SEO: h1 único no hero, seções com h2, HTML semântico
 */

const products = catalogData as Product[];

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os produtos alimentícios disponíveis para distribuição."
);

/** Diferenciais da empresa — dados que transmitem credibilidade B2B */
const DIFERENCIAIS = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Logística Nacional",
    description: "Rede de distribuição otimizada com cobertura em todo o território nacional e prazos competitivos.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Atendimento Consultivo",
    description: "Equipe comercial especializada no setor alimentício, pronta para entender sua demanda e otimizar seu mix.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Portfólio Diversificado",
    description: "Ampla linha de produtos alimentícios das principais marcas do mercado, com renovação constante.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Condições Exclusivas",
    description: "Negociação direta com fabricantes que garante condições comerciais diferenciadas para nossos parceiros.",
  },
];

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative overflow-hidden bg-brand-black">
        {/* Background Image com overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.png"
            alt="Centro de distribuição de alimentos Motiva"
            fill
            priority
            quality={85}
            className="object-cover opacity-30"
            sizes="100vw"
          />
          {/* Gradient overlay para garantir legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <span className="animate-fade-in mb-4 inline-block rounded-full bg-brand-blue/15 px-4 py-1.5 text-sm font-medium text-brand-blue">
              Representação Comercial de Alimentos
            </span>

            <h1 className="animate-fade-in-up mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Distribuição inteligente de alimentos para o{" "}
              <span className="text-brand-blue">seu negócio</span>
            </h1>

            <p className="animate-fade-in-up mb-8 max-w-xl text-lg leading-relaxed text-gray-300 animate-delay-100">
              Conectamos as melhores marcas do setor alimentício a supermercados,
              atacadistas e distribuidoras com atendimento consultivo, logística
              eficiente e condições comerciais exclusivas.
            </p>

            <div className="animate-fade-in-up flex flex-col gap-4 sm:flex-row animate-delay-200">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/20"
              >
                Solicitar Cotação
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
              >
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          DIFERENCIAIS
          ============================================ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Por que a Motiva?
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-brand-black md:text-4xl">
              Diferenciais que impulsionam seu negócio
            </h2>
            <p className="mx-auto max-w-2xl text-brand-gray-medium">
              Com anos de experiência no setor alimentício, oferecemos uma parceria
              que vai além da venda: entendemos a dinâmica do seu mercado.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIAIS.map((item, index) => (
              <div
                key={item.title}
                className={`animate-fade-in-up group rounded-xl border border-brand-gray-light p-6 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg animate-delay-${(index + 1) * 100}`}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PRODUTOS EM DESTAQUE
          ============================================ */}
      <section className="bg-brand-gray-light py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand-blue">
                Nosso Portfólio
              </span>
              <h2 className="text-3xl font-extrabold text-brand-black md:text-4xl">
                Produtos em Destaque
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
            >
              Ver catálogo completo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.destaque)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA FINAL
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-dark py-20 md:py-28">
        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/10" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Pronto para fortalecer seu estoque?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Entre em contato com nossa equipe comercial e receba uma cotação
            personalizada em até 24 horas. Sem compromisso, sem burocracia.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-bold text-brand-blue transition-all duration-200 hover:bg-gray-100 hover:shadow-xl"
            >
              Solicitar Cotação Agora
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
