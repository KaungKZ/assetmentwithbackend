/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import CheckoutContext from '../../../../lib/store/checkout/CheckoutContext';
import { getMoney } from '../../../../lib/func/money';

const CheckoutPackageDetails = () => {
  const { reservation } = useContext(CheckoutContext);

  // console.log(reservation);

  return (
    <div className="px-8 pt-8 pb-10 bg-white shadow-md rounded-xl">
      <h2 className="mb-4 text-lg font-bold text-gray-700 font-poppins">
        Package Details <span className="text-[10px]">(VAT EXCLUDED)</span>
      </h2>

      <div>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between gap-3.5 text-base">
            <span className="text-gray-500 font-poppins">
              {reservation.heading}
            </span>
            <div className="flex-1 font-bold text-right text-gray-700 font-poppins whitespace-nowrap">
              <div className="text-red-500">
                {getMoney(reservation.promoPrice || reservation.price)}
              </div>
              {reservation.promoPrice ? (
                <div className="text-sm text-gray-600 line-through">
                  {getMoney(reservation.price)}
                </div>
              ) : null}
            </div>
          </li>
          <li className="flex justify-between gap-3 text-base">
            <span>
              No. of {reservation.from === 'course' ? 'students' : 'divers'}
            </span>
            <span className="font-bold text-gray-700">
              {reservation.noOfPeople}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutPackageDetails;
