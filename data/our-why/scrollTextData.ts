export interface ScrollItem {
  text: string;
  highlightedText?: string;
  prefix?: string;
}

export const scrollTextContent = {
  headline: {
    main: "Peak Performance",
    sub: "is broken-->",
  },
  paragraphs: [
    "From poor food quality, to inescapable environmental toxins and a modern lifestyle that is hijacking our biology, it has never been harder to be healthy.",
    "And it's clear that existing institutions aren't working.",
    'The supplement industry monetizes our confusion with under-dosed "fairy dust," while the medical system waits for us to break before intervening. No one is proactively engineering your resilience.',
    "Your prime is shrinking.",
  ],
  listItems: [
    {
      prefix: "Lifespan is ",
      highlightedText: "going backwards",
      text: "",
    },
    {
      highlightedText: "88%",
      text: " of people are metabolically unhealthy",
    },
    {
      highlightedText: "5,000+ chemicals",
      text: " exists in the Indian food supply",
    },
    {
      prefix: "Obesity rates have more than ",
      highlightedText: "tripled",
      suffix: " since 1960",
    },
    {
      prefix: "Indians put an average of ",
      highlightedText: "100",
      text: " chemicals on their bodies each day",
    },
    {
      highlightedText: "Musclespan crashes  ",
      text: "alongside metabolic collapse and infertility",
    },
    {
      text: "Female infertility is at record highs, male testosterone and sperm count at record lows",
    },
  ],
};
