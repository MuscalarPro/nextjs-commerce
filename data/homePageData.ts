/** Expert avatars for testimonial section (first N in color, rest grayscale) */
export const expertAvatars = [
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
] as const;

/** Intro copy and CTA for the research stats section */
export const researchStatsIntro = {
  headline:
    "Time to give your cells new life with high-performance products powered by mitopure®, our powerful ingredient that unlocks a precise dose of the rare Urolithin A molecule and promotes healthy aging.",
  ctaLabel: "DISCOVER OUR SCIENCE",
  ctaHref: "/science",
} as const;

/** Research stats for the stats grid */
export const researchStats = [
  {
    value: "15+",
    title: "Years of research",
    description:
      "In collaboration with the Swiss Federal Institute of Technology de Lausanne (EPFL)",
  },
  {
    value: "11",
    title: "Human clinical trials",
    description:
      "Completed and ongoing clinical trials involving over 900 participants",
  },
  {
    value: "500+",
    title: "Studies on Urolithin A",
    description:
      "Scientists have extensively explored the effectiveness of Urolithin A on health",
  },
  {
    value: "56",
    title: "Patents",
    description:
      "Our proprietary ingredient Mitopure® is protected under 50+ patents",
  },
] as const;

/** Benefit image URLs (order: Renewal, Strength, Energy, Bioavailability) */
export const mitopureBenefitImages = [
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/845bc01d868fc859c3208b28808f16570e12efe3-380x385.svg?v=1769856525",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/4d0b955b40237733d20907ec96e5387794a26246-380x380.svg?v=1769856525",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/ecb6eee4ee7a98dcdab48a3b6993ff1fa01915ad-380x385.svg?v=1769856525",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/845bc01d868fc859c3208b28808f16570e12efe3-380x385.svg?v=1769856525",
] as const;

/** Per-benefit claim copy (order: Renewal, Strength, Energy, Bioavailability) */
export const mitopureBenefitClaims = [
  "Mitochondrial renewal increases by +39% after 16 weeks over placebo*",
  "Muscle strength increases by up to 12% after 16 weeks*",
  "Induces a signature of improved mitochondria*",
  "Mitopure unlocks 6x more Urolithin A than diet alone**",
] as const;

/** Mitopure benefits list and chart data */
export const mitopureBenefitsData = {
  headline: "CLINICALLY PROVEN BENEFITS",
  benefits: ["Renewal", "Strength", "Energy", "Bioavailability"] as const,
  ctaLabel: "SEE STUDY DETAILS",
  ctaHref: "/study-details",
  chart: {
    title: "INCREASE IN MITOPHAGY",
    placeboHeight: "20%",
    mitopureHeight: "39%",
    mitopureLabel: "+39%",
  },
} as const;

/** Expert testimonial section */
export const expertTestimonialData = {
  headline:
    "Find out why the experts trust Urolithin A from Timeline",
  portraitSrc:
    "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  portraitAlt: "Dr. Gabrielle Lyon",
  quote:
    "No other supplement does what Timeline can. It is an amazing advance for muscle health and longevity.",
  name: "Dr. Gabrielle Lyon",
  title: "Founder Institute for Muscle-Centric Medicine®",
  /** First N avatars shown in color; rest grayscale */
  avatarsInColor: 2,
} as const;
