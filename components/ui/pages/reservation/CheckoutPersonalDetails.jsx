import { BiMinus, BiPlus } from "react-icons/bi";
import { useSearchParams } from "next/navigation";

import Input from "../../forms/v2/Input";
import { useContext } from "react";
import CheckoutContext from "../../../../lib/store/checkout/CheckoutContext";
import CircleIconButton from "../../v2/buttons/CircleIconButton";
import PhoneInput from "../../forms/v2/PhoneInput";
import { getPackageVatTotal } from "../../../../lib/func/money";

const CheckoutPersonalDetails = () => {
  const { actions, reservation } = useContext(CheckoutContext);
  const searchParam = useSearchParams();

  // const findAdvancedCourse = reservation.addOns.find(
  //   (addon) => addon.id === 19
  // );
  // const modifiedAddon = {
  //   ...findAdvancedCourse,
  //   promo_price: null,
  //   price: 1600,
  // };
  // // const modifiedReservationAddon = {...reservation, }
  // console.log(reservation);

  // console.log(reservation);

  return (
    <div className="px-8 pt-8 pb-10 bg-white shadow-md rounded-xl">
      <h1 className="mb-4 text-lg font-bold text-gray-700 font-poppins">
        Personal Details
      </h1>

      <div className="grid items-start sm:grid-cols-3 gap-y-1 gap-x-4">
        <div className="relative">
          <Input name="first_name" label="First Name" />
        </div>
        <div>
          <Input name="last_name" label="Last Name" />
        </div>
        <div>
          <PhoneInput
            name="phone_no"
            label="Phone Number"
            isRequired
            wrapperClassName="mt-2"
            labelWrapperClassName="space-y-1.5"
          />
        </div>
        <div>
          <PhoneInput
            name="whatsapp_no"
            label="WhatsApp Number"
            isRequired
            wrapperClassName="mt-2"
            labelWrapperClassName="space-y-2"
          />
        </div>
        <div>
          <Input name="email" label="Email" type="email" />
        </div>
        <div className="flex justify-start items-center gap-2 mt-2 sm:mt-[38px]">
          <div className="whitespace-nowrap">
            <span className="text-[16px] text-gray-500">
              No. of {reservation.from === "course" ? "students" : "divers"}:
            </span>{" "}
            <span id="no-of-people text-[16px]">{reservation.noOfPeople}</span>
          </div>

          <div className="flex items-center gap-2">
            <CircleIconButton
              icon={<BiMinus />}
              onClick={() => {
                const id = searchParam.get("id");
                const addOns = reservation?.addOns;

                const addon = addOns.find((item) => item.id === Number(id));

                if (Number(id) === 19 && addon && reservation.noOfPeople > 1) {
                  const modifiedAddon = {
                    ...addon,
                    promo_price: null,
                    price: 1600 + getPackageVatTotal(1600, 1),
                  };
                  // if user comes from COMBO button
                  actions.removeAddOn(modifiedAddon);
                }
                actions.decreaseNoOfPeople();
              }}
              color="gray"
            />
            <CircleIconButton
              icon={<BiPlus />}
              onClick={() => {
                const id = searchParam.get("id");
                const addOns = reservation?.addOns;

                const addon = addOns.find((item) => item.id === Number(id));

                if (Number(id) === 19 && addon) {
                  const modifiedAddon = {
                    ...addon,
                    promo_price: null,
                    price: 1600 + getPackageVatTotal(1600, 1),
                  };
                  // if user comes from COMBO button
                  actions.setAddOn(modifiedAddon);
                }

                actions.increaseNoOfPeople();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPersonalDetails;
