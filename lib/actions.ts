'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  addMeeting,
  updateMeeting as updateMeetingInDb,
  deleteMeeting as deleteMeetingInDb,
} from '@/lib/meetings-db'; // adjust names if these still don't match your real exports

// ---- Sub-schemas that mirror your lib/types.ts shapes ----

const HymnSchema = z.object({
  number: z.coerce.number({ error: 'Hymn number must be a number.' })
    .int()
    .positive({ message: 'Hymn number must be positive.' }),
  title: z.string().min(1, { message: 'Hymn title is required.' }),
});

const SpeakerItemSchema = z.object({
  name: z.string().min(1, { message: 'Speaker name is required.' }),
  topic: z.string().min(1, { message: 'Topic is required.' }),
  type: z.enum(['speaker', 'musical-number']),
});

// ---- Main schema, matching SacramentMeeting (minus id) ----
const MeetingFormSchema = z.object({
  date: z.string().min(1, { message: 'Date is required.' }),
  meetingType: z.enum(['testimony', 'regular', 'stake', 'general'], {
    error:'Please select a meeting type.' ,
  }),
  presiding: z.string().min(1, { message: 'Presiding officer is required.' }),
  conducting: z.string().min(1, { message: 'Conducting officer is required.' }),
  announcements: z.array(z.string()).optional(),
  openingHymn: HymnSchema,
  openingPrayer: z.string().min(1, { message: 'Opening prayer name is required.' }),
  wardBusiness: z
    .array(z.object({ description: z.string().min(1) }))
    .optional()
    .default([]),
  stakeBusiness: z.boolean(),
  sacramentHymn: HymnSchema,
  speakers: z
    .array(SpeakerItemSchema)
    .min(1, { message: 'At least one speaker is required.' }),
  closingHymn: HymnSchema,
  closingPrayer: z.string().min(1, { message: 'Closing prayer name is required.' }),
});

export type State = {
  errors?: Record<string, string[] | undefined>;
  message?: string | null;
};

// ---- Helper: turn flat FormData into the nested shape Zod expects ----
// This is the piece that bridges "plain form inputs" and your nested types.
function parseMeetingFormData(formData: FormData) {
  // Multi-line textareas: split on newlines, trim, drop empty lines
  const toLines = (raw: FormDataEntryValue | null) =>
    (raw?.toString() ?? '')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

  // Speakers textarea: each line is "Name | Topic | type"
  const speakers = toLines(formData.get('speakers')).map((line) => {
    const [name, topic, type] = line.split('|').map((part) => part.trim());
    return { name, topic, type };
  });

  // Ward business textarea: each line becomes one { description } item
  const wardBusiness = toLines(formData.get('wardBusiness')).map((description) => ({
    description,
  }));

  return {
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: toLines(formData.get('announcements')),
    openingHymn: {
      number: formData.get('openingHymnNumber'),
      title: formData.get('openingHymnTitle'),
    },
    openingPrayer: formData.get('openingPrayer'),
    wardBusiness,
    // checkbox inputs only appear in FormData when checked, so its
    // presence (not its value) tells us true/false
    stakeBusiness: formData.get('stakeBusiness') === 'on',
    sacramentHymn: {
      number: formData.get('sacramentHymnNumber'),
      title: formData.get('sacramentHymnTitle'),
    },
    speakers,
    closingHymn: {
      number: formData.get('closingHymnNumber'),
      title: formData.get('closingHymnTitle'),
    },
    closingPrayer: formData.get('closingPrayer'),
  };
}

// ---- CREATE ----
export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse(
    parseMeetingFormData(formData)
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create meeting.',
    };
  }

  try {
    await addMeeting(validatedFields.data);
  } catch (error) {
    console.error('Database Error: Failed to create meeting.', error);
    return { message: 'Database error: failed to create meeting.' };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

// ---- UPDATE ----
export async function updateMeeting(
  id: string,
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse(
    parseMeetingFormData(formData)
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to update meeting.',
    };
  }

  try {
    await updateMeetingInDb(Number(id), validatedFields.data);
  } catch (error) {
    console.error('Database Error: Failed to update meeting.', error);
    return { message: 'Database error: failed to update meeting.' };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

// ---- DELETE ----
export async function deleteMeeting(id: string) {
  try {
    await deleteMeetingInDb(Number(id));
    revalidatePath('/meetings');
  } catch (error) {
    console.error('Database Error: Failed to delete meeting.', error);
    throw new Error('Failed to delete meeting.');
  }
}