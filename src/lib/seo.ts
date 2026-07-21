import type { Metadata } from "next";
import { company } from "@/data/company";

const baseUrl = "https://vlninfo.com.br";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = `${baseUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: `https://${company.site}`,
    email: company.email,
    telephone: company.phones,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: "BR",
  };
}
