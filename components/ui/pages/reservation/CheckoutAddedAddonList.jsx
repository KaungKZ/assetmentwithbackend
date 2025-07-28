/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import CheckoutContext from '../../../../lib/store/checkout/CheckoutContext';
import { getMoney } from '../../../../lib/func/money';

const CheckoutAddedAddonList = () => {
  const { reservation } = useContext(CheckoutContext);

  return (
    <div className="px-8 pt-8 -mt-16 bg-white shadow-md pb-9 rounded-xl">
      <h2 className="mb-5 text-lg font-bold text-gray-700 font-poppins">
        Selected Add-ons
      </h2>

      <ul className="flex flex-col gap-4">
        {reservation.selectedAddOns.length > 0 ? (
          reservation.selectedAddOns.map((addOn) => (
            <li key={addOn.id}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 overflow-hidden border border-gray-200 rounded-full shadow min-w-[48px]">
                    <img
                      src={addOn.thumbnail}
                      alt="Swimming Shorts"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-700">
                      {addOn.name}{' '}
                      <span className="text-bermuda-100">
                        x {addOn.quantity}
                      </span>
                    </h5>

                    <p className="text-[10px] mt-0.5 font-bold text-gray-400">
                      (VAT INCLUDED)
                    </p>
                  </div>
                </div>

                <div className="text-end min-w-[100px]">
                  <span className="text-base font-bold text-gray-600">
                    {addOn.promo_price ? (
                      <span className={`font-semibold text-red-500`}>
                        {getMoney(addOn.promo_price * addOn.quantity)}
                        <br />
                        <span className="block -mt-0 text-xs text-gray-600 line-through">
                          {getMoney(addOn.price * addOn.quantity)}
                        </span>
                      </span>
                    ) : (
                      <span className={`font-semibold text-red-500`}>
                        {getMoney(addOn.price * addOn.quantity)}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="text-gray-600">No add-ons selected</div>
        )}
      </ul>
    </div>
  );
};

export default CheckoutAddedAddonList;
