"use client";

import { useEffect, useRef, useState } from "react";

export function AgeDial() {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const targetValue = 27;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Smooth ease-out-expo easing function
            const easeOutExpo = (t: number): number => {
              return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            };

            const duration = 2500; // 2.5 seconds for smoother animation
            const start = performance.now();

            const animate = (time: number) => {
              const elapsed = time - start;
              const progress = Math.min(elapsed / duration, 1);

              // Apply smooth easing
              const eased = easeOutExpo(progress);
              const current = targetValue * eased;

              // Use more precise value for smoother increments
              setValue(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                // Ensure we end exactly at target value
                setValue(targetValue);
              }
            };

            // Small delay for better visual effect
            setTimeout(() => {
              requestAnimationFrame(animate);
            }, 100);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, targetValue]);

  return (
    <div ref={ref} className="my-8 flex justify-center sm:my-10 md:my-14">
      <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[420px] lg:w-[420px] xl:h-[480px] xl:w-[480px]">
        {/* Outer segmented dial with gradient */}
        <div className="absolute inset-0 rounded-full">
          {/* Segmented progress bar */}
          <svg
            className="h-full w-full -rotate-90 animate-rotate-slow"
            viewBox="0 0 200 200"
          >
            {Array.from({ length: 60 }).map((_, i) => {
              const angle = (i * 360) / 60;
              const radian = (angle * Math.PI) / 180;
              const x1 = 100 + 90 * Math.cos(radian);
              const y1 = 100 + 90 * Math.sin(radian);
              const x2 = 100 + 95 * Math.cos(radian);
              const y2 = 100 + 95 * Math.sin(radian);

              // Color gradient: dark green → bright green → yellow
              let color;
              if (i < 15)
                color = "#166534"; // dark green
              else if (i < 30)
                color = "#22c55e"; // green
              else if (i < 45)
                color = "#84cc16"; // yellow-green
              else color = "#eab308"; // yellow

              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={color}
                  strokeWidth="2"
                  className="drop-shadow-[0_0_4px_currentColor]"
                />
              );
            })}
          </svg>
        </div>

        {/* Glowing particle cloud effect */}
        <div
          className="absolute inset-10 rounded-full blur-3xl animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.15) 40%, transparent 70%)",
          }}
        />

        {/* Inner circle with border */}
        <div className="absolute inset-16 rounded-full border border-emerald-400/30" />

        {/* Center content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
          {/* Large number with counter animation */}
          <div className="mb-2 text-4xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-opacity duration-75 sm:mb-3 sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
            {Math.round(value)}
          </div>

          {/* Subtext */}
          <div className="flex items-center gap-1.5 text-xs text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] sm:gap-2 sm:text-sm md:text-base">
            <div className="h-1.5 w-1.5 rounded-full border border-white/50 sm:h-2 sm:w-2" />
            <span className="text-[10px] sm:text-xs md:text-sm">
              3.5 years younger than your age
            </span>
          </div>
        </div>

        {/* SLOW label (bottom left) */}
        <div className="absolute bottom-2 left-2 text-[9px] font-medium uppercase tracking-wider text-white/70 sm:bottom-4 sm:left-4 sm:text-xs md:text-sm">
          SLOW
        </div>

        {/* FAST label (bottom right) */}
        <div className="absolute bottom-2 right-2 text-[9px] font-medium uppercase tracking-wider text-white/70 sm:bottom-4 sm:right-4 sm:text-xs md:text-sm">
          FAST
        </div>
      </div>
    </div>
  );
}


