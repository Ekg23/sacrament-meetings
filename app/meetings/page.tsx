import MeetingCard from '@/components/MeetingCard'
import { SacramentMeeting } from '@/lib/types'


export default async function MeetingsPage() {
    const response = await fetch('http://localhost:3000/api/meetings')
    const meetings: SacramentMeeting[] = await response.json()

    return (
        <div className="space-y-4">
            <h1 className="text-xl font-semibold text-blue-900 mb-4">
                All meetings
            </h1>
            {meetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
        </div>
    )
}