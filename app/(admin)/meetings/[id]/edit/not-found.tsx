import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 text-center">
      <h1 className="mb-4 text-3xl font-bold">
        Meeting not found
      </h1>

      <p className="mb-6 text-gray-600">
        Sorry, we could not find the meeting you are looking for.
      </p>

      <Link
        href="/meetings"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Back to Meetings
      </Link>
    </main>
  );
}