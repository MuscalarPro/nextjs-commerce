"use client";

import { AnimatePresence } from "framer-motion";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { useState } from "react";
import MegaMenu from "../mega-menu";

export default function NavbarDesktop({ menu }: { menu: Menu[] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="flex gap-6 text-sm items-center">
        {menu.map((item: Menu) => (
          <li key={item.title}>
            <Link
              href={item.path}
              prefetch={true}
              className="text-white font-sans hover:opacity-80 transition-opacity whitespace-nowrap"
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
