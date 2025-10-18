import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const FinalCTA = ({ onOpenQuoteModal }: FinalCTAProps) => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center gradient-card rounded-2xl p-12 lg:p-16 shadow-xl">
          <h2 className="mb-6">Pronto para escalar seu produto digital?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receba uma proposta personalizada em até 48 horas. Sem compromisso.
          </p>
          <Button onClick={onOpenQuoteModal} size="lg" className="shadow-glow">
            Solicitar orçamento gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};
