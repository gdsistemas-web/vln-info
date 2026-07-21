import { Globe2, Headphones, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company, whatsappMessage } from "@/data/company";
import { whatsappLink } from "@/lib/utils";

export function ContactCTASection() {
  return (
    <section className="border-y border-white/10 bg-[#06172B] py-5 text-white">
      <Container className="grid gap-5 lg:grid-cols-[1.15fr_2fr] lg:items-center">
        <div className="flex items-center gap-4">
          <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-white/65">
            <Headphones size={34} />
          </span>
          <div>
            <h2 className="text-2xl font-black uppercase leading-tight">
              Pronto para transformar
              <br className="hidden sm:block" /> seu ambiente com tecnologia?
            </h2>
            <p className="mt-1 text-sm text-white/75">Fale com um especialista e solicite um orçamento sem compromisso.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={whatsappLink(company.whatsapp, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-l border-white/15 pl-5"
          >
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#20B85A]">
              <MessageCircle size={25} />
            </span>
            <span className="text-sm leading-tight">
              <strong className="block text-xs uppercase">Fale pelo WhatsApp</strong>
              <span className="text-xl font-black leading-tight">{company.phones[0]}</span>
              <br />
              <span className="text-xl font-black leading-tight">{company.phones[1]}</span>
            </span>
          </a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-4 border-l border-white/15 pl-5">
            <Mail size={42} />
            <span className="text-sm leading-tight">
              <strong className="block text-xs uppercase">E-mail</strong>
              {company.email.toUpperCase()}
            </span>
          </a>
          <a
            href={`https://${company.site}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border-l border-white/15 pl-5"
          >
            <Globe2 size={42} />
            <span className="text-sm leading-tight">
              <strong className="block text-xs uppercase">Site</strong>
              {company.site.toUpperCase()}
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
