import {
  BestsellerSection,
  ComparisonTableSection,
  ExpertTestimonialSection,
  HeroSection,
  LatestNewsSection,
  MitopureBenefitsSection,
  MoreThanHumanSection,
  ResearchStatsSection,
  ViacapSection,
  AllInOneAppSection,
  WeightLossSection,
  OurStudiesSection,
} from "components/home";
import CTASection from "components/layout/cta-section";
import Footer from "components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Unlock your new health intelligence. 100+ lab tests. Every year. Detect early signs of 1,000+ conditions. All for only $17/month.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BestsellerSection />
       <ViacapSection />
     
       <MoreThanHumanSection />
        <WeightLossSection />
      <ResearchStatsSection />
      {/* <OurStudiesSection /> */}
      <MitopureBenefitsSection />
      <ComparisonTableSection />
      <ExpertTestimonialSection />
       <AllInOneAppSection />
      <LatestNewsSection />
      <CTASection />
      <Footer /> 
    </>
  );
}
