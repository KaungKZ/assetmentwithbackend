import { useContext, useState } from 'react';
import { toReadableDate } from '../../../../../../lib/func/time';
import SimpleModal from '../../../../modals/SimpleModal';
import CourseContext from '../../../../../../lib/store/profile/courses/CourseContext';
import Registration from './Registration';
import BookingModalData from './BookingModalData';
import { indexArrayFromLength } from '../../../../../../lib/func/array';
import { getColorFromBool } from '../../../../../../lib/func/text';
import AddNewDiveSession from './AddNewDiveSession';
import SimpleButton from '../../../../buttons/SiimpleButton';
import {
  getFormatedCurrency,
  getMoney,
} from '../../../../../../lib/func/money';
import CancelEnrollment from './CancelEnrollment';
import { useRouter } from 'next/router';
import { getAssetsUrl } from '../../../../../../lib/func/image';

const CoursesTab = () => {
  const router = useRouter();
  const { courses, registeredCourses } = useContext(CourseContext);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [diveModalOpen, setDiveModalOpen] = useState(false);
  const [addCourseModalOpen, setAddCourseModalOpen] = useState(false);
  const [courseRegistration, setCourseRegistration] = useState({});
  const [ceModalOpen, setCeModalOpen] = useState(false);
  const [course, setCourse] = useState({});

  if (registeredCourses === undefined) return;

  // check all dive sessions
  const courseRegistrationModalHandler = (courseRegistration) => {
    if (courseRegistration.padi_score >= 75) {
      setCourseRegistration(courseRegistration);
      setBookingModalOpen(true);
    }
  };

  // add new dive session
  const newDiveSessionHandler = (courseRegistration, index) => {
    if (index === 0 && courseRegistration.padi_score >= 75) {
      setCourseRegistration(courseRegistration);
      setDiveModalOpen(true);
    }
  };

  // add new course
  const addCourseModalHandler = (course) => {
    setAddCourseModalOpen(true);
    setCourse(course);
  };

  // cancel enrollment
  const cancelEnrollmentHandler = (registration) => {
    setCourseRegistration(registration);
    setCeModalOpen(true);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg uppercase">Enrolled Courses</h2>
      </div>

      {/* New Course Registration */}
      <SimpleModal
        width="sm:max-w-sm"
        open={addCourseModalOpen}
        setOpen={setAddCourseModalOpen}
        bodyMT="mt-3"
        title={`Enroll for ${course.short_name}`}
      >
        <Registration
          course={course}
          setAddCourseModalOpen={setAddCourseModalOpen}
        />
      </SimpleModal>

      {/* View All Dive Sessions */}
      <SimpleModal
        width="sm:max-w-sm"
        title={courseRegistration.course?.short_name + ' (Dive Sessions)'}
        open={bookingModalOpen}
        setOpen={setBookingModalOpen}
      >
        <BookingModalData data={courseRegistration} />
      </SimpleModal>

      {/* Add New Dive Session */}
      <SimpleModal
        width="sm:max-w-[330px]"
        title="New Dive Session"
        open={diveModalOpen}
        setOpen={setDiveModalOpen}
      >
        <AddNewDiveSession
          data={courseRegistration}
          setDiveModalOpen={setDiveModalOpen}
        />
      </SimpleModal>

      {/* Cancel Enrollment */}
      <SimpleModal
        width="sm:max-w-[400px]"
        title={`Cancel '${courseRegistration.course?.short_name}'`}
        open={ceModalOpen}
        setOpen={setCeModalOpen}
      >
        <CancelEnrollment
          registration={courseRegistration}
          setCeModalOpen={setCeModalOpen}
        />
      </SimpleModal>

      <div className="grid grid-cols-1 gap-6 select-none md:grid-cols-2 lg:grid-cols-3">
        {registeredCourses.map((registration) => (
          <div key={registration.id} className="h-auto">
            <div className="p-4 transition-all duration-200 border border-gray-200 rounded cursor-pointer hover:bg-gray-50">
              {registration.enrollment.status !== 'confirmed' ? (
                <div>
                  <h3 className="text-black">
                    {registration.course.short_name}
                  </h3>

                  <div className="pt-3 mt-3 text-sm border-t border-t-gray-300">
                    <p className="mb-4 text-base">
                      You have successfully enrolled to this course. Make the
                      payment now to get started!
                      <span className="block mt-2">
                        Due to pay:{' '}
                        <span className="text-black">
                          {getMoney(registration.enrollment.total)}
                        </span>
                      </span>
                    </p>

                    <SimpleButton
                      type="button"
                      width="w-full"
                      onClick={() =>
                        router.push(
                          `${process.env.NEXT_PUBLIC_SELF_URL}/reservation?reference_id=${registration.enrollment.id}&type=course&is_authenticated=true`
                        )
                      }
                    >
                      Pay Now
                    </SimpleButton>

                    <div className="mt-2">
                      <SimpleButton
                        color="border text-red-500 border-red-500 hover:text-white hover:bg-red-600 focus:border-red-600 focus:ring-red-600"
                        type="Button"
                        width="w-full"
                        onClick={() => cancelEnrollmentHandler(registration)}
                      >
                        Cancel Enrollment
                      </SimpleButton>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    onClick={() => courseRegistrationModalHandler(registration)}
                  >
                    <h3 className="text-black">
                      {registration.course.short_name}
                    </h3>

                    <ul className="flex flex-col gap-1 mt-2 text-sm">
                      {registration.padi_no && registration.completed_at ? (
                        <>
                          <li className="text-sm">
                            PADI Number:{' '}
                            <span className="text-green-700">
                              {registration.padi_no}
                            </span>
                          </li>
                          <li className="text-sm">
                            Certified Date:{' '}
                            <span className="text-green-700">
                              {toReadableDate(registration.completed_at)}
                            </span>
                          </li>
                        </>
                      ) : null}

                      {(registration.padi_no && registration.completed_at) ||
                      registration.padi_score ? null : (
                        <li className="text-sm">
                          eLearning:{' '}
                          <span className="text-black">
                            {registration.el_sent ? (
                              <span className="text-green-600">Sent</span>
                            ) : (
                              <span className="text-red-600">Not Sent</span>
                            )}
                          </span>
                        </li>
                      )}

                      {registration.padi_score ? (
                        <li className="text-sm">
                          PADI Score:{' '}
                          <span
                            className={getColorFromBool(
                              registration.padi_score >= 75
                            )}
                          >
                            {registration.padi_score} %
                          </span>
                        </li>
                      ) : null}
                      <li className="text-sm">
                        Total Sessions:{' '}
                        <span className="text-black">
                          {registration.no_of_sessions}
                        </span>
                      </li>
                      <li className="text-sm">
                        Completed Sessions:{' '}
                        <span className="text-black">
                          {registration.completed_sessions}
                        </span>
                      </li>
                      <li className="text-sm">
                        Registered Date:{' '}
                        <span className="text-black">
                          {toReadableDate(registration.registered_at)}
                        </span>
                      </li>
                    </ul>
                  </div>

                  {registration.no_of_sessions -
                  registration.completed_sessions ? (
                    <div className="pt-4 mt-4 border-t border-gray-200 select-none">
                      <div className="grid grid-cols-2 gap-4">
                        {indexArrayFromLength(
                          registration.no_of_sessions -
                            registration.completed_sessions
                        ).map((index) => {
                          return (
                            <div
                              key={index}
                              onClick={() =>
                                newDiveSessionHandler(registration, index)
                              }
                              className={`flex text-xs items-center justify-center h-16 border border-gray-200 rounded shadow ${
                                index === 0 && registration.padi_score >= 75
                                  ? 'hover:bg-white'
                                  : 'cursor-default bg-gray-200'
                              }`}
                            >
                              Book Session
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </>
              )}
            </div>
          </div>
        ))}

        {courses.map((course) => (
          <div
            key={course.id}
            className={`h-[205px] overflow-hidden rounded bg-cover`}
            style={{
              backgroundImage: `url(${getAssetsUrl(course.thumbnail)})`,
            }}
          >
            <div className="flex items-center justify-center h-full bg-black/50">
              <div className="flex items-center justify-center ">
                <div className="flex flex-col items-center text-center text-white">
                  <h3 className="px-8 text-white">{course.short_name}</h3>
                  <p className="mt-2 mb-3 text-sm text-white">
                    {getFormatedCurrency(course.price)}
                    <span className="text-[10px]"> (+ VAT)</span>
                  </p>

                  <SimpleButton
                    sm
                    onClick={() => addCourseModalHandler(course)}
                  >
                    Enroll Now
                  </SimpleButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesTab;
