/**
 * Sistema de rate limit para envio de e-mails
 * Limite: 3.000 e-mails por mês
 *
 * Usa Vercel KV se disponível, caso contrário usa arquivo JSON local em /tmp
 */

interface EmailCounter {
  month: string; // formato: YYYY-MM
  count: number;
}

const RATE_LIMIT = 3000;
const COUNTER_FILE = '/tmp/email-counter.json';

/**
 * Obtém o mês atual no formato YYYY-MM
 */
function getCurrentMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

/**
 * Lê o contador do arquivo local (fallback)
 */
async function readLocalCounter(): Promise<EmailCounter> {
  try {
    const fs = await import('fs/promises');
    const data = await fs.readFile(COUNTER_FILE, 'utf-8');
    const counter: EmailCounter = JSON.parse(data);

    // Se o mês mudou, resetar o contador
    if (counter.month !== getCurrentMonth()) {
      return { month: getCurrentMonth(), count: 0 };
    }

    return counter;
  } catch (error) {
    // Arquivo não existe ou erro ao ler, retornar contador zerado
    return { month: getCurrentMonth(), count: 0 };
  }
}

/**
 * Escreve o contador no arquivo local (fallback)
 */
async function writeLocalCounter(counter: EmailCounter): Promise<void> {
  try {
    const fs = await import('fs/promises');
    await fs.mkdir('/tmp', { recursive: true });
    await fs.writeFile(COUNTER_FILE, JSON.stringify(counter, null, 2), 'utf-8');
  } catch (error) {
    console.error('[EmailRateLimit] Erro ao escrever contador local:', error);
  }
}

/**
 * Verifica se pode enviar e-mail (não atingiu o limite)
 */
export async function canSendEmail(): Promise<boolean> {
  try {
    // Tentar usar Vercel KV se disponível
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      try {
        const { kv } = await import('@vercel/kv');
        const currentMonth = getCurrentMonth();
        const key = `email-count-${currentMonth}`;
        const count = await kv.get<number>(key) || 0;
        return count < RATE_LIMIT;
      } catch (error) {
        console.warn('[EmailRateLimit] KV não disponível, usando fallback local');
      }
    }

    // Fallback: usar arquivo local
    const counter = await readLocalCounter();
    return counter.count < RATE_LIMIT;
  } catch (error) {
    console.error('[EmailRateLimit] Erro ao verificar rate limit:', error);
    // Em caso de erro, permitir envio (fail-open)
    return true;
  }
}

/**
 * Registra o envio de um e-mail (incrementa contador)
 */
export async function registerEmailSend(): Promise<void> {
  try {
    // Tentar usar Vercel KV se disponível
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      try {
        const { kv } = await import('@vercel/kv');
        const currentMonth = getCurrentMonth();
        const key = `email-count-${currentMonth}`;
        const count = await kv.get<number>(key) || 0;
        await kv.set(key, count + 1, { ex: 60 * 60 * 24 * 32 }); // Expira em 32 dias
        return;
      } catch (error) {
        console.warn('[EmailRateLimit] KV não disponível, usando fallback local');
      }
    }

    // Fallback: usar arquivo local
    const counter = await readLocalCounter();
    const newCounter: EmailCounter = {
      month: getCurrentMonth(),
      count: counter.month === getCurrentMonth() ? counter.count + 1 : 1,
    };
    await writeLocalCounter(newCounter);
  } catch (error) {
    console.error('[EmailRateLimit] Erro ao registrar envio:', error);
  }
}

/**
 * Obtém o contador mensal atual
 */
export async function getMonthlyCount(): Promise<number> {
  try {
    // Tentar usar Vercel KV se disponível
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      try {
        const { kv } = await import('@vercel/kv');
        const currentMonth = getCurrentMonth();
        const key = `email-count-${currentMonth}`;
        const count = await kv.get<number>(key) || 0;
        return count;
      } catch (error) {
        console.warn('[EmailRateLimit] KV não disponível, usando fallback local');
      }
    }

    // Fallback: usar arquivo local
    const counter = await readLocalCounter();
    return counter.count;
  } catch (error) {
    console.error('[EmailRateLimit] Erro ao obter contador:', error);
    return 0;
  }
}

