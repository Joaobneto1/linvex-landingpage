import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { canSendEmail, registerEmailSend } from './utils/emailRateLimit';

const resend = new Resend('re_59KmR2ki_HAGvs6MuvH56ynY1bPviGsMN');

interface LeadPayload {
  nome: string;
  email: string;
  empresa?: string;
  telefone?: string;
  cargo?: string;
  mensagem?: string;
  descricao?: string;
  origem: 'startup' | 'produtos' | 'para-empresas' | 'contato';
  produto?: string;
  [key: string]: any;
}

function formatEmailBody(payload: LeadPayload): string {
  const origemLabels: Record<string, string> = {
    'startup': 'Candidatura de Startup',
    'produtos': 'Contato - Produtos',
    'para-empresas': 'Contato - Para Empresas',
    'contato': 'Contato - Solicitar Orçamento',
  };

  let body = `Nova solicitação recebida: ${origemLabels[payload.origem] || payload.origem}\n\n`;
  body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';

  body += `📋 DADOS BÁSICOS\n`;
  body += `Nome: ${payload.nome}\n`;
  body += `Email: ${payload.email}\n`;

  if (payload.empresa) {
    body += `Empresa: ${payload.empresa}\n`;
  }

  if (payload.telefone) {
    body += `Telefone: ${payload.telefone}\n`;
  }

  if (payload.cargo) {
    body += `Cargo: ${payload.cargo}\n`;
  }

  if (payload.produto) {
    body += `Produto de interesse: ${payload.produto}\n`;
  }

  body += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  // Mensagem/Descrição
  if (payload.mensagem) {
    body += `💬 MENSAGEM\n${payload.mensagem}\n\n`;
  }

  if (payload.descricao) {
    body += `💬 DESCRIÇÃO DA DEMANDA\n${payload.descricao}\n\n`;
  }

  // Campos específicos do formulário de startup
  if (payload.origem === 'startup') {
    body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    body += `🚀 DADOS DA STARTUP\n\n`;

    if (payload.foundersNames) {
      body += `Fundadores: ${payload.foundersNames}\n`;
    }

    if (payload.contactEmails) {
      body += `Emails de contato: ${payload.contactEmails}\n`;
    }

    if (payload.phones) {
      body += `Telefones: ${payload.phones}\n`;
    }

    if (payload.foundersBackground) {
      body += `\n📚 Background dos Fundadores:\n${payload.foundersBackground}\n\n`;
    }

    if (payload.foundersLinks) {
      body += `Links dos fundadores: ${payload.foundersLinks}\n`;
    }

    if (payload.ideaDescription) {
      body += `\n💡 Descrição da Ideia:\n${payload.ideaDescription}\n\n`;
    }

    if (payload.whyNow) {
      body += `⏰ Por que agora:\n${payload.whyNow}\n\n`;
    }

    if (payload.currentStage) {
      body += `📊 Estágio atual: ${payload.currentStage}\n`;
    }

    if (payload.extraNotes) {
      body += `\n📝 Observações adicionais:\n${payload.extraNotes}\n`;
    }
  }

  body += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  body += `Origem: ${payload.origem}\n`;
  body += `Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}\n`;

  return body;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Permitir apenas método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  try {
    // Parse do body (Vercel já faz o parse automático para JSON)
    let payload: LeadPayload;

    if (typeof req.body === 'string') {
      payload = JSON.parse(req.body);
    } else {
      payload = req.body as LeadPayload;
    }

    // Validação básica
    if (!payload.nome || !payload.email) {
      return res.status(400).json({
        error: 'Campos obrigatórios faltando: nome e email são necessários.',
      });
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return res.status(400).json({
        error: 'Email inválido.',
      });
    }

    // Validar origem
    const origensValidas = ['startup', 'produtos', 'para-empresas', 'contato'];
    if (!payload.origem || !origensValidas.includes(payload.origem)) {
      return res.status(400).json({
        error: 'Origem inválida. Deve ser: startup, produtos, para-empresas ou contato.',
      });
    }

    // Log detalhado para debug
    console.log('LEAD RECEIVED:', payload);
    console.log('ATTEMPTING SEND EMAIL');

    // Verificar rate limit antes de enviar
    if (!(await canSendEmail())) {
      console.log('EMAIL RATE LIMIT REACHED');
      return res.status(200).json({ ok: true, skipped: true, reason: 'RATE_LIMIT' });
    }

    // Preparar assunto do e-mail
    const origemLabels: Record<string, string> = {
      'startup': 'Candidatura de Startup',
      'produtos': 'Contato - Produtos',
      'para-empresas': 'Contato - Para Empresas',
      'contato': 'Contato - Solicitar Orçamento',
    };

    const assunto = `Novo lead - ${origemLabels[payload.origem] || payload.origem}`;
    const corpoEmail = formatEmailBody(payload);

    // Enviar e-mail via Resend
    const { data, error } = await resend.emails.send({
      from: 'Linvex Landing Page <onboarding@resend.dev>',
      to: 'muriloalbuquerquemartins@gmail.com',
      subject: assunto,
      text: corpoEmail,
    });

    if (error) {
      console.error('EMAIL SEND ERROR:', error);
      return res.status(500).json({
        error: 'Erro interno ao enviar o formulário.',
      });
    }

    console.log('EMAIL SENT SUCCESSFULLY');

    // Registrar envio no rate limit
    await registerEmailSend();

    // Retornar sucesso
    return res.status(200).json({ ok: true, messageId: data?.id });
  } catch (error) {
    console.error('[Lead API] Erro inesperado:', error);
    return res.status(500).json({
      error: 'Erro interno ao enviar o formulário.',
    });
  }
}

