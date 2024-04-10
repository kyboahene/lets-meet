import React from "react";
import MeetingPageTemplate from "@/modules/meeting/template";

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <MeetingPageTemplate id={params.id} />
    </main>
  );
};

export default Meeting;
