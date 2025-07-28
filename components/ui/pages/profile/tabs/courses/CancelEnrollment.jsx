import { useContext, useState } from 'react';
import axios from '../../../../../../lib/axios/authenticated';
import SimpleButton from '../../../../buttons/SiimpleButton';
import CourseContext from '../../../../../../lib/store/profile/courses/CourseContext';
import { toast } from 'react-toastify';
import Link from 'next/link';

const CancelEnrollment = ({ registration, setCeModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const { refreshRegisteredCourses } = useContext(CourseContext);

  const cancelEnrollment = async () => {
    setLoading(true);

    await axios
      .delete(
        `/api/web/profile/course/cancel-enrollment/${registration.enrollment.id}`
      )
      .then((res) => {
        refreshRegisteredCourses();

        toast.success(res.data.message);

        setCeModalOpen(false);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  };

  return (
    <div className="mt-4 text-sm">
      <div className="flex flex-col gap-1">
        <p className="text-base">
          Are you sure you want to cancel this enrollment? Please click on
          cancel button if you really want to cancel.
        </p>

        <p className="mt-1 text-base text-black" title="Let's do it.">
          Or just get started on the course by{' '}
          <Link
            className="text-base"
            href={`${process.env.NEXT_PUBLIC_SELF_URL}/reservation?reference_id=${registration.enrollment.id}&type=course&is_authenticated=true`}
          >
            completing the payment
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 mb-2 md:gap-2 md:flex-row">
        <SimpleButton
          width="w-full"
          onClick={cancelEnrollment}
          disabled={loading}
          color="border text-red-500 border-red-500 hover:text-white hover:bg-red-600 focus:border-red-600 focus:ring-red-600"
        >
          {loading ? 'Cancelling' : 'Cancel Now'}
        </SimpleButton>
      </div>
    </div>
  );
};

export default CancelEnrollment;
