"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { navigation } from "@/data/navigation";
import { company, whatsappMessage } from "@/data/company";
import { whatsappLink } from "@/lib/utils";

export function MobileMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  return (
    <>
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div className="fixed inset-0 z-40 bg-[#020D1C]/80 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.nav
              className="ml-auto h-full w-[min(86vw,360px)] bg-[#06172B] p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              aria-label="Menu mobile"
            >
              <div className="flex justify-end">
                <button type="button" className="size-11 rounded-md border border-white/20 text-white" aria-label="Fechar menu" onClick={() => setOpen(false)}>
                  <X className="mx-auto" />
                </button>
              </div>
              <div className="mt-8 grid gap-2">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-bold uppercase text-white transition hover:bg-white/10">
                    {item.label}
                  </Link>
                ))}
              </div>
              <a
                href={whatsappLink(company.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#20B85A] px-4 text-sm font-extrabold uppercase text-white"
              >
                <MessageCircle size={20} /> Fale conosco
              </a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
