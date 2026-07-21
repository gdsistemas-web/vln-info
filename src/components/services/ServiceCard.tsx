import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { IconCircle } from "@/components/ui/IconCircle";
import type { Service } from "@/types/service";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#06172B]">
        <Image src={service.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="relative flex flex-1 flex-col px-5 pb-5 pt-8">
        <IconCircle name={service.icon} className="absolute -top-6 left-5" />
        <h3 className="text-base font-black uppercase leading-tight text-[#06172B]">{service.title}</h3>
        <ul className="mt-4 flex-1 space-y-2 text-sm leading-6 text-[#253244]">
          {service.features.slice(0, 5).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 size-1.5 rounded-full bg-[#075FCB]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button href={`/servicos/${service.slug}`} variant="outline" className="mt-5 w-fit px-4 py-2 text-xs">
          Saiba mais
        </Button>
      </div>
    </article>
  );
}
