import React from "react";
import Hero from "../components/hero";
import MeetingList from "../components/meeting-lists";

const HomePageTemplate = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <Hero />
      <MeetingList />
    </section>
  );
};

export default HomePageTemplate;
