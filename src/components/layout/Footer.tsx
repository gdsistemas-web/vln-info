import Link from "next/link";
import Image from "next/image";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-[#020D1C] text-white">
      <Container className="grid gap-7 py-5 md:grid-cols-2 lg:grid-cols-[1.15fr_.8fr_.9fr_1.25fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 text-xs text-white/70">Siga-nos nas redes sociais</p>
          <div className="mt-3 flex gap-3">
            {company.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-8 items-center justify-center rounded-full border border-white/60 text-[10px] font-black text-white transition hover:bg-[#075FCB]"
                aria-label={item.label}
              >
                {item.label === "LinkedIn" ? "in" : item.label.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Navegacao">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link className="hover:text-white" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Serviços">
          {services.map((item) => (
            <li key={item.slug}>
              <Link className="hover:text-white" href={`/servicos/${item.slug}`}>
                {item.shortTitle}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/servicos/suporte-help-desk" className="hover:text-white">
              Suporte e Help Desk
            </Link>
          </li>
        </FooterColumn>

        <div className="border-white/10 lg:border-l lg:pl-8">
          <h2 className="text-sm font-black uppercase">Contato</h2>
          <ul className="mt-3 space-y-1.5 text-sm leading-tight text-white/75">
            {company.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone size={15} />
                <a href={`tel:+55${phone.replace(/\D/g, "")}`}>{phone}</a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail size={15} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Globe2 size={15} />
              <a href={`https://${company.site}`} target="_blank" rel="noopener noreferrer">
                {company.site}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} /> {company.address}
            </li>
            <li>{company.serviceArea}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase">Onde atuamos</h2>
          <div className="relative mt-1 h-[120px] w-[150px] overflow-hidden">
            <Image
              src="/images/backgrounds/mapa-brasil-footer.png"
              alt="Mapa do Brasil com pontos de atendimento"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-2 text-center text-xs text-white/55 md:flex-row md:items-center md:justify-center">
          <p>© 2026 VLN INFO. Todos os direitos reservados.</p>
          <Link href="/politica-de-privacidade" className="hover:text-white">
            Política de Privacidade
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="/termos-de-uso" className="hover:text-white">
            Termos de Uso
          </Link>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase">{title}</h2>
      <ul className="mt-3 space-y-1 text-sm leading-tight text-white/75">{children}</ul>
    </div>
  );
}
