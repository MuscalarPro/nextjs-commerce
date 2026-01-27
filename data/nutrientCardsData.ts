// Data for the NutrientCards component

export type NutrientCard = {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  sectionTitle: string;
  sectionText: string;
};

export const nutrientCardsData: NutrientCard[] = [
  {
    id: "musclespan",
    title: "Urolithin A 1g — Lifespan",
    description:
      "Mitochondrial renewal via mitophagy; human RCTs show reduced plasma acylcarnitines/ceramides and CRP (JAMA Netw Open 2022). Quality control clears damaged mitochondria that accumulate with age, with 4‑month signals exceeding short‑term NAD+ boosts (Cell Rep Med 2022).",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/07213526fc7547e38192fb664bcd8147.mp4",
    sectionTitle: "WHY IT'S ESSENTIAL",
    sectionText:
      "Targets mitochondrial quality control so cellular energy systems age more slowly—not just short‑term stimulation.",
  },
  {
    id: "lifespan",
    title: "Spermidine 6mg — Musclespan",
    description:
      "Autophagy inducer that supports cellular cleanup for muscle adaptation (Nature Med 2016). Preclinical longevity data plus mechanistic fit with UA’s mitophagy pathway.",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/0c83b548ba184cdebebaf69e7b4a6b38.mp4",
    sectionTitle: "DOSE & TOLERABILITY",
    sectionText:
      "Dose‑matched to human tolerability studies (Autophagy 2009) to keep cleanup pathways on without compromising performance.",
  },
  {
    id: "proof",
    title: "S‑Allyl Cysteine 1mg — Healthspan",
    description:
      "Nrf2‑linked antioxidant response that protects under training stress (J Neurochem 2015). Supports vascular and neural resilience during high‑output phases; garlic‑derived and complements the mitophagy/autophagy stack.",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/cd61e61842d441688adf8d71f8f9b4a4.mp4",
    sectionTitle: "NOTE",
    sectionText:
      "Dietary supplement. Not intended to diagnose, treat, cure, or prevent any disease. Individual results vary with training, sleep, and protein intake.",
  },
];

