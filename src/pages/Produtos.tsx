import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { DarkSection } from "@/components/ui/DarkSection";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  ShoppingCart,
  CheckCircle2,
  ArrowLeft,
  Menu,
  X,
  Download,
  FileText,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import limvexSG from "@/assets/limvexLogoBg.png";

// Header customizado estilo Arauc (igual ao /para-empresas)
const ProdutosHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D111B] border-b border-white/10">
      <div className="container-custom max-w-[1200px]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-4">
            {/* Botão Voltar - estilo Arauc */}
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#0D111B] hover:bg-white/5 transition-all duration-200 text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar</span>
            </Link>

            {/* Logo com borda suave estilo Arauc */}
            <Link to="/" className="flex items-center">
              <img
                src={limvexSG}
                alt="Limvex Software Group"
                className="h-8 lg:h-10 w-auto border border-white/10 rounded-xl px-3 py-2 bg-[#0D111B]"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

// Dados do produto LVX Commerce
const product = {
  id: 1,
  icon: ShoppingCart,
  title: "LVX Commerce",
  description: "Plataforma completa de e-commerce white-label para você lançar sua loja virtual com a sua marca.",
  price: "CONSULTAR",
  features: [
    "Multi-tenant",
    "White-label",
    "Gateway de pagamento integrado",
    "Gestão de produtos e estoque",
    "Dashboard administrativo completo",
  ],
  hasManual: true,
  hasInstaller: true,
  websiteUrl: "https://commerce.limvex.com",
};

// Formulário de contato no modal
const ContactFormModal = ({
  open,
  onOpenChange,
  productTitle,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productTitle?: string;
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    empresa: "",
    telefone: "",
    cargo: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome || !formData.email || !formData.empresa) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos nome, email e empresa.",
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
          nome: `${formData.nome} ${formData.sobrenome}`.trim(),
          email: formData.email,
          empresa: formData.empresa,
          telefone: formData.telefone,
          cargo: formData.cargo,
          mensagem: formData.mensagem,
          origem: 'produtos',
          produto: productTitle,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Erro ao enviar formulário');
      }

      // Toast de sucesso
      toast({
        title: "Enviado com sucesso!",
        description: "Recebemos seus dados, entraremos em contato em breve.",
      });

      // Limpar formulário
      setFormData({
        nome: "",
        sobrenome: "",
        email: "",
        empresa: "",
        telefone: "",
        cargo: "",
        mensagem: "",
      });

      // Fechar modal
      onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0F141C] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-white">
            Fale com um especialista
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Preencha o formulário abaixo e entraremos em contato em breve
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-white text-sm font-medium">
                Nome *
              </Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sobrenome" className="text-white text-sm font-medium">
                Sobrenome
              </Label>
              <Input
                id="sobrenome"
                value={formData.sobrenome}
                onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
                className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-white text-sm font-medium">
                Empresa *
              </Label>
              <Input
                id="empresa"
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-white text-sm font-medium">
                Telefone
              </Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cargo" className="text-white text-sm font-medium">
                Cargo
              </Label>
              <Input
                id="cargo"
                value={formData.cargo}
                onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem" className="text-white text-sm font-medium">
              Mensagem / Dúvidas
            </Label>
            <Textarea
              id="mensagem"
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
              placeholder="Descreva sua necessidade ou dúvida..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 rounded-full border-white/20 text-white hover:bg-white/10"
            >
              Voltar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default function Produtos() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsModalOpen(true);
  };

  const Icon = product.icon;

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#0D111B" }}>
      <ProdutosHeader />

      <main className="text-white pt-20 relative z-10">
        {/* Hero minimalista - estilo Arauc */}
        <DarkSection spacing="md" variant="default">
          <div className="max-w-5xl mx-auto text-center py-16 md:py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 text-white">
              Nossos Produtos
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Soluções prontas e customizáveis para você lançar rápido com a sua marca.
            </p>
          </div>
        </DarkSection>

        {/* Card de Produto - LVX Commerce estilo Arauc */}
        <DarkSection spacing="md" variant="default">
          <div className="max-w-4xl mx-auto">
            <div className="group relative rounded-2xl border border-white/10 bg-[#10141F] hover:bg-[#0F141C] transition-all duration-300 p-8 hover:border-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              {/* Ícone grande azul */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                </div>
              </div>

              {/* Nome do produto */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                {product.title}
              </h3>

              {/* Descrição */}
              <p className="text-base text-gray-400 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Preço */}
              <div className="mb-6 pb-6 border-b border-white/5">
                <p className="text-sm text-gray-500">
                  A partir de <span className="text-white font-semibold">{product.price}</span>
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botões */}
              <div className="space-y-3">
                {product.hasManual && (
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-white/10 text-white hover:bg-white/10"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Manual de uso
                  </Button>
                )}
                {product.hasInstaller && (
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-white/10 text-white hover:bg-white/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar instalador
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-white/10 text-white hover:bg-white/10"
                >
                  <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ir para o site
                  </a>
                </Button>
                <Button
                  onClick={() => handleContactClick(product.title)}
                  className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                >
                  Saiba mais / Contratar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </DarkSection>

        {/* Seção CTA Gradient - estilo Arauc */}
        <DarkSection spacing="md" variant="default">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
                Quer conhecer mais sobre nossos produtos?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-medium max-w-2xl mx-auto">
                Entre em contato e descubra qual produto white-label é ideal para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 font-bold bg-white text-blue-600 hover:bg-white/90"
                >
                  <Link to="/para-empresas">
                    Para Empresas
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 font-bold border-2 border-white text-white hover:bg-white/10"
                >
                  <Link to="/para-novos-negocios">
                    Novos Negócios
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </DarkSection>
      </main>

      {/* Footer com fundo escuro */}
      <div style={{ backgroundColor: "#0D111B" }} className="relative z-10">
        <Footer />
      </div>

      {/* Modal de Contato */}
      <ContactFormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        productTitle={selectedProduct || undefined}
      />
    </div>
  );
}
