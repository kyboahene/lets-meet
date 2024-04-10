import React from "react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

// components
import MobileNav from "../mobile-nav";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 py-4 bg-dark-1">
      <div className="flex-between px-6">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white max-sm:hidden">
            LetMeet
          </h1>
        </Link>

        <div className="flex-between gap-5">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
