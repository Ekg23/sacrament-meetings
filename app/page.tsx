import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
    return (
        <section className="max-w-2xl mx-auto px-4 py-12 text-center">
             <Image
                src="/hero.jpg"
                alt="Adenta Ward 4 chapel exterior"
                width={1200}
                height={600}
                priority
                className="rounded-lg mb-8"
            />
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
                Adenta Ward 4
            </h1>
            <p className="text-gray-600 mb-8">
                Sacrament meeting programs and schedules.
            </p>
            <Link
                href="/meetings/current"
                className="inline-block bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-medium"
            >
                View this Sunday&apos;s program
            </Link>
        </section>
    )
}