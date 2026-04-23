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
      "Mitophagy activator with complete human RCT evidence. Hamstring strength +12% at 16 weeks in sedentary adults 40–65, mean BMI 29.5.*",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/UROLITHIN_A_MOLECULE.png?v=1774851427",
    sectionTitle: "ACTIVATION TIMELINE",
    sectionText:
      "Plasma Tmax 2–4 hours. Mitochondrial gene signature changes at 4 weeks. Functional strength outcomes at 16 weeks.*",
  },
  {
    id: "lifespan",
    title: "Spermidine 6mg",
    description:
      "Broad autophagy inducer. Pairs with Urolithin A's mitochondrial focus. RCT data emerging; observational cohort data strong.*",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/SPERMIDINE_MOLECULE.png?v=1774851427",
    sectionTitle: "ACTIVATION TIMELINE",
    sectionText:
      "Absorbed in 1–2 hours. Autophagy induction at 4–6h. Sustained cellular effects reported at 8–12 weeks.*",
  },
  {
    id: "proof",
    title: "S‑Allyl Cysteine 1mg",
    description:
      "Nrf2 pathway activator. Aged garlic extract RCTs show improved vascular function and reduced oxidative stress markers.*",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/S-ALLYL-CYSTEINE_MOLECULE.png?v=1774851427",
    sectionTitle: "ACTIVATION TIMELINE",
    sectionText:
      "Peak plasma 30–60 minutes. Nrf2 target-gene response within 2–4 hours.*",
  },
];
