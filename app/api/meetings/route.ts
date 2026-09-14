import { getMeetings } from "@/lib/meetings-db";
export async function GET(request: Request) {
    const date = new URL(request.url).searchParams.get('date');
    const meetings = getMeetings();

    const filtered = date
        ? meetings.filter((m) => m.date === date)
        : meetings;


    return Response.json(filtered);
}