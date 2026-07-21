import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#21A7FF]"
      aria-label="VLN INFO - Home"
    >
      <Image
        src="/logos/vln_logo_header.png"
        alt="VLN INFO"
        width={220}
        height={56}
        priority
        className="h-auto w-[150px] sm:w-[172px] lg:w-[190px]"
      />
    </Link>
  );
}
