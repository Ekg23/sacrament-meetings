'use client'
import { SacramentMeeting } from "@/lib/types"


export default function MeetingDetail({meeting}: {meeting: SacramentMeeting}) {
    const formattedtDate = new Date(meeting.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="text-center border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-2xl font-bold text-blue-900">{formattedtDate}</h1>
            {meeting.meetingType ! == 'regular' && (
            <span className="inline-block mt-2 text-xs font-medium uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded">
                        {meeting.meetingType.replace('-', ' ')}
            </span>
        )}
        </div>

         {/* Opening and Conducting */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div>
                <p className="text-gray-500">Presiding</p>
                <p className="text-gray-900 font-medium">{meeting.presiding}</p>
            </div>
            <div>
                <p className="text-gray-500">Conducting</p>
                <p className="text-gray-900 font-medium">{meeting.conducting}</p>
            </div>
        </div>

            {/* Opening */}
        <section className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Opening
            </h2>
            <p className="text-sm text-gray-800 mb-1">
                Hymn: {meeting.openingHymn.number} — {meeting.openingHymn.title}
            </p>
            <p className="text-sm text-gray-800">
                Prayer: {meeting.openingPrayer}
            </p>
        </section>

        {/* Ward / Stake Business */}
        {(meeting.wardBusiness.length > 0 || meeting.stakeBusiness) && (
            <section className="mb-6">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Business
                </h2>
                {meeting.stakeBusiness && (
                    <p className="text-sm text-amber-700 mb-1">Stake business conducted</p>
                )}
                {meeting.wardBusiness.map((item, i) => (
                    <p key={i} className="text-sm text-gray-800">
                        {item.description}
                    </p>
                ))}
            </section>
        )}

        {/* Sacrament Hymn */}
        <section className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Sacrament Hymn
            </h2>
            <p className="text-sm text-gray-800">
                {meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}
            </p>
        </section>

         {meeting.speakers.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                        Program
                    </h2>
                    <ul className="space-y-2">
                        {meeting.speakers.map((s, i) => (
                            <li key={i} className="text-sm text-gray-800">
                                {s.type === 'musical-number' ? (
                                    <span className="italic">Musical number: {s.name}</span>
                                ) : (
                                    <>
                                        <span className="font-medium">{s.name}</span>
                                        {s.topic && <span className="text-gray-600"> — {s.topic}</span>}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Closing */}
            <section className="mb-6">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Closing
                </h2>
                <p className="text-sm text-gray-800 mb-1">
                    Hymn: {meeting.closingHymn.number} — {meeting.closingHymn.title}
                </p>
                <p className="text-sm text-gray-800">
                    Prayer: {meeting.closingPrayer}
                </p>
            </section>

            {/* Announcements */}
            {meeting.announcements && meeting.announcements.length > 0 && (
                <section>
                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                        Announcements
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        {meeting.announcements.map((a, i) => (
                            <li key={i} className="text-sm text-gray-800">
                                {a}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Print Button */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <button
                    onClick={() => window.print()}
                    className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                        Print
                    </button>
            </div>
        
    </div>

    )
}