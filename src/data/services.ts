import type { Service } from "@/types/service";

const commonFaq = [
  {
    question: "A VLN INFO atende fora de São Paulo?",
    answer: "Sim. A VLN INFO realiza atendimento em todo o território nacional conforme o escopo do projeto.",
  },
  {
    question: "As soluções podem ser integradas ao ambiente atual?",
    answer:
      "Sim. Cada projeto é avaliado tecnicamente para integrar sistemas, equipamentos, redes, softwares de gestão e processos já existentes.",
  },
  {
    question: "A empresa oferece suporte após a implantação?",
    answer:
      "Sim. A VLN INFO oferece suporte remoto e presencial, contratos de SLA, monitoramento e acompanhamento técnico conforme a necessidade do cliente.",
  },
];

const steps = ["Diagnóstico técnico", "Projeto personalizado", "Implantação", "Documentação", "Suporte e monitoramento"];

export const services: Service[] = [
  {
    id: "programacao",
    slug: "programacao",
    title: "Programação e Desenvolvimento de Sistemas",
    shortTitle: "Programação",
    category: "principal",
    icon: "Code2",
    image: "/images/services/servico-automacao.png",
    shortDescription: "Desenvolvimento de sistemas, integrações, automações e soluções digitais sob medida para empresas.",
    description:
      "A VLN INFO desenvolve soluções de programação para empresas que precisam modernizar processos, integrar sistemas e criar ferramentas digitais mais eficientes. Atuamos no desenvolvimento de aplicações web, APIs, automações, painéis administrativos, integrações com ERPs, rotinas internas e melhorias em sistemas existentes, sempre com planejamento técnico, documentação e suporte.",
    benefits: [
      "Processos automatizados e menos trabalho manual",
      "Sistemas adaptados à operação da empresa",
      "Integração entre ferramentas, bancos de dados e ERPs",
      "Mais controle, produtividade e rastreabilidade",
    ],
    features: [
      "Desenvolvimento de sistemas web",
      "APIs e integrações entre plataformas",
      "Automação de rotinas operacionais",
      "Painéis administrativos e dashboards",
      "Correções, melhorias e manutenção de sistemas",
      "Documentação técnica e suporte evolutivo",
    ],
    applications: ["Empresas", "Comércios", "Indústrias", "Escolas", "Condomínios", "Operações administrativas"],
    implementationSteps: steps,
    faq: commonFaq,
    relatedServices: ["automacao-comercial", "consultoria-em-ti", "infraestrutura-de-ti"],
    seoTitle: "Programação e Desenvolvimento de Sistemas | VLN INFO",
    seoDescription:
      "Desenvolvimento de sistemas, APIs, integrações, automações e soluções digitais sob medida para empresas em todo o Brasil.",
  },
  {
    id: "cftv",
    slug: "sistemas-de-cftv",
    title: "Sistemas Inteligentes de CFTV",
    shortTitle: "Sistemas de CFTV",
    category: "principal",
    icon: "Cctv",
    image: "/images/services/hero-cftv.png",
    shortDescription: "Monitoramento eletrônico com câmeras IP, 4K, inteligência artificial e acesso remoto.",
    description:
      "Desenvolvemos projetos personalizados de monitoramento eletrônico utilizando equipamentos de última geração com Inteligência Artificial. Os sistemas podem ser integrados ao controle de acesso, alarmes, centrais de monitoramento e softwares de gestão.",
    benefits: ["Monitoramento remoto", "Prevenção de incidentes", "Evidências gravadas", "Integração com controle de acesso"],
    features: [
      "Câmeras IP e câmeras 4K",
      "Speed Dome e PTZ",
      "Visão noturna",
      "Reconhecimento facial",
      "Leitura de placas (LPR)",
      "Cerca virtual, linha virtual e analytics",
    ],
    applications: ["Empresas", "Condomínios", "Escolas", "Hospitais", "Centros logísticos", "Comércios"],
    implementationSteps: steps,
    faq: commonFaq,
    relatedServices: ["monitoramento", "seguranca-da-informacao", "infraestrutura-de-ti"],
    seoTitle: "Sistemas Inteligentes de CFTV | VLN INFO",
    seoDescription: "Projetos de CFTV com câmeras IP, 4K, IA, LPR, monitoramento remoto e integração com sistemas.",
  },
  {
    id: "ti",
    slug: "infraestrutura-de-ti",
    title: "Infraestrutura de Tecnologia da Informação",
    shortTitle: "Serviços de TI",
    category: "principal",
    icon: "MonitorCog",
    image: "/images/services/hero-ti.png",
    shortDescription: "Ambientes de TI robustos, seguros e preparados para suportar operações críticas.",
    description:
      "A infraestrutura tecnológica é o coração de qualquer organização moderna. A VLN INFO projeta, implanta e administra ambientes de TI robustos, seguros e preparados para suportar operações críticas, seguindo boas práticas de cabeamento estruturado, organização de Data Centers e alta disponibilidade dos serviços.",
    benefits: ["Alta disponibilidade", "Ambiente documentado e organizado", "Redução de riscos operacionais", "Escalabilidade para crescimento"],
    features: [
      "Projeto de infraestrutura",
      "Cabeamento estruturado",
      "Certificação de redes com Fluke",
      "Montagem e organização de racks",
      "Data Centers e salas técnicas",
      "Documentação e identificação de pontos",
    ],
    applications: ["Empresas", "Hospitais", "Instituições de ensino", "Indústrias", "Órgãos públicos", "Data Centers"],
    implementationSteps: steps,
    faq: commonFaq,
    relatedServices: ["redes-e-conectividade", "suporte-help-desk", "backup"],
    seoTitle: "Infraestrutura de TI | VLN INFO",
    seoDescription: "Projetos de infraestrutura de TI, cabeamento estruturado, Data Center, racks e certificação Fluke.",
  },
];

const it = (slug: string, title: string, icon: string, shortDescription: string, image: string, features: string[]): Service => ({
  id: slug,
  slug,
  title,
  shortTitle: title,
  category: "ti",
  icon,
  image,
  shortDescription,
  description: `${title} com planejamento técnico, implantação segura, documentação e suporte especializado para ambientes corporativos de pequeno, médio e grande porte.`,
  benefits: ["Mais segurança operacional", "Ambiente preparado para crescimento", "Equipe especializada", "Atendimento remoto e presencial"],
  features,
  applications: ["Empresas", "Hospitais", "Escolas", "Condomínios", "Indústrias", "Órgãos públicos"],
  implementationSteps: steps,
  faq: commonFaq,
  relatedServices: ["infraestrutura-de-ti", "seguranca-da-informacao", "suporte-help-desk"].filter((item) => item !== slug),
  seoTitle: `${title} | VLN INFO`,
  seoDescription: `${shortDescription} Conte com a VLN INFO para projetos, implantação e suporte em todo o Brasil.`,
});

export const itServices: Service[] = [
  it("infraestrutura-de-ti", "Infraestrutura de TI", "Building2", "Instalação, configuração e manutenção de servidores, estações de trabalho, redes e ambientes corporativos.", "/images/services/servico-infraestrutura.png", [
    "Cabeamento Cat5e, Cat6, Cat6A, Cat7 e Cat8",
    "Backbone óptico",
    "Patch panels, racks e salas de telecom",
    "Data Centers e salas cofre",
  ]),
  it("redes-e-conectividade", "Redes Corporativas", "Network", "Redes de alta performance para empresas que necessitam de velocidade, segurança e disponibilidade.", "/images/services/servico-redes.png", [
    "Switching, routing, VLAN e QoS",
    "OSPF, BGP, VPN e SD-WAN",
    "Wireless corporativo",
    "Balanceamento, redundância e alta disponibilidade",
  ]),
  it("suporte-help-desk", "Suporte Técnico Especializado", "Headset", "Central de serviços com atendimento remoto e presencial para garantir a continuidade dos negócios.", "/images/services/servico-helpdesk.png", [
    "Help Desk e Service Desk",
    "Field Service e NOC",
    "Monitoramento 24x7",
    "Contratos de SLA e outsourcing de TI",
  ]),
  it("backup", "Backup e Recuperação de Dados", "CloudUpload", "Backup local e em nuvem com segurança, alta disponibilidade e recuperação de desastres.", "/images/services/servico-backup.png", [
    "Backup local e cloud",
    "Disaster Recovery",
    "Storage e retenção segura",
    "Monitoramento de rotinas",
  ]),
  it("cloud-computing", "Cloud Computing", "CloudCog", "Migração, administração e monitoramento de ambientes Microsoft Azure, Amazon AWS e Google Cloud.", "/images/services/servico-cloud.png", [
    "Microsoft Azure, AWS e Google Cloud",
    "Máquinas virtuais e storage",
    "Active Directory",
    "Alta disponibilidade e disaster recovery",
  ]),
  it("seguranca-da-informacao", "Segurança da Informação", "ShieldCheck", "Proteção contra ataques cibernéticos com soluções modernas de segurança e conformidade.", "/images/services/servico-seguranca.png", [
    "Firewall, VPN e antivírus corporativo",
    "Endpoint Protection e hardening",
    "Criptografia e LGPD",
    "Gestão de vulnerabilidades, auditorias e políticas",
  ]),
  it("monitoramento", "Monitoramento 24x7", "Gauge", "Monitoramento de redes, servidores e serviços para prevenção de falhas e incidentes.", "/images/services/servico-monitoramento.png", [
    "NOC",
    "Zabbix, Grafana, PRTG e Prometheus",
    "Alertas preventivos",
    "Atendimento emergencial",
  ]),
  it("consultoria-em-ti", "Consultoria em Tecnologia", "UserRoundCheck", "Análise de infraestrutura, riscos, oportunidades de melhoria e planos de modernização.", "/images/services/servico-consultoria.png", [
    "Diagnóstico de infraestrutura",
    "Transformação digital",
    "Planos de modernização",
    "Redução de custos e aumento de produtividade",
  ]),
  it("virtualizacao", "Virtualização", "ServerCog", "VMware, Hyper-V e Proxmox para ambientes mais eficientes, escaláveis e econômicos.", "/images/services/servico-virtualizacao.png", [
    "VMware",
    "Hyper-V",
    "Proxmox",
    "Consolidação de servidores",
  ]),
  it("automacao-e-scripts", "Automação Comercial", "Code2", "Soluções para automatizar processos comerciais com mais agilidade, controle e produtividade.", "/images/services/servico-automacao.png", [
    "PDV, SAT e NFC-e",
    "Impressoras, leitores e balanças",
    "Coletores e totens de autoatendimento",
    "Integração ERP",
  ]),
  it("microsoft-365", "Microsoft 365", "PanelsTopLeft", "Implantação e gerenciamento completo de produtividade, colaboração, e-mail e nuvem corporativa.", "/images/services/servico-microsoft365.png", [
    "Exchange, Teams e SharePoint",
    "OneDrive",
    "Contas, licenças e políticas",
    "Migração e suporte",
  ]),
  it("manutencao-de-equipamentos", "Manutenção de Equipamentos", "Wrench", "Manutenção preventiva e corretiva de computadores, notebooks, servidores e impressoras.", "/images/services/servico-manutencao.png", [
    "Computadores e notebooks",
    "Servidores e impressoras",
    "Manutenção preventiva",
    "Correção de falhas e troca de componentes",
  ]),
];

export const additionalServices: Service[] = [
  it("fibra-optica", "Fibra Óptica", "Cable", "Lançamento, fusão, certificação e documentação de enlaces ópticos para redes corporativas.", "/images/services/servico-redes.png", [
    "Lançamento de fibra óptica",
    "Fusão óptica",
    "Testes com OTDR",
    "Certificação e documentação técnica",
  ]),
  it("data-center", "Data Center", "Server", "Projetos completos para ambientes críticos com organização, disponibilidade e segurança operacional.", "/images/services/servico-infraestrutura.png", [
    "Organização de racks",
    "Salas técnicas e salas cofre",
    "Backbone óptico",
    "Alta disponibilidade dos serviços",
  ]),
  it("outsourcing-de-ti", "Outsourcing de TI", "UsersRound", "Alocação de profissionais e operação assistida para sustentação de ambientes tecnológicos.", "/images/services/servico-helpdesk.png", [
    "Alocação de profissionais",
    "Contratos de SLA",
    "Atendimento remoto e presencial",
    "Field Service, Help Desk e Service Desk",
  ]),
  it("automacao-comercial", "Automação Comercial", "ShoppingCart", "Soluções para automatizar processos comerciais, proporcionando maior agilidade, controle e produtividade.", "/images/services/servico-automacao.png", [
    "PDV, SAT e NFC-e",
    "Impressoras, leitores e balanças",
    "Coletores e totens de autoatendimento",
    "Integração ERP",
  ]),
];

export const allServices = [
  ...services,
  ...itServices.filter((service) => !services.some((main) => main.slug === service.slug)),
  ...additionalServices,
];
