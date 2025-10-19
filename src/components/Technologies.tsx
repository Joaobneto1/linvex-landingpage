const technologies = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "React Native",
  "Next.js",
  "Vue.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "Web3.js",
  "GraphQL",
  "REST APIs",
  "Java",
  "Java",
  "Spring Boot",
  "Kotlin",
];

export const Technologies = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Stack tecnológico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as tecnologias mais modernas e confiáveis do mercado
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-card border border-border rounded-xl text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:shadow-md transition-smooth cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
