import React from "react";

// lib
import { cn } from "@/lib/utils";
import { Meeting } from "@/lib/types";

const MeetingCard = ({ bgColor, description, icon, title, type }: Meeting) => {
  return (
    <div
      className={cn(
        "bg-orange-1 px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[20px] cursor-pointer",
        bgColor
      )}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-left font-bold">{title}</h1>
        <p className="text-lg text-left font-normal">{description}</p>
      </div>
    </div>
  );
};

export default MeetingCard;
