// Legacy GLP-1 landing page — preserved at /glp-1-legacy for side-by-side
// comparison while the redesigned /glp-1 ships. Safe to delete once the new
// page is locked in. Imports the original components from components/glp-1/*
// which remain untouched.

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
  title: "GLP-1 Muscle Support (Legacy) | MuscalarPro",
  description:
    "Legacy GLP-1 landing — preserved for reference while the redesigned page ships.",
  robots: { index: false, follow: false },
};

export default function GlpLegacyPage() {
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
