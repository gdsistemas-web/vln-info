import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconCircle } from "@/components/ui/IconCircle";
import { company } from "@/data/company";

const reasons = [
  "Mais de 23 anos de experiência",
  "Equipe altamente especializada",
  "Atendimento em todo o Brasil",
  "Soluções completas de ponta a ponta",
  "Suporte remoto e presencial",
  "Compromisso com qualidade e inovação",
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-6">
      <Container className="grid items-stretch gap-5 lg:grid-cols-[28%_72%]">
        <div className="py-1">
          <h2 className="text-[22px] font-black uppercase leading-[1.05] text-[#075FCB] md:text-2xl">
            Por que escolher
            <br />a VLN INFO?
          </h2>
          <p className="mt-2 text-[13px] font-medium leading-5 text-[#253244]">
            A VLN INFO desenvolve projetos personalizados, alinhados às necessidades operacionais de cada cliente, com
            segurança, conectividade, desempenho e redução de custos.
          </p>
          <ul className="mt-3 space-y-1">
            {reasons.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-[13px] font-semibold leading-4 text-[#253244]">
                <CheckCircle2 className="shrink-0 text-[#075FCB]" size={15} /> {item}
              </li>
            ))}
          </ul>
          <Button href="/sobre-nos" className="mt-3 min-h-8 px-3 py-1.5 text-[11px]">
            Conheça a VLN INFO
          </Button>
        </div>
        <div className="grid overflow-hidden rounded-lg bg-[#06172B] text-white shadow-xl lg:grid-cols-[58%_42%]">
          <div className="grid grid-cols-2 gap-px bg-white/12 md:grid-cols-4">
            {company.stats.map((stat) => (
              <div key={stat.label} className="flex min-h-[150px] flex-col items-center justify-center bg-[#06172B] px-4 py-5 text-center">
                <IconCircle name={stat.icon} className="mx-auto size-12 border-0 bg-transparent text-[#21A7FF] shadow-none" />
                <p className="mt-3 text-3xl font-black leading-none">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-semibold leading-tight text-white/85">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="relative min-h-[160px]">
            <Image
              src="/images/company/empresa-sede-photo.png"
              alt="Predio corporativo representando a sede da VLN INFO"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#06172B] to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
