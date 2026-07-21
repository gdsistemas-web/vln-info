import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Termos de Uso", "Termos de uso do site institucional da VLN INFO.", "/termos-de-uso");

export default function TermosPage() {
  return (
    <>
      <InternalHero title="Termos de Uso" subtitle="Condições gerais para navegação e uso das informações deste site." current="Termos de Uso" />
      <section className="bg-white py-12"><Container className="prose max-w-4xl"><p>As informações deste site têm finalidade institucional e comercial. Conteúdos podem ser atualizados sem aviso prévio.</p><p>O uso indevido de marcas, textos ou imagens não é autorizado. Links externos são fornecidos como referência e devem ser acessados sob responsabilidade do visitante.</p></Container></section>
    </>
  );
}
