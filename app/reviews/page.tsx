import { Metadata } from "next";
import ReviewsPage from "../../components/reviews/ReviewsPage";

export const metadata: Metadata = {
  title: "Member Stories | Muscle Longevity Transformations | MuscalarPro",
  description:
    "Hear from members of the MuscalarPro community about their transformations, increased vitality, and muscle longevity journeys.",
  openGraph: {
    title: "Member Stories | Muscle Longevity Transformations | MuscalarPro",
    description:
      "Hear from members of the MuscalarPro community about their transformations, increased vitality, and muscle longevity journeys.",
    type: "website",
    url: "/reviews",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Main_e655abb9-6b5c-4486-a470-5bab1b743000.jpg?v=1769612254",
        width: 1200,
        height: 630,
        alt: "MuscalarPro Member Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Member Stories | Muscle Longevity Transformations | MuscalarPro",
    description:
      "Real stories from the MuscalarPro community. Transformations in strength and vitality.",
    images: [
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Main_e655abb9-6b5c-4486-a470-5bab1b743000.jpg?v=1769612254",
    ],
  },
};

export default function Page() {
  return <ReviewsPage />;
}
