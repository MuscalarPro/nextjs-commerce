import { BenefitsHeroSection } from "components/benefits";
import {
  ComparisonTableSection,
  MitopureBenefitsSection,
} from "components/home";
import CTASection from "components/layout/cta-section";
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
      <CTASection />
    </>
  );
}
