import { ReactNode } from "react"

export type Meeting = {
    icon: ReactNode
    title: string
    description: string
    type: MeetingType | null
    bgColor: string
}

export type MeetingModalDetails = {
    title?: string;
    className?: string;
    children?: ReactNode;
    buttonText?: string;
    buttonIcon?: string;
    image?: string;
};

export enum MeetingType {
    SCHEDULE_MEETING = 'isScheduleMeeting',
    JOIN_MEETING = 'isJoiningMeeting',
    INSTANT_MEETING = 'isInstantMeeting'
}

export type LayoutType = "grid" | "speaker-left" | "speaker-right";

export type CallType = 'ended' | 'upcoming' | 'recordings'
