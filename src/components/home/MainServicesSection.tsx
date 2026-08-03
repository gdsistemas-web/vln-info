import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";

export function MainServicesSection() {
  return (
    <section id="servicos" className="bg-[#F4F6F9] py-12">
      <Container>
        <SectionTitle eyebrow="Nossos serviços" title="Soluções completas para o seu negócio" subtitle="Tecnologia e inovação para garantir segurança, eficiência e controle em todos os ambientes." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 0.05}><ServiceCard service={service} /></ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
