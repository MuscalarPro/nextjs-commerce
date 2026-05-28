import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import HamburgerMenu from "./mobile-menu";
import NavbarDesktop from "./NavbarDesktop";

const { SITE_NAME, LOGO_WHITE_URL } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:top-6 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        {/* MAIN PILL — dark, blurred, rounded-full, floating */}
        <div className="flex-1 rounded-full bg-black/85 px-4 py-2 backdrop-blur-md md:px-6 md:py-2.5">
          {/* Mobile: flex justify-between (logo left, right cluster right, auto-
              sized). Desktop: 3-col grid (links | logo | right cluster). */}
          <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-3">
            {/* Left: desktop nav links (hidden on mobile) */}
            <div className="hidden md:flex md:justify-start">
              {menu.length ? <NavbarDesktop menu={menu} /> : null}
            </div>

            {/* Center: logo (left on mobile, center on desktop) */}
            <div className="flex justify-start md:justify-center">
              <Link
                href="/"
                prefetch={true}
                className="flex items-center text-white"
                aria-label={SITE_NAME || "Home"}
              >
                {LOGO_WHITE_URL ? (
                  <Image
                    src={LOGO_WHITE_URL}
                    alt={SITE_NAME || "Logo"}
                    width={140}
                    height={28}
                    className="h-6 w-auto object-contain md:h-7"
                    priority
                  />
                ) : (
                  <span className="text-lg font-medium">{SITE_NAME}</span>
                )}
              </Link>
            </div>

            {/* Right: account (desktop) / cart / shop M3 — cart + shop M3
                stay visible on mobile so both lead to their pages. */}
            <div className="flex items-center justify-end gap-1.5 md:gap-3">
              <Link
                href="https://muscalarpro.myshopify.com/account/"
                className="hidden text-sm font-medium text-white transition-opacity hover:opacity-80 md:inline-block"
              >
                Account
              </Link>

              <CartModal />

              <Link
                href="/product/decode-peak-performance-m3"
                prefetch={true}
                className="hidden items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 md:inline-flex"
              >
                Shop M3
              </Link>
            </div>
          </div>
        </div>

        {/* HAMBURGER — separate rounded-square button, always visible */}
        <Suspense fallback={null}>
          <HamburgerMenu menu={menu} />
        </Suspense>
      </div>
    </nav>
  );
}
