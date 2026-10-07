'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
  <div className="flex items-start justify-center px-4 pt-4">
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Sign In
      </h1>

      <form action={formAction} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-gray-800"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-gray-800"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
            minLength={6}
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          aria-disabled={isPending}
          disabled={isPending}
          type="submit"
          className="w-full rounded-md bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? 'Signing in...' : 'Sign In'}
        </button>

        {errorMessage && (
          <p
            role="alert"
            className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  </div>
);
}