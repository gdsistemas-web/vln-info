import { Container } from "@/components/ui/Container";
import { ITServiceCard } from "@/components/services/ITServiceCard";
import { itServices } from "@/data/services";

export function ITServicesSection() {
  return (
    <section className="bg-[#F4F6F9] pb-9">
      <Container>
        <div className="rounded-lg border border-slate-200 bg-white/55 p-3 shadow-sm">
          <h2 className="mb-3 text-center text-sm font-black uppercase text-[#075FCB]">Serviços de TI</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {itServices.map((service) => (
              <ITServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
