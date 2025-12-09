import type { StartupApplication } from "@/types/startupApplication";

/**
 * Envia uma candidatura de startup para processamento.
 *
 * ATENÇÃO: Atualmente, esta função apenas registra os dados no console do navegador.
 * Os dados NÃO estão sendo enviados para nenhum servidor externo.
 *
 * Para integrar com backend no futuro:
 * 1. Substitua o console.log por uma chamada fetch para seu endpoint:
 *    await fetch('/api/startup-application', {
 *      method: 'POST',
 *      headers: { 'Content-Type': 'application/json' },
 *      body: JSON.stringify(data),
 *    });
 *
 * 2. Ou integre com serviços de formulário como Formspark, Formspree, etc.
 *
 * 3. Ou envie para um serviço de e-mail/CRM.
 */
export async function sendStartupApplication(data: StartupApplication) {
  // Por enquanto: apenas logar e simular envio
  console.log("[StartupApplication] Nova candidatura recebida:", data);
  console.log("[StartupApplication] Dados formatados:", JSON.stringify(data, null, 2));

  // Simular delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // TODO: Aqui no futuro integrar com backend, CRM, formulário externo ou e-mail
  // Exemplo de integração futura:
  // try {
  //   const response = await fetch("/api/startup-application", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   if (!response.ok) throw new Error("Erro ao enviar candidatura");
  //   return { ok: true };
  // } catch (error) {
  //   console.error("[StartupApplication] Erro:", error);
  //   throw error;
  // }

  return { ok: true };
}

