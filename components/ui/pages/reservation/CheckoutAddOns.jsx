import { useContext } from "react";
import CheckoutContext from "../../../../lib/store/checkout/CheckoutContext";
import BookingAddOnItem from "./CheckoutAddOnItem";
import { useSearchParams } from "next/navigation";

const CheckoutAddOns = () => {
  const { reservation } = useContext(CheckoutContext);
  const searchParam = useSearchParams();

  return (
    <div className="px-8 pt-8 pb-10 bg-white shadow-md rounded-xl">
      <h2 className="mb-5 text-lg font-bold text-gray-700 font-poppins">
        Add-ons{" "}
        <span className="block text-xs text-red-600 sm:inline-block">
          (This discount is only available on this page.)
        </span>
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {reservation.addOns.length > 0 ? (
          searchParam.get("id") || searchParam.get("subid") ? (
            reservation?.addOns
              ?.filter(
                (item) =>
                  item.id !== Number(searchParam.get("id")) &&
                  item.id !== Number(searchParam.get("subid"))
              )
              .map((addOn) => <BookingAddOnItem key={addOn.id} item={addOn} />)
          ) : (
            reservation.addOns.map((addOn) => (
              <BookingAddOnItem key={addOn.id} item={addOn} />
            ))
          )
        ) : (
          <div className="text-gray-600">No add-ons available</div>
        )}
      </div>
    </div>
  );
};

export default CheckoutAddOns;
