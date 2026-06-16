import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SEGMENTO_OPTIONS, whatsappLink } from "@/lib/content";

// Máscara de telefone brasileiro: (XX) XXXXX-XXXX (celular) ou (XX) XXXX-XXXX.
function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome."),
  empresa: z.string().trim().min(2, "Informe o nome da empresa."),
  segmento: z.string().min(1, "Selecione um segmento."),
  email: z.string().trim().email("Informe um e-mail válido."),
  whatsapp: z
    .string()
    .trim()
    .refine(
      (v) => v.replace(/\D/g, "").length >= 10,
      "Informe um WhatsApp com DDD."
    ),
  mensagem: z.string().trim().max(2000).optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

const fieldError = "mt-1.5 text-xs text-orange";

export function Contato() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      empresa: "",
      segmento: "",
      email: "",
      whatsapp: "",
      mensagem: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("loading");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!res.ok) {
        throw new Error(data.message || "Falha ao enviar.");
      }

      setStatus("success");
      setServerMsg(data.message || "Recebemos sua solicitação.");
      reset();
    } catch {
      setStatus("error");
      setServerMsg(
        "Não foi possível enviar agora. Tente novamente em instantes ou fale no WhatsApp."
      );
    }
  };

  return (
    <section
      id="contato"
      className="scroll-mt-16 bg-graphite py-16 text-offwhite md:py-24"
    >
      <div className="container-limvex">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <div className="md:sticky md:top-24 md:self-start">
            <Reveal>
              <p className="kicker">Solicitar análise</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Comece pelo diagnóstico.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md leading-relaxed text-offwhite/65">
                Conte sobre a operação. Retornamos para agendar a Análise
                Técnica e entender onde estão os gargalos.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Button variant="outlineLight" className="mt-6" asChild>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            {status === "success" ? (
              <div className="flex flex-col items-start rounded-md border border-white/10 bg-white/5 p-7 md:p-8">
                <CheckCircle2 className="h-8 w-8 text-orange" />
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {serverMsg || "Recebemos sua solicitação."}
                </h3>
                <p className="mt-2 leading-relaxed text-offwhite/65">
                  Entraremos em contato pelos canais informados. Se preferir
                  adiantar, fale no WhatsApp.
                </p>
                <Button
                  variant="outlineLight"
                  className="mt-6"
                  onClick={() => {
                    setStatus("idle");
                    setServerMsg("");
                  }}
                >
                  Enviar outra solicitação
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="grid gap-5 sm:grid-cols-2"
              >
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    autoComplete="name"
                    aria-invalid={!!errors.nome}
                    className="mt-2"
                    {...register("nome")}
                  />
                  {errors.nome && (
                    <p className={fieldError}>{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input
                    id="empresa"
                    autoComplete="organization"
                    aria-invalid={!!errors.empresa}
                    className="mt-2"
                    {...register("empresa")}
                  />
                  {errors.empresa && (
                    <p className={fieldError}>{errors.empresa.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="segmento">Segmento</Label>
                  <Controller
                    control={control}
                    name="segmento"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="segmento"
                          aria-invalid={!!errors.segmento}
                          className="mt-2"
                        >
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {SEGMENTO_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.segmento && (
                    <p className={fieldError}>{errors.segmento.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="voce@empresa.com"
                    aria-invalid={!!errors.email}
                    className="mt-2"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className={fieldError}>{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Controller
                    control={control}
                    name="whatsapp"
                    render={({ field }) => (
                      <Input
                        id="whatsapp"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="(11) 98888-7777"
                        aria-invalid={!!errors.whatsapp}
                        className="mt-2"
                        value={field.value}
                        onChange={(e) =>
                          field.onChange(maskPhone(e.target.value))
                        }
                      />
                    )}
                  />
                  {errors.whatsapp && (
                    <p className={fieldError}>{errors.whatsapp.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="mensagem">
                    Mensagem <span className="normal-case">(opcional)</span>
                  </Label>
                  <Textarea
                    id="mensagem"
                    className="mt-2"
                    placeholder="Descreva brevemente a operação e o que pretende resolver."
                    {...register("mensagem")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto"
                  >
                    {status === "loading" ? (
                      "Enviando…"
                    ) : (
                      <>
                        Solicitar análise
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="mt-4 text-sm leading-relaxed text-orange"
                    >
                      {serverMsg}
                    </p>
                  )}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
