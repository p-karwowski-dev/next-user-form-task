"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { activeTab, inactiveTab } from "./style";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-800 flex items-center justify-center gap-0 py-2">
      <Link href="/" className={pathname === "/" ? activeTab : inactiveTab}>
        Home
      </Link>
      <span className="border-l border-gray-400 h-6" />
      <Link
        href="/add-user"
        className={pathname === "/add-user" ? activeTab : inactiveTab}
      >
        User Form
      </Link>
    </nav>
  );
}
