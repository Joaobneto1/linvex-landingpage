import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send, ArrowLeft, CheckCircle, Bot } from "lucide-react";

// Declaração para Facebook Pixel
declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

// Tipos
interface FormData {
  nome: string;
  telefone: string;
  email: string;
  empresa: string;
  tipoProjeto: string;
  orcamento: string;
  urgencia: string;
  mensagem: string;
}

interface Question {
  id: keyof FormData;
  question: string;
  type: "text" | "tel" | "email" | "select" | "textarea";
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: (value: string) => string | null;
  optional?: boolean;
}

// Configuração das perguntas
const questions: Question[] = [
  {
    id: "nome",
    question: "Olá! Bem-vindo à Limvex. Para começarmos, qual é o seu nome?",
    type: "text",
    placeholder: "Digite seu nome",
    validation: (value) => value.length < 3 ? "Nome deve ter pelo menos 3 caracteres" : null,
  },
  {
    id: "telefone",
    question: "Ótimo, {nome}! Qual é o melhor telefone para contato?",
    type: "tel",
    placeholder: "(11) 99999-9999",
    validation: (value) => {
      const cleaned = value.replace(/\D/g, "");
      return cleaned.length < 10 ? "Telefone inválido" : null;
    },
  },
  {
    id: "email",
    question: "Perfeito! E qual é o seu melhor e-mail?",
    type: "email",
    placeholder: "seu@email.com",
    validation: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(value) ? "E-mail inválido" : null;
    },
  },
  {
    id: "empresa",
    question: "Legal! Qual é o nome da sua empresa?",
    type: "text",
    placeholder: "Nome da empresa",
    validation: (value) => value.length < 2 ? "Nome da empresa deve ter pelo menos 2 caracteres" : null,
  },
  {
    id: "tipoProjeto",
    question: "Que tipo de solução você procura?",
    type: "select",
    options: [
      { value: "website", label: "Website institucional" },
      { value: "sistema-web", label: "Sistema web customizado" },
      { value: "app-mobile", label: "Aplicativo mobile" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "automacao", label: "Automação de processos" },
      { value: "saas", label: "Plataforma SaaS" },
      { value: "outro", label: "Outro" },
    ],
    validation: (value) => !value ? "Selecione uma opção" : null,
  },
  {
    id: "orcamento",
    question: "Qual a faixa de investimento prevista para o projeto?",
    type: "select",
    options: [
      { value: "ate-10k", label: "Até R$ 10.000" },
      { value: "10k-30k", label: "R$ 10.000 - R$ 30.000" },
      { value: "30k-50k", label: "R$ 30.000 - R$ 50.000" },
      { value: "50k-100k", label: "R$ 50.000 - R$ 100.000" },
      { value: "acima-100k", label: "Acima de R$ 100.000" },
    ],
    validation: (value) => !value ? "Selecione uma opção" : null,
  },
  {
    id: "urgencia",
    question: "Quando você precisa que o projeto esteja pronto?",
    type: "select",
    options: [
      { value: "urgente", label: "Urgente (até 30 dias)" },
      { value: "medio-prazo", label: "Médio prazo (1-3 meses)" },
      { value: "longo-prazo", label: "Longo prazo (3-6 meses)" },
      { value: "flexivel", label: "Flexível" },
    ],
    validation: (value) => !value ? "Selecione uma opção" : null,
  },
  {
    id: "mensagem",
    question: "Excelente! Quer nos contar mais algum detalhe sobre o projeto?",
    type: "textarea",
    placeholder: "Descreva seu projeto, objetivos, funcionalidades desejadas... (opcional)",
    optional: true,
  },
];

// Máscara de telefone
function formatPhone(value: string): string {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  if (cleaned.length <= 11) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
}

// Componente de indicador de digitação (3 pontinhos)
function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-3 mb-4"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0076CE] to-[#0099FF] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0076CE]/20">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="bg-white/[0.08] border border-white/10 rounded-2xl rounded-tl-md px-5 py-4">
        <div className="flex items-center gap-1">
          <motion.span
            className="w-2 h-2 bg-white/60 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.span
            className="w-2 h-2 bg-white/60 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.span
            className="w-2 h-2 bg-white/60 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Componente de mensagem do bot
function BotMessage({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-3 mb-4"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0076CE] to-[#0099FF] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0076CE]/20">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="bg-white/[0.08] border border-white/10 rounded-2xl rounded-tl-md px-5 py-4 max-w-[85%]">
        <p className="text-white/90 text-base leading-relaxed">{children}</p>
      </div>
    </motion.div>
  );
}

// Componente de resposta do usuário
function UserResponse({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-end mb-4"
    >
      <div className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] rounded-2xl rounded-tr-md px-5 py-3 max-w-[75%]">
        <p className="text-white text-base">{children}</p>
      </div>
    </motion.div>
  );
}

export default function Contato() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
    empresa: "",
    tipoProjeto: "",
    orcamento: "",
    urgencia: "",
    mensagem: "",
  });
  const [currentValue, setCurrentValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showCurrentQuestion, setShowCurrentQuestion] = useState(true);
  const [history, setHistory] = useState<Array<{ question: string; answer: string }>>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep) / questions.length) * 100;

  // Auto-focus no input
  useEffect(() => {
    if (currentQuestion?.type === "textarea") {
      textareaRef.current?.focus();
    } else if (currentQuestion?.type !== "select") {
      inputRef.current?.focus();
    }
  }, [currentStep, currentQuestion?.type]);

  // Auto-scroll para o final do chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, currentStep, isTyping]);

  // Interpolar variáveis na pergunta
  const interpolateQuestion = (text: string): string => {
    return text.replace(/\{(\w+)\}/g, (_, key) => formData[key as keyof FormData] || key);
  };

  // Obter label da opção selecionada
  const getOptionLabel = (questionId: keyof FormData, value: string): string => {
    const question = questions.find((q) => q.id === questionId);
    if (question?.options) {
      const option = question.options.find((o) => o.value === value);
      return option?.label || value;
    }
    return value;
  };

  // Avançar para próxima pergunta
  const handleNext = () => {
    const value = currentValue.trim();
    
    // Validação (exceto campos opcionais vazios)
    if (!currentQuestion.optional || value) {
      const validationError = currentQuestion.validation?.(value);
      if (validationError) {
        setError(validationError);
        return;
      }
    }

    // Salvar resposta
    const updatedFormData = { ...formData, [currentQuestion.id]: value };
    setFormData(updatedFormData);
    
    // Adicionar ao histórico
    const displayValue = currentQuestion.type === "select" 
      ? getOptionLabel(currentQuestion.id, value) 
      : currentQuestion.type === "tel" 
        ? formatPhone(value)
        : value;
    
    if (value) {
      setHistory((prev) => [
        ...prev,
        { question: interpolateQuestion(currentQuestion.question), answer: displayValue },
      ]);
    }

    // Limpar input
    setCurrentValue("");
    setError(null);

    // Se não é a última pergunta, mostrar animação de digitação
    if (currentStep < questions.length - 1) {
      setShowCurrentQuestion(false);
      setIsTyping(true);
      
      // Simular tempo de digitação (1-1.5 segundos)
      const typingDelay = 1000 + Math.random() * 500;
      
      setTimeout(() => {
        setIsTyping(false);
        setCurrentStep((prev) => prev + 1);
        setShowCurrentQuestion(true);
      }, typingDelay);
    } else {
      handleSubmit(updatedFormData);
    }
  };

  // Enviar formulário
  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const payload = {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone.replace(/\D/g, ""),
        empresa: data.empresa,
        tipoProjeto: getOptionLabel("tipoProjeto", data.tipoProjeto),
        faturamento: getOptionLabel("orcamento", data.orcamento),
        urgencia: getOptionLabel("urgencia", data.urgencia),
        mensagem: data.mensagem || undefined,
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

      // Rastrear conversão no Facebook Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Formulário de Contato',
          content_category: payload.tipoProjeto,
        });
      }

      setIsComplete(true);
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setError(err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  // Handler para tecla Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  // Tela de sucesso
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
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Mensagem enviada!
          </h1>
          
          <p className="text-white/70 mb-8 leading-relaxed">
            Obrigado por entrar em contato, <span className="text-white font-medium">{formData.nome}</span>! 
            Nossa equipe analisará seu projeto e entrará em contato em até 24 horas.
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
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
            LIMVEX
          </span>

          <div className="text-white/50 text-sm">
            {currentStep + 1} de {questions.length}
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="h-1 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0076CE] to-[#0099FF]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 container mx-auto max-w-2xl px-4 py-8 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-6">
          {/* Histórico de mensagens */}
          <AnimatePresence mode="wait">
            {history.map((item, index) => (
              <div key={index}>
                <BotMessage>{item.question}</BotMessage>
                <UserResponse>{item.answer}</UserResponse>
              </div>
            ))}
          </AnimatePresence>

          {/* Indicador de digitação */}
          <AnimatePresence>
            {isTyping && <TypingIndicator />}
          </AnimatePresence>

          {/* Pergunta atual */}
          {!isSubmitting && !isTyping && showCurrentQuestion && (
            <BotMessage delay={history.length > 0 ? 0.1 : 0}>
              {interpolateQuestion(currentQuestion.question)}
            </BotMessage>
          )}

          {/* Loading state */}
          {isSubmitting && (
            <BotMessage>
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Enviando suas informações...
              </span>
            </BotMessage>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        {!isSubmitting && !isTyping && showCurrentQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white/[0.05] border border-white/10 rounded-2xl p-4"
          >
            {/* Mensagem de erro */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm mb-3"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Input dinâmico baseado no tipo */}
            {currentQuestion.type === "select" ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={currentValue} onValueChange={(val) => { setCurrentValue(val); setError(null); }}>
                  <SelectTrigger className="flex-1 bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0a1a] border-white/10 text-white">
                    {currentQuestion.options?.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="focus:bg-[#0076CE]/20 focus:text-white cursor-pointer"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  onClick={handleNext}
                  disabled={!currentValue && !currentQuestion.optional}
                  className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white h-12 px-6 rounded-xl disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            ) : currentQuestion.type === "textarea" ? (
              <div className="space-y-3">
                <Textarea
                  ref={textareaRef}
                  value={currentValue}
                  onChange={(e) => { setCurrentValue(e.target.value); setError(null); }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.ctrlKey) {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                  placeholder={currentQuestion.placeholder}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[120px] rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20 resize-none"
                />
                <div className="flex justify-between items-center">
                  <span className="text-white/40 text-xs">Ctrl + Enter para enviar</span>
                  <Button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white h-10 px-6 rounded-xl"
                  >
                    {currentQuestion.optional ? "Finalizar" : "Enviar"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <Input
                  ref={inputRef}
                  type={currentQuestion.type}
                  value={currentQuestion.type === "tel" ? formatPhone(currentValue) : currentValue}
                  onChange={(e) => {
                    const val = currentQuestion.type === "tel" 
                      ? e.target.value.replace(/\D/g, "").slice(0, 11)
                      : e.target.value;
                    setCurrentValue(val);
                    setError(null);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={currentQuestion.placeholder}
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-[#0076CE] focus:ring-[#0076CE]/20"
                />

                <Button
                  onClick={handleNext}
                  disabled={!currentValue && !currentQuestion.optional}
                  className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white h-12 px-6 rounded-xl disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Indicador de campo opcional */}
            {currentQuestion.optional && (
              <p className="text-white/40 text-xs mt-2 text-center">
                Este campo é opcional. Você pode pular se preferir.
              </p>
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
}
