import {
  BestsellerSection,
  ExpertTestimonialSection,
  HeroSection,
  MitopureBenefitsSection,
  MoreThanHumanSection,
  ResearchStatsSection,
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
      {/* <MoreThanHumanSection />
      <ResearchStatsSection />
      <MitopureBenefitsSection />
      <ExpertTestimonialSection />
      <CTASection />
      <Footer /> */}
    </>
  );
}
