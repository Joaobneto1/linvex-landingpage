import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// ========== RATE LIMITING (inline para evitar problemas de import) ==========
interface EmailCounter {
  month: string; // formato: YYYY-MM
  count: number;
}

const RATE_LIMIT = 3000;
const COUNTER_FILE = '/tmp/email-counter.json';

function getCurrentMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

async function readLocalCounter(): Promise<EmailCounter> {
  try {
    const fs = await import('fs/promises');
    const data = await fs.readFile(COUNTER_FILE, 'utf-8');
    const counter: EmailCounter = JSON.parse(data);
    if (counter.month !== getCurrentMonth()) {
      return { month: getCurrentMonth(), count: 0 };
    }
    return counter;
  } catch (error) {
    return { month: getCurrentMonth(), count: 0 };
  }
}

async function writeLocalCounter(counter: EmailCounter): Promise<void> {
  try {
    const fs = await import('fs/promises');
    await fs.mkdir('/tmp', { recursive: true });
    await fs.writeFile(COUNTER_FILE, JSON.stringify(counter, null, 2), 'utf-8');
  } catch (error) {
    console.error('[Lead API] Erro ao escrever contador local:', error);
  }
}

async function canSendEmail(): Promise<boolean> {
  try {
    // Tentar usar Vercel KV se disponível
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      try {
        // @ts-expect-error - @vercel/kv pode não estar instalado, mas o código trata isso
        const kvModule = await import('@vercel/kv').catch(() => null);
        if (kvModule && kvModule.kv) {
          const { kv } = kvModule;
          const currentMonth = getCurrentMonth();
          const key = `email-count-${currentMonth}`;
          const count = (await kv.get(key) as number | null) || 0;
          return count < RATE_LIMIT;
        }
      } catch (error) {
        console.warn('[Lead API] KV não disponível, usando fallback local:', error instanceof Error ? error.message : String(error));
      }
    }

    // Fallback: usar arquivo local
    try {
      const counter = await readLocalCounter();
      return counter.count < RATE_LIMIT;
    } catch (error) {
      console.warn('[Lead API] Erro ao ler contador local, permitindo envio:', error instanceof Error ? error.message : String(error));
      return true; // Fail-open
    }
  } catch (error) {
    console.error('[Lead API] Erro ao verificar rate limit:', error);
    return true; // Fail-open
  }
}

async function registerEmailSend(): Promise<void> {
  try {
    // Tentar usar Vercel KV se disponível
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      try {
        // @ts-expect-error - @vercel/kv pode não estar instalado, mas o código trata isso
        const kvModule = await import('@vercel/kv').catch(() => null);
        if (kvModule && kvModule.kv) {
          const { kv } = kvModule;
          const currentMonth = getCurrentMonth();
          const key = `email-count-${currentMonth}`;
          const count = (await kv.get(key) as number | null) || 0;
          await kv.set(key, count + 1, { ex: 60 * 60 * 24 * 32 }); // Expira em 32 dias
          return;
        }
      } catch (error) {
        console.warn('[Lead API] KV não disponível, usando fallback local:', error instanceof Error ? error.message : String(error));
      }
    }

    // Fallback: usar arquivo local
    try {
      const counter = await readLocalCounter();
      const newCounter: EmailCounter = {
        month: getCurrentMonth(),
        count: counter.month === getCurrentMonth() ? counter.count + 1 : 1,
      };
      await writeLocalCounter(newCounter);
    } catch (error) {
      console.warn('[Lead API] Erro ao escrever contador local (não crítico):', error instanceof Error ? error.message : String(error));
    }
  } catch (error) {
    console.error('[Lead API] Erro ao registrar envio (não crítico):', error);
  }
}
// ========== FIM RATE LIMITING ==========

// API key do Resend - usar variável de ambiente ou fallback
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_6WEoM8uW_ExoKjqHMM7zf5vwcqcF2sHsM';
const EMAIL_TO = process.env.LEAD_EMAIL || process.env.EMAIL_TO || 'linvex.software@gmail.com';
// Email remetente - usar variável de ambiente ou fallback para domínio verificado
const EMAIL_FROM = process.env.RESEND_FROM_EMAIL || 'noreply@limvex.com';
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

// Função para escapar HTML (prevenir XSS)
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Função para formatar email em HTML premium
function formatEmailHtml(payload: LeadPayload): string {
  const origemLabels: Record<string, string> = {
    'startup': 'Candidatura de Startup',
    'produtos': 'Contato - Produtos',
    'para-empresas': 'Contato - Para Empresas',
    'contato': 'Contato - Formulário de Contato',
    'home': 'Lead - Home (Análise de Projeto)',
  };

  const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const origemLabel = origemLabels[payload.origem] || payload.origem;

  // Função auxiliar para criar campos premium
  const createField = (label: string, value: string | undefined, icon?: string) => {
    if (!value) return '';
    return `
      <tr>
        <td style="padding: 12px 0; vertical-align: top;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 0; width: 200px;">
                <div style="display: inline-block; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #f8fafc; padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
                  ${icon ? `${icon} ` : ''}${escapeHtml(label)}
                </div>
              </td>
              <td style="padding: 0 0 0 16px; vertical-align: middle;">
                <div style="color: #0f172a; font-size: 15px; font-weight: 500; line-height: 1.5;">
                  ${escapeHtml(value)}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `;
  };

  // Função para criar seção de mensagem premium
  const createMessageSection = (title: string, content: string, icon: string) => {
    return `
      <tr>
        <td style="padding: 0 0 32px 0;">
          <div style="position: relative; background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);">
            <div style="display: flex; align-items: center; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 2px solid #e2e8f0;">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 20px;">
                ${icon}
              </div>
              <h3 style="margin: 0; color: #0f172a; font-size: 18px; font-weight: 700; letter-spacing: -0.5px;">
                ${escapeHtml(title)}
              </h3>
            </div>
            <div style="color: #475569; font-size: 15px; line-height: 1.7; white-space: pre-wrap; font-family: 'Georgia', 'Times New Roman', serif;">
              ${escapeHtml(content)}
            </div>
          </div>
        </td>
      </tr>
    `;
  };

  let html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo Lead - ${escapeHtml(origemLabel)}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%); background-attachment: fixed;">
  <!-- Background Pattern -->
  <div style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity: 0.03; background-image: radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0); background-size: 40px 40px; pointer-events: none;"></div>
  
  <table role="presentation" style="width: 100%; border-collapse: collapse; min-height: 100vh; padding: 40px 20px;">
    <tr>
      <td align="center" style="padding: 0;">
        <!-- Main Container -->
        <table role="presentation" style="width: 100%; max-width: 680px; border-collapse: collapse; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);">
          
          <!-- Premium Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%); padding: 0; position: relative; overflow: hidden;">
              <!-- Decorative Elements -->
              <div style="position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -30px; left: -30px; width: 150px; height: 150px; background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%); border-radius: 50%;"></div>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse; position: relative; z-index: 1;">
                <tr>
                  <td style="padding: 48px 40px 40px 40px; text-align: left;">
                    <!-- Badge -->
                    <div style="display: inline-block; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 8px 16px; border-radius: 8px; margin-bottom: 20px;">
                      <span style="color: #f8fafc; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">${escapeHtml(origemLabel)}</span>
                    </div>
                    <h1 style="margin: 0 0 12px 0; color: #ffffff; font-size: 36px; font-weight: 800; letter-spacing: -1px; line-height: 1.1; font-family: 'Georgia', 'Times New Roman', serif;">
                      Novo Lead Recebido
                    </h1>
                    <p style="margin: 0; color: #cbd5e1; font-size: 16px; font-weight: 400; line-height: 1.5;">
                      Uma nova oportunidade de negócio aguarda sua atenção
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content Section -->
          <tr>
            <td style="padding: 48px 40px; background: #ffffff;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                
                <!-- Dados Básicos Section -->
                <tr>
                  <td style="padding: 0 0 40px 0;">
                    <div style="display: flex; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 3px solid #0f172a;">
                      <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; font-size: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        📋
                      </div>
                      <h2 style="margin: 0; color: #0f172a; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; font-family: 'Georgia', 'Times New Roman', serif;">
                        Dados Básicos
                      </h2>
                    </div>
                    
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      ${createField('Nome', payload.nome, '👤')}
                      ${createField('Email', payload.email, '✉️')}
                      ${createField('Telefone', payload.telefone, '📞')}
                      ${createField('WhatsApp', payload.whatsapp, '💬')}
                      ${createField('Cargo', payload.cargo, '💼')}
                      ${createField('Empresa', payload.empresa, '🏢')}
                      ${createField('Segmento', payload.segmento, '🏷️')}
                      ${createField('Produto de interesse', payload.produto, '🎯')}
                      ${createField('Tipo de projeto', payload.tipoProjeto, '📊')}
                      ${createField('Objetivo do projeto', payload.objetivoProjeto, '🎯')}
                      ${createField('Faturamento', payload.faturamento, '💰')}
                    </table>
                  </td>
                </tr>

                ${payload.mensagem ? createMessageSection('Mensagem', payload.mensagem, '💬') : ''}
                ${payload.descricao ? createMessageSection('Descrição da Demanda', payload.descricao, '📝') : ''}

                ${payload.origem === 'startup' ? `
                <!-- Startup Section -->
                <tr>
                  <td style="padding: 0 0 40px 0;">
                    <div style="display: flex; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 3px solid #0f172a;">
                      <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; font-size: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        🚀
                      </div>
                      <h2 style="margin: 0; color: #0f172a; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; font-family: 'Georgia', 'Times New Roman', serif;">
                        Dados da Startup
                      </h2>
                    </div>
                    
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                      ${createField('Fundadores', payload.foundersNames, '👥')}
                      ${createField('Emails de contato', payload.contactEmails, '📧')}
                      ${createField('Telefones', payload.phones, '📱')}
                      ${createField('Links dos fundadores', payload.foundersLinks, '🔗')}
                      ${createField('Estágio atual', payload.currentStage, '📈')}
                    </table>
                    
                    ${payload.foundersBackground ? createMessageSection('Background dos Fundadores', payload.foundersBackground, '📚') : ''}
                    ${payload.ideaDescription ? createMessageSection('Descrição da Ideia', payload.ideaDescription, '💡') : ''}
                    ${payload.whyNow ? createMessageSection('Por que agora', payload.whyNow, '⏰') : ''}
                    ${payload.extraNotes ? createMessageSection('Observações adicionais', payload.extraNotes, '📝') : ''}
                  </td>
                </tr>
                ` : ''}

                <!-- Metadata Footer -->
                <tr>
                  <td style="padding: 32px 0 0 0; border-top: 2px solid #e2e8f0;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 16px 0 8px 0;">
                          <div style="display: inline-block; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 12px 20px; border-radius: 8px; border-left: 4px solid #0f172a;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                              <tr>
                                <td style="padding: 4px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Origem</td>
                                <td style="padding: 4px 0; color: #0f172a; font-size: 13px; font-weight: 700; text-align: right;">${escapeHtml(payload.origem)}</td>
                              </tr>
                              <tr>
                                <td style="padding: 4px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Data/Hora</td>
                                <td style="padding: 4px 0; color: #0f172a; font-size: 13px; font-weight: 700; text-align: right;">${escapeHtml(dataHora)}</td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Premium Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 32px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 0 12px 0;">
                    <div style="display: inline-block; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; padding: 10px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; letter-spacing: 0.5px;">
                      LINVEX
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 400; line-height: 1.6;">
                      Este é um e-mail automático do sistema de leads da Limvex<br>
                      <span style="color: #94a3b8;">Gerado em ${escapeHtml(dataHora)}</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  return html.trim();
}

// Função para formatar email em texto simples (fallback)
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
    console.log('[Lead API] ========== LEAD RECEIVED ==========');
    console.log('[Lead API] Payload:', JSON.stringify(payload, null, 2));
    console.log('[Lead API] RESEND_API_KEY:', RESEND_API_KEY ? `${RESEND_API_KEY.substring(0, 10)}...` : 'NÃO CONFIGURADA');
    console.log('[Lead API] RESEND_API_KEY length:', RESEND_API_KEY?.length || 0);
    console.log('[Lead API] EMAIL_TO:', EMAIL_TO);
    console.log('[Lead API] IS_DEV:', IS_DEV);
    console.log('[Lead API] VERCEL:', !!process.env.VERCEL);
    console.log('[Lead API] NODE_ENV:', process.env.NODE_ENV);

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
      console.error('[Lead API] ❌ RESEND_API_KEY inválida ou ausente');
      console.error('[Lead API] RESEND_API_KEY value:', RESEND_API_KEY ? 'EXISTS' : 'NULL/UNDEFINED');
      console.error('[Lead API] RESEND_API_KEY length:', RESEND_API_KEY?.length || 0);
      return res.status(500).json({
        ok: false,
        error: 'Configuração de e-mail inválida. Entre em contato com o suporte.',
      });
    }

    // Verificar se Resend foi inicializado
    if (!resend) {
      console.error('[Lead API] ❌ Resend não foi inicializado');
      return res.status(500).json({
        ok: false,
        error: 'Serviço de e-mail não disponível. Entre em contato com o suporte.',
      });
    }

    // Enviar e-mail via Resend
    console.log('[Lead API] ========== ENVIANDO EMAIL ==========');
    console.log('[Lead API] From:', EMAIL_FROM);
    console.log('[Lead API] To:', EMAIL_TO);
    console.log('[Lead API] Subject:', assunto);
    console.log('[Lead API] Body length:', corpoEmail.length);

    try {
      // Preparar dados do email
      const emailHtml = formatEmailHtml(payload);
      const emailData = {
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: assunto,
        html: emailHtml,
        text: corpoEmail, // Versão texto simples para clientes que não suportam HTML
      };

      console.log('[Lead API] Email data prepared:', {
        from: emailData.from,
        to: emailData.to,
        subject: emailData.subject,
        htmlLength: emailData.html.length,
        textLength: emailData.text.length,
      });

      // Tentar enviar email
      console.log('[Lead API] Calling resend.emails.send...');
      const result = await resend.emails.send(emailData);
      const { data, error } = result;
      
      console.log('[Lead API] Resend response received');
      console.log('[Lead API] Has data:', !!data);
      console.log('[Lead API] Has error:', !!error);

      if (error) {
        console.error('[Lead API] ❌ EMAIL SEND ERROR');
        console.error('[Lead API] Error type:', typeof error);
        console.error('[Lead API] Error:', JSON.stringify(error, null, 2));
        console.error('[Lead API] Error message:', error?.message || 'Sem mensagem');
        console.error('[Lead API] Error name:', error?.name || 'Sem nome');
        
        // Retornar erro mais detalhado
        return res.status(500).json({
          ok: false,
          error: error.message || 'Erro ao enviar e-mail. Verifique as configurações do servidor.',
          details: IS_DEV ? JSON.stringify(error, null, 2) : undefined,
          errorType: error?.name || 'UnknownError',
        });
      }

      console.log('[Lead API] ✅ EMAIL SENT SUCCESSFULLY');
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
      console.error('[Lead API] ❌ EXCEPTION ao enviar email');
      console.error('[Lead API] Exception type:', typeof sendError);
      console.error('[Lead API] Exception:', sendError);
      
      const errorDetails = sendError instanceof Error ? {
        message: sendError.message,
        stack: sendError.stack,
        name: sendError.name,
      } : String(sendError);

      console.error('[Lead API] Error details:', JSON.stringify(errorDetails, null, 2));

      return res.status(500).json({
        ok: false,
        error: sendError instanceof Error ? sendError.message : 'Erro inesperado ao enviar e-mail.',
        details: IS_DEV ? JSON.stringify(errorDetails, null, 2) : undefined,
        errorType: sendError instanceof Error ? sendError.name : 'UnknownException',
      });
    }
  } catch (error) {
    console.error('[Lead API] ❌❌❌ ERRO INESPERADO NO HANDLER ❌❌❌');
    console.error('[Lead API] Error type:', typeof error);
    console.error('[Lead API] Error:', error);
    
    const errorDetails = error instanceof Error ? {
      message: error.message,
      stack: error.stack,
      name: error.name,
    } : String(error);

    console.error('[Lead API] Error details:', JSON.stringify(errorDetails, null, 2));
    console.error('[Lead API] Environment check:', {
      hasResendKey: !!RESEND_API_KEY,
      resendKeyLength: RESEND_API_KEY?.length || 0,
      emailTo: EMAIL_TO,
      isDev: IS_DEV,
      vercel: !!process.env.VERCEL,
      nodeEnv: process.env.NODE_ENV,
    });

    return res.status(500).json({
      ok: false,
      error: 'Erro interno ao processar o formulário.',
      details: IS_DEV ? JSON.stringify(errorDetails, null, 2) : undefined,
      errorType: error instanceof Error ? error.name : 'UnknownHandlerError',
    });
  }
}

