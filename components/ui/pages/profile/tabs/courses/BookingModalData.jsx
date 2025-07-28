import useSWR from 'swr';
import useFetcher from '../../../../../../lib/axios/fetcher';
import { pluralize } from '../../../../../../lib/func/text';
import { getTimeRange, toReadableDate } from '../../../../../../lib/func/time';

const BookingModalData = (data) => {
  const enrolledCourse = data.data;
  const { fetcher } = useFetcher();

  const { data: diveSessions, isLoading } = useSWR(
    `/api/web/profile/course/dive-sessions?course_registration_id=${enrolledCourse.id}`,
    fetcher
  );
  const remainings =
    enrolledCourse.no_of_sessions - enrolledCourse.completed_sessions;

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-32">Loading...</div>
    );

  const noOfSessions = () => {
    if (enrolledCourse.completed_sessions === 0) {
      return (
        <div className="text-xs text-gray-400">
          <div className="flex items-center justify-center h-32">
            You have not booked a session yet.
          </div>
        </div>
      );
    } else {
      return remainings ? (
        <div className="text-xs text-gray-400">
          {pluralize(remainings, 'session') + ' remaining.'}
        </div>
      ) : (
        ''
      );
    }
  };

  return (
    <div className="grid gap-5 mt-5 mb-2 text-sm">
      {diveSessions?.data?.map((diveSession) => (
        <div
          key={diveSession.id}
          className="p-3 border border-gray-100 rounded shadow"
        >
          <ul className="flex flex-col gap-1">
            <li className="text-sm">
              Dive Session ID:{' '}
              <span className="text-black">{diveSession.id}</span>
            </li>
            <li className="text-sm">
              Booking Date:{' '}
              <span className="text-black">
                {toReadableDate(diveSession.booking_date)}
              </span>
            </li>
            <li className="text-sm">
              Time Slot:{' '}
              <span className="text-black">
                {getTimeRange(diveSession.slot)}
              </span>
            </li>
            <li className="text-sm">
              Status:{' '}
              <span className="text-black">
                {diveSession.other_status === 'approved' ? (
                  <span className="text-green-600">Approved</span>
                ) : (
                  <span className="text-red-600">Waiting for approval</span>
                )}
              </span>
            </li>
          </ul>
        </div>
      ))}

      {noOfSessions()}
    </div>
  );
};

export default BookingModalData;
