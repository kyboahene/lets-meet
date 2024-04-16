"use client";

import { useGetCalls } from "@/lib/hooks/use-get-calls";
import { CallType } from "@/lib/types";
import MeetingCard from "@/modules/home/components/meeting-lists/meeting-card";
import { useRouter } from "next/navigation";
import React from "react";
import CallCard from "../call-card";
import Previous from "@/assets/icons/previous";
import Upcoming from "@/assets/icons/upcoming";
import Recordings from "@/assets/icons/recordings";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { Play } from "lucide-react";
import Loader from "../loader";

type Props = {
  type: CallType;
};

const CallList = ({ type }: Props) => {
  const router = useRouter();
  const { endedCalls, isLoading, upcomingCalls, recordings } = useGetCalls();

  function getCalls() {
    switch (type) {
      case "ended":
        return endedCalls;

      case "recordings":
        return recordings;

      case "upcoming":
        return upcomingCalls;

      default:
        return [];
    }
  }

  function getNoCallsMessage() {
    switch (type) {
      case "ended":
        return "No previous calls";

      case "recordings":
        return "No recordings available";

      case "upcoming":
        return "No upcoming calls";

      default:
        return "";
    }
  }

  function getIcon() {
    switch (true) {
      case type === "ended":
        return <Previous />;

      case type === "upcoming":
        return <Upcoming />;

      default:
        return <Recordings />;
    }
  }

  const icon = getIcon();
  const areRecordings = type === "recordings";
  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {calls && calls.length > 0 ? (
        calls.map((call: Call | CallRecording, index) => (
          <CallCard
            key={index}
            title={
              (call as Call).state.custom.description.substring(0, 20) ||
              "No description"
            }
            date={
              (call as Call).state.startsAt?.toLocaleString() ||
              (call as CallRecording).start_time.toLocaleString()
            }
            icon={icon}
            isPreviousMeeting={type === "ended"}
            buttonIcon={areRecordings ? <Play /> : null}
            buttonText={areRecordings ? "Play" : "Start"}
            handleClick={
              areRecordings
                ? () => router.push(`/meeting/${(call as CallRecording).url}`)
                : () => router.push(`/meeting/${(call as Call).id}`)
            }
            link={
              areRecordings
                ? (call as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                    (call as Call).id
                  }`
            }
          />
        ))
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
