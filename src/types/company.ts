export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Company = {
  name: string;
  slogan: string;
  legalName: string;
  phones: string[];
  whatsapp: string;
  email: string;
  site: string;
  address: string;
  city: string;
  serviceArea: string;
  businessHours: string;
  social: SocialLink[];
  stats: {
    value: number;
    suffix: string;
    label: string;
    icon: string;
  }[];
};
