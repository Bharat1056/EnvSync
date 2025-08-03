// components/common/Navbar.tsx
"use client";

import { navbarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background bg-opacity-90 backdrop-blur-sm shadow-lg">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-foreground text-xl font-bold tracking-wide">
          EnvSync
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navbarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative text-sm font-medium transition
                  ${
                    isActive
                      ? "text-foreground before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:bg-foreground"
                      : "text-muted-foreground hover:text-primary before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 hover:before:w-full hover:before:bg-primary"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
