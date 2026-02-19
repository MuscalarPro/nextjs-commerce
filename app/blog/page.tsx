import CTASection from "components/layout/cta-section";
import { getArticles } from "lib/shopify";
import { Metadata } from "next";
import { BlogListing } from "../../components/blog/BlogListing";

export const metadata: Metadata = {
  title: "The Read | Insights into the future of health",
  description:
    "Explore the latest insights on longevity, health intelligence, and personalized medicine.",
};

export default async function Page() {
  const articles = await getArticles({ first: 100 });

  <main>
    <BlogListing articles={articles || []} />
    <CTASection />
  </main>;
}
