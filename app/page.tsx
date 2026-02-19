import {
  AllInOneAppSection,
  BestsellerSection,
  ComparisonTableSection,
  ExpertTestimonialSection,
  FAQSection,
  GuideSection,
  HeroSection,
  LatestNewsSection,
  MitopureBenefitsSection,
  MoreThanHumanSection,
  PersonalDoctorSection,
  ResearchStatsSection,
  StoriesSection,
  SuperpowerReviewsSection,
  ViacapSection,
  WeightLossSection,
} from "components/home";
import CTASection from "components/layout/cta-section";
import Footer from "components/layout/footer";
import { LabsCtaSection } from "components/product/labs-cta-section";
import { getArticles } from "lib/shopify";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Unlock your new health intelligence. 100+ lab tests. Every year. Detect early signs of 1,000+ conditions. All for only $17/month.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const articles = await getArticles({ first: 10 });

  return (
    <>
      <HeroSection />
      <BestsellerSection />
      <ViacapSection />
      <MoreThanHumanSection />
      <MitopureBenefitsSection />
      <ResearchStatsSection />
      <ComparisonTableSection />
      <WeightLossSection />
      <PersonalDoctorSection />
      <GuideSection />
      <AllInOneAppSection />
      <ExpertTestimonialSection />
      <SuperpowerReviewsSection />
      <StoriesSection />
      <LabsCtaSection show={["muscalar", "shop"]} />
      <FAQSection />
      <LatestNewsSection articles={articles} />
      <CTASection />
      
    </>
  );
}
