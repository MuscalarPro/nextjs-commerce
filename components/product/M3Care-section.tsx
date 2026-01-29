"use client";

import { useEffect, useRef, useState } from "react";

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

interface ChatBubbleProps {
  children: React.ReactNode;
  index: number;
  isVisible: boolean;
  align: "left" | "right";
  className?: string;
}

function ChatBubble({
  children,
  index,
  isVisible,
  align,
  className = "",
}: ChatBubbleProps) {
  const delay = index * 400; // 400ms delay between each bubble

  return (
    <div
      className={`flex ${align === "left" ? "justify-start rounded-bl-none" : "justify-end"}`}
    >
      <div
        className={[
          "max-w-[85%] rounded-2xl  px-5 py-4 shadow-sm",
          "transition-all duration-500 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          align === "left" ? "rounded-bl-none" : "rounded-br-none",
          className,
        ].join(" ")}
        style={{
          transitionDelay: isVisible ? `${delay}ms` : "0ms",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function M3CareSection() {
  const { ref: chatRef, inView: chatInView } = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <div className="w-full bg-[#F7F8F2] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Column: Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-3xl  text-black md:text-4xl">
              Meet MuscleCare
            </h2>

            {/* Subtitle */}
            <p className="text-base leading-relaxed text-black md:text-lg">
              Science-backed guidance on mitochondrial health, strength, and
              longevity—for athletes serious about musclespan.
            </p>

            {/* Target Audiences */}
            <div className="space-y-6 pt-4">
              {/* Competitive Athletes + Coaches */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-black md:text-xl">
                  Competitive Athletes + Coaches
                </h3>
                <p className="text-base leading-relaxed text-black">
                  Ask us about clinical doses, RCT evidence, performance
                  protocols, and more.
                </p>
              </div>

              {/* Longevity Optimizers */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-black md:text-xl">
                  Longevity Optimizers
                </h3>
                <p className="text-base leading-relaxed text-black">
                  Ask us anything—we know navigating supplement science and
                  training optimization is complex.
                </p>
              </div>
            </div>

            {/* Email M3Care Button */}
            <button className="mt-8 flex items-center gap-3 rounded-full border-2 border-black bg-[#F7F8F2] px-6 py-3 text-base font-medium text-black transition-colors hover:bg-black hover:text-white">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Start a Conversation
            </button>
          </div>

          {/* Right Column: Chat Window */}
          <div ref={chatRef} className="rounded-2xl  p-6 shadow-lg md:p-8">
            {/* Chat Conversation */}
            <div className="space-y-4">
              {/* MuscleCare intro */}
              <ChatBubble
                index={0}
                isVisible={chatInView}
                align="left"
                className="bg-[#7b2a8a]"
              >
                <p className="text-xs md:text-sm leading-relaxed text-white">
                  Hi, we&apos;re MuscleCare. We decode clinical trials on
                  mitochondrial health, muscle performance, and cellular
                  longevity. We answer science and protocol questions from our
                  community.
                </p>
              </ChatBubble>

              {/* User question */}
              <ChatBubble
                index={1}
                isVisible={chatInView}
                align="right"
                className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200"
              >
                <p className="text-xs md:text-sm leading-relaxed text-neutral-800">
                  Can I ask questions even if I haven&apos;t purchased M3 yet?
                </p>
              </ChatBubble>

              {/* MuscleCare reassurance */}
              <ChatBubble
                index={2}
                isVisible={chatInView}
                align="left"
                className="bg-[#7b2a8a]"
              >
                <p className="text-xs md:text-sm leading-relaxed text-white">
                  Absolutely—that&apos;s why we&apos;re here 🔬
                </p>
              </ChatBubble>

              {/* MuscleCare encouragement */}
              <ChatBubble
                index={3}
                isVisible={chatInView}
                align="left"
                className="bg-[#7b2a8a]"
              >
                <p className="text-xs md:text-sm leading-relaxed text-white">
                  Better data = better decisions. Fire away!
                </p>
              </ChatBubble>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
