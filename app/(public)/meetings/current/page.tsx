import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";


function getMostRecentSunday(): string {
    const today = new Date()
    const day = today.getDay() // 0 = Sunday
    const diff = today.getDate() - day
    const sunday = new Date(today.setDate(diff))
    return sunday.toISOString().split('T')[0]
}

export default async function CurrentMeetingPage() {
    const meetings = await getMeetings()
    const todaysSunday = getMostRecentSunday()

    const currentMeeting = meetings.find((m) => m.date === todaysSunday)

    if (!currentMeeting) {
        redirect('/meetings')
    }

    redirect(`/meetings/${currentMeeting.id}`)
}