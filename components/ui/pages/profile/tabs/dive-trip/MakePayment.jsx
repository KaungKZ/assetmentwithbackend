import { useRouter } from 'next/router';
import { useContext } from 'react';
import { getMoney } from '../../../../../../lib/func/money';
import DiveTripContext from '../../../../../../lib/store/profile/dive-trip/DiveTripContext';
import SimpleButton from '../../../../buttons/SiimpleButton';
import SimpleModal from '../../../../modals/SimpleModal';
import { payWithCashew } from '../../../booking/requests/cashew';
import { payWithMyFatoorah } from '../../../booking/requests/myfatoorah';

const MakePayment = ({ setIsLoading }) => {
  const { paymentModal, togglePaymentModal, booking } =
    useContext(DiveTripContext);

  const router = useRouter();

  if (!booking) return null;

  const updatedBooking = {
    id: booking.id,
    price: booking.price,
    no_of_divers: booking.no_of_divers,
    coupon: '',
    first_name: booking.customer.first_name,
    last_name: booking.customer.last_name,
    email: booking.customer.email,
    phone_no: booking.customer.phone_no,
    dan: booking.dan,
    equipment_rental: booking.medical[0].equipment_rental,
    tank: booking.medical[0].tank,
  };

  //   console.log(updatedBooking);

  return (
    <SimpleModal
      title="Complete the payment for dive trip"
      open={paymentModal}
      setOpen={togglePaymentModal}
    >
      <div className="mt-4">
        <div className="flex flex-col gap-1">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center justify-between text-base">
              Dive Trip:{' '}
              <span className="text-black">{getMoney(booking.price)}</span>
            </li>
            {booking.dan === 'yes_i_need' && (
              <li className="flex items-center justify-between text-base">
                DAN Insurance:{' '}
                <span className="text-black">{getMoney(40)}</span>
              </li>
            )}
            {booking.medical[0].equipment_rental === 'yes' && (
              <li className="flex items-center justify-between text-base">
                Equipment Rental:{' '}
                <span className="text-black">{getMoney(50)}</span>
              </li>
            )}
            {booking.medical[0].tank === 'nitrox' && (
              <li className="flex items-center justify-between text-base">
                2 Nitrox Tanks:{' '}
                <span className="text-black">{getMoney(100)}</span>
              </li>
            )}

            <li className="flex items-center justify-between pt-2 text-base border-t border-t-gray-200">
              Total:{' '}
              <span className="text-black">{getMoney(booking.total)}</span>
            </li>
          </ul>

          <p className="mt-5 text-sm">
            Complete the payment below and you are ready to start the course!
          </p>
          <p className="mt-1 text-sm text-black">
            Available payment options. Pay with:{' '}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-6 md:mt-4 md:gap-2 md:flex-row">
          <div className="flex-1">
            <SimpleButton
              width="w-full"
              onClick={() => {
                payWithMyFatoorah(
                  process.env.NEXT_PUBLIC_VISAMASTER,
                  updatedBooking,
                  '', // remarks
                  router,
                  setIsLoading
                );
              }}
            >
              Visa / Master
            </SimpleButton>
          </div>
          <div className="flex-1">
            <SimpleButton
              width="w-full"
              onClick={() => {
                payWithCashew(updatedBooking, '', router, setIsLoading);
              }}
            >
              Cashew (Installment)
            </SimpleButton>
          </div>
        </div>
      </div>
    </SimpleModal>
  );
};

export default MakePayment;
