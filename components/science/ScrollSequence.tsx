"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 300;
const START_FRAME = 1000;

export function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // The scroll progress of the container, tracking while it's in view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map progress (0 - 1) to frame index (0 - 299)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    // Preload the images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = START_FRAME + i;
      // All sequences must be in /public/sequence/
      img.src = `/sequence/Comp ${frameNum}.webp`;

      if (i === 0) {
        // Draw the very first frame immediately once loaded to avoid blank canvas
        img.onload = () => {
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
              ctx.drawImage(img, 0, 0, 1920, 1080);
            }
          }
        };
      }
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Sync scroll frameIndex physically drawing on the Canvas
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latestVal) => {
      const index = Math.floor(latestVal);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (ctx && images[index] && images[index].complete) {
        ctx.clearRect(0, 0, 1920, 1080);
        ctx.drawImage(images[index], 0, 0, 1920, 1080);
      }
    });

    return () => unsubscribe();
  }, [frameIndex, images]);

  return (
    // Height determines how long the scroll lasts. 400vh = 4 screens of scrolling height.
    <div ref={containerRef} className="relative w-full h-[400vh] bg-black">
      {/* Sticky container that stays fixed while scrolling past the 400vh block */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden bg-black flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
