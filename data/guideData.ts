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
    title: "Precision, Not Guesswork",
    description:
      "General AI lists possibilities. M3 Concierge cuts through the noise to focus on what actually applies to you. We take into account your training history, biomarkers, supplement stack, and lifestyle.",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1_1.jpg?v=1770723858",
    imageAlt: "AI analysis interface",
  },
  {
    id: "2",
    title: "Active Management",
    description:
      "We don't just give answers we help you follow through. From dosing reminders to adjusting your M3 protocol when life gets in the way, we make sure you stay consistent.",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/2_1.jpg?v=1770723859",
    imageAlt: "Progress tracking interface",
  },
  {
    id: "3",
    title: "Clinical Oversight",
    description:
      "AI can surface insights fast, but a doctor adds context. We loop in real clinicians to answer complex questions around your stack, biomarkers, or training load.",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3_1.jpg?v=1770723859",
    imageAlt: "Doctor chat interface",
  },
  {
    id: "4",
    title: "Long-term Intelligence",
    description:
      "We remember the details, connect the dots, and flag risks ahead of time. By tracking everything over time, we reveal hidden patterns and surface risks before they slow you down.",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/4_1.jpg?v=1770723858",
    imageAlt: "Long term data tracking",
  },
];
