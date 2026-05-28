import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import catalogData from "@/data/catalog.json";
import type { Product } from "@/types/product";

/**
 * Página de Detalhes do Produto — SSG via generateStaticParams
 * 
 * Cada rota /catalogo/[id] é pré-renderizada no build time,
 * consumindo os dados do JSON mock. Para futura integração com CMS,
 * basta trocar a source dos dados e manter a mesma estrutura.
 * 
 * Regras de negócio:
 * - Não exibe preço (B2B = cotação)
 * - Foco em especificações logísticas
 * - 2 CTAs: Solicitar Cotação + WhatsApp
 */

const products = catalogData as Product[];

const WHATSAPP_NUMBER = "5511999999999";

// ============================================
// SSG: Gera todas as rotas estáticas no build
// ============================================
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// ============================================
// SEO: Metadata dinâmico por produto
// ============================================
type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: `${product.nome} — ${product.marca}`,
    description: product.descricao,
    openGraph: {
      title: `${product.nome} | Motiva Representações`,
      description: product.descricao,
      images: [{ url: product.imagem }],
    },
  };
}

// ============================================
// COMPONENTE DA PÁGINA
// ============================================
export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no produto "${product.nome}" (${product.marca}). Gostaria de solicitar uma cotação.`
  );

  const specs = [
    { label: "Peso Unitário", value: product.especificacoes.pesoUnitario },
    { label: "Unidades por Caixa", value: `${product.especificacoes.unidadesPorCaixa} unidades` },
    { label: "Peso por Caixa", value: product.especificacoes.pesoPorCaixa },
    { label: "Caixas por Pallet", value: `${product.especificacoes.caixasPorPallet} caixas` },
    { label: "Shelf Life (Validade)", value: product.especificacoes.shelfLife },
    { label: "Armazenamento", value: product.especificacoes.armazenamento },
    { label: "Pedido Mínimo", value: product.especificacoes.volumeMinimo },
  ];

  return (
    <>
      {/* Breadcrumb — SEO e navegação */}
      <nav className="border-b border-brand-gray-light bg-brand-gray-light" aria-label="Breadcrumb">
        <div className="mx-auto max-w-[1280px] px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-medium">
            <li>
              <Link href="/" className="transition-colors hover:text-brand-blue">
                Início
              </Link>
            </li>
            <li aria-hidden="true">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </li>
            <li>
              <Link href="/catalogo" className="transition-colors hover:text-brand-blue">
                Catálogo
              </Link>
            </li>
            <li aria-hidden="true">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </li>
            <li className="font-medium text-brand-black" aria-current="page">
              {product.nome}
            </li>
          </ol>
        </div>
      </nav>

      {/* Detalhes do produto */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Coluna Esquerda — Imagem */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-gray-light">
              <Image
                src={product.imagem}
                alt={`${product.nome} — ${product.marca}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Badge de categoria */}
              <span className="absolute left-4 top-4 rounded-full bg-brand-blue px-4 py-1.5 text-sm font-semibold text-white">
                {product.categoria}
              </span>
            </div>

            {/* Coluna Direita — Informações */}
            <div className="flex flex-col">
              {/* Marca */}
              <span className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-gray-medium">
                {product.marca}
              </span>

              {/* Nome */}
              <h1 className="mb-4 text-3xl font-extrabold text-brand-black md:text-4xl">
                {product.nome}
              </h1>

              {/* Descrição */}
              <p className="mb-8 text-base leading-relaxed text-brand-gray-medium">
                {product.descricao}
              </p>

              {/* Tabela de Especificações Logísticas */}
              <div className="mb-8 overflow-hidden rounded-xl border border-brand-gray-light">
                <div className="bg-brand-gray-light px-5 py-3">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-brand-gray-dark">
                    Especificações Logísticas
                  </h2>
                </div>
                <div className="divide-y divide-brand-gray-light">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between px-5 py-3.5">
                      <span className="text-sm font-medium text-brand-gray-medium">
                        {spec.label}
                      </span>
                      <span className="text-sm font-semibold text-brand-black">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/contato?produto=${encodeURIComponent(product.nome)}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-blue-dark hover:shadow-lg"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Solicitar Cotação
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-green-500 px-6 py-3.5 text-base font-semibold text-green-600 transition-all duration-200 hover:bg-green-500 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
