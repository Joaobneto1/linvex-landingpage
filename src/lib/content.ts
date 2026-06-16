// Conteúdo institucional da Limvex — fonte única de verdade para textos repetidos.

export const NAV_LINKS = [
  { id: "segmentos", label: "Segmentos" },
  { id: "metodo", label: "Método" },
  { id: "contato", label: "Contato" },
] as const;

export const SEGMENTOS = [
  {
    titulo: "Operações de crédito",
    descricao:
      "Correspondentes bancários, promotoras e financeiras. Comercializam crédito e vivem de comissão por contrato efetivado; operação intensiva em atendimento, conformidade e controle de produção.",
  },
  {
    titulo: "Factorings e securitizadoras",
    descricao:
      "Antecipam recebíveis com deságio; operação intensiva em análise de risco, gestão de carteira de títulos e conciliação.",
  },
  {
    titulo: "Empresas de cobrança",
    descricao:
      "Recuperam crédito para terceiros; operação intensiva em contato em escala, gestão de acordos e prestação de contas.",
  },
  {
    titulo: "Mercado de capitais",
    descricao:
      "Corretoras, casas de análise, gestoras e family offices; relatórios de carteira e automação da comunicação com o investidor.",
  },
] as const;

// Usado também como opções do select de segmento no formulário.
export const SEGMENTO_OPTIONS = SEGMENTOS.map((s) => s.titulo);

export const ETAPAS_ANALISE = [
  {
    numero: "01",
    titulo: "Imersão na operação",
    descricao:
      "Acompanhamos a rotina real de quem executa, no lugar onde o trabalho acontece.",
  },
  {
    numero: "02",
    titulo: "Mapeamento de processos e sistemas",
    descricao:
      "Documentamos fluxos, integrações e ferramentas que sustentam a operação hoje.",
  },
  {
    numero: "03",
    titulo: "Identificação e qualificação dos gargalos",
    descricao:
      "Localizamos onde se perde tempo, dinheiro e eficiência — e medimos o impacto de cada ponto.",
  },
  {
    numero: "04",
    titulo: "Relatório técnico",
    descricao:
      "Um documento que fundamenta escopo, prazo e investimento antes de escrever qualquer linha de código.",
  },
] as const;

export const COMO_FUNCIONA = [
  {
    titulo: "Diagnóstico",
    descricao:
      "A Análise Técnica de Operação revela onde estão os gargalos e o que vale resolver primeiro.",
  },
  {
    titulo: "Projeto sob medida",
    descricao:
      "Construímos exatamente o sistema que a operação precisa — nada genérico, nada além do necessário.",
  },
  {
    titulo: "Evolução contínua",
    descricao:
      "O sistema acompanha o crescimento da operação, com manutenção e melhorias ao longo do tempo.",
  },
] as const;

// TODO(whatsapp): troque pelo número real no formato internacional, só dígitos.
// Ex.: "5582999998888" (55 + DDD + número). Mantém o "55" do Brasil.
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

export const WHATSAPP_MENSAGEM =
  "Olá, vim pelo site e quero solicitar uma Análise Técnica de Operação";

export function whatsappLink(
  numero: string = WHATSAPP_NUMBER,
  mensagem: string = WHATSAPP_MENSAGEM
) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

export const EMPRESA = {
  cnpj: "67.055.428/0001-02",
  razaoSocial: "LIMVEX DESENVOLVIMENTO DE SOFTWARE SOB ENCOMENDA LTDA",
  cidade: "Maceió, Alagoas",
  site: "limvex.com",
} as const;
