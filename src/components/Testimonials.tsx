import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarWpp from "@/assets/avatarWpp.png";
import avatarReddit from "@/assets/avatarReddit.svg";

const testimonials = [
	{
		quote:
			"Saímos de 10 para 200+ consultas por dia em 6 meses. O time foi decisivo no crescimento.",
		author: "Carlos Mendes",
		company: "CEO, HealthTech Brasil",
		avatar: "CM",
		avatarUrl: avatarWpp,
	},
	{
		quote:
			"Reduzimos o tempo de desenvolvimento em 40% com a arquitetura proposta pela Limvex.",
		author: "Ana Paula Silva",
		company: "CTO, Fintech Solutions",
		avatar: "AS",
		avatarUrl: avatarReddit,
	},
	{
		quote:
			"Entregaram um produto complexo em 4 meses, com qualidade acima da expectativa.",
		author: "Roberto Alves",
		company: "Diretor de Produto, E-commerce Plus",
		avatar: "RA",
		avatarUrl: avatarWpp,
	},
	{
		quote:
			"A integração com nossos sistemas legados foi feita sem nenhum downtime. Profissionalismo total.",
		author: "Mariana Costa",
		company: "Head de TI, Grupo Hospitalar",
		avatar: "MC",
		avatarUrl: avatarReddit,
	},
];

export const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prev = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	return (
		<section className="section-spacing">
			<div className="container-custom max-w-4xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="mb-4">O que nossos clientes dizem</h2>
				</div>

				<div className="relative">
					<div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-sm">
						<div className="flex flex-col items-center text-center space-y-6">
							{/* Avatar */}
							<div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
								{testimonials[currentIndex].avatarUrl ? (
									<img
										src={testimonials[currentIndex].avatarUrl}
										alt={testimonials[currentIndex].author}
										className="w-full h-full object-cover"
									/>
								) : (
									<div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
										<span className="text-primary-foreground font-bold text-2xl">
											{testimonials[currentIndex].avatar}
										</span>
									</div>
								)}
							</div>

							{/* Quote */}
							<blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
								"{testimonials[currentIndex].quote}"
							</blockquote>

							{/* Author */}
							<div className="pt-2">
								<div className="font-semibold text-lg text-foreground">
									{testimonials[currentIndex].author}
								</div>
								<div className="text-sm text-muted-foreground">
									{testimonials[currentIndex].company}
								</div>
							</div>
						</div>
					</div>

					{/* Navigation */}
					<div className="flex items-center justify-center gap-4 mt-8">
						<Button
							variant="outline"
							size="icon"
							onClick={prev}
							aria-label="Depoimento anterior"
						>
							<ChevronLeft className="w-5 h-5" />
						</Button>

						<div className="flex gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-2 h-2 rounded-full transition-smooth ${
										index === currentIndex ? "bg-primary w-8" : "bg-border"
									}`}
									aria-label={`Ir para depoimento ${index + 1}`}
								/>
							))}
						</div>

						<Button
							variant="outline"
							size="icon"
							onClick={next}
							aria-label="Próximo depoimento"
						>
							<ChevronRight className="w-5 h-5" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
