import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "whatsapp" | "outline";
  showArrow?: boolean;
};

export function Button({ href, children, className, variant = "primary", showArrow = true, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold uppercase tracking-normal transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" && "bg-[#075FCB] text-white shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 hover:bg-[#006CE5] focus-visible:outline-[#21A7FF]",
        variant === "whatsapp" && "bg-[#20B85A] text-white shadow-lg shadow-green-900/20 hover:-translate-y-0.5 hover:bg-[#159c49] focus-visible:outline-white",
        variant === "outline" && "border border-[#075FCB] bg-white text-[#075FCB] hover:bg-blue-50 focus-visible:outline-[#075FCB]",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </Link>
  );
}
