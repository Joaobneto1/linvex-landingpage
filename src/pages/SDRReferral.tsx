import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, UserCircle2, AlertTriangle, ArrowLeft } from "lucide-react";

// ─── Supabase client (apenas leitura de SDR, chave anon) ───────────────────
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

// ─── Schema de validação ────────────────────────────────────────────────────
const schema = z.object({
  cliente_nome: z.string().min(3, "Nome deve ter ao menos 3 caracteres"),
  cliente_email: z.string().email("E-mail inválido"),
  cliente_telefone: z.string().optional(),
  mensagem: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

// ─── Máscara de telefone ────────────────────────────────────────────────────
function formatPhone(value: string): string {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  if (cleaned.length <= 11)
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
}

// ─── Tipos ──────────────────────────────────────────────────────────────────
interface SDR {
  id: string;
  nome: string;
  slug: string;
  departamento?: string;
}

type PageState = "loading" | "not_found" | "form" | "success";

// ─── Componente principal ───────────────────────────────────────────────────
export default function SDRReferral() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [pageState, setPageState] = useState<PageState>("loading");
  const [sdr, setSdr] = useState<SDR | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  // Telefone com máscara
  const telefoneValue = watch("cliente_telefone") ?? "";

  // ─── Busca SDR no Supabase ────────────────────────────────────────────────
  useEffect(() => {
    if (!slug) {
      setPageState("not_found");
      return;
    }

    async function fetchSDR() {
      const { data, error } = await supabase
        .from("sdrs")
        .select("id, nome, slug, departamento, ativo")
        .eq("slug", slug)
        .eq("ativo", true)
        .single();

      if (error || !data) {
        setPageState("not_found");
      } else {
        setSdr(data as SDR);
        setPageState("form");
      }
    }

    fetchSDR();
  }, [slug]);

  // ─── Submit ───────────────────────────────────────────────────────────────
  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sdr_slug: slug,
          cliente_nome: values.cliente_nome,
          cliente_email: values.cliente_email,
          cliente_telefone: values.cliente_telefone?.replace(/\D/g, "") || undefined,
          mensagem: values.mensagem || undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.ok === false) {
        throw new Error(result.error || "Erro ao enviar formulário");
      }

      setPageState("success");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.");
    }
  };

  // ─── Estado: Carregando ───────────────────────────────────────────────────
  if (pageState === "loading") {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#0099FF] animate-spin" />
      </div>
    );
  }

  // ─── Estado: Não encontrado ───────────────────────────────────────────────
  if (pageState === "not_found") {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-yellow-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Link não encontrado</h1>
          <p className="text-white/60 mb-8 leading-relaxed">
            O link do consultor que você acessou não existe ou não está mais ativo.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white px-8 py-5 h-auto text-base font-semibold rounded-xl shadow-lg shadow-[#0076CE]/30"
          >
            Ir para o site Limvex
          </Button>
        </motion.div>
      </div>
    );
  }

  // ─── Estado: Sucesso ──────────────────────────────────────────────────────
  if (pageState === "success") {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Mensagem enviada!</h1>
          <p className="text-white/70 mb-2 leading-relaxed">
            Obrigado pelo seu interesse! Nossa equipe vai entrar em contato em breve.
          </p>
          {sdr && (
            <p className="text-white/40 text-sm mb-8">
              Indicado por: <span className="text-white/60 font-medium">{sdr.nome}</span>
            </p>
          )}
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white px-8 py-5 h-auto text-base font-semibold rounded-xl shadow-lg shadow-[#0076CE]/30"
          >
            Conhecer a Limvex
          </Button>
        </motion.div>
      </div>
    );
  }

  // ─── Estado: Formulário ───────────────────────────────────────────────────
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

      {/* Hero com nome do SDR */}
      <div className="w-full py-12 px-4 flex flex-col items-center text-center border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0076CE]/20 to-[#0099FF]/20 border-2 border-[#0076CE]/40 flex items-center justify-center mx-auto mb-4">
            <UserCircle2 className="w-8 h-8 text-[#0099FF]" />
          </div>
          <p className="text-white/50 text-sm uppercase tracking-widest mb-1 font-medium">
            Indicação por
          </p>
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {sdr?.nome}
          </h1>
          {sdr?.departamento && (
            <span className="inline-block bg-[#0076CE]/20 text-[#64b5f6] text-xs font-semibold px-3 py-1 rounded-full border border-[#0076CE]/30">
              {sdr.departamento}
            </span>
          )}
          <p className="text-white/60 mt-4 max-w-md text-base leading-relaxed">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você rapidamente.
          </p>
        </motion.div>
      </div>

      {/* Formulário */}
      <main className="flex-1 flex items-start justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full max-w-lg"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Nome */}
            <div className="space-y-1.5">
              <label className="text-white/70 text-sm font-medium block">
                Nome completo <span className="text-[#0099FF]">*</span>
              </label>
              <Input
                {...register("cliente_nome")}
                placeholder="Seu nome"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20"
              />
              {errors.cliente_nome && (
                <p className="text-red-400 text-xs mt-1">{errors.cliente_nome.message}</p>
              )}
            </div>

            {/* E-mail */}
            <div className="space-y-1.5">
              <label className="text-white/70 text-sm font-medium block">
                E-mail <span className="text-[#0099FF]">*</span>
              </label>
              <Input
                {...register("cliente_email")}
                type="email"
                placeholder="seu@email.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20"
              />
              {errors.cliente_email && (
                <p className="text-red-400 text-xs mt-1">{errors.cliente_email.message}</p>
              )}
            </div>

            {/* Telefone */}
            <div className="space-y-1.5">
              <label className="text-white/70 text-sm font-medium block">
                Telefone / WhatsApp{" "}
                <span className="text-white/30 text-xs font-normal">(opcional)</span>
              </label>
              <Input
                value={formatPhone(telefoneValue)}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
                  setValue("cliente_telefone", raw);
                }}
                type="tel"
                placeholder="(11) 99999-9999"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20"
              />
            </div>

            {/* Mensagem */}
            <div className="space-y-1.5">
              <label className="text-white/70 text-sm font-medium block">
                Mensagem{" "}
                <span className="text-white/30 text-xs font-normal">(opcional)</span>
              </label>
              <Textarea
                {...register("mensagem")}
                placeholder="Conte um pouco sobre você e o que procura..."
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[110px] rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20 resize-none"
              />
            </div>

            {/* Erro de envio */}
            <AnimatePresence>
              {submitError && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  {submitError}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Botão submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white h-13 py-4 h-auto text-base font-semibold rounded-xl shadow-lg shadow-[#0076CE]/30 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </span>
              ) : (
                "Entrar em contato"
              )}
            </Button>

            <p className="text-white/30 text-xs text-center leading-relaxed">
              Ao enviar, você concorda com nossa{" "}
              <a href="/privacidade" className="text-white/50 hover:text-white underline transition-colors">
                Política de Privacidade
              </a>
              .
            </p>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
