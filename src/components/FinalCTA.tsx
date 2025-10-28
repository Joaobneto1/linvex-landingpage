export const FinalCTA = () => {
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
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlt5xmZTrRc5bKVbCJz_acpXr_9YK1sTr2ooUWS09tMx8A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center shadow-xl rounded-full px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Solicitar orçamento gratuito
          </a>
        </div>
      </div>
    </section>
  );
};