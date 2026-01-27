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
    <div className={`flex ${align === "left" ? "justify-start" : "justify-end"}`}>
      <div
        className={[
          "max-w-[85%] rounded-2xl px-5 py-4 shadow-sm",
          "transition-all duration-500 ease-out",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4",
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

export function SciCareSection() {
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
            <h2 className="text-3xl  text-[#2E4B2D] md:text-4xl">
              Meet SciCare
            </h2>

            {/* Subtitle */}
            <p className="text-base leading-relaxed text-[#2E4B2D] md:text-lg">
              Our team of experts in scientific communication and education—here
              for anyone and everyone in our community.
            </p>

            {/* Target Audiences */}
            <div className="space-y-6 pt-4">
              {/* Pediatricians + Health Practitioners */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[#2E4B2D] md:text-xl">
                  Pediatricians + Health Practitioners
                </h3>
                <p className="text-base leading-relaxed text-[#2E4B2D]">
                  Ask us about dosages, medication interactions, clinical
                  research, and more.
                </p>
              </div>

              {/* Parents + Caregivers */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[#2E4B2D] md:text-xl">
                  Parents + Caregivers
                </h3>
                <p className="text-base leading-relaxed text-[#2E4B2D]">
                  Ask us anything—we know how hard making the right decisions can
                  be on a minute-by-minute basis.
                </p>
              </div>
            </div>

            {/* Email SciCare Button */}
            <button className="mt-8 flex items-center gap-3 rounded-full border-2 border-[#2E4B2D] bg-[#F7F8F2] px-6 py-3 text-base font-medium text-[#2E4B2D] transition-colors hover:bg-[#2E4B2D] hover:text-white">
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
              Email SciCare
            </button>
          </div>

          {/* Right Column: Chat Window */}
          <div
            ref={chatRef}
            className="rounded-2xl  p-6 shadow-lg md:p-8"
          >
            {/* Chat Conversation */}
            <div className="space-y-4">
              {/* Message 1 - SciCare (dark green) */}
              <ChatBubble
                index={0}
                isVisible={chatInView}
                align="left"
                className="bg-gradient-to-br from-[#166534] to-[#15803d]"
              >
                <p className="text-sm leading-relaxed text-white md:text-base">
                  Hi, we&apos;re SciCare. We&apos;re your team of experts in
                  scientific communication and education. We know how hard it
                  is to get answers so we review, research, and answer health
                  and science-related questions from our community.
                </p>
              </ChatBubble>

              {/* Message 2 - User (white) */}
              <ChatBubble
                index={1}
                isVisible={chatInView}
                align="right"
                className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200"
              >
                <p className="text-sm leading-relaxed text-neutral-800 md:text-base">
                  Oh, that&apos;s cool—even if I&apos;m not a member yet, can
                  I still ask you questions?
                </p>
              </ChatBubble>

              {/* Message 3 - SciCare (dark green) */}
              <ChatBubble
                index={2}
                isVisible={chatInView}
                align="left"
                className="bg-gradient-to-br from-[#166534] to-[#15803d]"
              >
                <p className="text-sm leading-relaxed text-white md:text-base">
                  Absolutely, that&apos;s what we&apos;re here for 😎
                </p>
              </ChatBubble>

              {/* Message 4 - SciCare (dark green) */}
              <ChatBubble
                index={3}
                isVisible={chatInView}
                align="left"
                className="bg-gradient-to-br from-[#166534] to-[#15803d]"
              >
                <p className="text-sm leading-relaxed text-white md:text-base">
                  We believe better information=better choices, so ask away!
                </p>
              </ChatBubble>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
