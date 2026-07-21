import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { SimpleCTA } from "@/components/ui/SimpleCTA";
import { partners } from "@/data/partners";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Parceiros", "Parcerias tecnológicas que fortalecem projetos de segurança, cloud, redes e TI.", "/parceiros");

export default function ParceirosPage() {
  return (
    <>
      <InternalHero title="Parceiros" subtitle="Trabalhamos com ecossistemas tecnológicos confiáveis para entregar soluções bem integradas." current="Parceiros" />
      <section className="bg-[#F4F6F9] py-12">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <article key={partner.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex size-16 items-center justify-center rounded-md bg-[#06172B] text-xl font-black text-white">{partner.name.slice(0, 2).toUpperCase()}</div>
              <p className="mt-4 text-sm font-bold uppercase text-[#075FCB]">{partner.category}</p>
              <h2 className="mt-1 text-xl font-black">{partner.name}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5A6472]">{partner.description}</p>
              <a href={partner.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#075FCB]">Site do parceiro <ExternalLink size={16} /></a>
            </article>
          ))}
        </Container>
      </section>
      <SimpleCTA />
    </>
  );
}
