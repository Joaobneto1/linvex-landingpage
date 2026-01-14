import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendStartupApplication } from "@/services/startupApplication";
import type { StartupApplication } from "@/types/startupApplication";

const MAX_CHARACTERS_FOUNDERS = 1500;

export function StartupApplicationForm() {
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<StartupApplication>({
    foundersNames: "",
    contactEmails: "",
    phones: "",
    foundersBackground: "",
    foundersLinks: "",
    ideaDescription: "",
    whyNow: "",
    currentStage: "",
    extraNotes: "",
    acceptTerms: false,
  });

  const updateField = <K extends keyof StartupApplication>(
    field: K,
    value: StartupApplication[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep1 = (): boolean => {
    return (
      formData.foundersNames.trim() !== "" &&
      formData.contactEmails.trim() !== "" &&
      formData.contactEmails.includes("@") &&
      formData.phones.trim() !== ""
    );
  };

  const validateStep2 = (): boolean => {
    return formData.foundersBackground.trim() !== "";
  };

  const validateStep3 = (): boolean => {
    return (
      formData.ideaDescription.trim() !== "" && formData.whyNow.trim() !== ""
    );
  };

  const validateStep4 = (): boolean => {
    return formData.acceptTerms === true;
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      case 4:
        return validateStep4();
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && step < 4) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep4()) {
      toast({
        title: "Atenção",
        description: "Você precisa aceitar os termos para enviar a candidatura.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendStartupApplication(formData);
      toast({
        title: "Candidatura enviada com sucesso!",
        description:
          "Em breve entraremos em contato para dar continuidade ao processo.",
      });
      // Opcional: limpar formulário ou manter dados
      // setFormData({ ...initialFormData });
      // setStep(1);
    } catch (error) {
      toast({
        title: "Erro ao enviar candidatura",
        description:
          "Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Candidatura: Seus dados";
      case 2:
        return "Candidatura: Sobre os fundadores";
      case 3:
        return "Candidatura: Sobre a ideia";
      case 4:
        return "Revisão e envio";
      default:
        return "Candidatura";
    }
  };

  const getStepSubtitle = () => {
    switch (step) {
      case 1:
        return "Queremos entender quem são os fundadores, qual é a ideia e por que você acredita nela.";
      case 2:
        return "Conte-nos sobre você e seus sócios.";
      case 3:
        return "Explique sua ideia e por que este é o momento certo.";
      case 4:
        return "Revise os dados antes de enviar sua candidatura.";
      default:
        return "";
    }
  };

  const progressValue = (step / 4) * 100;

  return (
    <div className="max-w-5xl mx-auto mt-16 mb-24 px-4">
      <div className="bg-[#0A0A0F] rounded-3xl border border-white/10 p-6 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">
            {getStepTitle()}
          </h2>
          <p className="text-lg text-white/70 mb-6">
            {getStepSubtitle()}
          </p>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300"
                style={{ width: `${progressValue}%` }}
              />
            </div>
          </div>
          <p className="text-sm text-white/60 mt-2">
            {step} de 4 passos
          </p>
        </div>

        {/* Form Content */}
        <div className="mb-8">
          {/* Step 1: Seus dados */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="foundersNames" className="text-base font-semibold text-white">
                  Nome(s) completo(s) do(s) fundador(es)*
                </Label>
                <Input
                  id="foundersNames"
                  value={formData.foundersNames}
                  onChange={(e) => updateField("foundersNames", e.target.value)}
                  placeholder="Ex: Ana Silva, João Souza"
                  className="h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmails" className="text-base font-semibold text-white">
                  E-mail(s) de contato*
                </Label>
                <Input
                  id="contactEmails"
                  type="email"
                  value={formData.contactEmails}
                  onChange={(e) => updateField("contactEmails", e.target.value)}
                  placeholder="email1@exemplo.com, email2@exemplo.com"
                  className="h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phones" className="text-base font-semibold text-white">
                  Telefone(s) / WhatsApp(s)*
                </Label>
                <Input
                  id="phones"
                  value={formData.phones}
                  onChange={(e) => updateField("phones", e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                />
              </div>
            </div>
          )}

          {/* Step 2: Sobre os fundadores */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="foundersBackground" className="text-base font-semibold text-white">
                    Quem são os fundadores?*
                  </Label>
                  <span className="text-sm text-white/60">
                    {formData.foundersBackground.length}/{MAX_CHARACTERS_FOUNDERS}
                  </span>
                </div>
                <Textarea
                  id="foundersBackground"
                  value={formData.foundersBackground}
                  onChange={(e) => updateField("foundersBackground", e.target.value)}
                  placeholder="Conte brevemente sobre você e seus sócios..."
                  className="min-h-[120px] text-base bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                  maxLength={MAX_CHARACTERS_FOUNDERS}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="foundersLinks" className="text-base font-semibold text-white">
                  Links relevantes (LinkedIn, portfólio, etc)
                </Label>
                <Input
                  id="foundersLinks"
                  value={formData.foundersLinks || ""}
                  onChange={(e) => updateField("foundersLinks", e.target.value)}
                  placeholder="https://linkedin.com/in/..., https://seusite.com/..."
                  className="h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                />
              </div>
            </div>
          )}

          {/* Step 3: Sobre a ideia */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="ideaDescription" className="text-base font-semibold text-white">
                  Qual é a sua ideia?*
                </Label>
                <Textarea
                  id="ideaDescription"
                  value={formData.ideaDescription}
                  onChange={(e) => updateField("ideaDescription", e.target.value)}
                  placeholder="Explique o problema, a solução e o cliente..."
                  className="min-h-[120px] text-base bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whyNow" className="text-base font-semibold text-white">
                  Por que agora?*
                </Label>
                <Textarea
                  id="whyNow"
                  value={formData.whyNow}
                  onChange={(e) => updateField("whyNow", e.target.value)}
                  placeholder="Por que é um bom momento para essa ideia?"
                  className="min-h-[120px] text-base bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentStage" className="text-base font-semibold text-white">
                  Em que estágio a ideia está hoje?
                </Label>
                <Input
                  id="currentStage"
                  value={formData.currentStage || ""}
                  onChange={(e) => updateField("currentStage", e.target.value)}
                  placeholder="Só no papel, já validando com clientes, já faturando, etc."
                  className="h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                />
              </div>
            </div>
          )}

          {/* Step 4: Revisão e envio */}
          {step === 4 && (
            <div className="space-y-6">
              {/* Resumo dos dados */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">
                  Resumo da candidatura
                </h3>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-white/60 mb-1">
                      Fundadores
                    </p>
                    <p className="text-base text-white">{formData.foundersNames}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white/60 mb-1">
                      E-mails
                    </p>
                    <p className="text-base text-white">{formData.contactEmails}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white/60 mb-1">
                      Telefones
                    </p>
                    <p className="text-base text-white">{formData.phones}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white/60 mb-1">
                      Sobre os fundadores
                    </p>
                    <p className="text-base text-white line-clamp-3">
                      {formData.foundersBackground}
                    </p>
                  </div>

                  {formData.foundersLinks && (
                    <div>
                      <p className="text-sm font-semibold text-white/60 mb-1">
                        Links
                      </p>
                      <p className="text-base text-white">{formData.foundersLinks}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-white/60 mb-1">
                      A ideia
                    </p>
                    <p className="text-base text-white line-clamp-3">
                      {formData.ideaDescription}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white/60 mb-1">
                      Por que agora
                    </p>
                    <p className="text-base text-white line-clamp-3">
                      {formData.whyNow}
                    </p>
                  </div>

                  {formData.currentStage && (
                    <div>
                      <p className="text-sm font-semibold text-white/60 mb-1">
                        Estágio atual
                      </p>
                      <p className="text-base text-white">{formData.currentStage}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Checkbox de aceite */}
              <div className="flex items-start gap-3 pt-4">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    updateField("acceptTerms", checked === true)
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="acceptTerms"
                  className="text-base leading-relaxed cursor-pointer text-white"
                >
                  Confirmo que as informações são verdadeiras e autorizo a Limvex
                  a entrar em contato sobre esta candidatura.*
                </Label>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={isSubmitting}
              className="w-full sm:w-auto rounded-full px-8 py-6 font-bold border-white/20 text-white hover:bg-white/10 hover:border-purple-500/30"
            >
              ← Voltar
            </Button>
          )}
          {step < 4 ? (
            <Button
              type="button"
              onClick={handleNext}
              disabled={!canProceed() || isSubmitting}
              className="w-full sm:w-auto rounded-full px-8 py-6 font-bold bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg shadow-purple-600/25"
            >
              Próximo passo →
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed() || isSubmitting}
              className="w-full sm:w-auto rounded-full px-8 py-6 font-bold bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg shadow-purple-600/25"
            >
              {isSubmitting ? "Enviando..." : "Enviar candidatura"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

