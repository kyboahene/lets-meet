import React from "react";
import Sidebar from "../../components/sidebar";

type Props = {
  children: React.ReactNode;
};

const HomeLayoutTemplate = ({ children }: Props) => {
  return (
    <main className="relative">
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayoutTemplate;
