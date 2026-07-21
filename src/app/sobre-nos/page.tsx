import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { SimpleCTA } from "@/components/ui/SimpleCTA";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Sobre Nós", "Conheça a VLN INFO, sua missão, visão, valores e área de atuação.", "/sobre-nos");

export default function SobrePage() {
  const values = [
    "Ética e Transparência",
    "Compromisso com o Cliente",
    "Excelência Técnica",
    "Inovação Contínua",
    "Respeito às Pessoas",
    "Qualidade em cada Projeto",
    "Responsabilidade Social",
    "Segurança da Informação",
    "Valorização da Vida",
    "Trabalho em Equipe",
    "Integridade",
    "Compromisso com Resultados",
  ];
  return (
    <>
      <InternalHero
        title="Sobre Nós"
        subtitle="Tecnologia que Conecta, Protege e Transforma."
        current="Sobre Nós"
      />
      <section className="bg-white py-12">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black">Quem Somos</h2>
            <p className="mt-3 leading-8 text-[#5A6472]">
              A VLN INFO é uma empresa brasileira especializada em Infraestrutura de Tecnologia da Informação,
              Segurança Eletrônica, Controle de Acesso, Automação Comercial, Redes Corporativas, Data Center, Cloud
              Computing e Soluções Integradas de TI.
            </p>
            <p className="mt-3 leading-8 text-[#5A6472]">
              Com mais de 23 anos de experiência no mercado de tecnologia, atuamos no desenvolvimento, implantação,
              gerenciamento e suporte de ambientes tecnológicos para empresas de pequeno, médio e grande porte, órgãos
              públicos, hospitais, instituições de ensino, condomínios, indústrias, centros logísticos e redes
              corporativas.
            </p>
            <p className="mt-3 leading-8 text-[#5A6472]">
              Nosso compromisso vai além da instalação de equipamentos. Desenvolvemos projetos personalizados,
              alinhados às necessidades operacionais de cada cliente, oferecendo soluções completas que proporcionam
              segurança, alta disponibilidade, conectividade, desempenho e redução de custos operacionais.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Box
                title="Missão"
                text="Oferecer soluções completas em tecnologia, infraestrutura, segurança eletrônica e automação, proporcionando aos nossos clientes ambientes seguros, inteligentes, eficientes e preparados para os desafios do futuro, sempre com ética, qualidade, inovação e excelência no atendimento."
              />
              <Box
                title="Visão"
                text="Ser reconhecida nacionalmente como uma das principais empresas de integração de soluções tecnológicas, destacando-se pela inovação, confiabilidade, excelência técnica e compromisso com o sucesso dos nossos clientes."
              />
            </div>
          </div>
          <aside className="rounded-lg bg-[#06172B] p-6 text-white">
            <h2 className="text-xl font-black">Valores</h2>
            <ul className="mt-4 space-y-3">{values.map((item) => <li className="flex gap-2" key={item}><CheckCircle2 className="text-[#21A7FF]" /> {item}</li>)}</ul>
            <p className="mt-6 text-white/75">{company.serviceArea}</p>
          </aside>
        </Container>
      </section>
      <SimpleCTA />
    </>
  );
}

function Box({ title, text }: { title: string; text: string }) {
  return <div className="rounded-lg bg-[#F4F6F9] p-5"><h3 className="font-black text-[#075FCB]">{title}</h3><p className="mt-2 leading-7 text-[#5A6472]">{text}</p></div>;
}
