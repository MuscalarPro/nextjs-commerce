import { BenefitsHeroSection, IngredientSection } from "components/benefits";
import { GridCardSection } from "components/benefits/GridCardSection";
import {
  ComparisonTableSection,
  MitopureBenefitsSection,
} from "components/home";
import CTASection from "components/layout/cta-section";
import { LabsCtaSection } from "components/product/labs-cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits",
  description:
    "Discover the clinically proven benefits of Mitopure® Urolithin A.",
};

export default async function BenefitsPage() {
  return (
    <>
      <BenefitsHeroSection />
      <MitopureBenefitsSection />
      <ComparisonTableSection />
      <GridCardSection />
      <IngredientSection />
    <LabsCtaSection />
    </>
  );
}
