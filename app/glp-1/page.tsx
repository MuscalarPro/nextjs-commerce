import { ActionGrid } from "components/glp-1/ActionGrid";
import { BlindSpotSection } from "components/glp-1/BlindSpotSection";
import { BodyDecodingSection } from "components/glp-1/BodyDecodingSection";
// Hidden for now per client request. Uncomment this import and the
// <DoctorSection /> usage below to restore the "Your personal musclespan
// doctor, one message away" section.
// import { DoctorSection } from "components/glp-1/DoctorSection";
import { LeadCaptureSection } from "components/glp-1/LeadCaptureSection";
import { MedicalTeamSection } from "components/glp-1/MedicalTeamSection";
// Hidden — replaced by <WeightLossSection /> from components/home below.
// Restore by uncommenting this import and the usage in the JSX.
// import { MuscleLongevityBentoSection } from "components/glp-1/MuscleLongevityBentoSection";
import { ProvenScienceSection } from "components/glp-1/ProvenScienceSection";
// Hidden for now per client request. Uncomment this import and the
// <QuizSection /> usage below to restore the "What's your musclespan risk
// level?" section.
// import { QuizSection } from "components/glp-1/QuizSection";
// Hidden for now per client request. Uncomment this import and the
// <TestimonialsSection /> usage below to restore the "[M3] is changing
// thousands of lives" section.
// import { TestimonialsSection } from "components/glp-1/TestimonialsSection";
import { ComparisonTableSection, WeightLossSection } from "components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GLP-1 Muscle Support | MuscalarPro",
  description:
    "Protect your muscle while on GLP-1. Discover clinically-backed protocols to preserve lean mass and optimize your healthspan.",
  openGraph: {
    title: "GLP-1 Muscle Support | MuscalarPro",
    description:
      "Protect your muscle while on GLP-1. Discover clinically-backed protocols to preserve lean mass and optimize your healthspan.",
    type: "website",
    url: "/glp-1",
  },
};

export default function GlpPage() {
  return (
    <main className="bg-white">
      <ActionGrid />
      {/* <QuizSection /> — hidden, restore by uncommenting */}
      <BlindSpotSection />
      {/* <MuscleLongevityBentoSection /> — hidden, replaced by the shared
          home-page <WeightLossSection /> below with a GLP-1-specific
          hero photo. Restore by uncommenting. */}
      {/* Wrapper adds white-space breathing room between the dark
          BlindSpotSection above and the blue WeightLossSection below
          (page bg is white, so the gap shows through). */}
      <div className="mt-12 md:mt-16 lg:mt-20">
        <WeightLossSection heroImage="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260604_133020_4ac518c7-18b9-42f4-9038-6a69b88d3de6-2.png?v=1781204356" />
      </div>
      {/* <DoctorSection /> — hidden, restore by uncommenting */}
      {/* <TestimonialsSection /> — hidden, restore by uncommenting */}
      <BodyDecodingSection />
      <ComparisonTableSection />
      <ProvenScienceSection />
      <MedicalTeamSection />
      <LeadCaptureSection />
    </main>
  );
}
