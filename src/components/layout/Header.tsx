"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { company, whatsappMessage } from "@/data/company";
import { cn, whatsappLink } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020D1C]/95 transition", scrolled && "bg-[#020D1C] shadow-xl shadow-black/20 backdrop-blur")}>
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegacao principal">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={cn("relative py-2 text-sm font-extrabold uppercase text-white/85 transition hover:text-white", active && "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#21A7FF]")}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          href={whatsappLink(company.whatsapp, whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-12 items-center gap-2 rounded-md bg-[#20B85A] px-5 text-sm font-extrabold uppercase text-white shadow-lg shadow-green-950/20 transition hover:-translate-y-0.5 hover:bg-[#159c49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:inline-flex"
        >
          <MessageCircle size={21} /> Fale conosco
        </a>
        <MobileMenu open={open} setOpen={setOpen} />
      </Container>
    </header>
  );
}
