import { notFound } from "next/navigation";
import { getMeetingById } from '@/lib/meetings-db';
import EditMeetingForm from "./edit-meeting-form";


export default async function EditMeetingPage({params,}: {
    params: Promise<{id: string}>;
}) {

    const { id } = await params;
    // look up the meeting using the ID from the routes.
    const meeting = await getMeetingById(Number(id))
    // getMeetingById should return null/undefined when no row matches that id.
    // notFound() immediately stops rendering this page and instead renders
    // the nearest not-found.tsx up the tree (app/meetings/[id]/edit/not-found.tsx).

        if (!meeting) {
            notFound();
        }
    
    
     return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Edit Meeting
      </h1>

      <EditMeetingForm meeting={meeting} id={id} />
    </div>
  );
}