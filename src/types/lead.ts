export type LeadOrigin = 'startup' | 'produtos' | 'para-empresas' | 'contato';

export interface LeadPayload {
  nome: string;
  email: string;
  empresa?: string;
  telefone?: string;
  cargo?: string;
  mensagem?: string;
  descricao?: string;
  origem: LeadOrigin;
  produto?: string;
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

