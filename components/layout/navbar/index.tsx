import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import NavbarDesktop from "./NavbarDesktop";

const { SITE_NAME, LOGO_URL } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left cluster: logo + desktop nav links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              prefetch={true}
              className="flex items-center font-sans"
              aria-label={SITE_NAME || "Home"}
            >
              {LOGO_URL ? (
                <Image
                  src={LOGO_URL}
                  alt={SITE_NAME || "Logo"}
                  width={130}
                  height={36}
                  className="h-8 w-auto object-contain md:h-9"
                  priority
                />
              ) : (
                <span className="text-lg font-medium text-black">
                  {SITE_NAME}
                </span>
              )}
            </Link>

            {menu.length ? <NavbarDesktop menu={menu} /> : null}
          </div>

          {/* Right cluster: account / cart / primary CTA / mobile hamburger */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="https://muscalarpro.myshopify.com/account/"
              className="hidden md:inline-block text-sm font-medium text-neutral-700 hover:text-black transition-colors"
            >
              Account
            </Link>

            <CartModal />

            <Link
              href="/product/decode-peak-performance-m3"
              prefetch={true}
              className="hidden md:inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Shop M3
            </Link>

            <div className="md:hidden">
              <Suspense fallback={null}>
                <MobileMenu menu={menu} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
