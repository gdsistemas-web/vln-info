import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { SimpleCTA } from "@/components/ui/SimpleCTA";
import { allServices } from "@/data/services";
import { company, whatsappMessage } from "@/data/company";
import { pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = allServices.find((item) => item.slug === slug);
  return pageMetadata(service?.seoTitle ?? "Serviço", service?.seoDescription ?? "Serviço VLN INFO", `/servicos/${slug}`);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = allServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = allServices.filter((item) => service.relatedServices.includes(item.slug));

  return (
    <>
      <InternalHero title={service.title} subtitle={service.shortDescription} current={service.shortTitle} />
      <section className="bg-white py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <h2 className="text-2xl font-black text-[#06172B]">Descrição completa</h2>
              <p className="mt-3 leading-8 text-[#5A6472]">{service.description}</p>
              <Grid title="Benefícios" items={service.benefits} />
              <Grid title="Recursos oferecidos" items={service.features} />
              <Grid title="Aplicações" items={service.applications} />
              <Grid title="Etapas de implantação" items={service.implementationSteps} />
            </div>
            <aside>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#06172B] shadow-xl">
                <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
              <a href={whatsappLink(company.whatsapp, whatsappMessage)} target="_blank" rel="noopener noreferrer" className="mt-5 flex min-h-12 items-center justify-center rounded-md bg-[#20B85A] px-5 font-black uppercase text-white">Solicitar pelo WhatsApp</a>
            </aside>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-lg bg-[#F4F6F9] p-6">
              <h2 className="text-xl font-black">Perguntas frequentes</h2>
              <div className="mt-4 space-y-4">{service.faq.map((faq) => <div key={faq.question}><h3 className="font-bold">{faq.question}</h3><p className="mt-1 text-sm leading-6 text-[#5A6472]">{faq.answer}</p></div>)}</div>
            </div>
            <div className="rounded-lg bg-[#F4F6F9] p-6">
              <h2 className="text-xl font-black">Serviços relacionados</h2>
              <div className="mt-4 grid gap-2">{related.map((item) => <Link className="rounded-md bg-white px-4 py-3 font-bold text-[#075FCB]" key={item.slug} href={`/servicos/${item.slug}`}>{item.title}</Link>)}</div>
            </div>
          </div>
        </Container>
      </section>
      <SimpleCTA />
    </>
  );
}

function Grid({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-black text-[#06172B]">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => <div key={item} className="flex gap-2 rounded-md bg-[#F4F6F9] p-3 text-sm font-semibold"><CheckCircle2 size={18} className="shrink-0 text-[#075FCB]" /> {item}</div>)}
      </div>
    </section>
  );
}
