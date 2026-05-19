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
  PersonalDoctorSection,
  ResearchStatsSection,
  StoriesSection,
  SuperpowerReviewsSection,
  ViacapSection,
  WeightLossSection,
} from "components/home";
import { LabsCtaSection } from "components/product/labs-cta-section";
import { getArticles, getProduct } from "lib/shopify";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuscalarPro | Precision Muscle Longevity & Cellular Optimization",
  description:
    "Unlock peak performance with bio-cellular precision. MuscalarPro delivers clinically-backed mitochondrial renewal for skeletal muscle—your organ of longevity.",
  openGraph: {
    title: "MuscalarPro | Precision Muscle Longevity & Cellular Optimization",
    description:
      "Unlock peak performance with bio-cellular precision. MuscalarPro delivers clinically-backed mitochondrial renewal for skeletal muscle—your organ of longevity.",
    type: "website",
    url: "/",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/91e4fa12-200b-468d-930c-74097959fd44.jpg?v=1774614040",
        width: 1200,
        height: 630,
        alt: "MuscalarPro - Precision Muscle Longevity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MuscalarPro | Precision Muscle Longevity & Cellular Optimization",
    description:
      "Unlock peak performance with bio-cellular precision. MuscalarPro delivers clinically-backed mitochondrial renewal.",
    images: [
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/91e4fa12-200b-468d-930c-74097959fd44.jpg?v=1774614040",
    ],
  },
};

export default async function HomePage() {
  const articles = await getArticles({ first: 10 });
  const m3Product = await getProduct("decode-peak-performance-m3");

  return (
    <>
      <HeroSection />
      <BestsellerSection product={m3Product} />
      <ViacapSection />
      {/* <MoreThanHumanSection /> */}
      <MitopureBenefitsSection />
      <ResearchStatsSection />
      <ComparisonTableSection />
      <WeightLossSection />
      <PersonalDoctorSection />
      <GuideSection />
      <AllInOneAppSection />
      <ExpertTestimonialSection />
      {/* <SuperpowerReviewsSection /> */}
      <StoriesSection />
      <LabsCtaSection show={["muscalar", "shop"]} />
      <FAQSection />
      <LatestNewsSection articles={articles} />
      {/* <CTASection /> */}
    </>
  );
}
