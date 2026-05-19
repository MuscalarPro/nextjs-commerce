"use client";

import clsx from "clsx";
import { Menu } from "lib/shopify/types";
import { toInternalPath } from "lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function FooterMenuItem({ item }: { item: Menu }) {
  const pathname = usePathname();
  const path = toInternalPath(item.path);
  const [active, setActive] = useState(pathname === path);

  useEffect(() => {
    setActive(pathname === path);
  }, [pathname, path]);

  return (
    <li>
      <Link
        href={path}
        className={clsx(
          "block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm",
          {
            "text-black": active,
          },
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav>
      <ul>
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
    </nav>
  );
}
