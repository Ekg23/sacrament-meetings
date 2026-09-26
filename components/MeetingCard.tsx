import { SacramentMeeting } from "@/lib/types";
import Link from 'next/link'



export default function MeetingCard( {meeting}: {meeting: SacramentMeeting}) {
    const formattedtDate = new Date(meeting.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const speakerNames = meeting.speakers
        .filter((s) => s.type === 'speaker')
        .map((s) => s.name)
        .join(', ')

    return (
         <Link
            href={`/meetings/${meeting.id}`}
            className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-5"
        >
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-blue-900">
                    {formattedtDate}
                </h2>
                {meeting.meetingType !== 'regular' && (
                    <span className="text-xs font-medium uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded">
                        {meeting.meetingType.replace('-', ' ')}
                    </span>
                )}
            </div>

            <p className="text-sm text-gray-600 mb-1">
                Presiding: <span className="text-gray-800">{meeting.presiding}</span>
            </p>

            {speakerNames && (
                <p className="text-sm text-gray-600">
                    Speakers: <span className="text-gray-800">{speakerNames}</span>
                </p>
            )}

            {meeting.stakeBusiness && (
                <p className="text-xs text-amber-700 mt-2">Includes stake business</p>
            )}
        </Link>
    )    
}