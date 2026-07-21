import type { Company } from "@/types/company";

export const company: Company = {
  name: "VLN INFO",
  legalName: "VLN INFO Tecnologia",
  slogan: "Tecnologia que Conecta, Protege e Transforma",
  phones: ["11 94250-7252", "11 2365-9741"],
  whatsapp: "11 94250-7252",
  email: "contato@vlninfo.com.br",
  site: "vlninfo.com.br",
  address: "São Paulo - SP",
  city: "São Paulo",
  serviceArea: "Atendimento em todo o Brasil",
  businessHours: "Segunda a sexta, das 8h às 18h",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/", icon: "Facebook" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "Instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "Linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "Youtube" },
  ],
  stats: [
    { value: 500, suffix: "+", label: "Projetos Realizados", icon: "BriefcaseBusiness" },
    { value: 300, suffix: "+", label: "Clientes Atendidos", icon: "Users" },
    { value: 23, suffix: "+", label: "Anos de Experiência", icon: "Settings" },
    { value: 24, suffix: "/7", label: "Suporte Técnico", icon: "Headphones" },
  ],
};

export const whatsappMessage =
  "Olá! Acessei o site da VLN INFO e gostaria de solicitar mais informações sobre os serviços.";
