# Motiva Representações Comerciais

Este é o repositório do site institucional da **Motiva Representações Comerciais**, focado em conversão B2B no setor alimentício. O projeto foi construído para transmitir credibilidade, carregar de forma ultrarrápida e capturar leads comerciais qualificados.

## 🚀 Tecnologias Utilizadas

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Fontes:** Inter (Google Fonts via `next/font`)
*   **Ícones:** Heroicons (via SVG inline)

## 📦 Estrutura do Projeto

*   `/src/app`: Rotas e páginas da aplicação (App Router).
*   `/src/components`: Componentes React reutilizáveis (Header, Footer, ProductCard, LeadForm).
*   `/src/data`: Dados locais mockados (ex: `catalog.json`) simulando um Headless CMS.
*   `/src/types`: Definições de tipos do TypeScript.
*   `/public`: Imagens e assets estáticos (logos, fotos de produtos, etc.).

## ⚙️ Principais Funcionalidades

*   **Página Inicial (`/`)**: Hero banner, diferenciais da empresa, destaques do portfólio e chamadas para ação.
*   **Catálogo de Produtos (`/catalogo`)**: Listagem responsiva dos produtos disponíveis.
*   **Detalhes do Produto (`/catalogo/[id]`)**: Páginas geradas estaticamente (SSG) com especificações logísticas B2B (sem exibir preços) e links diretos para cotação via formulário ou WhatsApp.
*   **Contato e Captura de Leads (`/contato`)**: Formulário otimizado para o mercado B2B, solicitando dados essenciais como CNPJ e volume estimado.

## 💻 Como rodar o projeto localmente

Para executar este projeto na sua máquina, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado (versão 18.17 ou superior recomendada).

### 1. Clonar/Acessar o repositório

Navegue até a pasta do projeto no seu terminal:
```bash
cd "C:\Users\geral\OneDrive\Área de Trabalho\Pasta do Dev\Projetos Web\Página MotivaRep"
```
*(ou o caminho correspondente onde o projeto foi salvo)*

### 2. Instalar as dependências

Instale os pacotes necessários utilizando o npm (ou o gerenciador de pacotes da sua preferência):

```bash
npm install
```

### 3. Executar o servidor de desenvolvimento

Inicie o servidor local:

```bash
npm run dev
```

### 4. Acessar no navegador

Abra o seu navegador e acesse:

[http://localhost:3000](http://localhost:3000)

## 🛠️ Scripts Disponíveis

*   `npm run dev`: Inicia o servidor de desenvolvimento.
*   `npm run build`: Cria a versão otimizada de produção do aplicativo, gerando as páginas estáticas (SSG).
*   `npm run start`: Inicia o servidor de produção (requer rodar o `build` antes).
*   `npm run lint`: Executa o ESLint para encontrar problemas no código.

## 📈 Próximos Passos (Produção)

*   Substituir os dados mockados (`catalog.json`) por uma integração real com um Headless CMS.
*   Integrar o formulário de captura de leads (`LeadForm.tsx`) com uma API ou ferramenta de CRM (ex: RD Station, HubSpot).
*   Adicionar as informações reais de contato e redes sociais no Footer.
*   Configurar ferramentas de Analytics (Google Analytics, Tag Manager).
