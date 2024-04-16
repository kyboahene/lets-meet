"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// icons
import Plus from "@/assets/icons/plus";

// components
import MeetingCard from "./meeting-card";

// lib
import { Meeting, MeetingType } from "@/lib/types";

// modals
import JoinMeetingModal from "../modals/join-meeting-modal";
import InstantMeetingModal from "../modals/instant-meeting-modal";
import ScheduledMeetingModal from "../modals/schedule-meeting-modal";

const MeetingList = () => {
  const router = useRouter();
  const [joinMeetingModalIsOpen, setJoinMeetingModalIsOpen] = useState(false);
  const [instantMeetingModalIsOpen, setInstantMeetingModalIsOpen] = useState(
    false
  );
  const [scheduleMeetingModalIsOpen, setScheduleMeetingModalIsOpen] = useState(
    false
  );

  const meetings: Meeting[] = [
    {
      icon: <Plus />,
      title: "New Meeting",
      description: "Start an instant meeting",
      type: MeetingType.INSTANT_MEETING,
      bgColor: "bg-orange-1",
    },
    {
      icon: <Plus />,
      title: "Join Meeting",
      description: "via invitation link",
      type: MeetingType.JOIN_MEETING,
      bgColor: "bg-blue-1",
    },
    {
      icon: <Plus />,
      title: "Schedule Meeting",
      description: "Plan your meeting",
      type: MeetingType.SCHEDULE_MEETING,
      bgColor: "bg-purple-1",
    },
    {
      icon: <Plus />,
      title: "View Recording",
      description: "Check out your recordings",
      type: MeetingType.JOIN_MEETING,
      bgColor: "bg-yellow-1",
    },
  ];

  function handleMeetingType(meetingType: MeetingType) {
    switch (true) {
      case meetingType === MeetingType.INSTANT_MEETING:
        setInstantMeetingModalIsOpen(true);
        break;

      case meetingType === MeetingType.SCHEDULE_MEETING:
        setScheduleMeetingModalIsOpen(true);
        break;

      case meetingType === MeetingType.JOIN_MEETING:
        setJoinMeetingModalIsOpen(true);
        break;

      default:
        router.push("/recordings");
        break;
    }
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {meetings.map((meeting, index) => (
        <button key={index} onClick={() => handleMeetingType(meeting.type)}>
          <MeetingCard
            icon={meeting.icon}
            type={meeting.type}
            title={meeting.title}
            bgColor={meeting.bgColor}
            description={meeting.description}
          />
        </button>
      ))}

      <InstantMeetingModal
        isOpen={instantMeetingModalIsOpen}
        setIsOpen={setInstantMeetingModalIsOpen}
      />
      <ScheduledMeetingModal
        isOpen={scheduleMeetingModalIsOpen}
        setIsOpen={setScheduleMeetingModalIsOpen}
      />
      <JoinMeetingModal
        isOpen={joinMeetingModalIsOpen}
        setIsOpen={setJoinMeetingModalIsOpen}
      />
    </section>
  );
};

export default MeetingList;
