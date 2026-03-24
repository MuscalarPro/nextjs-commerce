"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  // Define the actual frame numbers available in each folder
  // Desktop: Comp 1055000 to Comp 1055299
  // Mobile: Comp 1000 to Comp 1066, Comp 1132 to Comp 1239
  const desktopFrames = Array.from({ length: 300 }, (_, i) => 1055000 + i);
  const mobileFrames = [
    ...Array.from({ length: 1066 - 1000 + 1 }, (_, i) => 1000 + i),
    ...Array.from({ length: 1239 - 1132 + 1 }, (_, i) => 1132 + i),
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const framesToLoad = isMobile ? mobileFrames : desktopFrames;
  const totalFrames = framesToLoad.length;

  // The scroll progress of the container, tracking while it's in view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map progress (0 - 1) to the INDEX of the framesToLoad array
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    const basePath = isMobile ? "/sequence-mobile" : "/sequence";

    // Preload the images based on current device type
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNum = framesToLoad[i];
      img.src = `${basePath}/Comp ${frameNum}.webp`;

      if (i === 0) {
        // Draw the very first frame and detect dimensions once loaded
        img.onload = () => {
          const w = img.naturalWidth;
          const h = img.naturalHeight;
          setDimensions({ width: w, height: h });
          
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
              ctx.clearRect(0, 0, w, h);
              ctx.drawImage(img, 0, 0, w, h);
            }
          }
        };
      }
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [isMobile, totalFrames]); // Reload if device type changes

  // Sync scroll frameIndex physically drawing on the Canvas
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latestVal: number) => {
      const index = Math.floor(latestVal);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = images[index];

      if (ctx && img && img.complete) {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
          ctx.clearRect(0, 0, dimensions.width, dimensions.height);
          ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
        });
      }
    });

    return () => unsubscribe();
  }, [frameIndex, images, dimensions]);

  return (
    // Height determines how long the scroll lasts. 400vh = 4 screens of scrolling height.
    <div ref={containerRef} className="relative w-full h-[400vh] bg-black">
      {/* Sticky container that stays fixed while scrolling past the 400vh block */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden bg-black flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
