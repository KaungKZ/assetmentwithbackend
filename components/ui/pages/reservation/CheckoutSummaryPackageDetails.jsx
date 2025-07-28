import { useContext } from 'react';
import CheckoutContext from '../../../../lib/store/checkout/CheckoutContext';
import { getMoney } from '../../../../lib/func/money';

const CheckoutSummaryPackageDetails = () => {
  const { reservation, actions } = useContext(CheckoutContext);

  return (
    <div className="px-8 pt-8 pb-10 bg-white shadow-md rounded-xl">
      <h2 className="flex flex-col items-start justify-between gap-3 mb-5 text-lg font-bold text-gray-700 sm:flex-row font-poppins">
        Package Summary
      </h2>

      <div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center justify-between gap-3.5 border-b border-gray-200 pb-2.5 text-base">
            <span className="text-gray-700">{reservation.heading}</span>
            <span className="flex-1 font-bold text-right text-gray-700 whitespace-nowrap">
              {getMoney(reservation.price)}
            </span>
          </li>
          <li className="flex items-center justify-between gap-3.5 border-b border-gray-200 pb-2.5 text-base">
            <span className="text-gray-700">
              No. of {reservation.from === 'course' ? 'students' : 'divers'}
            </span>
            <span className="flex-1 font-bold text-right text-gray-700 whitespace-nowrap">
              x {reservation.noOfPeople}
            </span>
          </li>
          <li className="flex items-center justify-between gap-3.5 text-base">
            <span></span>
            <span className="flex-1 font-bold text-right text-red-600 whitespace-nowrap">
              {getMoney(reservation.noOfPeople * reservation.price)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutSummaryPackageDetails;
