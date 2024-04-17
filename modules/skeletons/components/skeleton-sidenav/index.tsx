import { Skeleton } from "@/modules/shared/skeleton";

const SkeletonSidebar = () => {
  return (
    <Skeleton className="sticky left-0 top-0 h-screen w-fit max-sm:hidden lg:w-[264px]" />
  );
};

export default SkeletonSidebar;
