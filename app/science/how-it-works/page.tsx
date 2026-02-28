import { BenefitsHeroSection } from "components/benefits";
import {
  ComparisonTableSection,
  MitopureBenefitsSection,
} from "components/home";
import { HowItWorkHeroSection } from "components/how-it-works/HowItWorkHeroSection";
import { HowItWorksRevitalizeSection } from "components/how-it-works/HowItWorksRevitalizeSection";
import { MitopureTransformationSection } from "components/how-it-works/MitopureTransformationSection";
import { LabsCtaSection } from "components/product/labs-cta-section";
// import CTASection from "components/layout/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover the clinically proven benefits of Mitopure® Urolithin A.",
};

export default async function HowItWorksPage() {
  return (
    <>
      <HowItWorkHeroSection/>
      <HowItWorksRevitalizeSection />
      <MitopureTransformationSection />
      <LabsCtaSection />
    </>
  );
}
