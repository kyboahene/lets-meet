import { Button } from "@/modules/shared/button";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

type Props = {
  setIsSetupComplete: (value: boolean) => void;
};

const MeetingSetup = ({ setIsSetupComplete }: Props) => {
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);

  const call = useCall();
  if (!call)
    throw new Error("useCall must be used within StreamCall component");

  function handleMeeting() {
    call?.join();
    setIsSetupComplete(true);
  }

  useEffect(() => {
    if (isMicCamToggleOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggleOn, call?.camera, call?.microphone]);

  return (
    <section className="flex h-screen w-full flex-col flex-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />

      <div className="flex-center h-16 gap-3">
        <label className="flex-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggleOn}
            onChange={(e) => setIsMicCamToggleOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => handleMeeting()}
      >
        Join meeting
      </Button>
    </section>
  );
};

export default MeetingSetup;
