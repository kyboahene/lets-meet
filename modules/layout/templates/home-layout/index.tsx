import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

type Props = {
  children: React.ReactNode;
};

const HomeLayoutTemplate = ({ children }: Props) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">
            <div className="size-full flex flex-col gap-10 text-white">
              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayoutTemplate;
