import NavLinks from '@/components/NavLinks'

export default function MeetingsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <NavLinks />
            <div className="mt-6">{children}</div>
        </div>
    )
}