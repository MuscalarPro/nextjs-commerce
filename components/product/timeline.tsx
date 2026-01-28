"use client";

import { BenefitsHeading } from "components/product/product-description";
import { timelinedata } from "data/timelinedata";
import { useEffect, useMemo, useRef, useState } from "react";
import { TwoCapsule } from "./twocapsule";

type TimelineDataItem = {
  id: number;
  label: string;
  title: string;
  points: string[];
};

function useInViewOnce<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView } as const;
}

interface TimelineItemProps {
  item: TimelineDataItem;
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  // small stagger without any lib
  const delayMs = Math.min(index * 90, 450);

  return (
    <div
      ref={ref}
      className={[
        "relative pl-7 sm:pl-10",
        "transition-[opacity,transform,filter] duration-700 ease-out will-change-transform",
        inView
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-6 blur-[1px]",
      ].join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {/* Dot (with a subtle ping when visible) */}
      <div className="absolute left-[9px] sm:left-[12px] top-2">
        <div className="relative h-4 w-4">
          <span
            className={[
              "absolute inset-0 rounded-full bg-[#693979]",
              inView ? "animate-[ping_1.2s_ease-out_1]" : "",
              "opacity-25",
            ].join(" ")}
          />
          <span className="absolute inset-0 rounded-full bg-[#693979] shadow-sm" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-[#693979] px-3 py-1 text-xs sm:text-sm font-semibold tracking-wide text-white">
          {item.label}
        </span>

        <h3 className="text-base sm:text-lg font-semibold text-black">
          {item.title}
        </h3>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-6 text-sm sm:text-base leading-relaxed text-neutral-800">
        {item.points.map((point, idx) => (
          <li key={`${item.id}-${idx}`}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function VideoCard({ className }: { className?: string }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl bg-[#E6E9DF] ",
        className,
      ].join(" ")}
    >
      <div className="relative w-full aspect-video">
        <video
          className="h-full w-full object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/d17dd37285eb4c01aa3638dc0cbe0647.mp4"
          playsInline
          muted
          loop
          autoPlay
          controls
          preload="metadata"
        />
      </div>
    </div>
  );
}

export function Timeline() {
  const items = useMemo(
    () => timelinedata as unknown as TimelineDataItem[],
    [],
  );
  const { ref: lineRef, inView: lineInView } = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section className="w-full bg-[#F7F8F2] py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <BenefitsHeading />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:items-start">
          {/* LEFT */}
          <div className="relative">
            {/* Mobile video */}
            <div className="mb-8 md:hidden">
              <VideoCard />
            </div>

            {/* Timeline container with vertical line */}
            <div ref={lineRef} className="relative">
              {/* Animated vertical line */}
              <div className="pointer-events-none absolute left-[16px] sm:left-[20px] top-2 bottom-2">
                {/* track */}
                <div className="h-full w-px bg-[#693979]/15" />
                {/* animated fill */}
                <div
                  className={[
                    "absolute left-0 top-0 w-px origin-top",
                    "bg-gradient-to-b from-[#693979]/60 via-[#693979]/35 to-transparent",
                    "transition-transform duration-1000 ease-out will-change-transform",
                    lineInView ? "scale-y-100" : "scale-y-0",
                  ].join(" ")}
                  style={{ height: "100%" }}
                />
              </div>

              <div className="space-y-10">
                {items.map((item, idx) => (
                  <TimelineItem key={item.id} item={item} index={idx} />
                ))}
              </div>
            </div>

            {/* Bundle Product at the end of timeline (outside vertical line container) */}
            <div className="mt-10">
              <TwoCapsule />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <div className="space-y-6 sm:space-y-8">
              {/* Desktop video */}
              <div className="hidden md:block">
                <VideoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
