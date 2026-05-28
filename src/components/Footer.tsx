import Link from "next/link";

/**
 * Footer institucional com 3 colunas:
 * 1. Sobre a empresa + dados do CNPJ
 * 2. Navegação rápida
 * 3. Contato direto (WhatsApp, email, telefone)
 * 
 * Copyright dinâmico com ano atual.
 */

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de solicitar uma cotação de produtos alimentícios."
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gray-light bg-brand-black text-gray-300">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Coluna 1 — Institucional */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Motiva Representações
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Excelência em representação comercial de produtos alimentícios.
              Conectamos as melhores marcas do setor alimentício a supermercados,
              atacadistas e distribuidoras em todo o Brasil.
            </p>
            <p className="text-xs text-gray-500">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Início" },
                { href: "/catalogo", label: "Catálogo de Produtos" },
                { href: "/contato", label: "Solicitar Cotação" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Contato Comercial
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>(11) 9999-9999</span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-green-400"
                >
                  <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.319 0-4.46-.767-6.184-2.06l-.432-.333-3.2 1.073 1.073-3.2-.333-.432A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  <span>WhatsApp Comercial</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>contato@motivarep.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 text-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>São Paulo, SP — Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Motiva Representações Comerciais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
