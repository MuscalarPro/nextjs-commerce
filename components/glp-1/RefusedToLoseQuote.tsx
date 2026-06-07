"use client";

import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Placeholder 16:9 video — swap for the real client asset when delivered.
// Using a brand-consistent file already on Shopify CDN so there's no extra
// network origin during local dev.
const PLACEHOLDER_VIDEO =
  "https://cdn.shopify.com/videos/c/o/v/ff3e0c33de2141abaa4c11362d8edbbc.webm";

export function RefusedToLoseQuote() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Mirror native video events into React state so the controls stay
  // accurate even if the video pauses on its own (network blip, tab switch,
  // user using OS-level media controls, etc.).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolume = () => setIsMuted(v.muted);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("volumechange", onVolume);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("volumechange", onVolume);
    };
  }, []);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      try {
        await v.play();
      } catch (err) {
        // play() can reject if autoplay policy or another error blocks it.
        // Keep state consistent — listener will catch the pause event but be
        // defensive in case nothing fired.
        console.warn("Video play blocked:", err);
        setIsPlaying(false);
      }
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    // setIsMuted runs from the volumechange listener so OS controls stay
    // in sync too.
  };

  return (
    <section className="relative bg-gradient-to-b from-[#D5DCE1] via-[#E6EBEF] to-white">
      <div className="mx-auto max-w-5xl px-4 pt-20 pb-12 md:px-8 md:pt-28 md:pb-16">
        {/* Video card */}
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-neutral-800 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]">
          <video
            ref={videoRef}
            src={PLACEHOLDER_VIDEO}
            muted
            playsInline
            loop
            preload="metadata"
            aria-label="Dr. Ateeb's story video"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Gradient overlay so the bottom text always reads against any
              frame of the video. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/15"
          />

          {/* Mute toggle — top-right corner */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            aria-pressed={!isMuted}
            className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-black/50 md:right-5 md:top-5 md:h-10 md:w-10"
          >
            {isMuted ? (
              <SpeakerXMarkIcon className="h-4 w-4" />
            ) : (
              <SpeakerWaveIcon className="h-4 w-4" />
            )}
          </button>

          {/* Bottom row — text on the left, play/pause on the right */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 md:p-8 lg:p-10">
            {/* Text overlay (never moved by mute/play state) */}
            <div className="max-w-[62%] text-white md:max-w-md">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80 md:text-[11px]">
                Dr. Ateeb&apos;s Story
              </p>
              <blockquote className="mt-2 font-sans text-base font-medium leading-snug md:mt-3 md:text-[1.65rem] md:leading-tight">
                <span aria-hidden="true" className="text-white/75">
                  &ldquo;
                </span>{" "}
                I lost the weight. I refused to lose myself{" "}
                <span aria-hidden="true" className="text-white/75">
                  &rdquo;
                </span>
              </blockquote>
            </div>

            {/* Watch / Pause toggle */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              aria-pressed={isPlaying}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 bg-black/40 py-1.5 pl-3 pr-1.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-black/60 md:py-2 md:pl-4 md:pr-2 md:text-sm"
            >
              <span>{isPlaying ? "Pause video" : "Watch video"}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black md:h-7 md:w-7">
                {isPlaying ? (
                  <PauseIcon className="h-3 w-3" />
                ) : (
                  <PlayIcon className="h-3 w-3 translate-x-px" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Read his story button — centered below the video card */}
        <div className="mt-8 flex justify-center md:mt-10">
          <Link
            href="#"
            className="inline-flex items-center rounded-full border border-[#1a1a1a]/15 bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] shadow-sm transition-all hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
          >
            Read his story
          </Link>
        </div>
      </div>
    </section>
  );
}
