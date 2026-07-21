import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { SimpleCTA } from "@/components/ui/SimpleCTA";
import { segments } from "@/data/segments";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Soluções", "Soluções por segmento para empresas, condomínios, escolas, indústrias e data centers.", "/solucoes");

export default function SolucoesPage() {
  return (
    <>
      <InternalHero title="Soluções por segmento" subtitle="Combinamos controle de acesso, CFTV, redes, infraestrutura e suporte conforme a necessidade de cada ambiente." current="Soluções" />
      <section className="bg-[#F4F6F9] py-12">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <article key={segment.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-black text-[#06172B]">{segment.name}</h2>
              <p className="mt-3 text-sm font-bold text-[#075FCB]">Problemas atendidos</p>
              <p className="text-sm leading-6 text-[#5A6472]">{segment.problems.join(", ")}</p>
              <p className="mt-3 text-sm font-bold text-[#075FCB]">Soluções indicadas</p>
              <p className="text-sm leading-6 text-[#5A6472]">{segment.solutions.join(", ")}</p>
            </article>
          ))}
        </Container>
      </section>
      <SimpleCTA />
    </>
  );
}
