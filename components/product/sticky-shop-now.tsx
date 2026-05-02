"use client";

import { buyNow } from "components/cart/actions";
import { useCart } from "components/cart/cart-context";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";

export function StickyShopNow({ product }: { product: Product }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { addCartItem } = useCart();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isDismissed]);

  const handleBuyNow = () => {
    const variant = product.variants[0];
    if (!variant) return;

    startTransition(async () => {
      // Optimistically add to cart (though redirect is imminent)
      addCartItem(variant, product);
      await buyNow(variant.id);
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile Layout (Card) */}
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            className="fixed bottom-6 left-1/2 z-[100000] flex w-[85%] max-w-[320px] flex-col items-center gap-4 rounded-[32px] bg-white p-6 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setIsDismissed(true);
                setIsVisible(false);
              }}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-600"
              aria-label="Close"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative h-20 w-20 overflow-hidden">
              <Image
                src={product.featuredImage?.url}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="px-2 text-center text-[17px] font-medium leading-tight text-[#1a3b1a]">
              {product.title}
            </h3>
            <button
              onClick={handleBuyNow}
              disabled={isPending}
              className="w-full rounded-full bg-black py-4 text-white shadow-lg transition-all hover:bg-[#1a3b1a] active:scale-95 disabled:opacity-70"
            >
              <span className="text-[16px] font-semibold">
                {isPending ? "Processing..." : "Shop Now"}
              </span>
            </button>
          </motion.div>

          {/* Desktop Layout (Horizontal Bar) */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[100000] hidden border-t border-neutral-100 bg-white/95 px-8 py-3 backdrop-blur-md md:block"
          >
            <div className="mx-auto flex max-w-[1440px] items-center justify-between">
              {/* Left Section: Image and Title */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-md bg-neutral-50">
                  <Image
                    src={product.featuredImage?.url}
                    alt={product.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px] font-medium text-[#1a3b1a]">
                    {product.title}
                  </h3>
                  <p className="text-[12px] text-neutral-500">
                    Premium Performance Protocol
                  </p>
                </div>
              </div>

              {/* Right Section: Button and Close */}
              <div className="flex items-center gap-8">
                <div className="hidden lg:flex flex-col items-end">
                  <span className="text-[12px] text-green-600 uppercase tracking-widest font-semibold">
                    Available Now
                  </span>
                  <span className="text-[14px] font-medium text-[#1a3b1a]">
                    In Stock
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleBuyNow}
                    disabled={isPending}
                    className="rounded-full bg-black px-12 py-3.5 text-white shadow-xl transition-all hover:bg-black/80 hover:px-14 active:scale-95 disabled:opacity-70"
                  >
                    <span className="text-[16px] font-semibold">
                      {isPending ? "Redirecting..." : "Shop Now"}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setIsDismissed(true);
                      setIsVisible(false);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
                    aria-label="Close"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
