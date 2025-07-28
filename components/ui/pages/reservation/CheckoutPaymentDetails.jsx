import Link from 'next/link';
import Checkbox from '../../forms/v2/Checkbox';
import { useContext } from 'react';
import CheckoutContext from '../../../../lib/store/checkout/CheckoutContext';
import { getMoney } from '../../../../lib/func/money';
import Loader from '../../Loader';

const CheckoutPaymentDetails = ({ formikErrors, isSubmitting }) => {
  const { reservation } = useContext(CheckoutContext);

  const packageTotal =
    (reservation.promoPrice || reservation.price) * reservation.noOfPeople;

  return (
    <div className="bg-white shadow-md rounded-xl">
      {isSubmitting && <Loader />}
      <div className="px-8 pt-8">
        <h2 className="mb-4 text-lg font-bold text-gray-700 font-poppins">
          Payment Summary{' '}
          {/* <span className="text-sm font-normal text-gray-500">
            (VAT included)
          </span> */}
        </h2>

        <div>
          <ul className="flex flex-col gap-3">
            {/* <li className="flex justify-between gap-3 text-base">
              <span>
                Package{' '}
                <span className="text-bermuda-200">
                  x {reservation.noOfPeople}
                </span>
              </span>
              <span className="font-bold text-gray-700">
                {getMoney(packageTotal)}
              </span>
            </li> */}
            <li className="flex justify-between gap-3.5 text-base">
              <span className="text-gray-500 font-poppins">
                Package{' '}
                <span className="text-bermuda-200">
                  x {reservation.noOfPeople}
                </span>
              </span>
              <div className="flex-1 font-bold text-right text-gray-700 font-poppins whitespace-nowrap">
                <div className="text-red-500">
                  {getMoney(
                    (reservation.promoPrice || reservation.price) *
                      reservation.noOfPeople
                  )}
                </div>
                {reservation.promoPrice ? (
                  <div className="text-sm text-gray-600 line-through">
                    {getMoney(reservation.price * reservation.noOfPeople)}
                  </div>
                ) : null}
              </div>
            </li>

            <li className="flex justify-between gap-3 pb-2 text-base border-b border-gray-200">
              <span>Discount</span>
              <span className="font-bold text-gray-700">- AED 0</span>
            </li>

            <li className="flex justify-between gap-3 text-base">
              <span>Package Amount</span>
              <span className="font-bold text-gray-700">
                {getMoney(packageTotal)}
              </span>
            </li>

            <li className="flex justify-between gap-3 text-base">
              <span>
                Package VAT (5%){' '}
                <span className="text-bermuda-200">
                  x {reservation.noOfPeople}
                </span>
              </span>
              <span className="font-bold text-gray-700">
                {getMoney(reservation.packageVatTotal)}
              </span>
            </li>

            <li className="flex justify-between gap-3 pb-2 text-base border-b border-gray-200">
              <span>
                Add-ons{' '}
                <span className="text-[10px] font-normal text-gray-500">
                  (VAT INCLUDED)
                </span>
              </span>
              <span className="font-bold text-gray-700">
                {getMoney(reservation.addOnsTotal)}
              </span>
            </li>

            <li className="flex justify-between gap-3 text-base">
              <span>Total Amount</span>
              <span className="font-bold text-gray-700">
                {getMoney(reservation.total)}
              </span>
            </li>

            <li>
              {reservation.id !== 14 && ( // padi seal team
                <div>
                  <Checkbox
                    name="age_is_valid"
                    link={<span>I and/or my group are over 10 years old.</span>}
                  />
                </div>
              )}

              {reservation.id === 8 && ( // certified dive trip
                <div>
                  <Checkbox
                    name="i_am_certified"
                    link={
                      <span>
                        I am certified and hold a valid license for diving.
                      </span>
                    }
                  />
                </div>
              )}

              <div>
                <Checkbox
                  name="agree"
                  link={
                    <span>
                      I agree to the{' '}
                      <Link className="sm-link" href="/terms-and-conditions">
                        terms and conditions
                      </Link>
                      .
                    </span>
                  }
                />
              </div>
            </li>
          </ul>
        </div>

        {Object.keys(formikErrors).length > 0 && (
          <div className="mt-3 text-xs text-red-500">
            *Please fill all the required fields.
          </div>
        )}
      </div>

      <div className="mt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 text-white duration-300 rounded-bl-xl rounded-br-xl hover:bg-bermuda-200 bg-bermuda-100"
        >
          {isSubmitting ? 'Processing...' : 'Next Step'}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPaymentDetails;
