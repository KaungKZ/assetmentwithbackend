import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../../../../../lib/axios/authenticated';
import DiveTripContext from '../../../../../../lib/store/profile/dive-trip/DiveTripContext';
import OutlinedButton from '../../../../buttons/OutlinedButton';
import Link from 'next/link';

const DeleteDive = ({ booking, setOpen }) => {
  const { refreshBookedDives } = useContext(DiveTripContext);
  const [loading, setLoading] = useState(false);

  const deleteBooking = async () => {
    setLoading(true);

    await axios
      .delete(`/api/web/profile/dive-trip/${booking.id}/delete`)
      .then((res) => {
        // return console.log(res.data);
        toast.success(res.data.message);

        refreshBookedDives();

        setOpen(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    setLoading(false);
  };

  return (
    <div className="mt-3">
      <p className="text-base">
        Are you sure you would like to delete this dive booking? You would not
        be able to retrieve it once it gets deleted.
      </p>

      <p className="mt-3 mb-5 text-base">
        Or just get started by{' '}
        <Link
          className="text-base"
          href={`/reservation?reference_id=${booking.id}&type=boat-dive&is_authenticated=true`}
        >
          completing the payment
        </Link>
        .
      </p>

      <OutlinedButton
        disabled={loading}
        onClick={deleteBooking}
        width="w-full"
        color="text-white border-red-500 bg-red-500 hover:bg-transparent hover:text-red-500"
      >
        {loading ? 'Deleting...' : 'Delete Now'}
      </OutlinedButton>
    </div>
  );
};

export default DeleteDive;
