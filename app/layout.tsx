import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sacrament Meetings',
    template: '%s | Sacrament Meetings',
  },
  description:
    'Manage and view sacrament meeting information, speakers, hymns, prayers, and ward business.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body className="min-h-screen flex flex-col">
                <Header />
                <SessionProvider><main className="flex-1">{children}</main></SessionProvider>
                <Footer />
            </body>
        </html>
    )
}