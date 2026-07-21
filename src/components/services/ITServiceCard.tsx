import Image from "next/image";
import Link from "next/link";
import { IconCircle } from "@/components/ui/IconCircle";
import type { Service } from "@/types/service";

export function ITServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="group block h-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#075FCB]"
    >
      <div className="relative aspect-[16/8.4] overflow-hidden bg-[#06172B]">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1280px) 14vw, (min-width: 768px) 25vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020D1C]/20" />
        <IconCircle name={service.icon} className="absolute -bottom-3 left-3 size-9 border-2" size={17} />
      </div>
      <div className="px-3 pb-3 pt-5">
        <h3 className="min-h-[30px] text-[12px] font-black uppercase leading-[1.15] text-[#06172B]">{service.title}</h3>
        <p className="mt-2 line-clamp-4 text-[11px] font-medium leading-[1.35] text-[#263445]">
          {service.shortDescription}
        </p>
      </div>
    </Link>
  );
}
