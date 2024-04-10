import { authMiddleware } from "@clerk/nextjs/server";


export default authMiddleware({
    publicRoutes: ["/", "/upcoming", "/previous", "/recordings", "/personal-room", "/meeting(.*)"]
});

export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/(api|trpc)(.*)"
    ]
};