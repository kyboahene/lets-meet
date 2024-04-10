import React from "react";

// lib
import { cn } from "@/lib/utils";

// shared
import { Button } from "@/modules/shared/button";
import { Dialog, DialogContent } from "@/modules/shared/dialog";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
const ScheduledMeetingModal = ({ isOpen, setIsOpen }: ModalProps) => {
  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="bg-dark-1 w-full px-6 py-9 border-none text-white">
        <div className="flex flex-col gap-6">
          <h1 className={cn("text-3xl font-bold leading-[42px]")}>
            Start an instant meeting
          </h1>
          <Button>Start Meeting</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduledMeetingModal;
