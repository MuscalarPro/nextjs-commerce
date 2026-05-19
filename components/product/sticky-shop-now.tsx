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
  const { cart, addCartItem } = useCart();

  const isInCart = (cart?.totalQuantity ?? 0) > 0;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600 && !isDismissed && !isInCart) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isDismissed, isInCart]);

  const handleBuyNow = () => {
    const variant = product.variants[0];
    if (!variant) return;

    startTransition(async () => {
      addCartItem(variant, product);
      await buyNow(variant.id);
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100000] border-t border-neutral-100 bg-white/95 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-3 md:px-8"
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 sm:gap-4">
            {/* Left: image + title */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-neutral-50 sm:h-12 sm:w-12">
                <Image
                  src={product.featuredImage?.url}
                  alt={product.title}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex min-w-0 flex-col">
                <h3 className="truncate text-[14px] font-medium text-[#1a3b1a] sm:text-[16px]">
                  {product.title}
                </h3>
                <p className="hidden text-[12px] text-neutral-500 sm:block">
                  Premium Performance Protocol
                </p>
              </div>
            </div>

            {/* Right: stock badge (desktop), button, close */}
            <div className="flex flex-shrink-0 items-center gap-3 sm:gap-6 md:gap-8">
              <div className="hidden flex-col items-end lg:flex">
                <span className="text-[12px] font-semibold uppercase tracking-widest text-green-600">
                  Available Now
                </span>
                <span className="text-[14px] font-medium text-[#1a3b1a]">
                  In Stock
                </span>
              </div>
              <button
                onClick={handleBuyNow}
                disabled={isPending}
                className="rounded-full bg-black px-5 py-2.5 text-white shadow-lg transition-all hover:bg-black/80 active:scale-95 disabled:opacity-70 sm:px-8 sm:py-3 md:px-12 md:py-3.5 md:hover:px-14"
              >
                <span className="text-[14px] font-semibold sm:text-[16px]">
                  {isPending ? "Redirecting..." : "Shop Now"}
                </span>
              </button>
              <button
                onClick={() => {
                  setIsDismissed(true);
                  setIsVisible(false);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 sm:h-10 sm:w-10"
                aria-label="Close"
              >
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
