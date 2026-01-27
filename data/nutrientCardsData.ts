// Data for the NutrientCards component

export type NutrientCard = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  sectionTitle: string;
  sectionText: string;
};

export const nutrientCardsData: NutrientCard[] = [
  {
    id: "musclespan",
    title: "Urolithin A 1000mg",
    description:
      "Clinically-proven mitophagy activator. RCTs show improved muscle endurance, reduced inflammation, and enhanced mitochondrial health in adults 40-65.*",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Urolithin_A_2.png?v=1769539823",
    sectionTitle: "ACTIVATION TIMELINE",
    sectionText:
      "Plasma levels peak at 2-4 hours. Mitochondrial remodeling occurs over 4 months.*",
  },
  {
    id: "lifespan",
    title: "Spermidine 6mg",
    description:
      "Autophagy inducer for cellular cleanup and muscle recovery. Synergizes with Urolithin A for complete renewal.*",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Spermidine_b728c257-ad69-4cca-a8aa-607434264373.png?v=1769539735",
    sectionTitle: "ACTIVATION TIMELINE",
    sectionText:
      "Absorbed in 1-2 hours. Autophagy activates within 4-6 hours. Full benefits accumulate over 8-12 weeks.*",
  },
  {
    id: "proof",
    title: "S‑Allyl Cysteine 1mg",
    description:
      "Nrf2 antioxidant that enhances glutathione for vascular and neural resilience under training stress.*",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/S-ally_cystine.gif?v=1769539735",
    sectionTitle: "ACTIVATION TIMELINE",
    sectionText:
      "Peak plasma at 30-60 minutes. Nrf2 activation begins within 2-4 hours.*",
  },
];
