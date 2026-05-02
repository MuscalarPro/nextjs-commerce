"use client";

import Link from "next/link";

export function GlpBanner() {
  return (
    <div className="w-full bg-[#d2f392] py-3 text-center">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-4 px-4 text-[14px] font-medium text-black md:text-[16px]">
        <span>On a GLP-1? Your muscle is quietly disappearing.</span>
        <Link
          href="/product/decode-peak-performance-m3"
          className="rounded-full bg-black px-4 py-1.5 text-white transition-all hover:bg-black/80 active:scale-95"
        >
          Protect it now →
        </Link>
      </div>
    </div>
  );
}
