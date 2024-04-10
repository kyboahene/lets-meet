import Home from "@/assets/icons/home";
import Plus from "@/assets/icons/plus";
import Upcoming from "@/assets/icons/upcoming";
import Previous from "@/assets/icons/previous";
import Recordings from "@/assets/icons/recordings";

export const sidebarLinks = [
    {
        label: "Home",
        route: "/",
        icon: Home
    },
    {
        label: "Upcoming",
        route: "/upcoming",
        icon: Upcoming
    },
    {
        label: "Previous",
        route: "/previous",
        icon: Previous
    },
    {
        label: "Recordings",
        route: "/recordings",
        icon: Recordings
    },
    {
        label: "Personal Room",
        route: "/personal-room",
        icon: Plus
    }
]