import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

/**
 * Página de Contato — Captura de leads B2B qualificados
 * 
 * Layout: Formulário à esquerda + Dados de contato à direita
 * O formulário LeadForm é client component (interatividade),
 * enquanto esta página é server component (SEO).
 */

export const metadata: Metadata = {
  title: "Contato — Solicitar Cotação",
  description:
    "Entre em contato com a Motiva Representações Comerciais. Solicite cotação de produtos alimentícios para atacado com condições exclusivas.",
};

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de solicitar uma cotação de produtos alimentícios para minha empresa."
);

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gray-light py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Fale Conosco
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-brand-black md:text-4xl lg:text-5xl">
            Solicite sua Cotação
          </h1>
          <p className="max-w-2xl text-lg text-brand-gray-medium">
            Preencha o formulário abaixo e nossa equipe comercial entrará em contato
            em até <strong className="text-brand-black">24 horas úteis</strong> com
            uma proposta personalizada.
          </p>
        </div>
      </section>

      {/* Conteúdo — Formulário + Contatos */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Formulário (ocupa 3/5 do grid) */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-brand-gray-light bg-white p-6 shadow-sm md:p-8">
                <h2 className="mb-6 text-xl font-bold text-brand-black">
                  Dados para Cotação
                </h2>
                <LeadForm />
              </div>
            </div>

            {/* Sidebar de contato (2/5 do grid) */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Card WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-green-200 bg-green-50 p-5 transition-all duration-200 hover:border-green-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white transition-transform group-hover:scale-110">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">WhatsApp Comercial</p>
                    <p className="text-sm text-green-700">Atendimento rápido e direto</p>
                  </div>
                </a>

                {/* Card Contatos */}
                <div className="rounded-xl border border-brand-gray-light bg-brand-gray-light p-6">
                  <h3 className="mb-4 text-lg font-bold text-brand-black">
                    Outros Canais
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                        <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-brand-black">(11) 9999-9999</p>
                        <p className="text-brand-gray-medium">Seg–Sex, 8h às 18h</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                        <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-brand-black">contato@motivarep.com.br</p>
                        <p className="text-brand-gray-medium">Respondemos em até 24h</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                        <svg className="mt-0.5 h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-brand-black">São Paulo, SP</p>
                        <p className="text-brand-gray-medium">Capital e Grande São Paulo</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Card de confiança */}
                <div className="rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-6 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
                    <svg className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-brand-gray-dark">
                    Seus dados estão protegidos e são utilizados exclusivamente
                    para fins comerciais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
