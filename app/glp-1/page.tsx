import { ActionGrid } from "components/glp-1/ActionGrid";
import { BlindSpotSection } from "components/glp-1/BlindSpotSection";
import { BodyDecodingSection } from "components/glp-1/BodyDecodingSection";
import { DoctorSection } from "components/glp-1/DoctorSection";
import { LeadCaptureSection } from "components/glp-1/LeadCaptureSection";
import { MedicalTeamSection } from "components/glp-1/MedicalTeamSection";
import { ProvenScienceSection } from "components/glp-1/ProvenScienceSection";
import { QuizSection } from "components/glp-1/QuizSection";
import { TestimonialsSection } from "components/glp-1/TestimonialsSection";
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
      <QuizSection />
      <BlindSpotSection />
      <DoctorSection />
      <TestimonialsSection />
      <BodyDecodingSection />
      <ComparisonTableSection />
      <ProvenScienceSection />
      <MedicalTeamSection />
      <LeadCaptureSection />
    </main>
  );
}
