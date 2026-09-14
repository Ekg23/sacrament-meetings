import MeetingCard from '@/components/MeetingCard'
import {getMeetings} from '@/lib/meetings-db'

export default async function MeetingsPage() {
    const meetings = await getMeetings()

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