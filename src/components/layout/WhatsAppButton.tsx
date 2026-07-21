import { MessageCircle } from "lucide-react";
import { company, whatsappMessage } from "@/data/company";
import { whatsappLink } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(company.whatsapp, whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#20B85A] text-white shadow-2xl shadow-green-950/30 transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20B85A]"
    >
      <MessageCircle size={28} />
    </a>
  );
}
