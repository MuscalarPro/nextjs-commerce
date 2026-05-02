import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Longevity Quiz | Is M3 Right for You? | MuscalarPro",
  description:
    "Take the 5-minute MuscalarPro quiz to get a personalized assessment of how the M3 protocol aligns with your longevity goals.",
  openGraph: {
    title: "Longevity Quiz | Is M3 Right for You? | MuscalarPro",
    description:
      "Take the 5-minute MuscalarPro quiz to get a personalized assessment of how the M3 protocol aligns with your longevity goals.",
    type: "website",
    url: "/quiz",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260331_065913_2e5cb28c-61ea-4a6e-9f48-72dbdcc56b5d.png?v=1775112417",
        width: 1200,
        height: 630,
        alt: "MuscalarPro Longevity Quiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity Quiz | MuscalarPro",
    description:
      "Is M3 right for you? Take the quiz for a personalized longevity assessment.",
    images: [
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260331_065913_2e5cb28c-61ea-4a6e-9f48-72dbdcc56b5d.png?v=1775112417",
    ],
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
