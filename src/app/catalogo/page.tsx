import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import catalogData from "@/data/catalog.json";
import type { Product } from "@/types/product";

/**
 * Página do Catálogo — Grid de produtos alimentícios B2B
 * 
 * Renderiza todos os produtos do mock JSON em um grid responsivo.
 * Cada card direciona para a página de detalhes via /catalogo/[id].
 * 
 * Para futuro: filtros por categoria, busca, paginação
 */

export const metadata: Metadata = {
  title: "Catálogo de Produtos",
  description:
    "Explore nosso catálogo completo de produtos alimentícios para atacado e distribuição. Azeites, grãos, conservas e muito mais.",
};

const products = catalogData as Product[];

export default function CatalogoPage() {
  return (
    <>
      {/* Hero do catálogo */}
      <section className="bg-brand-gray-light py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Produtos para Atacado
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-brand-black md:text-4xl lg:text-5xl">
            Catálogo de Produtos
          </h1>
          <p className="max-w-2xl text-lg text-brand-gray-medium">
            Confira as linhas de produtos alimentícios disponíveis para distribuição.
            Clique em qualquer produto para ver as especificações técnicas completas e solicitar cotação.
          </p>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Info de catálogo incompleto / CTA */}
          <div className="mt-16 rounded-xl border border-brand-gray-light bg-brand-gray-light p-8 text-center">
            <h3 className="mb-2 text-lg font-bold text-brand-black">
              Não encontrou o que procura?
            </h3>
            <p className="mb-4 text-sm text-brand-gray-medium">
              Trabalhamos com diversas marcas e categorias além do catálogo online.
              Entre em contato para verificar disponibilidade.
            </p>
            <a
              href="/contato"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark"
            >
              Fale com um Representante
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
