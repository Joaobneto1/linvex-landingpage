import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

function formatPhone(value: string): string {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  if (cleaned.length <= 11) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
}

const schema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().refine((v) => v.replace(/\D/g, "").length >= 10, "Telefone inválido"),
  faturamento: z.string().min(1, "Selecione o faturamento anual"),
  segmento: z.string().min(1, "Selecione o segmento"),
  solucao: z.string().min(1, "Selecione como podemos ajudar"),
});

type FormValues = z.infer<typeof schema>;

export default function Contato() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone.replace(/\D/g, ""),
        faturamento: data.faturamento,
        segmento: data.segmento,
        tipoProjeto: data.solucao,
        origem: "contato" as const,
      };

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result.ok === false) {
        throw new Error(result.error || "Erro ao enviar formulário");
      }

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Formulário de Contato",
          content_category: data.solucao,
        });
      }

      setIsComplete(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Mensagem enviada!</h1>
          <p className="text-white/70 mb-8 leading-relaxed">
            Obrigado pelo contato! Em breve um dos nossos especialistas entrará em contato.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-lg shadow-[#0076CE]/30"
          >
            Voltar ao site
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#030014]/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="relative w-full px-4 sm:px-8 py-4 flex items-center justify-center min-h-[64px]">
          <div className="absolute left-4 sm:left-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white/70 hover:text-white hover:bg-white/10 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
          <span
            className="text-xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            LIMVEX
          </span>
        </div>
      </header>

      {/* Form */}
      <main className="flex-1 container mx-auto max-w-xl px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Fale com um especialista
            </h1>
            <p className="text-white/60 text-sm sm:text-base">
              Preencha o formulário e entraremos em contato em até 24 horas úteis.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Nome */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/80">Nome *</label>
              <Input
                {...register("nome")}
                placeholder="Seu nome completo"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20"
              />
              {errors.nome && (
                <p className="text-red-400 text-xs">{errors.nome.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/80">E-mail *</label>
              <Input
                {...register("email")}
                type="email"
                placeholder="seu@email.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Telefone */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/80">Telefone *</label>
              <Input
                value={formatPhone(watch("telefone") ?? "")}
                onChange={(e) =>
                  setValue("telefone", e.target.value.replace(/\D/g, "").slice(0, 11), {
                    shouldValidate: true,
                  })
                }
                type="tel"
                placeholder="(11) 99999-9999"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20"
              />
              {errors.telefone && (
                <p className="text-red-400 text-xs">{errors.telefone.message}</p>
              )}
            </div>

            {/* Faturamento anual */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/80">Faturamento anual *</label>
              <Controller
                control={control}
                name="faturamento"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20 data-[placeholder]:text-white/30">
                      <SelectValue placeholder="Selecione uma faixa" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a1a] border-white/10 text-white">
                      <SelectItem value="ate-1m" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Até R$ 1 milhão</SelectItem>
                      <SelectItem value="1m-5m" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">R$ 1M – R$ 5M</SelectItem>
                      <SelectItem value="5m-20m" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">R$ 5M – R$ 20M</SelectItem>
                      <SelectItem value="20m-100m" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">R$ 20M – R$ 100M</SelectItem>
                      <SelectItem value="acima-100m" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Acima de R$ 100M</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.faturamento && (
                <p className="text-red-400 text-xs">{errors.faturamento.message}</p>
              )}
            </div>

            {/* Segmento */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/80">Segmento *</label>
              <Controller
                control={control}
                name="segmento"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20 data-[placeholder]:text-white/30">
                      <SelectValue placeholder="Selecione seu segmento" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a1a] border-white/10 text-white">
                      <SelectItem value="varejo-ecommerce" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Varejo / E-commerce</SelectItem>
                      <SelectItem value="governo-setor-publico" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Governo / Setor público</SelectItem>
                      <SelectItem value="industria" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Indústria / Manufatura</SelectItem>
                      <SelectItem value="servicos-financeiros" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Serviços financeiros</SelectItem>
                      <SelectItem value="saude" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Saúde</SelectItem>
                      <SelectItem value="tecnologia" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Tecnologia / TI</SelectItem>
                      <SelectItem value="outro" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.segmento && (
                <p className="text-red-400 text-xs">{errors.segmento.message}</p>
              )}
            </div>

            {/* Como podemos ajudar */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/80">Como podemos ajudar? *</label>
              <Controller
                control={control}
                name="solucao"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20 data-[placeholder]:text-white/30">
                      <SelectValue placeholder="Selecione uma solução" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a1a] border-white/10 text-white">
                      <SelectItem value="licitacao" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Licitação</SelectItem>
                      <SelectItem value="ecommerce" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">E-commerce</SelectItem>
                      <SelectItem value="sob-demanda" className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer">Desenvolvimento sob demanda</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.solucao && (
                <p className="text-red-400 text-xs">{errors.solucao.message}</p>
              )}
            </div>

            {/* Submit error */}
            {submitError && (
              <p className="text-red-400 text-sm text-center">{submitError}</p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white h-13 py-4 text-base font-semibold rounded-xl shadow-lg shadow-[#0076CE]/30 disabled:opacity-60 mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Falar com especialista"
              )}
            </Button>

            <p className="text-white/40 text-xs text-center">
              Resposta garantida em até 24 horas úteis
            </p>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
