import React from "react";

// utils
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
