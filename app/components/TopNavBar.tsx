"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import Link from "next/link";
import Image from "next/image";

export const TopNavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center gap-1">
            {/* <Image
              src={"assets/heart.svg"}
              width={16}
              height={16}
              alt="logo"
              className="h-8 w-full"
              priority
            /> */}
            <h1 className="text-xl whitespace-nowrap font-bold text-primary">
              Resume Builder & Parser
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
};
