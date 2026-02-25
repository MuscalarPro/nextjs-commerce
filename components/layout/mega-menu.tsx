"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { menuData } from "data/layout/megaMenuData";

export default function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-7xl bg-white rounded-3xl overflow-hidden shadow-2xl z-[100] border border-neutral-100"
    >
      <div className="flex p-4 gap-12">
        {/* Featured Card */}
        <div className="w-1/3 relative group cursor-pointer overflow-hidden rounded-xl">
          <Image
            src={menuData.featured.image}
            alt={menuData.featured.title}
            width={400}
            height={600}
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
          {/* <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <p className="text-xs font-medium uppercase tracking-wider mb-2 opacity-80">
              {menuData.featured.description}
            </p>
            <h3 className="text-2xl font-semibold leading-tight mb-4">
              {menuData.featured.title}
            </h3>
            <div className="flex items-center gap-2 group/cta">
              <span className="text-sm font-medium border-b border-transparent group-hover/cta:border-white transition-all">
                {menuData.featured.cta}
              </span>
              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </div> */}
        </div>

        {/* Categories */}
        <div className="flex-1 grid grid-cols-3 gap-8">
          {menuData.categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-6">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                {category.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {category.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.path} className="flex gap-4 group/item">
                      {link.icon && (
                        <div className="h-10 w-10 flex-shrink-0 relative rounded-lg overflow-hidden bg-neutral-100">
                          <Image
                            src={link.icon}
                            alt={link.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-black group-hover/item:text-neutral-500 transition-colors">
                            {link.title}
                          </span>
                          {link.badge && (
                            <span className="text-[10px] font-medium text-orange-500 whitespace-nowrap">
                              {link.badge}
                            </span>
                          )}
                        </div>
                        {link.description && (
                          <p className="text-xs text-neutral-400 leading-normal mt-0.5 max-w-[180px]">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
