"use client";

import { useState, type FormEvent } from "react";

/**
 * Formulário de captura de leads B2B otimizado para conversão.
 * 
 * Regras de negócio:
 * - Campos obrigatórios: nome, email, telefone, empresa, CNPJ
 * - CNPJ com máscara simplificada (apenas validação de tamanho)
 * - Volume estimado como select para facilitar o preenchimento
 * - Campo de mensagem opcional para detalhes adicionais
 * - Estado de loading + feedback de sucesso após envio
 * 
 * Para futura integração: substituir o console.log por chamada
 * à API Route (/api/leads) ou endpoint externo (HubSpot, RD Station).
 */

interface LeadFormProps {
  /** Produto de interesse pré-selecionado (vindo da página de detalhes) */
  produtoInteresse?: string;
}

const VOLUME_OPTIONS = [
  "Selecione o volume estimado",
  "Até 50 caixas/mês",
  "50 a 200 caixas/mês",
  "200 a 500 caixas/mês",
  "500 a 1.000 caixas/mês",
  "Acima de 1.000 caixas/mês",
] as const;

export default function LeadForm({ produtoInteresse }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // TODO: Substituir por integração real com CRM/API
    console.log("📋 Lead capturado:", data);

    // Simula delay de envio
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="animate-fade-in-up rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-green-800">
          Solicitação Enviada!
        </h3>
        <p className="text-sm text-green-700">
          Recebemos seus dados. Nossa equipe comercial entrará em contato
          em até <strong>24 horas úteis</strong> com sua cotação personalizada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Produto de interesse (pré-preenchido se vier da página de detalhes) */}
      {produtoInteresse && (
        <input type="hidden" name="produtoInteresse" value={produtoInteresse} />
      )}

      {/* Grid 2 colunas para campos curtos */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Nome completo */}
        <div className="sm:col-span-2">
          <label htmlFor="lead-nome" className="mb-1.5 block text-sm font-medium text-brand-gray-dark">
            Nome Completo *
          </label>
          <input
            type="text"
            id="lead-nome"
            name="nome"
            required
            placeholder="Seu nome completo"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="lead-email" className="mb-1.5 block text-sm font-medium text-brand-gray-dark">
            Email Corporativo *
          </label>
          <input
            type="email"
            id="lead-email"
            name="email"
            required
            placeholder="email@empresa.com.br"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="lead-telefone" className="mb-1.5 block text-sm font-medium text-brand-gray-dark">
            Telefone *
          </label>
          <input
            type="tel"
            id="lead-telefone"
            name="telefone"
            required
            placeholder="(11) 99999-9999"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
          />
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="lead-empresa" className="mb-1.5 block text-sm font-medium text-brand-gray-dark">
            Empresa *
          </label>
          <input
            type="text"
            id="lead-empresa"
            name="empresa"
            required
            placeholder="Razão social da empresa"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
          />
        </div>

        {/* CNPJ */}
        <div>
          <label htmlFor="lead-cnpj" className="mb-1.5 block text-sm font-medium text-brand-gray-dark">
            CNPJ *
          </label>
          <input
            type="text"
            id="lead-cnpj"
            name="cnpj"
            required
            placeholder="00.000.000/0001-00"
            maxLength={18}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
          />
        </div>

        {/* Cargo */}
        <div>
          <label htmlFor="lead-cargo" className="mb-1.5 block text-sm font-medium text-brand-gray-dark">
            Cargo
          </label>
          <input
            type="text"
            id="lead-cargo"
            name="cargo"
            placeholder="Ex: Comprador, Gerente"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
          />
        </div>

        {/* Volume Estimado */}
        <div>
          <label htmlFor="lead-volume" className="mb-1.5 block text-sm font-medium text-brand-gray-dark">
            Volume Estimado Mensal
          </label>
          <select
            id="lead-volume"
            name="volumeEstimado"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
          >
            {VOLUME_OPTIONS.map((option, i) => (
              <option key={option} value={i === 0 ? "" : option} disabled={i === 0}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="lead-mensagem" className="mb-1.5 block text-sm font-medium text-brand-gray-dark">
          Mensagem / Detalhes da Solicitação
        </label>
        <textarea
          id="lead-mensagem"
          name="mensagem"
          rows={4}
          placeholder="Descreva os produtos de interesse, quantidades ou qualquer informação adicional..."
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-blue-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Solicitar Cotação
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-brand-gray-medium">
        Ao enviar, você concorda com nossa política de privacidade.
        Seus dados são utilizados exclusivamente para fins comerciais.
      </p>
    </form>
  );
}
