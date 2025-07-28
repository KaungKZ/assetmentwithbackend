import { BiMinus, BiPlus } from "react-icons/bi";
import CircleIconButton from "../../v2/buttons/CircleIconButton";
import { useContext } from "react";
import CheckoutContext from "../../../../lib/store/checkout/CheckoutContext";
import { getMoney } from "../../../../lib/func/money";
import { FiMinus, FiPlus } from "react-icons/fi";

const CheckoutAddOnItem = ({ item }) => {
  const { actions } = useContext(CheckoutContext);

  return (
    <div className="flex justify-between gap-3 border border-gray-100 rounded-lg shadow-md">
      <div className="border-r border-gray-200 min-w-fit">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="object-cover min-w-[120px] w-[100px] h-full rounded-tl-lg rounded-bl-lg"
            src={item.thumbnail}
            alt={item.name}
          />
        }
      </div>

      <div className="flex flex-col justify-between flex-1 gap-2 py-3 pl-1 pr-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-700 font-poppins">
            {item.name}
          </h3>

          <p className="mt-2 mb-3 text-xs">{item.description}</p>
        </div>

        <div className="flex flex-col items-start sm:items-end justify-between sm:flex-row">
          {item.promo_price ? (
            <span
              className={`font-semibold text-red-500 flex flex-col justify-center item-center`}
            >
              {getMoney(item.promo_price)}

              <span className="block text-xs text-gray-600 line-through 2xl:inline-block mt-1 sm:mt-0">
                {getMoney(item.price)}
              </span>
            </span>
          ) : (
            <span className={`font-semibold text-red-500`}>
              {getMoney(item.price)}
            </span>
          )}

          <div className="flex justify-center items-center border border-[#E3E3E3] gap-x-[5px] rounded-full mt-[14px]">
            <FiMinus
              size={23}
              onClick={() => actions.removeAddOn(item)}
              className={`font-normal cursor-pointer pl-2 ${
                item.quantity === 0 ? "text-[#CCCCCC]" : "text-[#666666]"
              }`}
            />

            <p className="text-[#333333] text-[14px] font-normal w-[20px] text-center">
              {item.quantity}
            </p>
            <FiPlus
              size={23}
              onClick={() => actions.setAddOn(item)}
              className={`font-normal cursor-pointer text-[#666666] pr-2`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAddOnItem;
