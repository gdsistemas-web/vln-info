import { ITServiceCard } from "@/components/services/ITServiceCard";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SimpleCTA } from "@/components/ui/SimpleCTA";
import { additionalServices, itServices, services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Serviços", "Conheça as soluções da VLN INFO em segurança, controle de acesso e TI.", "/servicos");

export default function ServicosPage() {
  return (
    <>
      <InternalHero title="Serviços" subtitle="Soluções completas para proteger, conectar e modernizar ambientes corporativos." current="Serviços" />
      <section className="bg-[#F4F6F9] py-12">
        <Container>
          <SectionTitle title="Principais soluções" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
          <h2 className="mb-5 mt-12 text-center text-sm font-black uppercase text-[#075FCB]">Serviços de TI</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">{itServices.map((service) => <ITServiceCard key={service.slug} service={service} />)}</div>
          <h2 className="mb-5 mt-12 text-center text-sm font-black uppercase text-[#075FCB]">Serviços Especializados</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {additionalServices.map((service) => <ITServiceCard key={service.slug} service={service} />)}
          </div>
        </Container>
      </section>
      <SimpleCTA />
    </>
  );
}
