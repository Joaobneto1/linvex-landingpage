import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { useState } from "react";

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

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos nome e email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          empresa: formData.empresa,
          telefone: formData.telefone,
          mensagem: formData.mensagem,
          origem: 'contato',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Erro ao enviar formulário');
      }

      // Toast de sucesso
      toast({
        title: "Enviado com sucesso!",
        description: "Recebemos sua solicitação, entraremos em contato em breve.",
      });

      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        empresa: "",
        telefone: "",
        mensagem: "",
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar formulário",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nome" className="text-sm font-medium">
            Nome *
          </Label>
          <Input
            id="nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="h-11"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            E-mail *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-11"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-sm font-medium">
            Empresa
          </Label>
          <Input
            id="empresa"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone" className="text-sm font-medium">
            Telefone
          </Label>
          <Input
            id="telefone"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="h-11"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensagem" className="text-sm font-medium">
          Mensagem
        </Label>
        <Textarea
          id="mensagem"
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          className="min-h-[120px]"
          placeholder="Descreva sua necessidade ou projeto..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Enviar solicitação
          </>
        )}
      </Button>
    </form>
  );
};

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
            <ContactForm />
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Ou use nosso formulário alternativo:
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                asChild
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlt5xmZTrRc5bKVbCJz_acpXr_9YK1sTr2ooUWS09tMx8A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Abrir formulário do Google
                </a>
              </Button>
            </div>
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

