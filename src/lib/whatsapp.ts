/**
 * Função central para gerar links do WhatsApp com mensagens pré-formatadas
 */

export type WhatsAppContext =
  | "hero"
  | "para-quem"
  | "solucao"
  | "como-funciona"
  | "diferenciais"
  | "chamada-final"
  | "faq"
  | "problema";

const WHATSAPP_NUMBER = "5582991709740";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

const MESSAGES: Record<WhatsAppContext, string> = {
  hero: "Olá! Vi o site da LIMVEX e gostaria de falar com um especialista sobre um projeto.",
  "para-quem": "Olá! Quero entender se a LIMVEX faz sentido para o meu tipo de negócio.",
  solucao: "Olá! Tenho interesse em desenvolver um SaaS e gostaria de entender como a LIMVEX pode ajudar.",
  "como-funciona": "Olá! Gostaria de conversar sobre meu projeto e entender os próximos passos.",
  diferenciais: "Olá! Me interessei pelos diferenciais da LIMVEX e gostaria de conversar.",
  "chamada-final": "Olá! Quero iniciar uma conversa agora sobre um projeto com a LIMVEX.",
  faq: "Olá! Tenho algumas dúvidas sobre a LIMVEX e gostaria de conversar com um especialista.",
  problema: "Olá! Estou enfrentando alguns desafios no desenvolvimento de software e gostaria de entender como a LIMVEX pode ajudar.",
};

/**
 * Gera link do WhatsApp com mensagem pré-formatada baseada no contexto
 */
export function getWhatsAppLink(context: WhatsAppContext): string {
  const message = MESSAGES[context];
  return `${WHATSAPP_BASE_URL}${encodeURIComponent(message)}`;
}
