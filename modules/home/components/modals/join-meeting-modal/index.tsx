import React, { useState } from "react";
import { useRouter } from "next/navigation";

// lib
import { cn } from "@/lib/utils";

// shared
import { Input } from "@/modules/shared/input";
import { Button } from "@/modules/shared/button";
import { Dialog, DialogContent } from "@/modules/shared/dialog";
import { toast } from "@/lib/hooks/use-toast";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const JoinMeetingModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const router = useRouter();

  const [link, setLink] = useState("");

  function handleModalClose() {
    setIsOpen(false);
  }

  function handleJoinMeeting() {
    if (!link.includes("/meeting/"))
      toast({ title: "Incorrect link provided", variant: "destructive" });

    router.push(link);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="bg-dark-1 w-full px-6 py-9 border-none text-white">
        <div className="flex flex-col gap-6">
          <h1 className={cn("text-3xl  text-center font-bold leading-[42px]")}>
            Join Meeting
          </h1>
          <Input
            className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <Button onClick={() => handleJoinMeeting()}>{"Join Meeting"}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinMeetingModal;
