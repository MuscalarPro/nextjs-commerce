"use client";

import { useEffect, useRef, useState } from "react";

import { stats } from "data/our-why/statsSectionData";

function CountUp({
  label,
  endValue,
}: {
  label: string;
  endValue: number | null;
}) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (endValue === null) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const duration = 1200;
            const start = performance.now();

            const animate = (time: number) => {
              const progress = Math.min((time - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(endValue * eased);

              if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [endValue, hasAnimated]);

  const splitLabel = (text: string) => {
    const match = text.match(/^([0-9.\-–% ]+)(.*)$/);
    if (!match) return { numberPart: null as string | null, textPart: text };
    return {
      numberPart: match[1]?.trim() || null,
      textPart: match[2]?.trim() || "",
    };
  };

  if (endValue === null) {
    const { numberPart, textPart } = splitLabel(label);

    if (!numberPart) {
      return (
        <span ref={ref} className="font-bold text-[#a638b5]">
          {label}
        </span>
      );
    }

    return (
      <span ref={ref} className="inline-flex flex-wrap items-baseline gap-1">
        <span className="font-bold text-[#a638b5]">{numberPart}</span>
        {textPart && (
          <span className="font-bold text-[#a638b5]">{textPart}</span>
        )}
      </span>
    );
  }

  const formatted =
    endValue % 1 === 0 ? Math.round(value).toString() : value.toFixed(1);

  const { textPart } = splitLabel(label);
  const hasPercent = label.includes("%");
  const displayNumber = hasPercent ? `${formatted}%` : formatted;

  return (
    <span ref={ref} className="inline-flex flex-wrap items-baseline gap-1">
      <span className="font-bold text-[#a638b5]">{displayNumber}</span>
      {textPart && <span className="font-bold text-[#a638b5]">{textPart}</span>}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6 md:py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-4 sm:gap-5">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <p className="mb-1 font-inter text-[32px] font-bold leading-tight md:text-4xl lg:text-5xl">
                <CountUp label={stat.label} endValue={stat.endValue} />
              </p>

              <p className="font-inter text-[18px] font-normal leading-[25px] text-neutral-800 md:text-[26px] md:leading-[38px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
