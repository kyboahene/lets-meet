import { ReactNode } from "react"

export type Meeting = {
    icon: ReactNode
    title: string
    description: string
    type: MeetingType
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