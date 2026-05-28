import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

/**
 * Card reutilizável para exibição de produtos no catálogo B2B.
 * 
 * Regra de negócio: NÃO exibimos preço — o foco é nas
 * especificações logísticas e no CTA para cotação.
 * O card destaca a categoria, marca e dados de caixa/shelf life
 * para que o comprador avalie rapidamente a viabilidade logística.
 */

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-brand-gray-light bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Imagem do produto com badge de categoria */}
      <div className="relative aspect-square overflow-hidden bg-brand-gray-light">
        <Image
          src={product.imagem}
          alt={`${product.nome} — ${product.marca}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badge de categoria */}
        <span className="absolute left-3 top-3 rounded-full bg-brand-blue/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {product.categoria}
        </span>
      </div>

      {/* Informações do produto */}
      <div className="flex flex-1 flex-col p-5">
        {/* Marca */}
        <span className="mb-1 text-xs font-medium uppercase tracking-wider text-brand-gray-medium">
          {product.marca}
        </span>

        {/* Nome do produto */}
        <h3 className="mb-3 text-lg font-bold leading-tight text-brand-black">
          {product.nome}
        </h3>

        {/* Specs resumidas — dados que o comprador B2B precisa ver de relance */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-brand-gray-light px-2.5 py-1 text-xs font-medium text-brand-gray-dark">
            📦 {product.especificacoes.unidadesPorCaixa} un/cx
          </span>
          <span className="rounded-md bg-brand-gray-light px-2.5 py-1 text-xs font-medium text-brand-gray-dark">
            ⚖️ {product.especificacoes.pesoPorCaixa}/cx
          </span>
          <span className="rounded-md bg-brand-gray-light px-2.5 py-1 text-xs font-medium text-brand-gray-dark">
            📅 {product.especificacoes.shelfLife}
          </span>
        </div>

        {/* Spacer para empurrar o botão para baixo */}
        <div className="mt-auto">
          <Link
            href={`/catalogo/${product.id}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-blue px-4 py-2.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:bg-brand-blue hover:text-white"
          >
            Ver Especificações
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
