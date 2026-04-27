import { GlpBanner } from "components/glp-1/GlpBanner";
import { GlpHero } from "components/glp-1/GlpHero";
import { ActionGrid } from "components/glp-1/ActionGrid";
import { BlindSpotSection } from "components/glp-1/BlindSpotSection";
import { DoctorSection } from "components/glp-1/DoctorSection";
import { TestimonialsSection } from "components/glp-1/TestimonialsSection";
import { BodyDecodingSection } from "components/glp-1/BodyDecodingSection";
import { ProvenScienceSection } from "components/glp-1/ProvenScienceSection";
import { MedicalTeamSection } from "components/glp-1/MedicalTeamSection";
import { LeadCaptureSection } from "components/glp-1/LeadCaptureSection";
import { QuizSection } from "components/glp-1/QuizSection";
import { ComparisonTableSection, FAQSection, WeightLossSection } from "components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GLP-1 Muscle Support | MuscalarPro",
  description: "Protect your muscle while on GLP-1. Discover clinically-backed protocols to preserve lean mass and optimize your healthspan.",
};

export default function GlpPage() {
  return (
    <main className="bg-white">
      <GlpBanner />
      {/* <GlpHero /> */}
      <ActionGrid />
      <QuizSection />
      <BlindSpotSection />
      <DoctorSection />
      <TestimonialsSection />
      <BodyDecodingSection />
      <ComparisonTableSection />
      <ProvenScienceSection />
      <MedicalTeamSection />

      {/* <div id="science">
        <WeightLossSection />
      </div> */}
  
      <LeadCaptureSection />
      
      {/* <FAQSection /> */}
    </main>
  );
}
