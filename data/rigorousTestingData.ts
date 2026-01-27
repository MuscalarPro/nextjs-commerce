// Data for the Rigorous Testing section

export type TestingCard = {
  id: string;
  imageSrc: string;
  alt: string;
  label: string;
};

export const rigorousTestingData: TestingCard[] = [
  {
    id: "us-gmp",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/US-GMP.png?v=1769540585",
    alt: "US GMP",
    label: "GMP Certified",
  },
  {
    id: "prohibited-substances",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/300_PROHIBITED.png?v=1769540585",
    alt: "Banned Substance Free",
    label: "Banned Substance Free",
  },
  {
    id: "microbiological-safety",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/MICROBIOLOGICAL.png?v=1769540585",
    alt: "Microbiological Safety",
    label: "Microbiological Safety",
  },
  {
    id: "heavy-metals",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/HEAVY_METALS.png?v=1769540585",
    alt: "Heavy Metals",
    label: "Heavy Metals Tested",
  },
  {
    id: "human-rct",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/HUMAN_RCT.png?v=1769540585",
    alt: "Human RCT",
    label: "Human RCT",
  },
  {
    id: "pre-clinically",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/PRE_CLINICALLY.png?v=1769540584",
    alt: "Pre-Clinically Tested",
    label: "Pre-Clinically Tested",
  },
];
