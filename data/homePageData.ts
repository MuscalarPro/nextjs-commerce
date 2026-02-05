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
    "Time to give your cells new life with a high‑performance stack built for Musclespan—powered by clinically studied Urolithin A (1 g/day) plus Spermidine and S‑Allyl Cysteine to support cellular renewal and resilience. (JAMA Network Open, 2022) (Cell Reports Medicine, 2022)​",
  ctaLabel: "DISCOVER OUR SCIENCE",
  ctaHref: "/science",
} as const;


export const researchStats = [
  {
    value: "5+",
    title: "Years of research",
    description:
      "Built on mitophagy science translated into human performance outcomes. (JAMA Network Open, 2022)",
  },
  {
    value: "2",
    title: "Human RCTs (Urolithin A)",
    description:
      "Placebo‑controlled trials show improved muscle endurance and performance signals in humans. (JAMA Network Open, 2022) (Cell Reports Medicine, 2022)​",
  },
  {
    value: "3",
    title: "Precision bio‑molecules",
    description:
      "Urolithin A 1 g + Spermidine 6 mg + S‑Allyl Cysteine 1 mg per serving. (Muscalar Pro pack label) (JAMA Network Open, 2022) (Journal of Neurochemistry, 2015)​",
  },
  {
    value: "55+",
    title: "Patents",
    description:
      "Urolithin‑A–centered IP is broadly patented across multiple molecules",
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
  benefits: ["Mitchondria Health", "Muscle Strength", "Peak Endurance", "Brain Health"] as const,
  ctaLabel: "SEE STUDY DETAILS",
  ctaHref: "/studies",
  chart: {
    title: "INCREASE IN MITOPHAGY",
    placeboHeight: "20%",
    mitopureHeight: "39%",
    mitopureLabel: "+39%",
  },
} as const;

/** Comparison table: supplements vs criteria (check | partial | limited | none) */
export const comparisonTableData = {
  ctaLabel: "SEE STUDY DETAILS",
  ctaHref: "/studies",
  tabLabel: "COMPARE US TO OTHER",
  tabs: ["Muscalarpro™ [M3]", "Supplements/Competitors"] as const,
  title: "The Ultimate Longevity Powerhouse",
  criteria: [
    { label: "Musclespan (strength + endurance)", info: true },
    { label: "Directly activates mitophagy", info: true },
    { label: "Targets a root cause of age-related cellular energy decline", info: true },
    { label: "Benefits without exercise", info: true },
    { label: "Nootropic and cognitive effects", info: true },
    { label: "Complete human clinical trials", info: true },
  ],
  supplements: [
    {
      id: "mitopure",
      name: "M3 (Urolithin A + Spermidine + S‑allyl cysteine)",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/b485b93561e51f71971486b8536327613ab6fe13-200x200.avif?v=1769862141",
      badge: true,
      highlighted: true,
      values: ["check", "check", "check", "check", "partial", "check"] as const,
    },
    {
      id: "coq10",
      name: "CoQ10",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/28dd101626c16670736402e02f8c508ac43c4a43-200x200.avif?v=1769862140",
      badge: false,
      highlighted: false,
      values: ["partial", "none", "partial", "check", "partial", "check"] as const,
    },
    {
      id: "creatine",
      name: "Creatine",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/5b501065befb37c8272dacfd4f3c75893e919621-200x200.avif?v=1769862140",
      badge: false,
      highlighted: false,
      values: ["check", "none", "none", "none", "pdf", "check"] as const,
    },
    {
      id: "spermidine",
      name: "Spermidine",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/5b501065befb37c8272dacfd4f3c75893e919621-200x200_1.avif?v=1769862140",
      badge: false,
      highlighted: false,
      values: ["partial", "partial", "partial", "check", "partial", "limited"] as const,
    },
    {
      id: "nmn",
      name: "NMN",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/8cfa59bd043663ba44edd0d2e456db1fa3d65432-200x200.avif?v=1769862140",
      badge: false,
      highlighted: false,
      values: ["limited", "check", "partial", "check", "limited", "limited"] as const,
    },
  ],
} as const;

/** Latest news / blog section */
export const latestNewsData = {
  heading: "Latest news",
  ctaLabel: "OUR BLOG",
  ctaHref: "/blog",
  posts: [
    {
      id: "1",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/b485b93561e51f71971486b8536327613ab6fe13-200x200.avif?v=1769862141",
      category: "NUTRITION",
      date: "JAN 21, 2026",
      title: "Is Breakfast an Important Meal for Longevity?",
      href: "/blog/breakfast-longevity",
    },
    {
      id: "2",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/28dd101626c16670736402e02f8c508ac43c4a43-200x200.avif?v=1769862140",
      category: "NEWS - NUTRITION",
      date: "JAN 07, 2026",
      title: "The Science Behind Why Pet Owners Tend to Live Longer",
      href: "/blog/pet-owners-longevity",
    },
    {
      id: "3",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/5b501065befb37c8272dacfd4f3c75893e919621-200x200.avif?v=1769862140",
      category: "NUTRITION",
      date: "DEC 17, 2025",
      title: "Healthy Holiday Eating Made Easy: Feel Good, Stay Balanced",
      href: "/blog/healthy-holiday-eating",
    },
    {
      id: "4",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/8cfa59bd043663ba44edd0d2e456db1fa3d65432-200x200.avif?v=1769862140",
      category: "NEWS - NUTRITION - STUDIES",
      date: "DEC 12, 2025",
      title: "2025's Breakthrough Findings on Urolithin A",
      href: "/blog/urolithin-a-2025",
    },
    {
      id: "5",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/5b501065befb37c8272dacfd4f3c75893e919621-200x200_1.avif?v=1769862140",
      category: "NUTRITION",
      date: "DEC 01, 2025",
      title: "Why Whole Foods Matter for Healthy Aging",
      href: "/blog/whole-foods-aging",
    },
  ],
} as const;

/** Expert testimonial section data */
export const expertTestimonialData = {
  headline: "Find out why the experts trust Urolithin A from Timeline",
};

export const expertsList = [
  {
    id: "mark-hyman",
    portraitSrc: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Headshot_Mark_Hyman.jpg?v=1690000001",
    portraitAlt: "Dr. Mark Hyman",
    avatarSrc: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Headshot_Mark_Hyman_avatar.jpg?v=1690000001",
    quote: "This is a supplement I use myself everyday to be as healthy as I can, for as long as I can.",
    name: "Dr. Mark Hyman, MD",
    title: "Functional Medicine Physician, 15x New York Times Bestselling Author",
  },
  {
    id: "gabrielle-lyon",
    portraitSrc: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
    portraitAlt: "Dr. Gabrielle Lyon",
    avatarSrc: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
    quote: "No other supplement does what Timeline can. It is an amazing advance for muscle health and longevity.",
    name: "Dr. Gabrielle Lyon",
    title: "Founder Institute for Muscle-Centric Medicine®",
  },
] as const;
