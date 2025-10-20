import { Code, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		icon: Code,
		title: "Desenvolvimento Web",
		description:
			"Construímos aplicações web escaláveis, performáticas e seguras, com foco em UX e entrega contínua.",
		deliverables: [
			"SPAs e SSR com React / Next.js",
			"APIs REST",
			"Arquitetura escalável, CI/CD e infraestrutura como código",
			"Testes automatizados, observability e otimização de performance",
		],
	},
	{
		icon: Zap,
		title: "Automação com IA",
		description:
			"Automatizamos processos e desenvolvemos soluções de IA para extrair valor dos dados e acelerar decisões de negócio.",
		deliverables: [
			"Pipelines de dados, ETL e preparação de datasets",
			"Modelos de machine learning e integração MLOps",
			"Automação de processos com ML e RPA",
			"Chatbots e assistentes baseados em LLMs e integração via APIs",
		],
	},
	{
		icon: Smartphone,
		title: "Desenvolvimento Mobile",
		description:
			"Desenvolvemos apps nativos e cross-platform com foco em performance, experiência do usuário e integração confiável com backend.",
		deliverables: [
			"Apps nativos iOS e Android",
			"Cross-platform com React Native",
			"Integração com APIs, notificações push e autenticação",
			"Testes, distribuição e monitoramento em produção",
		],
	},
];

export const Services = () => {
	return (
		<section id="desenvolvimento" className="section-spacing">
			<div className="container-custom">
				<div className="text-center mb-16">
					<h2 className="mb-4">Nossos serviços</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Soluções completas para escalar seu negócio digital
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-smooth"
						>
							<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
								<service.icon className="w-8 h-8 text-primary" />
							</div>

							<h3 className="text-xl font-semibold mb-3">{service.title}</h3>
							<p className="text-muted-foreground mb-6 leading-relaxed">
								{service.description}
							</p>

							<ul className="space-y-3 mb-6">
								{service.deliverables.map((item, i) => (
									<li
										key={i}
										className="flex items-start text-sm text-muted-foreground"
									>
										<span className="inline-flex items-center justify-center w-5 h-5 rounded bg-primary/10 text-primary text-xs mr-2.5 flex-shrink-0 mt-0.5">
											→
										</span>
										<span className="leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
