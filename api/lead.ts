import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { canSendEmail, registerEmailSend } from './utils/emailRateLimit';

// API key do Resend - usar variável de ambiente ou fallback
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_6WEoM8uW_ExoKjqHMM7zf5vwcqcF2sHsM';
const EMAIL_TO = process.env.LEAD_EMAIL || process.env.EMAIL_TO || 'limvex.software@gmail.com';
const IS_DEV = process.env.NODE_ENV === 'development' || !process.env.VERCEL;

const resend = new Resend(RESEND_API_KEY);

interface LeadPayload {
  nome: string;
  email: string;
  empresa?: string;
  telefone?: string;
  cargo?: string;
  segmento?: string;
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
    'contato': 'Contato - Formulário de Contato',
    'home': 'Lead - Home (Análise de Projeto)',
  };

  let body = `Nova solicitação recebida: ${origemLabels[payload.origem] || payload.origem}\n\n`;
  body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';

  body += `📋 DADOS BÁSICOS\n`;
  body += `Nome: ${payload.nome}\n`;
  body += `Email: ${payload.email}\n`;

  if (payload.telefone) {
    body += `Telefone: ${payload.telefone}\n`;
  }

  if (payload.whatsapp) {
    body += `WhatsApp: ${payload.whatsapp}\n`;
  }

  if (payload.cargo) {
    body += `Cargo: ${payload.cargo}\n`;
  }

  if (payload.segmento) {
    body += `Segmento da empresa: ${payload.segmento}\n`;
  }

  if (payload.empresa) {
    body += `Empresa: ${payload.empresa}\n`;
  }

  if (payload.produto) {
    body += `Produto de interesse: ${payload.produto}\n`;
  }

  if (payload.tipoProjeto) {
    body += `Tipo de projeto: ${payload.tipoProjeto}\n`;
  }

  if (payload.objetivoProjeto) {
    body += `Objetivo do projeto: ${payload.objetivoProjeto}\n`;
  }

  if (payload.faturamento) {
    body += `Faturamento: ${payload.faturamento}\n`;
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
    return res.status(405).json({ ok: false, error: 'Método não permitido. Use POST.' });
  }

  try {
    // Parse do body
    let payload: LeadPayload;

    try {
      if (typeof req.body === 'string') {
        payload = JSON.parse(req.body);
      } else if (req.body && typeof req.body === 'object') {
        payload = req.body as LeadPayload;
      } else {
        return res.status(400).json({
          ok: false,
          error: 'Body inválido ou ausente. JSON esperado.',
        });
      }
    } catch (parseError) {
      console.error('[Lead API] Erro ao fazer parse do body:', parseError);
      return res.status(400).json({
        ok: false,
        error: 'Body inválido. JSON malformado.',
      });
    }

    // Validação básica - campos obrigatórios
    if (!payload.nome || !payload.email || !payload.telefone) {
      return res.status(400).json({
        ok: false,
        error: 'Campos obrigatórios faltando: nome, email e telefone são necessários.',
      });
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return res.status(400).json({
        ok: false,
        error: 'Email inválido.',
      });
    }

    // Validação anti-spam básica
    // Verificar se o email não é muito curto ou suspeito
    if (payload.email.length < 5 || payload.email.includes('..') || payload.email.startsWith('.') || payload.email.endsWith('.')) {
      return res.status(400).json({
        ok: false,
        error: 'Email inválido.',
      });
    }

    // Verificar se o nome não é muito curto ou contém apenas números
    if (payload.nome.length < 2 || /^\d+$/.test(payload.nome.trim())) {
      return res.status(400).json({
        ok: false,
        error: 'Nome inválido.',
      });
    }

    // Verificar mensagem (se existir) para spam básico
    if (payload.mensagem) {
      const mensagemLower = payload.mensagem.toLowerCase();
      const spamKeywords = ['http://', 'https://', 'www.', '.com/', 'bit.ly', 'tinyurl'];
      const hasSpamLink = spamKeywords.some(keyword => mensagemLower.includes(keyword));

      // Permitir apenas se não tiver muitos links ou palavras repetidas
      if (hasSpamLink && (mensagemLower.split('http').length - 1) > 2) {
        return res.status(400).json({
          ok: false,
          error: 'Mensagem contém conteúdo suspeito.',
        });
      }
    }

    // Validar origem
    const origensValidas = ['startup', 'produtos', 'para-empresas', 'contato', 'home'];
    if (!payload.origem || !origensValidas.includes(payload.origem)) {
      return res.status(400).json({
        ok: false,
        error: 'Origem inválida. Deve ser: startup, produtos, para-empresas, contato ou home.',
      });
    }

    // Log detalhado para debug
    console.log('[Lead API] LEAD RECEIVED:', JSON.stringify(payload, null, 2));
    console.log('[Lead API] RESEND_API_KEY:', RESEND_API_KEY ? `${RESEND_API_KEY.substring(0, 10)}...` : 'NÃO CONFIGURADA');
    console.log('[Lead API] EMAIL_TO:', EMAIL_TO);
    console.log('[Lead API] IS_DEV:', IS_DEV);

    // Verificar rate limit antes de enviar
    if (!(await canSendEmail())) {
      console.log('[Lead API] EMAIL RATE LIMIT REACHED');
      return res.status(200).json({ ok: true, skipped: true, reason: 'RATE_LIMIT' });
    }

    // Preparar assunto do e-mail
    const origemLabels: Record<string, string> = {
      'startup': 'Candidatura de Startup',
      'produtos': 'Contato - Produtos',
      'para-empresas': 'Contato - Para Empresas',
      'contato': 'Contato - Formulário de Contato',
    };

    const assunto = `Novo lead - ${origemLabels[payload.origem] || payload.origem}`;
    const corpoEmail = formatEmailBody(payload);

    // Modo dev: logar payload sem enviar se não tiver credenciais
    if (IS_DEV && !RESEND_API_KEY) {
      console.log('[Lead API] MODO DEV - Email não enviado (sem RESEND_API_KEY)');
      console.log('[Lead API] Payload do email que seria enviado:');
      console.log('To:', EMAIL_TO);
      console.log('Subject:', assunto);
      console.log('Body:', corpoEmail);
      return res.status(200).json({
        ok: false,
        error: 'RESEND_API_KEY não configurada. Em desenvolvimento, o email não foi enviado, mas foi logado no console.',
        devMode: true,
      });
    }

    // Verificar se tem API key válida
    if (!RESEND_API_KEY || RESEND_API_KEY.length < 10) {
      console.error('[Lead API] RESEND_API_KEY inválida ou ausente');
      return res.status(500).json({
        ok: false,
        error: 'Configuração de e-mail inválida. Entre em contato com o suporte.',
      });
    }

    // Enviar e-mail via Resend
    console.log('[Lead API] Tentando enviar email via Resend...');
    console.log('[Lead API] From: onboarding@resend.dev');
    console.log('[Lead API] To:', EMAIL_TO);
    console.log('[Lead API] Subject:', assunto);

    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: EMAIL_TO,
        subject: assunto,
        html: `<div style="font-family: monospace; white-space: pre-wrap; background: #f5f5f5; padding: 20px; border-radius: 8px; line-height: 1.6;">${corpoEmail.replace(/\n/g, '<br>')}</div>`,
        text: corpoEmail,
      });

      if (error) {
        console.error('[Lead API] EMAIL SEND ERROR:', JSON.stringify(error, null, 2));
        return res.status(500).json({
          ok: false,
          error: error.message || 'Erro ao enviar e-mail. Verifique as configurações do servidor.',
          details: IS_DEV ? JSON.stringify(error, null, 2) : undefined,
        });
      }

      console.log('[Lead API] EMAIL SENT SUCCESSFULLY');
      console.log('[Lead API] Message ID:', data?.id);

      // Registrar envio no rate limit
      try {
        await registerEmailSend();
      } catch (rateLimitError) {
        console.error('[Lead API] Erro ao registrar rate limit (não crítico):', rateLimitError);
        // Não falhar o envio por causa do rate limit
      }

      // Retornar sucesso
      return res.status(200).json({ ok: true, messageId: data?.id });
    } catch (sendError) {
      console.error('[Lead API] EXCEPTION ao enviar email:', sendError);
      const errorDetails = sendError instanceof Error ? {
        message: sendError.message,
        stack: sendError.stack,
        name: sendError.name,
      } : String(sendError);

      return res.status(500).json({
        ok: false,
        error: sendError instanceof Error ? sendError.message : 'Erro inesperado ao enviar e-mail.',
        details: IS_DEV ? JSON.stringify(errorDetails, null, 2) : undefined,
      });
    }
  } catch (error) {
    console.error('[Lead API] Erro inesperado no handler:', error);
    const errorDetails = error instanceof Error ? {
      message: error.message,
      stack: error.stack,
      name: error.name,
    } : String(error);

    return res.status(500).json({
      ok: false,
      error: 'Erro interno ao processar o formulário.',
      details: IS_DEV ? JSON.stringify(errorDetails, null, 2) : undefined,
    });
  }
}

