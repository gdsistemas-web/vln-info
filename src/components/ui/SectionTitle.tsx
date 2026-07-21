import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-8 max-w-3xl text-center", className)}>
      {eyebrow ? <p className="text-sm font-extrabold uppercase text-[#075FCB]">{eyebrow}</p> : null}
      <h2 className="mt-1 text-3xl font-black leading-tight text-[#06172B] md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-7 text-[#5A6472]">{subtitle}</p> : null}
    </div>
  );
}
