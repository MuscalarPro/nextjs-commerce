"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type ImageCard = {
  type: "image";
  id: string;
  src: string;
  alt: string;
};

type QuoteCard = {
  type: "quote";
  id: string;
  eyebrow?: string;
  text: string;
  source: string;
  /** Tailwind background + text classes for tonal variation between cards. */
  theme: string;
};

type StatCard = {
  type: "stat";
  id: string;
  value: string;
  body: string;
  source: string;
};

type StoryCard = ImageCard | QuoteCard | StatCard;

const stories: StoryCard[] = [
  {
    type: "image",
    id: "i1",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/5b21fb1628889b3348ca807c06b10af9_1.png?v=1779368881",
    alt: "MuscalarPro story image",
  },
  {
    type: "quote",
    id: "q1",
    text: "The results were undeniable within weeks. My recovery time has halved — and my doctor can’t stop asking what I’ve changed.",
    source: "MEN’S HEALTH INDIA",
    theme: "bg-[#F5F5F0] text-[#1F3D2B]",
  },
  {
    type: "image",
    id: "i2",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/c01e79a8575004e6a1a852dfaaaf60be.png?v=1779368879",
    alt: "MuscalarPro story image",
  },
  {
    type: "image",
    id: "i3",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/65d1f9ce4a4fcdda057d5e8b222534e2.png?v=1779368879",
    alt: "MuscalarPro story image",
  },
  {
    type: "quote",
    id: "q2",
    eyebrow: "Published research",
    text: "Urolithin A is among the most compelling molecules to emerge from longevity science — the human data is hard to ignore.",
    source: "FORBES HEALTH",
    theme: "bg-[#EEF2FF] text-[#1F2937]",
  },
  {
    type: "image",
    id: "i4",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/f3a26a0d3e2677f07ece05a02f234bdf.jpg?v=1779368879",
    alt: "MuscalarPro story image",
  },
  {
    type: "stat",
    id: "s1",
    value: "+39%",
    body: "Increase in mitochondrial renewal after 16 weeks vs. placebo in randomised, double-blind human trials.",
    source: "JAMA NETWORK OPEN, 2022",
  },
  {
    type: "image",
    id: "i5",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/5fa3cf4dff4d2ce289cf4a22efeec60e.jpg?v=1779368879",
    alt: "MuscalarPro story image",
  },
  {
    type: "image",
    id: "i6",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/e2e95bedb280c55610dd102d847b2171.jpg?v=1779368879",
    alt: "MuscalarPro story image",
  },
  {
    type: "quote",
    id: "q3",
    text: "Pushing the boundaries of what cellular science can actually deliver is where Muscalarpro lives. It’s the first supp I’ve felt in my bones.",
    source: "GQ INDIA",
    theme: "bg-[#F5F5F0] text-[#1F3D2B]",
  },
  {
    type: "image",
    id: "i7",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/f898f128844a3d0d12b50db97fd72676.jpg?v=1779368878",
    alt: "MuscalarPro story image",
  },
  {
    type: "image",
    id: "i8",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/7c728b1633a9a0277c105c1be47089f5.jpg?v=1779368878",
    alt: "MuscalarPro story image",
  },
];

export function StoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map vertical scroll progress (0-1) to a horizontal translation for the
  // marquee parallax effect.
  const xTranslation = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const springX = useSpring(xTranslation, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={sectionRef} className="py-0 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2 mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="heading-h2"
        >
          Stories from scientists, innovators, and members like you.
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block"
        >
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-white hover:text-black transition-all whitespace-nowrap hover:border-black hover:border-1">
            See more stories
          </button>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        className="overflow-x-auto hide-scrollbar pb-12"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <motion.div style={{ x: springX }} className="flex gap-6 px-4 md:px-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="snap-start shrink-0 w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] md:aspect-auto md:h-[450px] lg:h-[500px]"
            >
              {story.type === "image" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full rounded-3xl overflow-hidden bg-gray-100"
                >
                  <img
                    src={story.src}
                    alt={story.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              )}

              {story.type === "quote" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-full h-full rounded-3xl p-6 md:p-7 flex flex-col justify-between border border-black/5 ${story.theme}`}
                >
                  <div className="flex flex-col gap-4">
                    {story.eyebrow && (
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-current/70">
                        {story.eyebrow}
                      </span>
                    )}
                    <p className="text-[15px] md:text-[17px] font-medium leading-snug">
                      &ldquo;{story.text}&rdquo;
                    </p>
                  </div>
                  <span className="text-[13px] md:text-sm font-bold tracking-wider text-black">
                    {story.source}
                  </span>
                </motion.div>
              )}

              {story.type === "stat" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full rounded-3xl p-6 md:p-7 flex flex-col justify-between bg-black text-white"
                >
                  <span className="text-6xl md:text-7xl font-medium leading-none tracking-tight text-[#d2f392]">
                    {story.value}
                  </span>
                  <div className="flex flex-col gap-4">
                    <p className="text-[14px] md:text-[15px] leading-snug text-white/85">
                      {story.body}
                    </p>
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                      {story.source}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
