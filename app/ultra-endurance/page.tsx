import { UltraEnduranceEcosystem } from "components/ultra-endurance/UltraEnduranceEcosystem";
import { UltraEnduranceEvidence } from "components/ultra-endurance/UltraEnduranceEvidence";
import { UltraEnduranceFaq } from "components/ultra-endurance/UltraEnduranceFaq";
import { UltraEnduranceHero } from "components/ultra-endurance/UltraEnduranceHero";
import { UltraEnduranceMembership } from "components/ultra-endurance/UltraEnduranceMembership";
import { UltraEnduranceProtocol } from "components/ultra-endurance/UltraEnduranceProtocol";
import { UltraEnduranceSocialProof } from "components/ultra-endurance/UltraEnduranceSocialProof";
import { UltraEnduranceWhy } from "components/ultra-endurance/UltraEnduranceWhy";
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
      <UltraEnduranceEcosystem />
      <UltraEnduranceProtocol />
      <UltraEnduranceEvidence />
      <UltraEnduranceWhy />
      <UltraEnduranceSocialProof />
      <UltraEnduranceMembership />
      <UltraEnduranceFaq />
    </main>
  );
}
