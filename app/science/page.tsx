// app/science/page.tsx

import { LatestNewsSection } from "components/home/LatestNewsSection";
import { MeetUrolithinSection } from "components/science/MeetUrolithinSection";
import { MitochondriaEnergySection } from "components/science/MitochondriaEnergySection";
import { MitochondriaStickySection } from "components/science/MitochondriaStickySection";
import { MitopureIntroSection } from "components/science/MitopureIntroSection";
import { ScienceCtaBanner } from "components/science/ScienceCtaBanner";
import { ScientificAdvisorsSection } from "components/science/ScientificAdvisorsSection";
import { WeakMitochondriaSystemSection } from "components/science/WeakMitochondriaSystemSection";

import Footer from "components/layout/footer";
import { getArticles } from "lib/shopify";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science",
  description: "Discover the science behind Mitopure and cellular health.",
};

export default async function SciencePage() {
  const articles = await getArticles({ first: 10 });
  return (
    <div className="bg-white">
      {/* Intro Section: Mitopure & Cellular Health */}
      <MitopureIntroSection
        title="Muscalarpro[M3] Urolithin A, the nutrient that can reenergize cells"
        description="As we age, our cells age. Muscalarpro[M3] is a pure and patented form of Urolithin A, the first postbiotic nutrient shown to trigger a crucial recycling process within our cells called mitophagy, targeting age-related cellular decline.*"
        imageSrc="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/viacapbg.jpg?v=1770198196"
        imageAlt="Smiling woman with healthy skin"
      />

      {/* Energy Section: Mitochondria Facts */}
      <MitochondriaEnergySection
        title="~90% of our cellular energy is produced by mitochondria"
        subtitle="Mitochondria are our cellular powerhouses. The trillions of cells that comprise our body tissues run on the energy created by them."
        imageSrc="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Jce5yrUyXMpP7QT3ntPhYnNq7AU.avif?v=1770232961"
      />

      {/* Explorer Section: Body Parts & Benefits */}
      {/* <MitochondriaExplorerSection imageSrc="/images/science/yS30SfiascBWUl5rQ7fIk9Shyk.avif" /> */}
      <WeakMitochondriaSystemSection />
      {/* Sticky Section: Mitochondrial Function Decline */}
      <MitochondriaStickySection />

      {/* Weak Mitochondria System Interactive Map */}

      <MeetUrolithinSection />

      <ScientificAdvisorsSection />

      <ScienceCtaBanner />
      <LatestNewsSection articles={articles} />
      <Footer />
    </div>
  );
}
