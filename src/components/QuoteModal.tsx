import { useState } from "react";
import { X } from "lucide-react";
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
import { toast } from "@/hooks/use-toast";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.company.trim()) newErrors.company = "Empresa é obrigatória";
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive",
      });
      return;
    }

    // Aqui você enviaria os dados para o backend
    console.log("Form submitted:", formData);

    toast({
      title: "Orçamento solicitado!",
      description: "Entraremos em contato em até 48 horas.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      budget: "",
      message: "",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-md animate-fade-in">
      <div className="bg-background rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-border/50 animate-scale-in">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-8 border-b border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Solicitar orçamento
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Preencha os dados e retornaremos em até 48 horas
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl hover:bg-muted transition-smooth group"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-smooth" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold">Nome completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`h-12 rounded-xl transition-smooth ${errors.name ? "border-destructive shadow-lg shadow-destructive/20" : "focus:border-primary focus:shadow-lg focus:shadow-primary/10"}`}
                placeholder="Seu nome"
              />
              {errors.name && <p className="text-sm text-destructive flex items-center gap-1 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`h-12 rounded-xl transition-smooth ${errors.email ? "border-destructive shadow-lg shadow-destructive/20" : "focus:border-primary focus:shadow-lg focus:shadow-primary/10"}`}
                placeholder="seu@email.com"
              />
              {errors.email && <p className="text-sm text-destructive flex items-center gap-1 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-semibold">Empresa *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={`h-12 rounded-xl transition-smooth ${errors.company ? "border-destructive shadow-lg shadow-destructive/20" : "focus:border-primary focus:shadow-lg focus:shadow-primary/10"}`}
                placeholder="Nome da empresa"
              />
              {errors.company && <p className="text-sm text-destructive flex items-center gap-1 mt-1">{errors.company}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold">Telefone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`h-12 rounded-xl transition-smooth ${errors.phone ? "border-destructive shadow-lg shadow-destructive/20" : "focus:border-primary focus:shadow-lg focus:shadow-primary/10"}`}
                placeholder="(00) 00000-0000"
              />
              {errors.phone && <p className="text-sm text-destructive flex items-center gap-1 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm font-semibold">Orçamento estimado</Label>
            <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              <SelectTrigger id="budget" className="h-12 rounded-xl focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-smooth">
                <SelectValue placeholder="Selecione uma faixa" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="0k-1.5k">Acima de R$ 1.500</SelectItem>
                <SelectItem value="1.5k-3k">Acima de R$ 3.000</SelectItem>
                <SelectItem value="3k-5k">Acima de R$ 5.000</SelectItem>
                <SelectItem value="5k-10k">Acima de R$ 9.000</SelectItem>
                <SelectItem value="unsure">Não tenho certeza</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold">Conte-nos sobre seu projeto *</Label>
            <Textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`rounded-xl transition-smooth resize-none ${errors.message ? "border-destructive shadow-lg shadow-destructive/20" : "focus:border-primary focus:shadow-lg focus:shadow-primary/10"}`}
              placeholder="Descreva brevemente o que você precisa, principais funcionalidades, prazos..."
            />
            {errors.message && <p className="text-sm text-destructive flex items-center gap-1 mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose} 
              className="flex-1 h-12 rounded-xl transition-smooth bg-background hover:bg-muted border-border hover:border-border"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="flex-1 h-12 rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-smooth"
            >
              Enviar solicitação
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
