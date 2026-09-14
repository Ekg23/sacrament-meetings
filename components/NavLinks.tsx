'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <nav aria-label="Primary" className="flex gap-6 border-b border-gray-200 pb-3 mb-2">
            <Link
                href="/"
                className={pathname === '/' ? 'active' : ''}
                aria-current={pathname === '/' ? 'page' : undefined}
            >
                Home
            </Link>

            <Link
                href="/meetings"
                className={pathname.startsWith ('/meetings') ? 'active' : ''}
                aria-current={pathname.startsWith('/meetings') ? 'page' : undefined}
            >
                Meetings
            </Link>

            <Link
                href="/meetings/current"
                className={pathname === '/meetings/current' ? 'active' : ''}
                aria-current={pathname === '/meetings/current' ? 'page' : undefined}
            >
                Current Meeting
            </Link>
        </nav>
    );
}