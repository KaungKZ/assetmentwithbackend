/* eslint-disable @next/next/no-img-element */

import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import CheckoutContext from "../../../../lib/store/checkout/CheckoutContext";
import { getMoney } from "../../../../lib/func/money";
import { getPackageVatTotal } from "../../../../lib/func/money";

const CheckoutSummarySelectedAddOns = () => {
  const { reservation } = useContext(CheckoutContext);
  const searchParam = useSearchParams();
  const [selectedAddons, setSelectedAddons] = useState(reservation);

  useEffect(() => {
    const id = searchParam.get("id");

    let addOns = reservation?.selectedAddOns;
    if (!id || !addOns) return;

    const addon = addOns.findIndex((item) => item.id === Number(id));
    const addoncontent = addOns.find((item) => item.id === Number(id));

    if (Number(id) === 19 && addon >= 0) {
      const modifiedAddon = {
        ...addoncontent,
        promo_price: null,
        price: 1600 + getPackageVatTotal(1600, 1), // modified
      };
      addOns[addon] = modifiedAddon;

      setSelectedAddons({ ...reservation, addOns });
    }
  }, [searchParam]);

  return (
    <div className="px-8 pt-8 pb-10 bg-white shadow-md rounded-xl">
      <h2 className="mb-5 text-lg font-bold text-gray-700 font-poppins">
        Selected Add-ons Summary
      </h2>

      {selectedAddons.selectedAddOns.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {selectedAddons.selectedAddOns.map((addOn) => (
            <li
              key={addOn.id}
              className="flex items-center justify-between gap-3.5 border-b border-gray-200 pb-2.5 text-base"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center min-w-[48px] w-12 h-12 overflow-hidden border border-gray-200 rounded-full shadow">
                  <img
                    src={addOn.thumbnail}
                    alt="Swimming Shorts"
                    className="object-cover w-full h-full"
                  />
                </div>

                <span className="text-gray-700">
                  {addOn.name}{" "}
                  <span className="text-bermuda-100">x {addOn.quantity}</span>{" "}
                  <br />{" "}
                  <span className="text-xs font-bold text-gray-500">
                    (VAT Included)
                  </span>
                </span>
              </div>
              <span className="flex-1 font-bold text-right min-w-[100px] text-gray-700 whitespace-nowrap">
                {/* {getMoney(addOn.price * addOn.quantity)} */}

                {addOn.promo_price ? (
                  <span className={`font-semibold text-red-600`}>
                    {getMoney(addOn.promo_price * addOn.quantity)}
                    <br />
                    <span className="block -mt-0 text-xs text-gray-600 line-through">
                      {getMoney(addOn.price * addOn.quantity)}
                    </span>
                  </span>
                ) : (
                  <span className={`font-semibold text-red-600`}>
                    {getMoney(addOn.price * addOn.quantity)}
                  </span>
                )}
              </span>
            </li>
          ))}
          <li className="flex items-center justify-between gap-3.5 mt-2 text-base">
            <span></span>
            <span className="flex-1 font-bold text-right text-red-600 whitespace-nowrap">
              {getMoney(selectedAddons.addOnsTotal)}
            </span>
          </li>
        </ul>
      ) : (
        <div className="text-gray-600">No add-ons selected</div>
      )}
    </div>
  );
};

export default CheckoutSummarySelectedAddOns;
