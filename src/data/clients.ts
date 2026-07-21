import type { CaseStudy, Client } from "@/types/client";

export const clients: Client[] = [
  { name: "Positivo", segment: "Tecnologia" },
  { name: "CPTM", segment: "Transporte" },
  { name: "Unimed", segment: "Saude" },
  { name: "Gocil", segment: "Seguranca" },
  { name: "Lorenzetti", segment: "Industria" },
  { name: "Prodesp", segment: "Setor Publico" },
  { name: "E muito mais...", segment: "Diversos" },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Controle de acesso corporativo",
    segment: "Empresas",
    result: "Fluxo de entrada mais seguro e rastreavel",
    description: "Case demonstrativo baseado em desafios comuns de ambientes corporativos.",
  },
  {
    title: "Modernizacao de redes",
    segment: "Educacao",
    result: "Maior estabilidade para operacoes administrativas",
    description: "Conteudo demonstrativo, sem atribuicao a cliente real.",
  },
  {
    title: "Monitoramento preventivo",
    segment: "Condominios",
    result: "Mais disponibilidade e resposta tecnica agil",
    description: "Exemplo demonstrativo para ilustrar resultados esperados.",
  },
];
