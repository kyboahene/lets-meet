import React from "react";
import HomeLayoutTemplate from "@/modules/layout/templates/home-layout";
import StreamVideoProvider from "@/modules/shared/providers/stream-client-provider";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <HomeLayoutTemplate>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </HomeLayoutTemplate>
  );
};

export default HomeLayout;
