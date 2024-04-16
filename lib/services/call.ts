import { StreamVideoClient } from "@stream-io/video-react-sdk";

export async function createCall(
    description: string,
    client: StreamVideoClient,
    dateTime: Date | null,
) {
    try {
        const id = crypto.randomUUID();
        const call = client.call("default", id);

        if (!call) throw new Error("Failed to create call");

        const startsAt = dateTime ? dateTime.toISOString() : new Date().toISOString();

        await call.getOrCreate({
            data: {
                starts_at: startsAt,
                custom: {
                    description,
                },
            },
        });

        return call;
    } catch (error: any) {
        throw new Error(error);
    }
}
