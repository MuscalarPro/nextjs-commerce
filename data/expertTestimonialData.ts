export const expertTestimonialData = {
  headline: "Find out why doctors trust [M3]",
};

export const expertsList = [
  {
    id: "gabrielle-lyon",
    portraitSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Dr.Rajaram_samant.jpg?v=1770368004",
    portraitAlt: "Dr. Gabrielle Lyon",
    avatarSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Dr.Rajaram_samant.jpg?v=1770368004",
    quote:
      "No other supplement does what M3 can. It is an amazing advance for muscle health and longevity.",
    name: "Dr. Rajaram Samant",
    title: "MD Celagenex, Longevity Researcher",
  },
  {
    id: "mark-hyman",
    portraitSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Dr.Ateeb_Shaikh.jpg?v=1770367988",
    portraitAlt: "Dr Ateeb Shaikh ",
    avatarSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Dr.Ateeb_Shaikh.jpg?v=1770367988",
    quote:
      "M3 is always in my personal science-backed stack for performance training and Cognitive benefits",
    name: "Dr Ateeb Shaikh",
    title: "HealthTech Expert",
  },
] as const;

export type Expert = (typeof expertsList)[number];
