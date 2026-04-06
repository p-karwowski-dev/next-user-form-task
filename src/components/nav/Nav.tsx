"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { activeTabClass, inactiveTabClass } from "./style";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-800 flex items-center justify-center gap-0 py-2">
      <Link
        href="/"
        className={pathname === "/" ? activeTabClass : inactiveTabClass}
      >
        Home
      </Link>
      <span className="border-l border-gray-400 h-6" />
      <Link
        href="/add-user"
        className={pathname === "/add-user" ? activeTabClass : inactiveTabClass}
      >
        User Form
      </Link>
    </nav>
  );
}
