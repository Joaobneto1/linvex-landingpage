import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

interface ReferralPayload {
  sdr_slug: string;
  cliente_nome: string;
  cliente_email: string;
  cliente_telefone?: string;
  mensagem?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Método não permitido. Use POST.' });
  }

  // Validar configuração do Supabase
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('[Referral API] Supabase não configurado');
    return res.status(500).json({ ok: false, error: 'Configuração do servidor inválida.' });
  }

  try {
    // Parse do body
    let payload: ReferralPayload;
    try {
      if (typeof req.body === 'string') {
        payload = JSON.parse(req.body);
      } else if (req.body && typeof req.body === 'object') {
        payload = req.body as ReferralPayload;
      } else {
        return res.status(400).json({ ok: false, error: 'Body inválido ou ausente.' });
      }
    } catch {
      return res.status(400).json({ ok: false, error: 'JSON malformado.' });
    }

    // Validações básicas
    const { sdr_slug, cliente_nome, cliente_email, cliente_telefone, mensagem } = payload;

    if (!sdr_slug || !cliente_nome || !cliente_email) {
      return res.status(400).json({
        ok: false,
        error: 'Campos obrigatórios: sdr_slug, cliente_nome, cliente_email.',
      });
    }

    if (cliente_nome.trim().length < 3) {
      return res.status(400).json({ ok: false, error: 'Nome deve ter no mínimo 3 caracteres.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cliente_email)) {
      return res.status(400).json({ ok: false, error: 'E-mail inválido.' });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Buscar SDR pelo slug
    console.log(`[Referral API] Buscando SDR com slug: ${sdr_slug}`);
    const { data: sdr, error: sdrError } = await supabase
      .from('sdrs')
      .select('id, nome, slug, ativo')
      .eq('slug', sdr_slug)
      .single();

    if (sdrError || !sdr) {
      console.warn(`[Referral API] SDR não encontrado: ${sdr_slug}`);
      return res.status(404).json({ ok: false, error: 'SDR não encontrado.' });
    }

    if (!sdr.ativo) {
      console.warn(`[Referral API] SDR inativo: ${sdr_slug}`);
      return res.status(404).json({ ok: false, error: 'SDR não encontrado.' });
    }

    // Inserir referral
    console.log(`[Referral API] Inserindo referral para SDR: ${sdr.nome} (${sdr.id})`);
    const { data: referral, error: insertError } = await supabase
      .from('referrals')
      .insert({
        sdr_id: sdr.id,
        sdr_slug: sdr.slug,
        cliente_nome: cliente_nome.trim(),
        cliente_email: cliente_email.trim().toLowerCase(),
        cliente_telefone: cliente_telefone?.trim() || null,
        mensagem: mensagem?.trim() || null,
      })
      .select('id')
      .single();

    if (insertError) {
      console.error('[Referral API] Erro ao inserir referral:', insertError);
      return res.status(500).json({ ok: false, error: 'Erro ao salvar referral.' });
    }

    console.log(`[Referral API] ✅ Referral salvo com sucesso. ID: ${referral?.id}`);
    return res.status(200).json({ ok: true, referral_id: referral?.id });
  } catch (error) {
    console.error('[Referral API] Erro inesperado:', error);
    return res.status(500).json({ ok: false, error: 'Erro interno ao processar a requisição.' });
  }
}
