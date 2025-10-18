import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const FinalCTA = ({ onOpenQuoteModal }: FinalCTAProps) => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 lg:p-16 border-2 border-primary/10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
          
          <h2 className="mb-6">Pronto para escalar seu produto digital?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Receba uma proposta personalizada em até 48 horas. Sem compromisso.
          </p>
          <Button onClick={onOpenQuoteModal} size="lg" className="shadow-xl">
            Solicitar orçamento gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};
