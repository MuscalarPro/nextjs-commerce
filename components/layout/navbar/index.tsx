import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import NavbarDesktop from "./NavbarDesktop";

const { SITE_NAME, LOGO_WHITE_URL } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto relative p-3 md:px-4 bg-black/70 md:rounded-full md:mt-8 backdrop-blur-xl">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-6 md:w-auto">
            <Link
              href="/"
              prefetch={true}
              className="flex items-center gap-2 text-white font-sans"
            >
              {LOGO_WHITE_URL ? (
                <div className="relative h-auto">
                  <Image
                    src={LOGO_WHITE_URL}
                    alt={SITE_NAME || "Logo"}
                    width={130}
                    height={100}
                    className="object-contain h-full w-auto"
                    priority
                  />
                </div>
              ) : (
                <>
                  <span className="text-lg font-medium">{SITE_NAME}</span>
                </>
              )}
            </Link>
          </div>
          {menu.length ? <NavbarDesktop menu={menu} /> : null}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-white font-sans hover:opacity-80 transition-opacity"
            >
              Login
            </Link>
            <CartModal />
            <div className="block flex-none md:hidden">
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
