import Link from 'next/link';
import { useContext } from 'react';
import useSWR from 'swr';
import useFetcher from '../../../../../../lib/axios/fetcher';
import { toReadableDate } from '../../../../../../lib/func/time';
import ProfileContext from '../../state/ProfileContext';

const LicensesTab = () => {
  const { profile } = useContext(ProfileContext);
  const { fetcher } = useFetcher();

  const { data: licenses, error } = useSWR(
    `/api/web/profile/licenses?customer_id=${profile.id}`,
    fetcher
  );

  return (
    <div>
      <h2 className="text-lg uppercase">Licenses</h2>

      {licenses?.data?.length === 0 ? (
        <div className="mt-5">
          <p className="text-base">
            You have no available licenses yet. Please{' '}
            <Link
              className="text-base"
              href={`/profile/${profile.member_no}/courses`}
            >
              enroll a course
            </Link>{' '}
            and get licensed!
          </p>
        </div>
      ) : (
        <div className="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {licenses?.data?.map((license, index) => (
            <div key={index} className="p-5 border border-gray-300 rounded">
              <h3>{license.course.short_name}</h3>

              <div className="flex flex-col gap-1.5 mt-2 text-sm">
                <p className="text-sm">
                  Diver Number:{' '}
                  <span className="text-black">{license.padi_no}</span>
                </p>
                <p className="text-sm">
                  Instructor Name:{' '}
                  <span className="text-black">
                    {license.instructor_name || 'N/A'}
                  </span>
                </p>
                <p className="text-sm">
                  Diver Score:{' '}
                  {license.padi_score ? (
                    <span className="text-green-700">
                      {license.padi_score} %
                    </span>
                  ) : (
                    <span className="text-gray-700">N/A</span>
                  )}
                </p>
                <p className="text-sm">
                  Certified Date:{' '}
                  <span className="text-black">
                    {license.completed_at
                      ? toReadableDate(license.completed_at)
                      : 'N/A'}
                  </span>
                </p>
                <p className="text-sm">
                  Certification Agency:{' '}
                  <span className="text-black">
                    {license.awarding_body ? license.awarding_body : 'N/A'}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LicensesTab;
