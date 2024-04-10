import React from "react";

// lib
import { cn } from "@/lib/utils";
import { MeetingModalDetails } from "@/lib/types";

// shared
import { Button } from "@/modules/shared/button";
import { Dialog, DialogContent } from "@/modules/shared/dialog";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const JoinMeetingModal = ({ isOpen, setIsOpen }: ModalProps) => {
  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="bg-dark-1 w-full px-6 py-9 border-none text-white"></DialogContent>
    </Dialog>
  );
};

export default JoinMeetingModal;
