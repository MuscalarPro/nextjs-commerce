import { Metadata } from "next";
import FAQPage from "../../components/faq/FAQPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Support | MuscalarPro",
  description:
    "Find answers to commonly asked questions about MuscalarPro membership, cellular renewal molecules, and the Musclespan protocol.",
  openGraph: {
    title: "Frequently Asked Questions | Support | MuscalarPro",
    description:
      "Find answers to commonly asked questions about MuscalarPro membership, cellular renewal molecules, and the Musclespan protocol.",
    type: "website",
    url: "/faqs",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Product_and_phone.png?v=1769691185",
        width: 1200,
        height: 630,
        alt: "MuscalarPro FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Support | MuscalarPro",
    description:
      "Everything you need to know about the MuscalarPro protocol and membership.",
    images: ["https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Product_and_phone.png?v=1769691185"],
  },
};

export default function Page() {
  return (
    <main>
      <FAQPage />
    </main>
  );
}
