export interface GuideCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const guides: GuideCard[] = [
  {
    id: "1",
    title: "Personalized Intelligence",
    description:
      "General AI lists possibilities. M3 Concierge cuts through the noise to focus on what actually applies to you.",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/1.webp?v=1773838938",
    imageAlt: "AI analysis interface",
  },
  {
    id: "2",
    title: "Follow-Through Engine",
    description: "We don't just give answers we help you follow through.",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2.webp?v=1773838938",
    imageAlt: "Progress tracking interface",
  },
  {
    id: "3",
    title: "Clinician-in-the-Loop",
    description: "We loop in real clinicians when it matters.",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/3_1.webp?v=1773838938",
    imageAlt: "Doctor chat interface",
  },
  {
    id: "4",
    title: "Longitudinal Pattern Detection",
    description:
      "We remember the details, connect the dots, and flag risks ahead of time.",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/4.webp?v=1773838938",
    imageAlt: "Long term data tracking",
  },
];
