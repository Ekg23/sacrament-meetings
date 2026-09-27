'use client';

import { useActionState } from 'react';
import { updateMeeting } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

type EditMeetingFormProps = {
  id: string;
  meeting: SacramentMeeting;
};

const initialState = {
  message: null,
  errors: {},
};

export default function EditMeetingForm({
  id,
  meeting,
}: EditMeetingFormProps) {
  const updateMeetingWithId = updateMeeting.bind(null, id);

  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
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
    <form
      action={formAction}
      className="mx-auto max-w-3xl space-y-8"
    >
      {/* Basic Information */}
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-semibold text-gray-900">
          Basic Information
        </h2>

        <div className="space-y-5">
          {/* Date */}
          <div>
            <label htmlFor="date" className={labelClass}>
              Date
            </label>

            <input
              id="date"
              name="date"
              type="date"
              defaultValue={meeting.date}
              aria-describedby="date-error"
              className={inputClass}
            />

            <div id="date-error" aria-live="polite">
              {state.errors?.date?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
          </div>

          {/* Meeting Type */}
          <div>
            <label htmlFor="meetingType" className={labelClass}>
              Meeting Type
            </label>

            <select
              id="meetingType"
              name="meetingType"
              defaultValue={meeting.meetingType}
              aria-describedby="meetingType-error"
              className={inputClass}
            >
              <option value="regular">Regular</option>
              <option value="testimony">Testimony</option>
              <option value="stake">Stake</option>
              <option value="general">General</option>
            </select>

            <div id="meetingType-error" aria-live="polite">
              {state.errors?.meetingType?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
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
              defaultValue={meeting.presiding}
              aria-describedby="presiding-error"
              className={inputClass}
            />

            <div id="presiding-error" aria-live="polite">
              {state.errors?.presiding?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
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
              defaultValue={meeting.conducting}
              aria-describedby="conducting-error"
              className={inputClass}
            />

            <div id="conducting-error" aria-live="polite">
              {state.errors?.conducting?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-semibold text-gray-900">
          Announcements
        </h2>

        <label htmlFor="announcements" className={labelClass}>
          Announcements
        </label>

        <p className="mb-2 text-sm text-gray-500">
          Enter one announcement per line.
        </p>

        <textarea
          id="announcements"
          name="announcements"
          defaultValue={(meeting.announcements ?? []).join('\n')}
          aria-describedby="announcements-error"
          className={textareaClass}
        />

        <div id="announcements-error" aria-live="polite">
          {state.errors?.announcements?.map((error: string) => (
            <p key={error} className={errorClass}>
              {error}
            </p>
          ))}
        </div>
      </section>

      {/* Opening Hymn */}
      <fieldset className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <legend className="px-2 text-xl font-semibold text-gray-900">
          Opening Hymn
        </legend>

        <div className="mt-3 grid gap-5 sm:grid-cols-3">
          {/* Number */}
          <div>
            <label htmlFor="openingHymnNumber" className={labelClass}>
              Number
            </label>

            <input
              id="openingHymnNumber"
              name="openingHymnNumber"
              type="number"
              defaultValue={meeting.openingHymn.number}
              aria-describedby="openingHymnNumber-error"
              className={inputClass}
            />

            <div id="openingHymnNumber-error" aria-live="polite">
              {state.errors?.openingHymnNumber?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="sm:col-span-2">
            <label htmlFor="openingHymnTitle" className={labelClass}>
              Title
            </label>

            <input
              id="openingHymnTitle"
              name="openingHymnTitle"
              type="text"
              defaultValue={meeting.openingHymn.title}
              aria-describedby="openingHymnTitle-error"
              className={inputClass}
            />

            <div id="openingHymnTitle-error" aria-live="polite">
              {state.errors?.openingHymnTitle?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      {/* Opening Prayer */}
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <label htmlFor="openingPrayer" className={labelClass}>
          Opening Prayer
        </label>

        <input
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          defaultValue={meeting.openingPrayer}
          aria-describedby="openingPrayer-error"
          className={inputClass}
        />

        <div id="openingPrayer-error" aria-live="polite">
          {state.errors?.openingPrayer?.map((error: string) => (
            <p key={error} className={errorClass}>
              {error}
            </p>
          ))}
        </div>
      </section>

      {/* Ward Business */}
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <label htmlFor="wardBusiness" className={labelClass}>
          Ward Business
        </label>

        <p className="mb-2 text-sm text-gray-500">
          Enter one business item per line.
        </p>

        <textarea
          id="wardBusiness"
          name="wardBusiness"
          defaultValue={meeting.wardBusiness
            .map((item) => item.description)
            .join('\n')}
          aria-describedby="wardBusiness-error"
          className={textareaClass}
        />

        <div id="wardBusiness-error" aria-live="polite">
          {state.errors?.wardBusiness?.map((error: string) => (
            <p key={error} className={errorClass}>
              {error}
            </p>
          ))}
        </div>
      </section>

      {/* Stake Business */}
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="checkbox"
            defaultChecked={meeting.stakeBusiness}
            aria-describedby="stakeBusiness-error"
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
          />

          <label
            htmlFor="stakeBusiness"
            className="text-sm font-medium text-gray-800"
          >
            Stake Business
          </label>
        </div>

        <div id="stakeBusiness-error" aria-live="polite">
          {state.errors?.stakeBusiness?.map((error: string) => (
            <p key={error} className={errorClass}>
              {error}
            </p>
          ))}
        </div>
      </section>

      {/* Sacrament Hymn */}
      <fieldset className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <legend className="px-2 text-xl font-semibold text-gray-900">
          Sacrament Hymn
        </legend>

        <div className="mt-3 grid gap-5 sm:grid-cols-3">
          {/* Number */}
          <div>
            <label htmlFor="sacramentHymnNumber" className={labelClass}>
              Number
            </label>

            <input
              id="sacramentHymnNumber"
              name="sacramentHymnNumber"
              type="number"
              defaultValue={meeting.sacramentHymn.number}
              aria-describedby="sacramentHymnNumber-error"
              className={inputClass}
            />

            <div id="sacramentHymnNumber-error" aria-live="polite">
              {state.errors?.sacramentHymnNumber?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="sm:col-span-2">
            <label htmlFor="sacramentHymnTitle" className={labelClass}>
              Title
            </label>

            <input
              id="sacramentHymnTitle"
              name="sacramentHymnTitle"
              type="text"
              defaultValue={meeting.sacramentHymn.title}
              aria-describedby="sacramentHymnTitle-error"
              className={inputClass}
            />

            <div id="sacramentHymnTitle-error" aria-live="polite">
              {state.errors?.sacramentHymnTitle?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      {/* Speakers */}
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <label htmlFor="speakers" className={labelClass}>
          Speakers
        </label>

        <p className="mb-2 text-sm text-gray-500">
          One per line: Name | Topic | speaker or musical-number
        </p>

        <textarea
          id="speakers"
          name="speakers"
          defaultValue={meeting.speakers
            .map((s) => `${s.name} | ${s.topic} | ${s.type}`)
            .join('\n')}
          aria-describedby="speakers-error"
          className="min-h-40 w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-3 font-mono text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <div id="speakers-error" aria-live="polite">
          {state.errors?.speakers?.map((error: string) => (
            <p key={error} className={errorClass}>
              {error}
            </p>
          ))}
        </div>
      </section>

      {/* Closing Hymn */}
      <fieldset className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <legend className="px-2 text-xl font-semibold text-gray-900">
          Closing Hymn
        </legend>

        <div className="mt-3 grid gap-5 sm:grid-cols-3">
          {/* Number */}
          <div>
            <label htmlFor="closingHymnNumber" className={labelClass}>
              Number
            </label>

            <input
              id="closingHymnNumber"
              name="closingHymnNumber"
              type="number"
              defaultValue={meeting.closingHymn.number}
              aria-describedby="closingHymnNumber-error"
              className={inputClass}
            />

            <div id="closingHymnNumber-error" aria-live="polite">
              {state.errors?.closingHymnNumber?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="sm:col-span-2">
            <label htmlFor="closingHymnTitle" className={labelClass}>
              Title
            </label>

            <input
              id="closingHymnTitle"
              name="closingHymnTitle"
              type="text"
              defaultValue={meeting.closingHymn.title}
              aria-describedby="closingHymnTitle-error"
              className={inputClass}
            />

            <div id="closingHymnTitle-error" aria-live="polite">
              {state.errors?.closingHymnTitle?.map((error: string) => (
                <p key={error} className={errorClass}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      {/* Closing Prayer */}
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <label htmlFor="closingPrayer" className={labelClass}>
          Closing Prayer
        </label>

        <input
          id="closingPrayer"
          name="closingPrayer"
          type="text"
          defaultValue={meeting.closingPrayer}
          aria-describedby="closingPrayer-error"
          className={inputClass}
        />

        <div id="closingPrayer-error" aria-live="polite">
          {state.errors?.closingPrayer?.map((error: string) => (
            <p key={error} className={errorClass}>
              {error}
            </p>
          ))}
        </div>
      </section>

      {/* General Error Message */}
      {state.message && (
        <div
          className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700"
          aria-live="polite"
        >
          {state.message}
        </div>
      )}

      {/* Submit */}
      <div className="flex justify-end border-t border-gray-200 pt-6">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}