import HomeLayoutTemplate from "@/modules/layout/templates/home-layout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return <HomeLayoutTemplate>{children}</HomeLayoutTemplate>;
};

export default HomeLayout;
