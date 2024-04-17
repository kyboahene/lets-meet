import { Skeleton } from "@/modules/shared/skeleton";
import React from "react";

const SkeletonPersonalRoomPage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <Skeleton className="w-full h-16 rounded-[14px]" />
      <Skeleton className="w-full h-16 rounded-[14px]" />
      <Skeleton className="w-full h-16 rounded-[14px]" />
      <Skeleton className="w-full h-16 rounded-[14px]" />
    </div>
  );
};

export default SkeletonPersonalRoomPage;
