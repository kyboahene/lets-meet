"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// shared
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/modules/shared/sheet";

// utils
import { cn } from "@/lib/utils";

// constants
import { sidebarLinks } from "@/constants";

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger className="cursor-pointer" asChild>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white">LetMeet.</h1>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link, index) => {
                  const isActive = pathName === link.route;

                  return (
                    <Link
                      href={link.route}
                      key={index}
                      className={cn("p-4 rounded-lg w-full max-w-60", {
                        "bg-blue-1": isActive,
                      })}
                    >
                      {/* {<link.icon />} */}
                      <div className="flex gap-4 items-center">
                        <span className="font-semibold">{link.label}</span>
                      </div>
                    </Link>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
