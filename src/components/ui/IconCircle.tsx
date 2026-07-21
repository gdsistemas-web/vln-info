"use client";

import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

type IconMap = typeof Icons;

export function IconCircle({ name, className, size = 22 }: { name: string; className?: string; size?: number }) {
  const Icon = (Icons as IconMap)[name as keyof IconMap] as Icons.LucideIcon | undefined;
  const RenderIcon = Icon ?? Icons.Cpu;
  return (
    <span className={cn("inline-flex size-12 items-center justify-center rounded-full border border-white/70 bg-[#075FCB] text-white shadow-md", className)}>
      <RenderIcon aria-hidden="true" size={size} strokeWidth={2.2} />
    </span>
  );
}
