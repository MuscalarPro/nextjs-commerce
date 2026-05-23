"use client";

import { AnimatePresence } from "framer-motion";
import { Menu } from "lib/shopify/types";
import { toInternalPath } from "lib/utils";
import Link from "next/link";
import { useState } from "react";
import MegaMenu from "../mega-menu";

export default function NavbarDesktop({ menu }: { menu: Menu[] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hidden md:flex items-center h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="flex gap-6 text-sm items-center">
        {menu.map((item: Menu) => (
          <li key={item.title}>
            <Link
              href={
                item.title === "Shop"
                  ? "/product/decode-peak-performance-m3"
                  : toInternalPath(item.path)
              }
              prefetch={true}
              className="font-sans font-medium text-neutral-700 hover:text-black transition-colors whitespace-nowrap"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <AnimatePresence>{isHovered && <MegaMenu />}</AnimatePresence>
    </div>
  );
}
