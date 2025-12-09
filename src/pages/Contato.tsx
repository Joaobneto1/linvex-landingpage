import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Fale conosco diretamente pelo WhatsApp",
    action: "Abrir conversa",
    href: "https://wa.me/5582991709740",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Envie sua mensagem por e-mail",
    action: "Enviar e-mail",
    href: "mailto:linvex.software@gmail.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    description: "Ligue para nós",
    action: "Ligar agora",
    href: "tel:+5582991709740",
  },
];

export default function Contato() {
  return (
    <div className="min-h-screen pt-20">
      <Section spacing="xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
            Estamos prontos para transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <FeatureCard
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
            >
              <Button
                className="w-full mt-4"
                variant="outline"
                asChild
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  {method.action}
                </a>
              </Button>
            </FeatureCard>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">Solicitar Orçamento</h2>
            <p className="text-muted-foreground mb-6">
              Preencha nosso formulário e receba uma proposta personalizada em até 48 horas.
            </p>
            <Button
              size="lg"
              className="w-full"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlt5xmZTrRc5bKVbCJz_acpXr_9YK1sTr2ooUWS09tMx8A/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-4 h-4 mr-2" />
                Abrir formulário
              </a>
            </Button>
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-4 h-4" />
              <span>Brasil</span>
            </div>
            <p className="text-sm">CNPJ: 63.385.399/0001-96</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

