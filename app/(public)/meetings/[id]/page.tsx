import { notFound } from 'next/navigation'
import MeetingDetail from '@/components/MeetingDetail'
import { SacramentMeeting } from '@/lib/types'

function getBaseUrl() {
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return 'http://localhost:3000';

}
export default async function MeetingPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/meetings/${id}`, { cache: 'no-store' })


    if (!response.ok) {
        notFound()
    }
    const meeting: SacramentMeeting = await response.json()
    return <MeetingDetail meeting={meeting} />
}