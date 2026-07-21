import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function BibleVerseSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#21A7FF]/20 bg-[#06172B] text-white">
      <Image
        src="/images/backgrounds/banner-versiculo-final.png"
        alt=""
        fill
        className="object-cover object-center opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020D1C]/92 via-[#06172B]/62 to-[#020D1C]/8" />
      <Container className="relative flex min-h-[142px] items-center py-4">
        <div className="flex max-w-4xl gap-4">
          <Quote className="mt-1 shrink-0 fill-[#21A7FF] text-[#21A7FF]" size={44} />
          <div>
            <p className="font-serif text-xl font-semibold italic leading-snug text-white/92 md:text-[28px]">
              Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.
              <br className="hidden md:block" /> Reconhece-o em todos os teus caminhos, e Ele endireitará as tuas
              veredas.
            </p>
            <p className="mt-2 text-lg font-black uppercase text-[#21A7FF]">Provérbios 3:5-6</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
