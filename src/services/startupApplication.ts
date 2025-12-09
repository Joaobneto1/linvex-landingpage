import type { StartupApplication } from "@/types/startupApplication";
import type { LeadPayload } from "@/types/lead";

/**
 * Envia uma candidatura de startup para processamento via endpoint centralizado de leads.
 */
export async function sendStartupApplication(data: StartupApplication) {
  // Extrair nome do primeiro fundador (ou usar contactEmails como fallback)
  const nome = data.foundersNames?.split(',')[0]?.trim() || data.contactEmails?.split(',')[0]?.trim() || 'Sem nome';

  // Preparar payload para o endpoint de leads
  const payload: LeadPayload = {
    nome,
    email: data.contactEmails?.split(',')[0]?.trim() || '',
    telefone: data.phones?.split(',')[0]?.trim() || '',
    origem: 'startup',
    // Incluir todos os campos específicos da startup
    foundersNames: data.foundersNames,
    contactEmails: data.contactEmails,
    phones: data.phones,
    foundersBackground: data.foundersBackground,
    foundersLinks: data.foundersLinks,
    ideaDescription: data.ideaDescription,
    whyNow: data.whyNow,
    currentStage: data.currentStage,
    extraNotes: data.extraNotes,
  };

  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Erro ao enviar candidatura de startup');
    }

    return await response.json();
  } catch (error) {
    console.error('[StartupApplication] Erro ao enviar:', error);
    throw error;
  }
}

