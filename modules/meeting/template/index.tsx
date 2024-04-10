"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

// shared
import Loader from "@/modules/shared/loader";

// component
import MeetingRoom from "../components/meeting-room";
import MeetingSetup from "../components/meeting-setup";

// lib
import { useGetCallById } from "@/lib/hooks/use-get-call-by-Id";

type Props = {
  id: string;
};

const MeetingPageTemplate = ({ id }: Props) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <section className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </section>
  );
};

export default MeetingPageTemplate;
