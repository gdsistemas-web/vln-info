"use client";

import Link from "next/link";
import { useState } from "react";

const key = "vln-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(() => (typeof window === "undefined" ? false : !window.localStorage.getItem(key)));
  const choose = (value: string) => {
    window.localStorage.setItem(key, value);
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-4 text-sm text-[#253244] shadow-2xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>Usamos cookies essenciais para melhorar sua experiencia. Cookies opcionais podem ser recusados.</p>
        <div className="flex flex-wrap gap-2">
          <Link className="rounded-md border px-3 py-2 font-bold text-[#075FCB]" href="/politica-de-privacidade">Política</Link>
          <button className="rounded-md border px-3 py-2 font-bold" onClick={() => choose("rejected")} type="button">Rejeitar</button>
          <button className="rounded-md bg-[#075FCB] px-3 py-2 font-bold text-white" onClick={() => choose("accepted")} type="button">Aceitar</button>
        </div>
      </div>
    </div>
  );
}
