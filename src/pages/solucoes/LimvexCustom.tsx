import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import lvxDevSoftImage from "@/assets/lvxDevSoft.png";
import {
    Code2,
    Rocket,
    Users,
    Target,
    Zap,
    Shield,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Layers,
} from "lucide-react";

const features = [
    {
        icon: <Target className="w-6 h-6" />,
        title: "Arquitetura Sob Medida",
        description: "Soluções desenhadas especificamente para os desafios únicos do seu negócio, não templates genéricos.",
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Tecnologia de Ponta",
        description: "Stack moderna e escalável: React, Node.js, Python, AWS, Docker e as melhores ferramentas do mercado.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Time Sênior Dedicado",
        description: "Desenvolvedores experientes trabalhando exclusivamente no seu projeto, com comunicação direta.",
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Integração com IA",
        description: "Incorporamos inteligência artificial e automação para criar soluções que realmente transformam processos.",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Integrações Complexas",
        description: "Conectamos sistemas legados, ERPs, APIs externas e criamos ecossistemas tecnológicos integrados.",
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Segurança Enterprise",
        description: "Conformidade com LGPD, ISO 27001, criptografia end-to-end e as melhores práticas de segurança.",
    },
];

const benefits = [
    "Redução de até 70% em custos operacionais",
    "Aumento de 3x na produtividade da equipe",
    "Entrega em sprints de 2 semanas",
    "Código limpo e documentado",
    "Testes automatizados inclusos",
    "Suporte e manutenção contínua",
];

export default function LimvexCustom() {
    return (
        <div className="min-h-screen bg-[#030014] text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
                {/* Background com imagem do produto */}
                <div className="absolute inset-0 bg-[#030014]">
                    <img
                        src={lvxDevSoftImage}
                        alt=""
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                
                {/* Gradient overlays para profundidade */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/70 via-transparent to-[#030014]/90" />

                {/* Content */}
                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0076CE]/20 border border-[#0076CE]/30 rounded-full text-[#0076CE] text-sm font-medium mb-6 backdrop-blur-sm">
                            <Code2 className="w-4 h-4" />
                            Desenvolvimento Sob Medida
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Limvex{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#0099FF]">
                                Custom
                            </span>
                        </h1>

                        <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Soluções customizadas high-ticket para desafios únicos. Arquitetura enterprise para empresas que precisam de tecnologia proprietária que realmente move o ponteiro do negócio.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contato">
                                <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-8 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0076CE]/30">
                                    Solicitar Orçamento
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Tecnologia proprietária para desafios únicos
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Desenvolvemos sistemas sob medida para empresas que precisam de soluções que não existem no mercado. Do MVP ao produto enterprise, entregamos software que resolve problemas reais e gera resultados mensuráveis.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
                            >
                                <CheckCircle2 className="w-5 h-5 text-[#0076CE] flex-shrink-0" />
                                <span className="text-white/80 text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            O que entregamos
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Soluções completas, desde a concepção até a entrega e manutenção contínua.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-[#0076CE]/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#0076CE]/20 flex items-center justify-center text-[#0076CE] mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Casos de uso
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Exemplos de projetos que desenvolvemos para clientes
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gradient-to-br from-[#0076CE]/10 to-[#0076CE]/5 border border-[#0076CE]/20 rounded-2xl">
                            <h3 className="text-xl font-bold mb-3">Plataformas SaaS Completas</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Sistemas multi-tenant com billing, autenticação, dashboards e integrações. Do zero ao produto pronto para escalar.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">React</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">Node.js</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">PostgreSQL</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">AWS</span>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-[#0076CE]/10 to-[#0076CE]/5 border border-[#0076CE]/20 rounded-2xl">
                            <h3 className="text-xl font-bold mb-3">Automação com IA</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Sistemas inteligentes que processam documentos, classificam dados, fazem previsões e automatizam decisões complexas.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">Python</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">OpenAI</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">ML</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">FastAPI</span>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-[#0076CE]/10 to-[#0076CE]/5 border border-[#0076CE]/20 rounded-2xl">
                            <h3 className="text-xl font-bold mb-3">Integrações Enterprise</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Conectamos ERPs, CRMs, sistemas legados e APIs externas criando ecossistemas integrados e eficientes.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">APIs REST</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">GraphQL</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">Webhooks</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">ETL</span>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-[#0076CE]/10 to-[#0076CE]/5 border border-[#0076CE]/20 rounded-2xl">
                            <h3 className="text-xl font-bold mb-3">Apps Mobile Nativos</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Aplicativos iOS e Android de alta performance com sincronização offline, push notifications e UX premium.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">React Native</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">Swift</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">Kotlin</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">Firebase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Como trabalhamos
                        </h2>
                        <p className="text-lg text-white/60">
                            Metodologia ágil com entregas quinzenais e comunicação transparente
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#0076CE]/10 to-[#0076CE]/5 border border-[#0076CE]/20 rounded-2xl p-8">
                        <div className="grid sm:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0076CE]/20 flex items-center justify-center text-[#0076CE] font-bold text-lg mx-auto mb-3">
                                    1
                                </div>
                                <p className="text-white/80 font-semibold mb-1">Discovery</p>
                                <p className="text-white/60 text-xs">Entendemos seu negócio e desafios</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0076CE]/20 flex items-center justify-center text-[#0076CE] font-bold text-lg mx-auto mb-3">
                                    2
                                </div>
                                <p className="text-white/80 font-semibold mb-1">Arquitetura</p>
                                <p className="text-white/60 text-xs">Desenhamos a solução ideal</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0076CE]/20 flex items-center justify-center text-[#0076CE] font-bold text-lg mx-auto mb-3">
                                    3
                                </div>
                                <p className="text-white/80 font-semibold mb-1">Desenvolvimento</p>
                                <p className="text-white/60 text-xs">Sprints de 2 semanas</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0076CE]/20 flex items-center justify-center text-[#0076CE] font-bold text-lg mx-auto mb-3">
                                    4
                                </div>
                                <p className="text-white/80 font-semibold mb-1">Deploy</p>
                                <p className="text-white/60 text-xs">Entrega e suporte contínuo</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
                            <Link to="/contato">
                                <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-8 py-4 h-auto rounded-xl transition-all hover:scale-105">
                                    Agendar Reunião de Discovery
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0076CE]/20 via-[#030014] to-[#030014]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Pronto para transformar sua ideia em realidade?
                    </h2>
                    <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                        Agende uma conversa sem compromisso. Vamos entender seu desafio e apresentar como podemos ajudar.
                    </p>
                    <Link to="/contato">
                        <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-10 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0076CE]/30">
                            Solicitar Orçamento Personalizado
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
