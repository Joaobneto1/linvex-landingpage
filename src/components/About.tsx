export const About = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom max-w-4xl mx-auto text-center space-y-6">
        <h2 className="mb-8">Sobre nós</h2>
        
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Somos uma software house com times sênior especializados em desenvolvimento
          web, mobile e blockchain. Atuamos com empresas de diversos setores que buscam
          escalar seus produtos digitais com qualidade, agilidade e previsibilidade.
        </p>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Processos ágeis, arquitetura sólida e entrega garantida. Transformamos
          requisitos de negócio em soluções técnicas que geram resultado.
        </p>
        <a
          href="#contato"
          className="inline-block text-primary font-medium hover:underline transition-smooth"
        >
          Conheça o time →
        </a>
      </div>
    </section>
  );
};
