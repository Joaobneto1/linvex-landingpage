export type LeadOrigin = 'startup' | 'produtos' | 'para-empresas' | 'contato' | 'home';

export interface LeadPayload {
  nome: string;
  email: string;
  empresa?: string;
  telefone?: string;
  whatsapp?: string;
  cargo?: string;
  mensagem?: string;
  descricao?: string;
  origem: LeadOrigin;
  produto?: string;
  tipoProjeto?: string;
  objetivoProjeto?: string;
  faturamento?: string;
  // Campos específicos do formulário de startup
  foundersNames?: string;
  contactEmails?: string;
  phones?: string;
  foundersBackground?: string;
  foundersLinks?: string;
  ideaDescription?: string;
  whyNow?: string;
  currentStage?: string;
  extraNotes?: string;
  // Permite campos adicionais
  [key: string]: any;
}

