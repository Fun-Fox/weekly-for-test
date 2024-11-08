"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        title="Weekly"
        className={cn(pathname === "/" ? "underline" : "", "text-lg")}
      >
        Weekly
      </Link >
      <div className="hidden md:block text-gray-600">|</div>
      <Link
        href="/guide"
        title="guide"
        className="text-black text-lg"
      >
        Guide
      </Link>
      {/* <div className="hidden md:block text-gray-600">&</div>
      <Link href="/rss.xml" title="RSS" className="text-black text-lg">
        RSS
      </Link> */}
      <div className="hidden md:block text-gray-600">|</div>
      <Link
        // href="https://noteforms.com/forms/bvjqwl"
        href="https://www.funfox.icu"
        title="Blog"
        className="text-lg text-black"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Blog
      </Link>
    </>
  );
};

export default HeaderMenu;
