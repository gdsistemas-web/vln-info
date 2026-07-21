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
    id: "cancelas",
    slug: "cancelas-e-totens",
    title: "Cancelas e Totens para Estacionamentos",
    shortTitle: "Cancelas e Totens",
    category: "principal",
    icon: "Car",
    image: "/images/services/hero-cancelas.png",
    shortDescription: "Automação total do acesso de veículos, controle financeiro e integração com softwares de gestão.",
    description:
      "A VLN INFO desenvolve projetos completos para estacionamentos comerciais, hospitais, shopping centers, aeroportos, universidades, condomínios e indústrias. Nossos sistemas oferecem automação do acesso de veículos, emissão de tickets, pagamento automático e integração com ERPs e plataformas financeiras.",
    benefits: [
      "Automação do acesso de veículos",
      "Redução de filas e processos manuais",
      "Controle financeiro integrado",
      "Mais segurança para usuários e patrimônio",
    ],
    features: [
      "Cancelas automáticas",
      "Totens de entrada e saída",
      "Pagamento automático",
      "Leitores QR Code e TAG",
      "Reconhecimento de placas",
      "Controle de vagas e painéis LED",
    ],
    applications: ["Shopping centers", "Hospitais", "Aeroportos", "Universidades", "Condomínios", "Indústrias"],
    implementationSteps: steps,
    faq: commonFaq,
    relatedServices: ["catracas-de-acesso", "sistemas-de-cftv", "infraestrutura-de-ti"],
    seoTitle: "Cancelas e Totens para Estacionamentos | VLN INFO",
    seoDescription:
      "Empresa especializada em instalação de cancelas automáticas, totens inteligentes e controle de acesso para estacionamentos em todo o Brasil.",
  },
  {
    id: "catracas",
    slug: "catracas-de-acesso",
    title: "Controle de Acesso para Pessoas e Veículos",
    shortTitle: "Catracas de Acesso",
    category: "principal",
    icon: "UsersRound",
    image: "/images/services/hero-catracas.png",
    shortDescription: "Soluções inteligentes para controlar entrada e saída de pessoas e veículos.",
    description:
      "Projetamos soluções inteligentes para controle de entrada e saída de pessoas e veículos. Cada projeto é desenvolvido conforme o fluxo operacional do cliente, integrando catracas, torniquetes, controladoras, fechaduras eletromagnéticas, biometria, RFID, QR Code, TAG veicular, NFC, aplicativo mobile e OCR de placas.",
    benefits: ["Fluxo de acesso mais seguro", "Rastreabilidade de entradas e saídas", "Gestão de visitantes", "Integração com CFTV e softwares"],
    features: [
      "Catracas e torniquetes",
      "Cancelas e portões automáticos",
      "Biometria e reconhecimento facial",
      "RFID, QR Code, NFC e TAG veicular",
      "OCR de placas",
      "Controladoras e fechaduras eletromagnéticas",
    ],
    applications: ["Empresas", "Escolas", "Condomínios", "Hospitais", "Indústrias", "Órgãos públicos"],
    implementationSteps: steps,
    faq: commonFaq,
    relatedServices: ["cancelas-e-totens", "sistemas-de-cftv", "redes-e-conectividade"],
    seoTitle: "Controle de Acesso com Catracas | VLN INFO",
    seoDescription: "Catracas, biometria, RFID, QR Code, TAG veicular e reconhecimento facial para empresas e instituições.",
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
  {
    ...services[0],
    id: "automacao-estacionamentos",
    slug: "automacao-para-estacionamentos",
    title: "Automação para Estacionamentos",
    shortTitle: "Automação para Estacionamentos",
    shortDescription: "Sistemas para estacionamentos comerciais, hospitais, shoppings, aeroportos, universidades, condomínios e indústrias.",
    description:
      "A VLN INFO desenvolve projetos completos para estacionamentos com automação total do acesso de veículos, controle financeiro, emissão de tickets e integração com softwares de gestão. As soluções incluem cancelas, totens, pagamento automático, leitores QR Code, leitores TAG, reconhecimento de placas, controle de vagas, painéis LED, integração ERP e integração financeira.",
    seoTitle: "Automação para Estacionamentos | VLN INFO",
    seoDescription: "Automação de estacionamentos com cancelas, totens, QR Code, TAG, OCR, pagamento automático e integração ERP.",
  },
  {
    ...services[0],
    id: "totens-inteligentes",
    slug: "totens-inteligentes",
    title: "Totens Inteligentes",
    shortTitle: "Totens Inteligentes",
    shortDescription: "Totens de entrada, saída, pagamento, QR Code, TAG e OCR para operações automatizadas.",
    description:
      "Os totens inteligentes da VLN INFO permitem automatizar entradas, saídas, pagamentos, validações por QR Code, TAG veicular, OCR de placas e integrações com sistemas de gestão. São indicados para estacionamentos, condomínios, hospitais, universidades, indústrias e operações com alto fluxo de veículos.",
    features: ["Totens de entrada", "Totens de saída", "Totens de pagamento", "QR Code, TAG e OCR", "Integração ERP e financeira"],
    seoTitle: "Totens Inteligentes | VLN INFO",
    seoDescription: "Totens inteligentes para entrada, saída, pagamento, QR Code, TAG, OCR e integração com sistemas.",
  },
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
