/**
 * Tipo que representa um produto no catálogo B2B da Motiva.
 * Estruturado para facilitar futura integração com Headless CMS.
 * Campos focados em especificações logísticas e de negócio,
 * sem informações de varejo como preço ao consumidor.
 */
export interface ProductSpecifications {
  /** Peso líquido de cada unidade individual */
  pesoUnitario: string;
  /** Quantidade de unidades em cada caixa master */
  unidadesPorCaixa: number;
  /** Peso bruto total da caixa master */
  pesoPorCaixa: string;
  /** Número de caixas por pallet padrão PBR */
  caixasPorPallet: number;
  /** Validade do produto (shelf life) */
  shelfLife: string;
  /** Condições de armazenamento recomendadas */
  armazenamento: string;
  /** Pedido mínimo para cotação */
  volumeMinimo: string;
}

export interface Product {
  /** Identificador único do produto (slug URL-friendly) */
  id: string;
  /** Nome comercial completo do produto */
  nome: string;
  /** Categoria do produto (ex: Conservas, Grãos) */
  categoria: string;
  /** Descrição comercial resumida */
  descricao: string;
  /** Marca do fabricante */
  marca: string;
  /** Caminho da imagem em /public */
  imagem: string;
  /** Especificações técnicas e logísticas */
  especificacoes: ProductSpecifications;
  /** Se é um produto em destaque no catálogo */
  destaque: boolean;
}
