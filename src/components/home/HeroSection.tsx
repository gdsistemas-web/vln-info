import Image from "next/image";
import { Code2, ShieldCheck, Headphones, Settings, Cpu, UsersRound, Cctv, MonitorCog, Car, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

const heroIconMap: Record<string, LucideIcon> = {
  Car,
  UsersRound,
  Cctv,
  MonitorCog,
  Code2,
};

const highlights = [
  { label: "Tecnologia de Ponta", icon: Cpu },
  { label: "Segurança Avançada", icon: ShieldCheck },
  { label: "Suporte Especializado", icon: Headphones },
  { label: "Soluções Personalizadas", icon: Settings },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#21A7FF]/25 bg-[#020D1C] pb-5 pt-24 text-white lg:pb-6 lg:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(33,167,255,.13),transparent_36%),linear-gradient(105deg,#020D1C,#06172B_44%,#081C33)]" />
      <Container className="relative grid gap-0 px-0 sm:px-0 lg:h-[390px] lg:max-w-none lg:grid-cols-[36%_64%] xl:h-[415px]">
        <div className="flex min-h-[400px] flex-col justify-center px-6 py-10 sm:px-10 lg:min-h-0 lg:pl-11 lg:pr-3 xl:pl-16">
          <h1 className="max-w-[520px] text-[2.35rem] font-black uppercase leading-[1.02] tracking-normal sm:text-5xl lg:text-[2.55rem] xl:text-5xl">
            Tecnologia que<br />
            conecta, protege<br />
            e <span className="text-[#21A7FF]">transforma.</span>
          </h1>
          <p className="mt-5 max-w-[430px] text-sm font-medium leading-6 text-white/86 xl:text-base xl:leading-7">
            Soluções completas em tecnologia, infraestrutura, segurança eletrônica e automação para ambientes seguros,
            inteligentes e preparados para o futuro.
          </p>
          <Button href="#servicos" className="mt-6 min-h-10 px-4 py-2 text-xs xl:min-h-11 xl:px-5">
            Conheça nossos serviços
          </Button>
          <div className="mt-7 grid max-w-[560px] grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 lg:gap-x-2 xl:gap-x-4">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 text-[11px] font-semibold leading-tight text-white/90">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#21A7FF]/65 text-[#21A7FF]">
                  <Icon size={17} />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 px-4 pb-8 sm:grid-cols-2 lg:flex lg:h-full lg:gap-0 lg:px-0 lg:pb-0">
          {services.map((service, index) => {
            const Icon = heroIconMap[service.icon] ?? Code2;
            return (
              <a
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="hero-panel group relative min-h-60 flex-1 overflow-hidden rounded-md border border-white/20 bg-[#06172B] shadow-inner lg:min-h-0 lg:rounded-none lg:border-y-0"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  priority={index === 0}
                  className="object-cover opacity-88 saturate-110 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  sizes="(min-width: 1024px) 17vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#06172B]/12 via-[#06172B]/25 to-[#020D1C]/72" />
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#020D1C]/75 to-transparent" />
                <div className="relative flex h-full flex-col items-center justify-start px-3 pt-8 text-center xl:pt-9">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border-2 border-white/80 bg-[#075FCB] shadow-lg shadow-black/30 xl:size-14">
                    <Icon size={25} />
                  </span>
                  <h2 className="mt-4 text-[11px] font-black uppercase leading-tight drop-shadow xl:text-sm">{service.shortTitle}</h2>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
