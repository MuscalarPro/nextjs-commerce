"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useHideFloatingAgent } from "components/elevenlabs/use-hide-floating-agent";
import { Menu } from "lib/shopify/types";
import { toInternalPath } from "lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

// Static secondary group of links shown under the Shopify-managed primary group.
// Editing the Shopify "next-js-frontend-header-menu" controls the top group;
// these are evergreen pages we always want one tap away in mobile.
const exploreGroupExtras = [
  { title: "Science of [M3]", path: "/science" },
  { title: "How it works", path: "/science/how-it-works" },
  { title: "Benefits", path: "/science/benefits" },
  { title: "Studies", path: "/studies" },
  { title: "Patents", path: "/patents" },
];

const resourcesGroup = [
  { title: "FAQs", path: "/faqs" },
  { title: "Blogs", path: "/blogs" },
  { title: "Reviews", path: "/reviews" },
  { title: "Gift Health", path: "/gift" },
  { title: "Contact", path: "/contact" },
  { title: "Help", path: "/help" },
];

const policiesGroup = [
  { title: "Privacy Policy", path: "/policies/privacy-policy" },
  { title: "Shipping Policy", path: "/policies/shipping-policy" },
  { title: "Refund Policy", path: "/policies/refund-policy" },
  { title: "Terms & Conditions", path: "/policies/term-services" },
  {
    title: "Informed Medical Consent",
    path: "/policies/informed-medical-consent",
  },
];

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useHideFloatingAgent(isOpen);

  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  // Auto-close if the viewport grows past mobile breakpoint while open.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-md text-black transition-colors hover:bg-neutral-100"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50 md:hidden">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-transform ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 flex h-full w-full max-w-[420px] flex-col bg-white">
              {/* Header */}
              <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-4">
                <Dialog.Title className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                  Menu
                </Dialog.Title>
                <button
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-md text-black transition-colors hover:bg-neutral-100"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable section list */}
              <div className="flex-1 overflow-y-auto px-4 pb-32 pt-4">
                {/* Top utility row */}
                <div className="mb-6 flex items-center justify-between border-b border-neutral-100 pb-6">
                  <Link
                    href="https://muscalarpro.myshopify.com/account/"
                    onClick={closeMobileMenu}
                    className="text-base font-medium text-black hover:text-neutral-600"
                  >
                    Account
                  </Link>
                </div>

                {/* Group: Explore (Shopify menu + static science sub-links) */}
                <MobileGroup title="Explore">
                  {menu.map((item: Menu) => (
                    <MobileLink
                      key={item.title}
                      href={
                        item.title === "Shop"
                          ? "/product/decode-peak-performance-m3"
                          : toInternalPath(item.path)
                      }
                      label={item.title}
                      onClick={closeMobileMenu}
                    />
                  ))}
                  {exploreGroupExtras.map((link) => (
                    <MobileLink
                      key={link.title}
                      href={link.path}
                      label={link.title}
                      onClick={closeMobileMenu}
                    />
                  ))}
                </MobileGroup>

                {/* Group: Resources */}
                <MobileGroup title="Resources">
                  {resourcesGroup.map((link) => (
                    <MobileLink
                      key={link.title}
                      href={link.path}
                      label={link.title}
                      onClick={closeMobileMenu}
                    />
                  ))}
                </MobileGroup>

                {/* Group: Policies */}
                <MobileGroup title="Policies">
                  {policiesGroup.map((link) => (
                    <MobileLink
                      key={link.title}
                      href={link.path}
                      label={link.title}
                      onClick={closeMobileMenu}
                    />
                  ))}
                </MobileGroup>
              </div>

              {/* Pinned CTA at the bottom */}
              <div className="border-t border-neutral-200 bg-white p-4">
                <Link
                  href="/product/decode-peak-performance-m3"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  Shop M3
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

function MobileGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-400">
        {title}
      </h3>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <li className="border-b border-neutral-100 last:border-0">
      <Link
        href={href}
        prefetch={true}
        onClick={onClick}
        className="flex items-center justify-between py-4 text-lg font-medium text-black hover:text-neutral-600"
      >
        <span>{label}</span>
        <ChevronRightIcon className="h-4 w-4 text-neutral-400" />
      </Link>
    </li>
  );
}
