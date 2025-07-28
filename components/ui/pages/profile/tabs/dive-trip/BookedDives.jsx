import { useState } from 'react';
import { getMoney } from '../../../../../../lib/func/money';
import { ucfirst } from '../../../../../../lib/func/text';
import { toReadableDate } from '../../../../../../lib/func/time';
import OutlinedButton from '../../../../buttons/OutlinedButton';
import SimpleButton from '../../../../buttons/SiimpleButton';
import SimpleModal from '../../../../modals/SimpleModal';
import DeleteDive from './DeleteDive';
import { useRouter } from 'next/router';

const BookedDives = ({ bookedDives }) => {
  const router = useRouter();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [booking, setBooking] = useState(null);

  const deleteModalHandler = (booking) => {
    setBooking(booking);
    setOpenDeleteModal(true);
  };

  return (
    <div className="grid items-start gap-4 md:grid-cols-3">
      <SimpleModal
        title={`Delete Dive: ${booking?.id}`}
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        width="sm:w-[350px]"
      >
        <DeleteDive booking={booking} setOpen={setOpenDeleteModal} />
      </SimpleModal>

      {bookedDives.map((booking) => (
        <div
          key={booking.id}
          className="p-4 text-gray-500 border border-gray-100 rounded shadow"
        >
          <div className="relative flex flex-col gap-1">
            <p className="absolute right-0 px-2 pb-0.5 text-sm text-white bg-gray-500 rounded-full">
              <span className="text-[9px]">ID: {booking.id}</span>
            </p>
            <p className="text-sm">
              Time Slot:{' '}
              <span className="text-black">{ucfirst(booking.slot)}</span>
            </p>

            <p className="text-sm">
              Booking Date:{' '}
              <span className="text-black">
                {toReadableDate(booking.booking_date)}
              </span>
            </p>

            <div className="flex flex-col gap-1.5 mt-2 text-sm">
              <p className="flex items-center justify-between text-sm">
                Dive Trip:{' '}
                <span className="text-black">{getMoney(booking.price)}</span>
              </p>
              <p className="flex items-center justify-between text-sm">
                Dive Trip VAT:{' '}
                <span className="text-black">
                  {getMoney(booking.package_vat_total)}
                </span>
              </p>
              {booking.dan == 'yes_i_need' && (
                <p className="flex items-center justify-between text-sm">
                  DAN Insurance:{' '}
                  <span className="text-black">{getMoney(40 + 2)}</span>
                </p>
              )}
              {booking?.medicals[0]?.equipment_rental == 'yes' && (
                <p className="flex items-center justify-between text-sm">
                  Equipment Rental:{' '}
                  <span className="text-black">{getMoney(50 + 2.5)}</span>
                </p>
              )}
              {booking?.medicals[0]?.equipment_rental != 'snorkel_only' &&
                booking.medicals[0]?.tank == 'nitrox' && (
                  <p className="flex items-center justify-between text-sm">
                    2 Nitrox Tanks:{' '}
                    <span className="text-black">{getMoney(100 + 5)}</span>
                  </p>
                )}
              <p className="flex items-center justify-between pt-2 text-sm border-t border-t-gray-200">
                Total Price:{' '}
                <span className="text-black">{getMoney(booking.total)}</span>
              </p>
            </div>

            {booking.status === 'lead' && (
              <div className="flex flex-col gap-2 mt-2">
                <SimpleButton
                  onClick={() =>
                    router.push(
                      `/reservation?reference_id=${booking.id}&type=boat-dive&is_authenticated=true`
                    )
                  }
                  width="w-full"
                >
                  Pay Now
                </SimpleButton>

                <OutlinedButton
                  onClick={() => deleteModalHandler(booking)}
                  width="w-full"
                  color="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                >
                  Cancel Booking
                </OutlinedButton>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookedDives;
