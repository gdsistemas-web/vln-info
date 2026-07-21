import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/ui/InternalHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Política de Privacidade", "Política de privacidade e tratamento de dados da VLN INFO.", "/politica-de-privacidade");

export default function PoliticaPage() {
  return <Legal title="Política de Privacidade" current="Política de Privacidade" />;
}

function Legal({ title, current }: { title: string; current: string }) {
  return (
    <>
      <InternalHero title={title} subtitle="Informacoes sobre privacidade, LGPD e uso responsavel dos dados enviados pelo site." current={current} />
      <section className="bg-white py-12"><Container className="prose max-w-4xl"><p>A VLN INFO coleta apenas dados necessários para responder solicitações comerciais feitas voluntariamente no formulário de contato.</p><p>Os dados não são vendidos e podem ser usados para atendimento, elaboração de propostas e comunicações relacionadas ao pedido.</p><p>Para solicitar atualização ou exclusão de dados, entre em contato pelo e-mail contato@vlninfo.com.br.</p></Container></section>
    </>
  );
}
