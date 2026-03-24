"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, Suspense, useEffect, useState } from "react";
import Search, { SearchSkeleton } from "./search";

const scienceLinks = [
  { title: "Science of [M3]", path: "/science" },
  { title: "How it works", path: "/science/how-it-works" },
  { title: "Benefits", path: "/science/benefits" },
  { title: "Studies", path: "/studies" },
  { title: "Patents", path: "/patents" },
];

const aboutLinks = [
  { title: "Reviews", path: "/reviews" },
  { title: "Our Why", path: "/our-why" },
  { title: "FAQs", path: "/faqs" },
  { title: "Blogs", path: "#" },
];

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("Science");

  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden"
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6">
              <div className="flex flex-col h-full bg-white">
                <div className="p-4 border-b border-neutral-100">
                  <button
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <XMarkIcon className="h-6" />
                  </button>

                  <div className="mb-4 w-full">
                    <Suspense fallback={<SearchSkeleton />}>
                      <Search />
                    </Suspense>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-2">
                  <ul className="flex w-full flex-col divide-y divide-neutral-100">
                    {/* Shop Accordion */}
                    <li className="flex flex-col">
                      <button
                        onClick={() => toggleSection("Shop")}
                        className="flex w-full items-center justify-between py-6 text-2xl font-medium text-black"
                      >
                        <span>Shop</span>
                        {openSection === "Shop" ? (
                          <MinusIcon className="h-6 w-6 text-neutral-400" />
                        ) : (
                          <PlusIcon className="h-6 w-6 text-neutral-400" />
                        )}
                      </button>
                      {openSection === "Shop" && (
                        <ul className="flex flex-col gap-4 pb-6 pl-4">
                          {menu
                            .filter(
                              (item) =>
                                !["Science", "About", "Reviews", "Our Why", "Blogs", "FAQs", "Patents"].includes(
                                  item.title
                                )
                            )
                            .map((item: Menu) => (
                              <li key={item.title}>
                                <Link
                                  href={item.path}
                                  onClick={closeMobileMenu}
                                  className="text-xl text-black hover:text-neutral-500"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>

                    {/* Science Accordion */}
                    <li className="flex flex-col">
                      <button
                        onClick={() => toggleSection("Science")}
                        className="flex w-full items-center justify-between py-6 text-2xl font-medium text-black"
                      >
                        <span>Science</span>
                        {openSection === "Science" ? (
                          <MinusIcon className="h-6 w-6 text-neutral-400" />
                        ) : (
                          <PlusIcon className="h-6 w-6 text-neutral-400" />
                        )}
                      </button>
                      {openSection === "Science" && (
                        <ul className="flex flex-col gap-4 pb-6 pl-4">
                          {scienceLinks.map((link) => (
                            <li key={link.title}>
                              <Link
                                href={link.path}
                                onClick={closeMobileMenu}
                                className="text-xl text-black hover:text-neutral-500"
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    {/* About Accordion */}
                    <li className="flex flex-col">
                      <button
                        onClick={() => toggleSection("About")}
                        className="flex w-full items-center justify-between py-6 text-2xl font-medium text-black"
                      >
                        <span>About</span>
                        {openSection === "About" ? (
                          <MinusIcon className="h-6 w-6 text-neutral-400" />
                        ) : (
                          <PlusIcon className="h-6 w-6 text-neutral-400" />
                        )}
                      </button>
                      {openSection === "About" && (
                        <ul className="flex flex-col gap-4 pb-6 pl-4">
                          {aboutLinks.map((link) => (
                            <li key={link.title}>
                              <Link
                                href={link.path}
                                onClick={closeMobileMenu}
                                className="text-xl text-black hover:text-neutral-500"
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

