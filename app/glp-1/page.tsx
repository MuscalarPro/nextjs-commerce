import { ActionGrid } from "components/glp-1/ActionGrid";
import { BlindSpotSection } from "components/glp-1/BlindSpotSection";
import { BodyDecodingSection } from "components/glp-1/BodyDecodingSection";
// Hidden for now per client request. Uncomment this import and the
// <DoctorSection /> usage below to restore the "Your personal musclespan
// doctor, one message away" section.
// import { DoctorSection } from "components/glp-1/DoctorSection";
import { LeadCaptureSection } from "components/glp-1/LeadCaptureSection";
import { MedicalTeamSection } from "components/glp-1/MedicalTeamSection";
import { MuscleLongevityBentoSection } from "components/glp-1/MuscleLongevityBentoSection";
import { ProvenScienceSection } from "components/glp-1/ProvenScienceSection";
// Hidden for now per client request. Uncomment this import and the
// <QuizSection /> usage below to restore the "What's your musclespan risk
// level?" section.
// import { QuizSection } from "components/glp-1/QuizSection";
// Hidden for now per client request. Uncomment this import and the
// <TestimonialsSection /> usage below to restore the "[M3] is changing
// thousands of lives" section.
// import { TestimonialsSection } from "components/glp-1/TestimonialsSection";
import { ComparisonTableSection } from "components/home";
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
      <MuscleLongevityBentoSection />
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
