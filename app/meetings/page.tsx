import MeetingCard from '@/components/MeetingCard'
import { SacramentMeeting } from '@/lib/types'

function getBaseUrl() {
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return 'http://localhost:3000';
}

export default async function MeetingsPage() {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/meetings`, { cache: 'no-store' });
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