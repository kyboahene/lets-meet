import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";

// lib
import { cn } from "@/lib/utils";

// lib
import { createCall } from "@/lib/services/call";
import { useToast } from "@/lib/hooks/use-toast";

// shared
import { Button } from "@/modules/shared/button";
import { Dialog, DialogContent } from "@/modules/shared/dialog";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
const InstantMeetingModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const client = useStreamVideoClient();

  const [isLoading, setIsLoading] = useState(false);

  function handleModalClose() {
    setIsOpen(false);
  }

  async function createMeeting() {
    if (!client || !user) return;

    setIsLoading(true);
    try {
      const call = await createCall(new Date(), "Instant meeting", client);

      if (call) router.push(`/meeting/${call.id}`);

      toast({ title: "Meeting created" });
    } catch (error) {
      toast({ title: "Failed to create meeting", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="bg-dark-1 w-full px-6 py-9 border-none text-white">
        <div className="flex flex-col gap-6">
          <h1 className={cn("text-3xl font-bold leading-[42px]")}>
            Start an instant meeting
          </h1>
          <Button onClick={() => createMeeting()} disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : "Start Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InstantMeetingModal;
