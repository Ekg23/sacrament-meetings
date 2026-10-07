'use client';

import { useActionState } from 'react';
import { createMeeting } from '@/lib/actions';

const initialState = {
  message: null,
  errors: {},
};

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState
  );

  const inputClass =
    'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200';

  const textareaClass =
    'w-full min-h-32 resize-y rounded-md border border-gray-300 bg-white px-3 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200';

  const labelClass =
    'mb-1.5 block text-sm font-medium text-gray-800';

  const errorClass =
    'mt-1 text-sm text-red-600';

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          New Sacrament Meeting
        </h1>

        <p className="mt-2 text-gray-600">
          Enter the details for the new sacrament meeting.
        </p>
      </div>

      <form action={formAction} className="mx-auto max-w-3xl space-y-8">

        {/* Basic Information */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Basic Information
          </h2>

          {/* Date */}
          <div>
            <label htmlFor="date" className={labelClass}>
              Date
            </label>

            <input
              id="date"
              name="date"
              type="date"
              className={inputClass}
            />

            {state.errors?.date?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>

          {/* Meeting Type */}
          <div>
            <label htmlFor="meetingType" className={labelClass}>
              Meeting Type
            </label>

            <select
              id="meetingType"
              name="meetingType"
              defaultValue="regular"
              className={inputClass}
            >
              <option value="regular">Regular</option>
              <option value="testimony">Testimony</option>
              <option value="stake">Stake</option>
              <option value="general">General</option>
            </select>

            {state.errors?.meetingType?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>

          {/* Presiding */}
          <div>
            <label htmlFor="presiding" className={labelClass}>
              Presiding
            </label>

            <input
              id="presiding"
              name="presiding"
              type="text"
              className={inputClass}
            />

            {state.errors?.presiding?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>

          {/* Conducting */}
          <div>
            <label htmlFor="conducting" className={labelClass}>
              Conducting
            </label>

            <input
              id="conducting"
              name="conducting"
              type="text"
              className={inputClass}
            />

            {state.errors?.conducting?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>
        </section>

        {/* Announcements */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Announcements
          </h2>

          <div>
            <label htmlFor="announcements" className={labelClass}>
              Announcements
            </label>

            <textarea
              id="announcements"
              name="announcements"
              className={textareaClass}
              placeholder="Enter one announcement per line"
            />

            {state.errors?.announcements?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>
        </section>

        {/* Opening */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Opening
          </h2>

          {/* Opening Hymn */}
          <div>
            <label className={labelClass}>
              Opening Hymn
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="openingHymnNumber"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Hymn Number
                </label>

                <input
                  id="openingHymnNumber"
                  name="openingHymnNumber"
                  type="number"
                  className={inputClass}
                />

                {state.errors?.openingHymnNumber?.map(
                  (error: string) => (
                    <p key={error} className={errorClass}>
                      {error}
                    </p>
                  )
                )}
              </div>

              <div>
                <label
                  htmlFor="openingHymnTitle"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Hymn Title
                </label>

                <input
                  id="openingHymnTitle"
                  name="openingHymnTitle"
                  type="text"
                  className={inputClass}
                />

                {state.errors?.openingHymnTitle?.map(
                  (error: string) => (
                    <p key={error} className={errorClass}>
                      {error}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Opening Prayer */}
          <div>
            <label htmlFor="openingPrayer" className={labelClass}>
              Opening Prayer
            </label>

            <input
              id="openingPrayer"
              name="openingPrayer"
              type="text"
              className={inputClass}
            />

            {state.errors?.openingPrayer?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>
        </section>

        {/* Business */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Business
          </h2>

          {/* Ward Business */}
          <div>
            <label htmlFor="wardBusiness" className={labelClass}>
              Ward Business
            </label>

            <textarea
              id="wardBusiness"
              name="wardBusiness"
              className={textareaClass}
              placeholder="Enter one item per line"
            />

            {state.errors?.wardBusiness?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>

          {/* Stake Business */}
          <div className="flex items-center gap-3">
            <input
              id="stakeBusiness"
              name="stakeBusiness"
              type="checkbox"
              value="true"
              className="h-4 w-4 rounded border-gray-300"
            />

            <label
              htmlFor="stakeBusiness"
              className="text-sm font-medium text-gray-800"
            >
              Stake Business
            </label>
          </div>

          {state.errors?.stakeBusiness?.map((error: string) => (
            <p key={error} className={errorClass}>
              {error}
            </p>
          ))}
        </section>

        {/* Sacrament */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Sacrament
          </h2>

          <div>
            <label className={labelClass}>
              Sacrament Hymn
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="sacramentHymnNumber"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Hymn Number
                </label>

                <input
                  id="sacramentHymnNumber"
                  name="sacramentHymnNumber"
                  type="number"
                  className={inputClass}
                />

                {state.errors?.sacramentHymnNumber?.map(
                  (error: string) => (
                    <p key={error} className={errorClass}>
                      {error}
                    </p>
                  )
                )}
              </div>

              <div>
                <label
                  htmlFor="sacramentHymnTitle"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Hymn Title
                </label>

                <input
                  id="sacramentHymnTitle"
                  name="sacramentHymnTitle"
                  type="text"
                  className={inputClass}
                />

                {state.errors?.sacramentHymnTitle?.map(
                  (error: string) => (
                    <p key={error} className={errorClass}>
                      {error}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Speakers */}
          <div>
            <label htmlFor="speakers" className={labelClass}>
              Speakers
            </label>

            <textarea
              id="speakers"
              name="speakers"
              className="min-h-40 w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-3 font-mono text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Name | Topic | Type"
            />

            {state.errors?.speakers?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Closing
          </h2>

          {/* Closing Hymn */}
          <div>
            <label className={labelClass}>
              Closing Hymn
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="closingHymnNumber"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Hymn Number
                </label>

                <input
                  id="closingHymnNumber"
                  name="closingHymnNumber"
                  type="number"
                  className={inputClass}
                />

                {state.errors?.closingHymnNumber?.map(
                  (error: string) => (
                    <p key={error} className={errorClass}>
                      {error}
                    </p>
                  )
                )}
              </div>

              <div>
                <label
                  htmlFor="closingHymnTitle"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Hymn Title
                </label>

                <input
                  id="closingHymnTitle"
                  name="closingHymnTitle"
                  type="text"
                  className={inputClass}
                />

                {state.errors?.closingHymnTitle?.map(
                  (error: string) => (
                    <p key={error} className={errorClass}>
                      {error}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Closing Prayer */}
          <div>
            <label htmlFor="closingPrayer" className={labelClass}>
              Closing Prayer
            </label>

            <input
              id="closingPrayer"
              name="closingPrayer"
              type="text"
              className={inputClass}
            />

            {state.errors?.closingPrayer?.map((error: string) => (
              <p key={error} className={errorClass}>
                {error}
              </p>
            ))}
          </div>
        </section>

        {/* General Error */}
        {state.message && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-600">
              {state.message}
            </p>
          </div>
        )}

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? 'Creating...' : 'Create Meeting'}
          </button>
        </div>
      </form>
    </main>
  );
}