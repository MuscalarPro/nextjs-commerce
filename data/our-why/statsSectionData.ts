export type Stat = {
  label: string;
  endValue: number | null;
  description: string;
};

export const stats: Stat[] = [
  {
    label: "12.4 years",
    endValue: 12.4,
    description:
      'is the average gap between lifespan and healthspan (the "sickspan").',
  },
  {
    label: "3–8%",
    endValue: null,
    description: "of muscle mass is lost per decade after age 30.",
  },
  {
    label: "40% drop",
    endValue: 40,
    description: "in mitochondrial function often accumulates by age 60.",
  },
  {
    label: "Cognitive decline",
    endValue: null,
    description:
      "is directly linked to mitochondrial dysfunction in the brain.",
  },
  {
    label: "40% decline",
    endValue: 40,
    description: "in mitochondrial capacity by age 60.",
  },
  {
    label: "Sarcopenia",
    endValue: null,
    description: 'is now considered the "new smoking" for longevity risk.',
  },
];
