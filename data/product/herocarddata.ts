// data.ts (or wherever you keep constants)
export const herocarddata = [
  {
    id: 1,
    icon: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1_172d16a6-09fc-414a-9c78-d623fc42bedb.webp?v=1769602679",
    iconAlt: "Human Evidence",
    title: "Every molecule has human evidence behind it.",
    description:
      "<i>Urolithin A</i> has a 16-week placebo-controlled trial in adults 40 to 65. <i>Spermidine</i> has human cohort data linking dietary intake to muscle preservation. <i>S-allyl cysteine</i> has biomarker trials in cardiovascular health.",
    roundedClass: "rounded-xl",
  },
  {
    id: 2,
    icon: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/2.webp?v=1769576771",
    iconAlt: "Cleanup Systems",
    title: "Three cleanup systems, one stack.",
    description:
      "<i>Mitophagy</i> clears damaged mitochondria. <i>Autophagy</i> recycles worn proteins. <i>S-allyl cysteine</i> adds antioxidant defense. Each pathway works on its own; together they keep muscle cells producing energy.",
    roundedClass: "rounded-2xl",
  },
  {
    id: 3,
    icon: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3.webp?v=1769576771",
    iconAlt: "Trial Doses",
    title: "The exact doses used in the trials.",
    description:
      "<b>1,000 mg</b> <i>Urolithin A</i>. <b>6 mg</b> <i>spermidine</i>. <b>1 mg</b> <i>S-allyl cysteine</i>. Per daily serving. The 1,000 mg matches the high-dose arm in Singh et al. 2022 — not a fractional amount.",
    roundedClass: "rounded-2xl",
  },
  {
    id: 4,
    icon: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/4.webp?v=1769576771",
    iconAlt: "Clinical Data",
    title: "What the data showed at 16 weeks.",
    description:
      "In adults 40 to 65, <i>Urolithin A</i> at 1,000 mg daily added up to <b>12% hamstring strength</b> and <b>41% muscle endurance</b> vs placebo. <i>CRP</i>, a systemic inflammation marker, dropped roughly <b>40%</b>.",
    roundedClass: "rounded-2xl",
  },
] as const;
