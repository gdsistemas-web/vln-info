import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-[#06172B] pt-28 text-white">
      <Container className="py-20 text-center">
        <p className="text-sm font-black uppercase text-[#21A7FF]">404</p>
        <h1 className="mt-3 text-4xl font-black uppercase">Página não encontrada</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/75">O endereço acessado não existe ou foi movido.</p>
        <Button href="/" className="mt-8">Voltar para Home</Button>
      </Container>
    </section>
  );
}
