'use client'

'use client'; // error.tsx must be a Client Component

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console (or a logging service) for debugging.
    // Next.js doesn't show the raw error to users automatically in production,
    // so this is your visibility into what actually went wrong.
    console.error(error);
  }, [error]);

  return (
    <div role="alert" className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
      <p className="mb-4 text-gray-600">
        We couldn&apos;t complete that action. Please try again.
      </p>
      <div className="flex justify-center gap-4">
        {/* reset() re-renders the segment that errored, without a full page reload */}
        <button
          onClick={() => reset()}
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          Try Again
        </button>
        <Link href="/meetings" className="px-4 py-2 rounded border">
          Back to Meetings
        </Link>
      </div>
    </div>
  );
}