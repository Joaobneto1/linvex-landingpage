import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  email: z.string().email("E-mail inválido"),
  empresa: z.string().min(2, "Empresa deve ter pelo menos 2 caracteres"),
  cargo: z.string().min(2, "Cargo deve ter pelo menos 2 caracteres"),
  tipoProjeto: z.string().min(1, "Selecione o tipo de projeto"),
  objetivoProjeto: z.string().min(10, "Objetivo deve ter pelo menos 10 caracteres"),
  faturamento: z.string().min(1, "Selecione o faturamento"),
});

type FormData = z.infer<typeof formSchema>;

export function FormularioSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const tipoProjeto = watch("tipoProjeto");
  const faturamento = watch("faturamento");

  const formatWhatsAppMessage = (data: FormData): string => {
    const tipoProjetoLabels: Record<string, string> = {
      saas: "Plataforma SaaS",
      custom: "Software sob medida",
      ecommerce: "E-commerce",
      mobile: "Aplicativo mobile",
      integracao: "Integração de sistemas",
      outro: "Outro",
    };

    const faturamentoLabels: Record<string, string> = {
      "ate-100k": "Até R$ 100k/ano",
      "100k-500k": "R$ 100k - R$ 500k/ano",
      "500k-1m": "R$ 500k - R$ 1M/ano",
      "1m-5m": "R$ 1M - R$ 5M/ano",
      "acima-5m": "Acima de R$ 5M/ano",
    };

    let message = "Olá! Gostaria de solicitar uma análise do meu projeto.\n\n";
    message += "📋 *DADOS DO CONTATO*\n";
    message += `Nome: ${data.nome}\n`;
    message += `Empresa: ${data.empresa}\n`;
    message += `Cargo: ${data.cargo}\n`;
    message += `WhatsApp: ${data.whatsapp}\n`;
    message += `E-mail: ${data.email}\n\n`;
    message += "🚀 *DETALHES DO PROJETO*\n";
    message += `Tipo: ${tipoProjetoLabels[data.tipoProjeto] || data.tipoProjeto}\n`;
    message += `Faturamento: ${faturamentoLabels[data.faturamento] || data.faturamento}\n\n`;
    message += `💡 *OBJETIVO*\n${data.objetivoProjeto}\n\n`;
    message += "Aguardo retorno para conversarmos sobre o projeto!";

    return message;
  };

  const openWhatsAppFallback = (data: FormData) => {
    const phoneNumber = "5582991709740";
    const message = formatWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    let timeoutId: NodeJS.Timeout | null = null;

    try {
      const payload = {
        ...data,
        origem: "home" as const,
        telefone: data.whatsapp,
      };

      const controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos de timeout

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Erro ao enviar formulário");
      }

      toast.success("Formulário enviado com sucesso!");
      navigate("/obrigado");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);

      // Fallback para WhatsApp em caso de erro
      toast.warning(
        "Não foi possível enviar o formulário. Redirecionando para WhatsApp...",
        { duration: 3000 }
      );

      // Pequeno delay para o usuário ver a mensagem
      setTimeout(() => {
        openWhatsAppFallback(data);
        toast.info(
          "Você será direcionado para o WhatsApp. Por favor, envie a mensagem que será aberta.",
          { duration: 5000 }
        );
      }, 500);
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-center text-white tracking-tight">
          Solicitar análise do projeto
        </h2>
        <p className="text-center text-white/70 mb-16 text-lg leading-relaxed">
          Preencha os dados abaixo e nossa equipe entrará em contato em breve
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-white">
                Nome completo *
              </Label>
              <Input
                id="nome"
                {...register("nome")}
                className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 hover:border-white/25 focus:border-[#0076CE] rounded-lg transition-all duration-200"
                placeholder="Seu nome completo"
              />
              {errors.nome && (
                <p className="text-sm text-red-400">{errors.nome.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-white">
                WhatsApp *
              </Label>
              <Input
                id="whatsapp"
                {...register("whatsapp")}
                className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 hover:border-white/25 focus:border-[#0076CE] rounded-lg transition-all duration-200"
                placeholder="(11) 99999-9999"
              />
              {errors.whatsapp && (
                <p className="text-sm text-red-400">{errors.whatsapp.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 hover:border-white/25 focus:border-[#0076CE] rounded-lg transition-all duration-200"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-white">
                Empresa *
              </Label>
              <Input
                id="empresa"
                {...register("empresa")}
                className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 hover:border-white/25 focus:border-[#0076CE] rounded-lg transition-all duration-200"
                placeholder="Nome da empresa"
              />
              {errors.empresa && (
                <p className="text-sm text-red-400">{errors.empresa.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="cargo" className="text-white">
                Cargo *
              </Label>
              <Input
                id="cargo"
                {...register("cargo")}
                className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 hover:border-white/25 focus:border-[#0076CE] rounded-lg transition-all duration-200"
                placeholder="Seu cargo"
              />
              {errors.cargo && (
                <p className="text-sm text-red-400">{errors.cargo.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipoProjeto" className="text-white">
                Tipo de projeto *
              </Label>
              <Select
                value={tipoProjeto}
                onValueChange={(value) => setValue("tipoProjeto", value)}
              >
                <SelectTrigger className="bg-white/[0.05] border-white/[0.15] text-white hover:border-white/25 focus:border-[#0076CE] rounded-lg transition-all duration-200">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-[#000920] border-white/[0.15] rounded-lg">
                  <SelectItem value="saas">Plataforma SaaS</SelectItem>
                  <SelectItem value="custom">Software sob medida</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="mobile">Aplicativo mobile</SelectItem>
                  <SelectItem value="integracao">Integração de sistemas</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              {errors.tipoProjeto && (
                <p className="text-sm text-red-400">{errors.tipoProjeto.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="objetivoProjeto" className="text-white">
              Objetivo do projeto *
            </Label>
              <Textarea
                id="objetivoProjeto"
                {...register("objetivoProjeto")}
                className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 hover:border-white/25 focus:border-[#0076CE] rounded-lg transition-all duration-200 min-h-[120px]"
                placeholder="Descreva o objetivo principal do projeto..."
              />
            {errors.objetivoProjeto && (
              <p className="text-sm text-red-400">{errors.objetivoProjeto.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="faturamento" className="text-white">
              Faturamento *
            </Label>
            <Select
              value={faturamento}
              onValueChange={(value) => setValue("faturamento", value)}
            >
              <SelectTrigger className="bg-white/[0.05] border-white/[0.15] text-white hover:border-white/25 focus:border-[#0076CE] rounded-lg transition-all duration-200">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="bg-[#000920] border-white/[0.15] rounded-lg">
                <SelectItem value="ate-100k">Até R$ 100k/ano</SelectItem>
                <SelectItem value="100k-500k">R$ 100k - R$ 500k/ano</SelectItem>
                <SelectItem value="500k-1m">R$ 500k - R$ 1M/ano</SelectItem>
                <SelectItem value="1m-5m">R$ 1M - R$ 5M/ano</SelectItem>
                <SelectItem value="acima-5m">Acima de R$ 5M/ano</SelectItem>
              </SelectContent>
            </Select>
            {errors.faturamento && (
              <p className="text-sm text-red-400">{errors.faturamento.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0076CE] hover:bg-[#0099FF] hover:shadow-[0_0_20px_rgba(0,118,206,0.4)] text-white text-lg py-7 h-auto font-semibold transition-all duration-200 rounded-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              "Solicitar análise do projeto"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
