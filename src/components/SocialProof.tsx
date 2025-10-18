const logos = [
  "Empresa A",
  "Empresa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Empresa F",
  "Empresa G",
  "Empresa H",
  "Empresa I",
  "Empresa J",
];

export const SocialProof = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">
          Marcas que confiam
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-smooth grayscale hover:grayscale-0"
            >
              <div className="text-lg font-bold text-foreground/60">{logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
