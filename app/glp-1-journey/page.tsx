import { AskBeforeStart } from "components/glp-1/AskBeforeStart";
import { CostBand } from "components/glp-1/CostBand";
import { JourneyStoryTimeline } from "components/glp-1/JourneyStoryTimeline";
import { MemberPhotoCards } from "components/glp-1/MemberPhotoCards";
import { MuscleAtStakeStats } from "components/glp-1/MuscleAtStakeStats";
import { MuscleBoxBand } from "components/glp-1/MuscleBoxBand";
import { MuscleStackPricing } from "components/glp-1/MuscleStackPricing";
import { MusclespanHero } from "components/glp-1/MusclespanHero";
// Hidden for now — replaced by <BestsellerSection /> below. Restore by
// uncommenting this import and the <ProtectIntroBand /> usage.
// import { ProtectIntroBand } from "components/glp-1/ProtectIntroBand";
import { RefusedToLoseQuote } from "components/glp-1/RefusedToLoseQuote";
import { SafetyInfo } from "components/glp-1/SafetyInfo";
import { ScienceJourneyTabs } from "components/glp-1/ScienceJourneyTabs";
import { ThreeStepsSection } from "components/glp-1/ThreeStepsSection";
import { BestsellerSection } from "components/home";
import { getProduct } from "lib/shopify";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GLP-1 Muscle Protection | MuscalarPro [M3]",
  description:
    "On a GLP-1? Up to 45% of the weight lost can be lean tissue. M3 is the daily stack designed to protect the muscle the scale won't — Urolithin A, Spermidine and S-Allyl Cysteine in clinical doses, ~₹199/day.",
  openGraph: {
    title: "GLP-1 Muscle Protection | MuscalarPro [M3]",
    description:
      "The daily stack that keeps your musclespan while the GLP-1 does its job.",
    type: "website",
    url: "/glp-1-journey",
  },
};

export default async function GlpJourneyPage() {
  // Same M3 product the home page hydrates BestsellerSection with.
  const m3Product = await getProduct("decode-peak-performance-m3");

  return (
    <main className="bg-[#F5F1EA]">
      <MusclespanHero />
      {/* <ProtectIntroBand /> — hidden, restore by uncommenting */}
      <BestsellerSection product={m3Product} />
      <RefusedToLoseQuote />
      <JourneyStoryTimeline />
      <MuscleBoxBand />
      <ThreeStepsSection />
      <ScienceJourneyTabs />
      <MuscleStackPricing />
      <CostBand />
      <MemberPhotoCards />
      <MuscleAtStakeStats />
      <AskBeforeStart />
      <SafetyInfo />
    </main>
  );
}
