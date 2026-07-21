import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function InternalHero({ title, subtitle, current }: { title: string; subtitle: string; current: string }) {
  return (
    <section className="bg-[#06172B] pt-28 text-white">
      <Container className="py-12">
        <nav className="mb-5 text-sm text-white/70" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span>{current}</span>
        </nav>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">{subtitle}</p>
      </Container>
    </section>
  );
}
