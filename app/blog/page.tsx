import CTASection from "components/layout/cta-section";
import { getArticles } from "lib/shopify";
import { Metadata } from "next";
import { BlogListing } from "../../components/blog/BlogListing";

export const metadata: Metadata = {
  title: "The Read | Insights into the Future of Muscle Longevity | MuscalarPro",
  description:
    "Explore the latest research on longevity, cellular intelligence, and the science of skeletal muscle health. Expert insights for vital aging.",
  openGraph: {
    title: "The Read | Insights into the Future of Muscle Longevity | MuscalarPro",
    description:
      "Explore the latest research on longevity, cellular intelligence, and the science of skeletal muscle health. Expert insights for vital aging.",
    type: "website",
    url: "/blog",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Brain-Age-1-1536x864.jpg?v=1768499560",
        width: 1200,
        height: 630,
        alt: "MuscalarPro Blog - The Read",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Read | Insights into Muscle Longevity | MuscalarPro",
    description:
      "Expert insights on longevity and cellular health. Read the latest on the Musclespan protocol.",
    images: ["https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Brain-Age-1-1536x864.jpg?v=1768499560"],
  },
};

export default async function Page() {
  const articles = await getArticles({ first: 100 });

  <main>
    <BlogListing articles={articles || []} />
    {/* <CTASection /> */}
  </main>;
}
