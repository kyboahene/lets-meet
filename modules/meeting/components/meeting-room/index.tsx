"use client";

import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Users } from "lucide-react";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

// component
import LayoutMenu from "./layout-menu";
import EndCallButton from "./end-call-button";

// lib
import { LayoutType } from "@/lib/types";

// shared
import Loader from "@/modules/shared/loader";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");

  const [layout, setLayout] = useState<LayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  function CallLayout() {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;

      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="right" />;

      default:
        return <SpeakerLayout participantsBarPosition="left" />;
    }
  }

  function handleParticipants() {
    setShowParticipants(false);
  }

  if (callingState !== CallingState.JOINED) return <Loader />;

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex justify-center items-center size-full">
        <div className="flex items-center justify-center size-full max-w-[1000px]">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => handleParticipants()} />
        </div>
      </div>

      <div className="fixed bottom-0 w-full flex-center gap-5 flex-wrap">
        <CallControls />
        <LayoutMenu setLayout={setLayout} />
        <CallStatsButton />
        <button onClick={() => setShowParticipants(!showParticipants)}>
          <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <Users size={20} className="text-white" />
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
