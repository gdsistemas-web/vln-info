import { BibleVerseSection } from "@/components/home/BibleVerseSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { ITServicesSection } from "@/components/home/ITServicesSection";
import { MainServicesSection } from "@/components/home/MainServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { organizationJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "VLN INFO | Tecnologia, Segurança Eletrônica e Serviços de TI",
  "Soluções completas em programação, CFTV, infraestrutura, redes, suporte, cloud, backup e segurança da informação para empresas em todo o Brasil.",
);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <HeroSection />
      <MainServicesSection />
      <ITServicesSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <BibleVerseSection />
      <ContactCTASection />
    </>
  );
}
