import React from "react";
import SkeletonTopNav from "../../components/skeleton-topnav";
import SkeletonSidebar from "../../components/skeleton-sidenav";
import SkeletonCallList from "../../components/skeleton-call-list";

const SkeletonLayout = () => {
  return (
    <main className="relative">
      <SkeletonTopNav />
      <div className="flex">
        <SkeletonSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">
            <div className="size-full">
              <SkeletonCallList />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SkeletonLayout;
