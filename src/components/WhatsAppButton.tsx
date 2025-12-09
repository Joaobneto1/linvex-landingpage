import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5582991709740"; // Número no formato internacional
  const message = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm border border-white/20"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-smooth" />
      <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};
