import React from "react";

// lib
import { cn } from "@/lib/utils";

// shared
import { buttonVariants } from "@/modules/shared/button";

const NotFound = () => {
  return (
    <section className="flex-center w-full h-screen">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold text-white text-center md:text-7xl">
          404
        </h1>
        <p className="text-2xl font-medium text-gray-300 text-center md:text-3xl">
          Page not found.
        </p>

        <a
          href="/"
          className={cn(
            buttonVariants({ variant: "default", className: "text-white" })
          )}
        >
          Return Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;
