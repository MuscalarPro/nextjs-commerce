"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
// @ts-expect-error - MuxPlayer types resolution issue despite package being installed
import MuxPlayer, { MuxPlayerRef } from "@mux/mux-player-react";
import {
  XMarkIcon,
  BookOpenIcon,
  SpeakerWaveIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/outline";

const ANATOMY_IMAGE =
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/videoframe_7015.png?v=1768635095";

const VIDEO_URL =
  "https://stream.mux.com/oMCpXSzvLPcYg8jZeStvs9LUXPFb37BDmjjjkMRgH900.m3u8?redundant_streams=true";

const CHAPTERS = [
  {
    id: 1,
    title: "The Microbiome",
    description: "Your body is home to 38 trillion microbes.",
    image: ANATOMY_IMAGE,
    startTime: 0,
  },
  {
    id: 2,
    title: "Digestion",
    description: "Microbes break down tough fibers that your body can't.",
    image: ANATOMY_IMAGE,
    startTime: 10,
  },
  {
    id: 3,
    title: "Immunity",
    description: "70% of your immune system resides in your gut.",
    image: ANATOMY_IMAGE,
    startTime: 25,
  },
  {
    id: 4,
    title: "Gut-Brain Axis",
    description: "Your gut microbes communicate directly with your brain.",
    image: ANATOMY_IMAGE,
    startTime: 40,
  },
];

export function MoreThanHumanSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentChapter = CHAPTERS[currentChapterIndex];

  if (!currentChapter) return null;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const muxPlayerRef = useRef<MuxPlayerRef>(null);

  function goToChapter(index: number) {
    setCurrentChapterIndex(index);
    const chapter = CHAPTERS[index];
    if (muxPlayerRef.current && chapter) {
      muxPlayerRef.current.seekTo(chapter.startTime);
      setIsPlaying(true);
    }
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid gap-2 md:grid-cols-2 md:items-center md:gap-12">
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.5rem] text-[#1a3319] leading-tight text-center md:text-left">
              You are more than human.
            </h2>

            <p className="text-[0.875rem] md:text-[1rem] text-neutral-700 leading-relaxed max-w-2xl text-center md:text-left mx-auto md:mx-0">
              Your body isn't yours alone—it's home to 38 trillion microbes that
              power your digestion, immunity and more. Take a few minutes to
              learn how their health impacts your health—and how to maximize
              both.
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              <button
                onClick={openModal}
                className="inline-flex items-center rounded-full bg-[#36542D] pl-8 pr-2 py-2 text-white font-semibold hover:bg-[#1a3319]/90 transition-colors group cursor-pointer"
              >
                <span className="pr-2">Discover</span>
                <span className="inline-flex items-center justify-center rounded-full bg-[#0f1a0f] border-2 border-white/20 shadow-sm w-10 h-10 group-hover:bg-[#1a3319]/95 transition-colors">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="relative md:h-[75vh] h-[40vh] rounded-2xl overflow-hidden">
            <Image
              src={ANATOMY_IMAGE}
              alt="Human anatomy illustration with video controls"
              fill
              className="object-cover object-center w-full"
              priority
            />
          </div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        transition
        className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <DialogBackdrop className="fixed inset-0 bg-white/90 backdrop-blur-sm" />

        <div className="fixed inset-0 z-10 w-screen overflow-hidden">
          <div className="min-h-full items-center justify-center p-0">
            <DialogPanel
              transition
              className="relative w-full h-full min-h-screen bg-[#f4f4f0] text-left shadow-xl transition duration-500 ease-out flex flex-col items-center justify-center"
            >
              {/* --- Top Controls --- */}
              <div className="absolute top-6 left-6 z-20">
                 <div className="flex items-center gap-2 bg-black/10 backdrop-blur-md text-[#5e6e5e] px-4 py-2 rounded-full font-medium text-sm">
                   <BookOpenIcon className="w-4 h-4" />
                   <span>Chapter {currentChapter.id}</span>
                 </div>
              </div>

              <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
                 {/* Resize / Fullscreen Mock */}
                  <button className="rounded-full bg-black/10 p-2 text-[#5e6e5e] hover:bg-black/20 transition-colors">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                     </svg>
                  </button>
                 {/* Close */}
                <button
                  type="button"
                  className="rounded-full bg-black/10 p-2 text-[#5e6e5e] hover:bg-black/20 transition-colors focus:outline-none cursor-pointer"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* --- Main Visual Content --- */}
              <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
                <div 
                  className="relative h-full aspect-[9/16] md:aspect-video w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
                  onClick={togglePlay} // Allow clicking video to play
                >
                  <MuxPlayer
                    ref={muxPlayerRef}
                    src={VIDEO_URL}
                    autoPlay
                    loop
                    muted
                    paused={!isPlaying}
                    className="w-full h-full object-contain mix-blend-multiply"
                    accentColor="#1a3319"
                    style={{ "--media-background-color": "#ffffff", "--controls": "none" } as any}
                  />

                  {/* Title Overlay (Visible when Paused) */}
                  {!isPlaying && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[2px] transition-opacity duration-300 cursor-pointer">
                      <div className="text-center space-y-4">
                         <div className="inline-flex items-center gap-2 text-[#1a3319]/80 font-mono text-sm tracking-wider uppercase border border-[#1a3319]/20 px-3 py-1 rounded-full">
                            <span>Chapter 0{currentChapter.id}</span>
                         </div>
                         <h2 className="text-4xl md:text-5xl font-light text-[#1a3319]">
                           {currentChapter.title}
                         </h2>
                         <p className="text-[#1a3319]/60 max-w-md mx-auto px-4 text-center font-medium">
                            {currentChapter.description}
                         </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* --- Bottom Controls Bar --- */}
              <div className="absolute bottom-10 left-10 right-10 z-20 flex justify-between items-end pointer-events-none">
                 <div className="pointer-events-auto flex items-center gap-4 bg-white/90 backdrop-blur-md px-2 py-2 rounded-full shadow-lg border border-neutral-200/50">
                    {/* Sound Toggle */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a3319] text-white hover:bg-[#2a4a29] transition-colors">
                       <SpeakerWaveIcon className="w-4 h-4" />
                    </button>

                    {/* Play/Pause + Title */}
                    <div className="flex items-center gap-3 bg-neutral-100 rounded-full pl-3 pr-4 py-2">
                       <button onClick={togglePlay} className="text-[#1a3319] hover:opacity-75">
                         {isPlaying ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                       </button>
                       <span className="text-sm font-semibold text-[#1a3319] whitespace-nowrap">
                         {currentChapter.title}
                       </span>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex items-center gap-2 pl-2 md:pl-4 border-l border-neutral-300 ml-2">
                       {CHAPTERS.map((chapter, index) => (
                         <button
                           key={chapter.id}
                           onClick={() => goToChapter(index)}
                           className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                             index === currentChapterIndex
                               ? "bg-[#1a3319] scale-125"
                               : "bg-neutral-300 hover:bg-neutral-400"
                           }`}
                           aria-label={`Go to chapter ${chapter.title}`}
                         />
                       ))}
                       {/* Line connector visual idea from screenshot? Simplified to dots for now as standard web pattern */}
                    </div>
                 </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
