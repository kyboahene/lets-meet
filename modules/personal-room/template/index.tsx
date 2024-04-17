"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

// component
import PersonalRoomDetails from "../components/personal-room-table";

// skeleton
import SkeletonPersonalRoomPage from "@/modules/skeletons/templates/skeleton-personal-room-page";

const PersonalRoomPageTemplate = () => {
  const { isLoaded } = useUser();

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Personal Room</h1>
      {isLoaded ? <PersonalRoomDetails /> : <SkeletonPersonalRoomPage />}
    </section>
  );
};

export default PersonalRoomPageTemplate;
