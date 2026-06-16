import { Resend } from "resend";

// Lógica compartilhada entre o endpoint serverless (api/contact.ts) e o
// middleware de desenvolvimento do Vite. Validação + envio via Resend.

export interface ContactResult {
  status: number;
  body: { message: string };
}

interface ContactData {
  nome?: string;
  empresa?: string;
  segmento?: string;
  email?: string;
  whatsapp?: string;
  mensagem?: string;
}

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function handleContact(raw: unknown): Promise<ContactResult> {
  const data = (raw ?? {}) as ContactData;

  const nome = clean(data.nome);
  const empresa = clean(data.empresa);
  const segmento = clean(data.segmento);
  const email = clean(data.email);
  const whatsapp = clean(data.whatsapp);
  const whatsappDigits = whatsapp.replace(/\D/g, "");
  const mensagem = clean(data.mensagem);

  // Validação dos campos obrigatórios (revalidado no servidor, não só no front).
  const faltando: string[] = [];
  if (nome.length < 2) faltando.push("nome");
  if (empresa.length < 2) faltando.push("empresa");
  if (segmento.length < 1) faltando.push("segmento");
  if (!EMAIL_RE.test(email)) faltando.push("e-mail válido");
  if (whatsappDigits.length < 10) faltando.push("WhatsApp");

  if (faltando.length > 0) {
    return {
      status: 400,
      body: {
        message: `Preencha os campos obrigatórios: ${faltando.join(", ")}.`,
      },
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  // ---- Degradação graciosa ----
  // Sem chave da Resend (ou sem destinatário), não quebramos: registramos a
  // solicitação no log do servidor e confirmamos o recebimento ao usuário.
  // TODO: cole RESEND_API_KEY e CONTACT_TO_EMAIL no .env para ativar o envio.
  if (!apiKey || !to) {
    // Indica QUAL variável falta, sem nunca imprimir o valor da chave.
    const ausentes = [
      !apiKey && "RESEND_API_KEY",
      !to && "CONTACT_TO_EMAIL",
    ].filter(Boolean);
    console.info(
      `[contato] Envio desativado (faltando: ${ausentes.join(
        ", "
      )}). Solicitação recebida:`,
      { nome, empresa, segmento, email, whatsapp, mensagem }
    );
    return {
      status: 200,
      body: { message: "Recebemos sua solicitação." },
    };
  }

  try {
    const resend = new Resend(apiKey);

    const linhas = [
      `Nome:     ${nome}`,
      `Empresa:  ${empresa}`,
      `Segmento: ${segmento}`,
      `E-mail:   ${email}`,
      `WhatsApp: ${whatsapp}`,
      "",
      "Mensagem:",
      mensagem || "(sem mensagem)",
    ].join("\n");

    const html = `
      <div style="font-family:Geist,Arial,sans-serif;color:#0A0A0A;line-height:1.6">
        <h2 style="margin:0 0 16px;font-size:18px">Nova solicitação de análise</h2>
        <table style="border-collapse:collapse;font-size:14px">
          <tr><td style="padding:4px 16px 4px 0;color:#6E685E">Nome</td><td><strong>${escapeHtml(nome)}</strong></td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#6E685E">Empresa</td><td><strong>${escapeHtml(empresa)}</strong></td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#6E685E">Segmento</td><td>${escapeHtml(segmento)}</td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#6E685E">E-mail</td><td><a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#6E685E">WhatsApp</td><td><a href="https://wa.me/${whatsappDigits}">${escapeHtml(whatsapp)}</a></td></tr>
        </table>
        <p style="margin:16px 0 4px;color:#6E685E;font-size:14px">Mensagem</p>
        <p style="margin:0;font-size:14px;white-space:pre-wrap">${
          mensagem ? escapeHtml(mensagem) : "(sem mensagem)"
        }</p>
      </div>`;

    const { error } = await resend.emails.send({
      // TODO(remetente): troque por um e-mail do domínio verificado na Resend,
      // ex.: "Limvex <contato@limvex.com>". 'onboarding@resend.dev' só entrega
      // para o e-mail dono da conta Resend.
      from: "Limvex <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Nova solicitação de análise — ${nome} / ${empresa}`,
      text: linhas,
      html,
    });

    if (error) {
      console.error("[contato] Erro da Resend:", error);
      return { status: 502, body: { message: "Falha ao enviar." } };
    }

    return { status: 200, body: { message: "Recebemos sua solicitação." } };
  } catch (err) {
    console.error("[contato] Exceção ao enviar:", err);
    return { status: 502, body: { message: "Falha ao enviar." } };
  }
}
