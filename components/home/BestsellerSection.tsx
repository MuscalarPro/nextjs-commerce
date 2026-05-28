"use client";

import { addItem } from "components/cart/actions";
import { useCart } from "components/cart/cart-context";
import { motion } from "framer-motion";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

// Brand accent used for the lime pill, price highlight and pill border.
const LIME = "#d2f392";

const DESKTOP_BG =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/pill-bg-desktop-muscalarpro.png?v=1779970557";
const MOBILE_BG =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/pill-bg-mobile-muscalarpro.png?v=1779970555";
const PRODUCT_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Updated_product_image.png?v=1779970617";

export function BestsellerSection({
  product,
}: {
  product: Product | undefined;
}) {
  const { addCartItem, setIsOpened } = useCart();
  const [message, formAction, isPending] = useActionState(addItem, null);

  if (!product) return null;

  const variant = product.variants[0];
  if (!variant) return null;

  const addItemAction = formAction.bind(null, variant.id);

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: variant.price.currencyCode,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
  }).format(parseFloat(variant.price.amount));

  return (
    <section className="w-full py-8 md:py-6">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid gap-4 lg:grid-cols-[3fr_1fr]">
        {/* OUTER card — capsules image as the full-bleed background. The inner
            card is inset on all sides so the capsules show as a border. */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background images — desktop + mobile variants. */}
          <Image
            src={DESKTOP_BG}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 0vw, 100vw"
            className="hidden object-cover md:block"
          />
          <Image
            src={MOBILE_BG}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 0vw"
            className="object-cover md:hidden"
          />

          {/* Inset wrapper — controls how much of the capsules show as border */}
          <div className="relative z-10 p-3 md:p-6 lg:p-8">
            {/* INNER frosted card — dark translucent fill + backdrop blur so
                the capsules behind read as a soft texture. */}
            <div className="relative overflow-hidden rounded-2xl bg-black/45 p-6 backdrop-blur-md md:p-10 lg:p-12">
              {/* Lime "#1" badge — anchored to the inner card's top-left */}
              <span
                className="absolute left-6 top-6 z-10 inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold leading-tight text-black md:left-10 md:top-10"
                style={{ background: LIME }}
              >
                #1 Muscle-span supplement
              </span>

              {/* Image (left on desktop, top on mobile) | Content */}
              <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
                <div className="flex items-center justify-center pt-12 md:pt-0">
                  <div className="relative aspect-square w-full max-w-[360px] md:max-w-[460px]">
                    <Image
                      src={PRODUCT_IMAGE}
                      alt="MuscalarPro Decode Peak Performance M3 supplement"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 360px, 460px"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 text-white">
                  {/* Lime-outlined "Decipher Musclespan" pill */}
                  <span
                    className="inline-flex w-fit items-center rounded-full border px-4 py-1.5 text-xs font-medium"
                    style={{ borderColor: LIME, color: LIME }}
                  >
                    Decipher Musclespan
                  </span>

                  {/* Mobile-only heading + price on a single row */}
                  <div className="flex items-start justify-between gap-4 md:hidden">
                    <h2 className="heading-h2 flex-1 leading-[1.05] text-white">
                      Decode Peak Performance [M3]
                    </h2>
                    <div className="shrink-0 text-right">
                      <div
                        className="text-2xl font-medium leading-none"
                        style={{ color: LIME }}
                      >
                        {formattedPrice}
                      </div>
                      <div className="mt-1 text-xs text-white/75">
                        monthly supply
                      </div>
                    </div>
                  </div>

                  {/* Desktop-only heading */}
                  <h2 className="heading-h2 hidden max-w-md leading-[1.05] text-white md:block">
                    Decode Peak Performance [M3]
                  </h2>

                  <p className="body-text max-w-xl text-white/90">
                    Your cells aren&apos;t aging — they&apos;re losing power. M3
                    supports the cellular engine behind strength, energy and
                    endurance, so your muscles stay stronger for longer.
                  </p>

                  {/* Desktop-only price below body */}
                  <div className="hidden text-3xl md:block">
                    <span className="font-medium" style={{ color: LIME }}>
                      {formattedPrice}
                    </span>{" "}
                    <span className="text-sm text-white/75">monthly supply</span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block"
                    >
                      <Link
                        href="/science"
                        className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white"
                      >
                        Learn More
                      </Link>
                    </motion.div>

                    <form
                      action={async () => {
                        addCartItem(variant, product);
                        setIsOpened(true);
                        await addItemAction();
                      }}
                      className="inline-block"
                    >
                      <button
                        type="submit"
                        disabled={isPending}
                        className="text-base font-semibold text-white underline underline-offset-4 transition hover:text-[#d2f392] disabled:opacity-50"
                      >
                        {isPending ? "Adding..." : "Add To Cart"}
                      </button>
                      <p aria-live="polite" className="sr-only" role="status">
                        {message}
                      </p>
                    </form>
                  </div>
                </div>
              </div>

              {/* Mobile-only quiz card pinned inside the inner frosted card */}
              <div className="mt-8 md:hidden">
                <div className="flex items-center gap-4 rounded-2xl border border-[#693979]/60 bg-[#2d1b3d]/70 p-4 backdrop-blur-md">
                  <div className="min-w-0 flex-1">
                    <p className="mb-1.5 text-sm font-medium text-white">
                      Is M3 the right supp for you?
                    </p>
                    <Link
                      href="https://ai.muscalarpro.com/"
                      className="inline-flex items-center gap-1 text-sm font-medium text-white underline underline-offset-2 transition-opacity hover:opacity-80"
                    >
                      Take the Quiz <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Quiz_banner_mobile.png?v=1774946657"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP-only right column: Quiz CTA card */}
        <div className="relative hidden h-full min-h-[400px] overflow-hidden rounded-3xl lg:block">
          <div className="absolute inset-0">
            <Image
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Quiz_banner.webp?v=1774945141"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 z-20 md:bottom-8 md:left-8 md:right-8">
            <div className="rounded-2xl border border-[#693979]/40 bg-[#2d1b3d]/80 p-4 backdrop-blur-md md:p-5">
              <p className="mb-2 text-sm font-medium text-white md:text-base">
                Is M3 the right supp for you?
              </p>
              <Link
                href="https://ai.muscalarpro.com/"
                className="inline-flex items-center gap-1 text-sm font-medium text-white underline underline-offset-2 transition-opacity hover:opacity-80 md:text-base"
              >
                Take the Quiz <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
