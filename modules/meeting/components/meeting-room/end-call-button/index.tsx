"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

// shared
import { Button } from "@/modules/shared/button";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const [isLoading, setIsLoading] = useState(false);

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant?.userId === call.state.createdBy.id;

  async function handleButton() {
    setIsLoading(true);

    await call?.endCall();
    router.push("/");

    setIsLoading(false);
  }

  if (!isMeetingOwner) return null;

  return (
    <Button
      disabled={isLoading}
      className="bg-red-500"
      onClick={() => handleButton()}
    >
      {isLoading ? <span className="spinner"></span> : "End call for everyone"}
    </Button>
  );
};

export default EndCallButton;
