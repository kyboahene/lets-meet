import React, { useState } from "react";

// lib
import { cn } from "@/lib/utils";

// shared
import { Button } from "@/modules/shared/button";
import { Dialog, DialogContent } from "@/modules/shared/dialog";
import { Input } from "@/modules/shared/input";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const JoinMeetingModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  function handleModalClose() {
    setIsOpen(false);
  }

  function handleJoinMeeting() {}

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="bg-dark-1 w-full px-6 py-9 border-none text-white">
        <div className="flex flex-col gap-6">
          <h1 className={cn("text-3xl  text-center font-bold leading-[42px]")}>
            Join Meeting
          </h1>
          <Input className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0" />
          <Button onClick={() => handleJoinMeeting()} disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : "Join Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinMeetingModal;
