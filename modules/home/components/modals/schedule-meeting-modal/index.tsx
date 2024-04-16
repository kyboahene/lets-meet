import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import ReactDatePicker from "react-datepicker";
import { CheckCircle, Copy } from "lucide-react";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";

// lib
import { cn } from "@/lib/utils";
import { useToast } from "@/lib/hooks/use-toast";
import { createCall } from "@/lib/services/call";

// shared
import { Button } from "@/modules/shared/button";
import { Textarea } from "@/modules/shared/textarea";
import { Dialog, DialogContent } from "@/modules/shared/dialog";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const ScheduledMeetingModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const { user } = useUser();
  const { toast } = useToast();
  const client = useStreamVideoClient();

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [dateTime, setDateTime] = useState<Date | null>(null);

  function handleModalClose() {
    setIsOpen(false);
  }

  function handleCopyText() {
    navigator.clipboard.writeText(meetingLink);
    toast({ title: "Link copied" });
  }

  async function createMeeting(e: any) {
    e.preventDefault();

    if (!client || !user) return;

    if (!description)
      toast({
        title: "Description was not provided",
        variant: "destructive",
      });

    if (!dateTime)
      toast({
        title: "Date and time was not provided",
        variant: "destructive",
      });

    setIsLoading(true);
    try {
      const call = await createCall(description, client, dateTime);

      if (call) {
        setSubmitted(true);
        setMeetingLink(
          `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${call.id}`
        );
      }

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
          {submitted && (
            <div className="flex justify-center">
              <CheckCircle size={60} />
            </div>
          )}

          <h1
            className={cn("text-3xl font-bold leading-[42px]", {
              "text-center": submitted,
            })}
          >
            {!submitted ? "Schedule Meeting" : "Meeting Created"}
          </h1>

          {!submitted ? (
            <form className="flex flex-col gap-4" onSubmit={createMeeting}>
              <div className="flex flex-col gap-2.5">
                <label className="text-base text-normal leading-[22px] text-sky-1">
                  Add a description
                </label>
                <Textarea
                  className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-base text-normal leading-[22px] text-sky-1">
                  Select Date and Time
                </label>
                <ReactDatePicker
                  selected={dateTime}
                  onChange={(date) => setDateTime(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMM d, yyyy h:mm aa"
                  className="w-full rounded bg-dark-3 p-2 focus:outline-none"
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <span className="spinner"></span>
                ) : (
                  "Schedule Meeting"
                )}
              </Button>
            </form>
          ) : (
            <Button
              className="flex items-center gap-2"
              onClick={() => handleCopyText()}
            >
              <Copy size={15} />
              <span>Copy Meeting Link</span>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduledMeetingModal;
