// app/science/page.tsx

import CTASection from "components/layout/cta-section";
import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../components/layout/footer";
import {
  Certification,
  MeetUrolithinSection,
  MitochondriaEnergySection,
  MitochondriaStickySection,
  MitopureUrolithin,
  MitropureIntroSection,
  PlaceboControlled,
  PowerByMitoPure,
  Rigorouslytested,
  ScienceCtaBanner,
  ScientificAdvisorsSection,
  WeakMitochondriaSystemSection,
} from "../../components/science";
import { ComparisonTableSection } from "components/science/ComparisonTableSection";

export const metadata: Metadata = {
  title: "Science",
  description: "Discover the science behind Mitopure and cellular health.",
};

export default async function SciencePage() {
  return (
    <div>
      {/* Intro Section: Mitopure & Cellular Health */}

      <section className="w-full">
        <div className="w-full px-4 md:px-8 pt-4 md:pt-8">
          <div className="relative w-full h-[60vh] md:h-[80vh] rounded-[2rem] overflow-hidden">
            <Image
              src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/viacapbg.jpg?v=1770198196"
              alt="Smiling woman with healthy skin"
              fill
              className="absolute inset-0 h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <MitropureIntroSection />
      {/* Energy Section: Mitochondria Facts */}
      <MitochondriaEnergySection
        title="~90% of your musclespan is determined by mitochondrial quality."
        subtitle="The Science : Mitochondria are not just batteries; they are the command centers for aging. The trillions of cells that comprise your skeletal muscle rely on them to burn fat, synthesize protein, and regulate systemic inflammation."
        subtitles="The Reality: As we age, these engines degrade. 'Zombie mitochondria' accumulate, creating metabolic noise that blocks anabolic signals. This is the root cause of sarcopenia (muscle loss)."
        imageSrc="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Jce5yrUyXMpP7QT3ntPhYnNq7AU.avif?v=1770232961"
      />

      {/* Explorer Section: Body Parts & Benefits */}
      {/* <MitochondriaExplorerSection imageSrc="/images/science/yS30SfiascBWUl5rQ7fIk9Shyk.avif" /> */}
      <WeakMitochondriaSystemSection />
      <MitopureUrolithin />

      {/* Sticky Section: Mitochondrial Function Decline */}
      <MitochondriaStickySection />

      {/* Weak Mitochondria System Interactive Map */}

      {/*Mitopure® Urolithin */}
      <MeetUrolithinSection />

      <ScientificAdvisorsSection />

      <ScienceCtaBanner />
      {/*PoweredBy Mitopure section
       */}
      <PowerByMitoPure />

      {/*Certification */}
      <Certification />
        {/*Comparison Table */}
              <ComparisonTableSection/>

      {/*Rigorously Tested */}
      <Rigorouslytested />

      {/*PlaceboControlled */}
      <PlaceboControlled />
      <CTASection />
      <Footer />
    </div>
  );
}
