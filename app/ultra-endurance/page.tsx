import { UltraEnduranceBento } from "components/ultra-endurance/UltraEnduranceBento";
import { UltraEnduranceBiomarkers } from "components/ultra-endurance/UltraEnduranceBiomarkers";
import { UltraEnduranceCellReveal } from "components/ultra-endurance/UltraEnduranceCellReveal";
import { UltraEnduranceCompare } from "components/ultra-endurance/UltraEnduranceCompare";
import { UltraEnduranceDelivery } from "components/ultra-endurance/UltraEnduranceDelivery";
import { UltraEnduranceDoctors } from "components/ultra-endurance/UltraEnduranceDoctors";
import { UltraEnduranceEcosystem } from "components/ultra-endurance/UltraEnduranceEcosystem";
// Hidden for now per client request. Uncomment this import and the
// <UltraEnduranceEvidence /> usage below to restore the "Backed by data.
// Not hype." section.
// import { UltraEnduranceEvidence } from "components/ultra-endurance/UltraEnduranceEvidence";
import { UltraEnduranceFaq } from "components/ultra-endurance/UltraEnduranceFaq";
import { UltraEnduranceHero } from "components/ultra-endurance/UltraEnduranceHero";
import { UltraEnduranceMembership } from "components/ultra-endurance/UltraEnduranceMembership";
// Hidden for now per client request. Uncomment this import and the
// <UltraEnduranceProtocol /> usage below to restore the "Three actives.
// One cellular operating system." section.
// import { UltraEnduranceProtocol } from "components/ultra-endurance/UltraEnduranceProtocol";
import { UltraEnduranceTransformation } from "components/ultra-endurance/UltraEnduranceTransformation";
// Hidden for now per client request. Uncomment this import and the
// <UltraEnduranceSocialProof /> usage below to restore the "Used by
// athletes, coaches, and people chasing the line." section.
// import { UltraEnduranceSocialProof } from "components/ultra-endurance/UltraEnduranceSocialProof";
// Hidden for now per client request. Uncomment this import and the
// <UltraEnduranceWhy /> usage below to restore the "The work of a
// sports-science lab — in two capsules." section.
// import { UltraEnduranceWhy } from "components/ultra-endurance/UltraEnduranceWhy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultra Endurance | MuscalarPro [M3]",
  description:
    "Built for ultra-endurance. M3 protects the mitochondrial engine behind sustained power, faster recovery, and the stamina to outlast the distance.",
  openGraph: {
    title: "Ultra Endurance | MuscalarPro [M3]",
    description:
      "Built for ultra-endurance. M3 protects the mitochondrial engine behind sustained power, faster recovery, and the stamina to outlast the distance.",
    type: "website",
    url: "/ultra-endurance",
  },
};

export default function UltraEndurancePage() {
  return (
    <main className="bg-[#0B1F2A]">
      <UltraEnduranceHero />
      <UltraEnduranceDelivery />
      <UltraEnduranceBento />
      <UltraEnduranceCompare />
      <UltraEnduranceTransformation />
      <UltraEnduranceCellReveal />
      <UltraEnduranceEcosystem />
      {/* <UltraEnduranceProtocol /> — hidden, restore by uncommenting */}
      {/* <UltraEnduranceEvidence /> — hidden, restore by uncommenting */}
      {/* <UltraEnduranceWhy /> — hidden, restore by uncommenting */}
      {/* <UltraEnduranceSocialProof /> — hidden, restore by uncommenting */}
      <UltraEnduranceDoctors />
      <UltraEnduranceBiomarkers />
      <UltraEnduranceMembership />
      <UltraEnduranceFaq />
    </main>
  );
}
