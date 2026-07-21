import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { company, whatsappMessage } from "@/data/company";
import { pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/utils";

export const metadata = pageMetadata("Contato", "Fale com a VLN INFO para solicitar orçamentos e informações comerciais.", "/contato");

export default function ContatoPage() {
  return (
    <>
      <InternalHero title="Contato" subtitle="Fale com um especialista e solicite um orçamento sem compromisso." current="Contato" />
      <section className="bg-[#F4F6F9] py-12">
        <Container className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="space-y-4">
            <ContactItem icon={<MessageCircle />} label="WhatsApp" value={company.whatsapp} href={whatsappLink(company.whatsapp, whatsappMessage)} external />
            {company.phones.map((phone) => <ContactItem key={phone} icon={<Phone />} label="Telefone" value={phone} href={`tel:+55${phone.replace(/\D/g, "")}`} />)}
            <ContactItem icon={<Mail />} label="E-mail" value={company.email} href={`mailto:${company.email}`} />
            <ContactItem icon={<MapPin />} label="Endereço" value={company.address} />
            <ContactItem icon={<Clock />} label="Horário" value={company.businessHours} />
            <div className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-[#5A6472] shadow-sm">Mapa opcional preparado para integração futura sem iframe pesado.</div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

function ContactItem({ icon, label, value, href, external }: { icon: React.ReactNode; label: string; value: string; href?: string; external?: boolean }) {
  const content = <><span className="text-[#075FCB]">{icon}</span><span><strong className="block text-[#06172B]">{label}</strong><span className="text-[#5A6472]">{value}</span></span></>;
  const className = "flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm";
  return href ? <a className={className} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{content}</a> : <div className={className}>{content}</div>;
}
