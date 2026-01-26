import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Reveal } from "@/components/ui/reveal";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  empresa: z.string().optional(),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

type SubmitState = "idle" | "loading" | "success" | "error";

export function FormularioSection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const payload = {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        empresa: data.empresa || undefined,
        mensagem: data.mensagem,
        origem: "contato" as const,
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Erro ao enviar formulário");
      }

      setSubmitState("success");
      toast.success("Formulário enviado com sucesso!");
      
      // Reset form e redirecionar após 1.5s
      setTimeout(() => {
        reset();
        navigate("/obrigado");
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitState("error");
      const message = error instanceof Error ? error.message : "Erro ao enviar formulário. Tente novamente.";
      setErrorMessage(message);
      toast.error(message);
    }
  };

  const inputStyles = "bg-white/5 border-white/10 text-white placeholder:text-white/40 hover:border-white/20 focus:border-[#0076CE] focus:ring-2 focus:ring-[#0076CE]/20 rounded-xl transition-all duration-200 focus:bg-white/[0.08] text-base";
  const labelStyles = "text-white/90 font-semibold text-sm sm:text-base";

  return (
    <section id="formulario" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />
      
      {/* Asymmetric Grid Pattern */}
      <div className="absolute inset-0 asymmetric-grid opacity-[0.08]" />
      
      {/* Background Elements - Apenas azul com mais profundidade */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0076CE]/12 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0099FF]/10 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-[#00B8FF]/8 rounded-full blur-[180px]" />
      
      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Header com layout melhorado */}
        <Reveal direction="up" delay={0}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6 backdrop-blur-sm">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Formulário de contato</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white tracking-tight px-2">
              Entre em contato
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto px-2">
              Preencha os dados abaixo e nossa equipe entrará em contato em até 24h
            </p>
          </div>
        </Reveal>

        {/* Form Card com design melhorado */}
        <Reveal direction="up" delay={100}>
          <div className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.12] backdrop-blur-sm shadow-[0_8px_32px_rgba(0,118,206,0.15)] hover:border-white/20 transition-all duration-300">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className={labelStyles}>
                  Nome completo *
                </Label>
                <Input
                  id="nome"
                  {...register("nome")}
                  className={inputStyles}
                  placeholder="Seu nome completo"
                  disabled={submitState === "loading" || submitState === "success"}
                />
                {errors.nome && (
                  <p className="text-xs sm:text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.nome.message}
                  </p>
                )}
              </div>

              {/* Email e Telefone em grid no desktop */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className={labelStyles}>
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={inputStyles}
                    placeholder="seu@email.com"
                    disabled={submitState === "loading" || submitState === "success"}
                  />
                  {errors.email && (
                    <p className="text-xs sm:text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className={labelStyles}>
                    Telefone *
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    {...register("telefone")}
                    className={inputStyles}
                    placeholder="(11) 99999-9999"
                    disabled={submitState === "loading" || submitState === "success"}
                  />
                  {errors.telefone && (
                    <p className="text-xs sm:text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.telefone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Empresa (opcional) */}
              <div className="space-y-2">
                <Label htmlFor="empresa" className={labelStyles}>
                  Empresa <span className="text-white/50 text-xs">(opcional)</span>
                </Label>
                <Input
                  id="empresa"
                  {...register("empresa")}
                  className={inputStyles}
                  placeholder="Nome da empresa"
                  disabled={submitState === "loading" || submitState === "success"}
                />
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <Label htmlFor="mensagem" className={labelStyles}>
                  Mensagem *
                </Label>
                <Textarea
                  id="mensagem"
                  {...register("mensagem")}
                  className={`${inputStyles} min-h-[120px] sm:min-h-[140px] resize-none`}
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  disabled={submitState === "loading" || submitState === "success"}
                />
                {errors.mensagem && (
                  <p className="text-xs sm:text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.mensagem.message}
                  </p>
                )}
              </div>

              {/* Mensagem de erro geral */}
              {submitState === "error" && errorMessage && (
                <div className="p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-red-400">{errorMessage}</p>
                </div>
              )}

              {/* Mensagem de sucesso */}
              {submitState === "success" && (
                <div className="p-3 sm:p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-green-400">Formulário enviado com sucesso! Redirecionando...</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={submitState === "loading" || submitState === "success"}
                className="w-full bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 h-auto min-h-[48px] font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.3)] hover:shadow-[0_0_50px_rgba(0,118,206,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitState === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : submitState === "success" ? (
                  <>
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Enviado!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Enviar mensagem</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
