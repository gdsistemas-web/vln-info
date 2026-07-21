import type { MetadataRoute } from "next";
import { allServices } from "@/data/services";
import { navigation } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vlninfo.com.br";
  const pages = [...navigation.map((item) => item.href), "/politica-de-privacidade", "/termos-de-uso"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...allServices.map((service) => ({ url: `${base}/servicos/${service.slug}`, lastModified: new Date() })),
  ];
}
