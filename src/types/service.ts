export type ServiceCategory = "principal" | "ti";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  benefits: string[];
  features: string[];
  applications: string[];
  implementationSteps: string[];
  faq: ServiceFaq[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
};
