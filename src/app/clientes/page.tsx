import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { SimpleCTA } from "@/components/ui/SimpleCTA";
import { caseStudies, clients } from "@/data/clients";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Clientes", "Empresas e segmentos que confiam nas soluções da VLN INFO.", "/clientes");

export default function ClientesPage() {
  const segments = Array.from(new Set(clients.map((client) => client.segment)));
  return (
    <>
      <InternalHero title="Clientes" subtitle="Relacionamentos baseados em confiança, suporte técnico e entrega consistente." current="Clientes" />
      <section className="bg-white py-12">
        <Container>
          <div className="flex flex-wrap gap-2">{segments.map((segment) => <span key={segment} className="rounded-full bg-blue-50 px-3 py-2 text-sm font-bold text-[#075FCB]">{segment}</span>)}</div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{clients.map((client) => <div key={client.name} className="rounded-lg border border-slate-200 bg-[#F4F6F9] p-6 text-center text-xl font-black">{client.name}<p className="mt-2 text-sm font-semibold text-[#5A6472]">{client.segment}</p></div>)}</div>
          <h2 className="mt-12 text-2xl font-black">Cases demonstrativos</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">{caseStudies.map((item) => <article key={item.title} className="rounded-lg border border-slate-200 p-5"><p className="text-sm font-bold text-[#075FCB]">{item.segment}</p><h3 className="mt-2 text-xl font-black">{item.title}</h3><p className="mt-3 font-semibold">{item.result}</p><p className="mt-2 text-sm leading-6 text-[#5A6472]">{item.description}</p></article>)}</div>
        </Container>
      </section>
      <SimpleCTA />
    </>
  );
}
