"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function HowItWorksScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // The scroll progress of the container, tracking while it's in view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Content fade-in at the end (last 15% of scroll)
  const contentOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.85, 0.95], [20, 0]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    const basePath = isMobile ? "/how-it-works-mobile" : "/how-it-works-desktop";
    const totalFrames = isMobile ? 546 : 547;
    const startFrame = isMobile ? 1000 : 1003;

    // Preload the images
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNum = startFrame + i;
      img.src = `${basePath}/Comp ${frameNum}.webp`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [isMobile]);

  // Initial draw when images are loaded
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
      const img = images[0];
      if (!img) return;

      const drawFirstFrame = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (ctx && img.complete) {
          const w = img.naturalWidth;
          const h = img.naturalHeight;
          setDimensions({ width: w, height: h });
          requestAnimationFrame(() => {
            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(img, 0, 0, w, h);
          });
        }
      };

      if (img.complete) {
        drawFirstFrame();
      } else {
        img.onload = drawFirstFrame;
      }
    }
  }, [images]);

  // Sync scroll frameIndex physically drawing on the Canvas
  useEffect(() => {
    const drawFrame = (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = images[index];

      if (ctx && img && img.complete) {
        ctx.clearRect(0, 0, dimensions.width, dimensions.height);
        ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
      }
    };

    const unsubscribe = scrollYProgress.on("change", (latestVal: number) => {
      if (images.length > 0) {
        const index = Math.floor(latestVal * (images.length - 1));
        requestAnimationFrame(() => drawFrame(index));
      }
    });

    if (images.length > 0) {
      const currentScrollIndex = Math.floor(scrollYProgress.get() * (images.length - 1));
      if (images[currentScrollIndex]) {
        requestAnimationFrame(() => drawFrame(currentScrollIndex));
      }
    }

    return () => unsubscribe();
  }, [scrollYProgress, images, dimensions]);

  return (
    <div ref={containerRef} className="relative w-full h-[800vh] bg-black">
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden bg-black flex items-center justify-center">
        {/* The Frame Sequence Canvas */}
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-full object-cover"
        />

        {/* Overlay Content (Fades in at the end) */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 z-10 flex items-center"
        >
          {/* Subtle gradient overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent w-full md:w-3/4" />

          <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="max-w-xl text-white space-y-8">
              <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-medium drop-shadow-md leading-[1.2]">
                Muscalarpro™ [M3] is clinically proven to revitalize
                mitochondria, targeting signs of aging at the foundation.
              </h2>
              <div>
                <Link
                  href="/science/benefits"
                  className="inline-block bg-white text-black px-8 py-4 text-xs font-bold hover:bg-black hover:text-white transition-colors shadow-lg rounded-full"
                >
                  DISCOVER ALL BENEFITS
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

