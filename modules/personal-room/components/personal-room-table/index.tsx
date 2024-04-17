"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// lib
import { toast } from "@/lib/hooks/use-toast";

// shared
import { Button } from "@/modules/shared/button";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { createCall } from "@/lib/services/call";
import { useGetCallById } from "@/lib/hooks/use-get-call-by-Id";

type RowDataProps = {
  title: string;
  description?: string | null;
};

const RowData = ({ title, description }: RowDataProps) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <p className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}&apos;s Meeting Room
      </p>
    </div>
  );
};

const PersonalRoomDetails = () => {
  const { user } = useUser();
  const router = useRouter();
  const client = useStreamVideoClient();

  const [isLoading, setIsLoading] = useState(false);

  const meetingId = user?.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}`;

  const { call } = useGetCallById(meetingId!);

  function handleButtonCopy() {
    navigator.clipboard.writeText(meetingLink);
    toast({ title: "Link Copied" });
  }

  async function startMeeting() {
    if (!client || !user) return;

    setIsLoading(true);
    try {
      if (!call) {
        await createCall("Personal meeting", client, new Date());
      }
      router.push(`/meeting/${meetingId}?personal=true`);
    } catch (error) {
      toast({ title: "Failed to start meeting", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
      <RowData title="Topic" description={user?.username ?? "User"} />
      <RowData title="Meeting ID" description={meetingId} />
      <RowData title="Invite Link" description={meetingLink} />
      <div className="flex gap-5">
        <Button onClick={() => startMeeting()}>Start Meeting</Button>
        <Button onClick={() => handleButtonCopy()} className="bg-dark-4 px-6">
          <Copy size={15} />
          &nbsp; Copy Link
        </Button>
      </div>
    </div>
  );
};

export default PersonalRoomDetails;
