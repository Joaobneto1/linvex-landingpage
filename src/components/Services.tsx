import { ShoppingCart, Cloud, MessageSquare, Users } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
	{
		icon: ShoppingCart,
		title: "E-commerce",
		description:
			"Criamos plataformas de e-commerce completas e personalizadas para impulsionar suas vendas online com experiência de compra excepcional.",
		deliverables: [
			"Lojas virtuais responsivas e otimizadas",
			"Integração com gateways de pagamento",
			"Gestão de produtos, estoque e pedidos",
			"Sistema de cupons, promoções e remarketing",
		],
	},
	{
		icon: Cloud,
		title: "SaaS",
		description:
			"Desenvolvemos aplicações SaaS escaláveis e multi-tenant, com infraestrutura robusta e modelo de assinatura integrado.",
		deliverables: [
			"Arquitetura multi-tenant e isolamento de dados",
			"Sistema de assinaturas e billing automatizado",
			"Dashboard analytics e métricas de uso",
			"APIs e integrações com serviços terceiros",
		],
	},
	{
		icon: MessageSquare,
		title: "Chatbot",
		description:
			"Implementamos chatbots inteligentes com IA para automatizar atendimento, qualificar leads e melhorar a experiência do cliente 24/7.",
		deliverables: [
			"Chatbots com NLP e integração LLM",
			"Automação de atendimento e FAQ inteligente",
			"Integração com WhatsApp, Telegram e redes sociais",
			"Analytics de conversas e otimização contínua",
		],
	},
	{
		icon: Users,
		title: "CRM",
		description:
			"Desenvolvemos sistemas CRM customizados para centralizar relacionamento com clientes, automatizar vendas e maximizar conversões.",
		deliverables: [
			"Gestão de leads, pipeline e oportunidades",
			"Automação de follow-up e nutrição de leads",
			"Relatórios e dashboards de vendas",
			"Integração com e-mail, telefonia e marketing",
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

			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full max-w-6xl mx-auto"
			>
				<CarouselContent className="-ml-4">
					{services.map((service, index) => (
						<CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
							<div className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-smooth h-full">
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
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex" />
				<CarouselNext className="hidden md:flex" />
			</Carousel>
			</div>
		</section>
	);
};
