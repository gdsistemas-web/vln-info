import { Button } from "@/components/ui/Button";

export function SimpleCTA() {
  return (
    <section className="bg-[#075FCB] px-4 py-10 text-center text-white">
      <h2 className="text-3xl font-black uppercase">Precisa de uma solucao sob medida?</h2>
      <p className="mx-auto mt-3 max-w-2xl text-white/85">Nossa equipe avalia seu ambiente e recomenda a melhor combinação de tecnologia, segurança e suporte.</p>
      <Button href="/contato" variant="whatsapp" className="mt-6">Solicitar orçamento</Button>
    </section>
  );
}
