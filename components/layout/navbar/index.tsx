import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";

const { SITE_NAME, LOGO_URL } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto relative p-2 md:px-4 bg-white/80 rounded-full mt-4 backdrop-blur-md">
        <div className="relative flex items-center justify-between">
          <div className="block flex-none md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>
          <div className="flex w-full items-center">
            <div className="flex w-full items-center gap-6 md:w-auto">
              <Link
                href="/"
                prefetch={true}
                className="flex items-center gap-2 text-black font-sans"
              >
                {LOGO_URL ? (
                  <div className="relative h-8 w-auto">
                    <Image
                      src={LOGO_URL}
                      alt={SITE_NAME || "Logo"}
                      width={120}
                      height={32}
                      className="object-contain h-full w-auto"
                      priority
                    />
                  </div>
                ) : (
                  <>
                    <span className="text-lg font-medium">{SITE_NAME}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  </>
                )}
              </Link>
              {menu.length ? (
                <ul className="hidden gap-6 text-sm md:flex md:items-center">
                  {menu.map((item: Menu) => (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        prefetch={true}
                        className="text-black font-sans hover:opacity-80 transition-opacity"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <Link
                href="/login"
                className="text-black font-sans hover:opacity-80 transition-opacity"
              >
                Login
              </Link>
              <CartModal />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
