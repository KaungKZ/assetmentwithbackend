/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useCheckoutContext } from "../../../../lib/store/checkout/CheckoutContext";
import { getMoney } from "../../../../lib/func/money";
import { makeThePayment } from "./data";
import { useRouter } from "next/router";
import Loader from "../../Loader";
import Script from "next/script";
import CheckoutCoupon from "./CheckoutCoupon";
import { BiX } from "react-icons/bi";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import useSafari from "../../../../lib/hooks/useSafari";
import CheckoutDonation from "./CheckoutDonation";

const CheckoutSummaryAction = () => {
  const { reservation, actions } = useCheckoutContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { isSafari } = useSafari();

  const apMethod = (method) => method === reservation.paymentMethod; // active payment method
  const tpVMASelected = apMethod("tp_vma") && reservation.tpVMACheckoutId;
  const tpAPaySelected = apMethod("tp_apay") && reservation.tpAPayCheckoutId;
  const tpGPaySelected = apMethod("tp_gpay") && reservation.tpGPayCheckoutId;
  const tabbySelected = apMethod("tabby");

  // console.log(reservation.tpVMACheckoutId);

  const packageTotal =
    (reservation.promoPrice || reservation.price) * reservation.noOfPeople;

  const removeCouponHandler = () => {
    actions.removeCoupon();
    toast.success("Discount code removed successfully!");
  };

  const tabbyButtonHandler = () => {
    actions.setPaymentMethod("tabby");

    setTimeout(
      () => {
        actions.toggleTabbyModal();
      },
      tabbySelected ? 0 : 300
    );
  };

  return (
    <div>
      {tpVMASelected || tpAPaySelected ? (
        <>
          {tpVMASelected ? (
            <>
              <Script id="wpwlOptions">
                {`
              var wpwlOptions = {
                  style: "plain",
              };
            `}
              </Script>
              <Script
                src={`${process.env.NEXT_PUBLIC_TP_BASE_URL}/v1/paymentWidgets.js?checkoutId=${reservation.tpVMACheckoutId}`}
              ></Script>
              <Script src="https://code.jquery.com/jquery.js"></Script>
            </>
          ) : (
            <Script
              src={`${process.env.NEXT_PUBLIC_TP_BASE_URL}/v1/paymentWidgets.js?checkoutId=${reservation.tpAPayCheckoutId}`}
            ></Script>
          )}
        </>
      ) : tpGPaySelected ? (
        <>
          <Script id="wpwlOptions">
            {`
            var wpwlOptions = {
              googlePay: {
                gatewayMerchantId: "${process.env.NEXT_PUBLIC_TP_ENTITY_ID}",
                merchantId: "${process.env.NEXT_PUBLIC_GPAY_MERCHANT_ID}",
                merchantName: "Bermuda Diving Center LLC",
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                buttonType: "pay",
              }
            };
          `}
          </Script>
          <Script
            src={`${process.env.NEXT_PUBLIC_TP_BASE_URL}/v1/paymentWidgets.js?checkoutId=${reservation.tpGPayCheckoutId}`}
          ></Script>
        </>
      ) : null}

      <div>
        {![1, 2, 3, 42].includes(reservation.id) ? <CheckoutCoupon /> : null}

        <div className="p-8 bg-white shadow-md rounded-xl">
          <h2 className="mb-4 text-lg font-bold text-gray-700 font-poppins">
            Checkout Summary
          </h2>

          {isLoading && <Loader />}

          <div className="border-gray-200">
            <ul className="flex flex-col gap-2">
              <li className="flex justify-between gap-3 text-base">
                <span>
                  Package{" "}
                  <span className="text-bermuda-200">
                    x {reservation.noOfPeople}
                  </span>
                </span>
                <span className="font-bold text-gray-700">
                  {getMoney(packageTotal)}
                </span>
              </li>

              <li className="flex justify-between gap-3.5 text-base pb-2 border-b border-gray-200">
                <span className="flex gap-1 text-gray-500 font-poppins">
                  Discount
                  {reservation.coupon?.code ? (
                    <span className="flex items-center gap-1 text-sm text-bermuda-200">
                      [{reservation.coupon.code}]
                      <span
                        onClick={removeCouponHandler}
                        className="p-0.5 text-xs text-white border border-red-500 hover:bg-red-600 bg-red-500 rounded-full hover:border-red-600 duration-300 cursor-pointer"
                      >
                        <BiX />
                      </span>
                    </span>
                  ) : (
                    ""
                  )}
                </span>
                <span className="flex-1 font-bold text-right text-gray-700 font-poppins whitespace-nowrap">
                  - {getMoney(reservation.discount)}
                </span>
              </li>

              <li className="flex justify-between gap-3 text-base">
                <span>Package Amount</span>
                <span className="font-bold text-gray-700">
                  {getMoney(packageTotal - reservation.discount)}
                </span>
              </li>

              <li className="flex justify-between gap-3 text-base">
                <span>
                  Package VAT (5%){" "}
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
                  Add-ons{" "}
                  <span className="text-[10px] font-normal text-gray-500">
                    (VAT INCLUDED)
                  </span>
                </span>
                <span className="font-bold text-gray-700">
                  {getMoney(reservation.addOnsTotal)}
                </span>
              </li>

              <li className="flex justify-between gap-3 text-base">
                <span>Sub Total</span>
                <span className="font-bold text-red-600">
                  {getMoney(reservation.subTotal)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <CheckoutDonation />

        <div className="p-8 mt-8 bg-white shadow-md rounded-xl">
          <div className="border-gray-200">
            <ul className="flex flex-col gap-2">
              <li className="flex justify-between gap-3 text-base">
                <span>Total</span>
                <span className="font-bold text-red-600">
                  {getMoney(reservation.total)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="px-8 pt-2 pb-8 mt-8 bg-white shadow-md rounded-t-xl">
          <h2 className="mt-6 mb-4 text-lg font-bold text-gray-700 font-poppins">
            Payment Methods
          </h2>

          <div>
            <ul className="flex flex-col gap-3">
              {/* Apple Pay */}
              <li
                onClick={() => actions.setPaymentMethod("tp_apay")}
                className={twMerge(
                  "shadow cursor-pointer hover:bg-gray-50 duration-300 items-center border rounded-lg p-3 gap-3.5 text-base",
                  isSafari ? "block" : "hidden",
                  apMethod("tp_apay")
                    ? "border-bermuda-100 text-bermuda-200"
                    : "border-gray-200"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4
                      className={`${
                        apMethod("tp_apay")
                          ? "text-bermuda-200"
                          : "text-gray-600"
                      }`}
                    >
                      Apple Pay
                    </h4>
                    <div className="flex-wrap mt-1 text-sm">
                      Enjoy a secure payment process with Apple Pay.
                    </div>
                  </div>

                  <div
                    className={`max-w-[110px] min-w-[70px] h-[60px] flex justify-center duration-300 items-center border ${
                      apMethod("tp_apay")
                        ? "border-bermuda-100"
                        : "border-gray-200"
                    } rounded`}
                  >
                    <img
                      src="/images/payment/apple-pay-logo.png"
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                </div>
                <div
                  className={`mt-5 text-gray-500 ${
                    tpAPaySelected ? "block" : "hidden"
                  }`}
                >
                  <form
                    action={reservation.paymentInfoUrl}
                    className="paymentWidgets"
                    data-brands="APPLEPAY"
                  ></form>
                </div>
              </li>

              {/* Visa / Master */}
              <li
                onClick={() => actions.setPaymentMethod("tp_vma")}
                className={`shadow cursor-pointer hover:bg-gray-50 duration-300 items-center border ${
                  apMethod("tp_vma")
                    ? "border-bermuda-100 text-bermuda-200"
                    : "border-gray-200"
                } rounded-lg p-3 gap-3.5 text-base`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4
                      className={`${
                        apMethod("tp_vma")
                          ? "text-bermuda-200"
                          : "text-gray-600"
                      }`}
                    >
                      Visa / Master
                    </h4>
                    <div className="flex-wrap mt-1 text-sm">
                      Make the payment using your debit/credit card.
                    </div>
                  </div>

                  <div
                    className={`max-w-[110px] min-w-[70px] h-[70px] flex flex-col duration-300 justify-center items-center border ${
                      apMethod("tp_vma")
                        ? "border-bermuda-100"
                        : "border-gray-200"
                    } rounded`}
                  >
                    <img
                      src="/images/payment/visa.png"
                      className="h-[35px] scale-[.8]"
                    />
                    <img
                      src="/images/payment/master.png"
                      className="h-[35px] -mt-2"
                    />
                  </div>
                </div>
                <div
                  className={`mt-5 text-gray-500 ${
                    tpVMASelected ? "block" : "hidden"
                  }`}
                >
                  <form
                    action={reservation.paymentInfoUrl}
                    // action="https://totalprocessing.docs.oppwa.com/tutorials/integration-guide/customisation"
                    className="paymentWidgets"
                    data-brands="VISA MASTER AMEX"
                  ></form>
                </div>
              </li>

              {/* Google Pay */}
              {/* <li
              onClick={() => actions.setPaymentMethod('tp_gpay')}
              className={`shadow cursor-pointer hover:bg-gray-50 duration-300 items-center border ${
                apMethod('tp_gpay')
                  ? 'border-bermuda-100 text-bermuda-200'
                  : 'border-gray-200'
              } rounded-lg p-3 gap-3.5 text-base`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4
                    className={`${
                      apMethod('tp_gpay') ? 'text-bermuda-200' : 'text-gray-600'
                    }`}
                  >
                    Google Pay
                  </h4>
                  <div className="flex-wrap mt-1 text-sm">
                    Complete the payment conveniently using Google Pay.
                  </div>
                </div>

                <div
                  className={`max-w-[110px] min-w-[70px] h-[60px] flex justify-center duration-300 items-center border ${
                    apMethod('tp_gpay')
                      ? 'border-bermuda-100'
                      : 'border-gray-200'
                  } rounded`}
                >
                  <img
                    src="/images/payment/google-pay-logo.png"
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              </div>
              <div
                className={`mt-5 text-gray-500 ${
                  tpGPaySelected ? 'block' : 'hidden'
                }`}
              >
                <form
                  action={reservation.paymentInfoUrl}
                  className="paymentWidgets"
                  data-brands="GOOGLEPAY"
                ></form>
              </div>
            </li> */}

              {/* Cashew Installment */}
              {/* <li
                onClick={() => actions.setPaymentMethod('cashew')}
                className={`flex justify-between shadow cursor-pointer hover:bg-gray-50 duration-300 items-center border ${
                  apMethod('cashew')
                    ? 'border-bermuda-100 text-bermuda-200'
                    : 'border-gray-200'
                } rounded-lg p-3 gap-3.5 text-base`}
              >
                <div>
                  <h4
                    className={`${
                      apMethod('cashew') ? 'text-bermuda-200' : 'text-gray-600'
                    }`}
                  >
                    Cashew (Installment)
                  </h4>
                  <div className="flex-wrap mt-1 text-sm">
                    Only UAE residents are eligible for this payment method.
                  </div>
                </div>

                <div
                  className={`max-w-[110px] min-w-[70px] h-[60px] flex justify-center duration-300 items-center border ${
                    apMethod('cashew')
                      ? 'border-bermuda-100'
                      : 'border-gray-200'
                  } rounded`}
                >
                  <img
                    src="/images/payment/cashew.png"
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              </li> */}

              {/* Tabby Installment */}
              <li
                onClick={tabbyButtonHandler}
                className={`shadow cursor-pointer duration-300 border ${
                  apMethod("tabby")
                    ? "border-bermuda-100 text-bermuda-200"
                    : "border-gray-200 hover:bg-gray-50"
                } rounded-lg p-3 gap-3.5 text-base`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4
                      className={`${
                        apMethod("tabby") ? "text-bermuda-200" : "text-gray-600"
                      }`}
                    >
                      Tabby (Installment)
                    </h4>
                    <div className="flex-wrap mt-1 text-sm">
                      Pay in 4 interest-free payments without any extra fees.
                    </div>
                  </div>

                  <div
                    className={`max-w-[110px] min-w-[70px] h-[60px] flex justify-center duration-300 items-center border ${
                      apMethod("tabby")
                        ? "border-bermuda-100"
                        : "border-gray-200"
                    } rounded`}
                  >
                    <img
                      src="/images/payment/tabby-logo.jpeg"
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                </div>

                {/* <div
                  id="tabbyCardSnippet"
                  className={twMerge(
                    tabbySelected ? 'block' : 'hidden',
                    'mt-2 w-full'
                  )}
                ></div> */}
              </li>
            </ul>

            {!isSafari && (
              <p className="mt-3 -mb-1 text-xs text-gray-500">
                *Please use <span className="text-black">Safari</span> browser
                to pay using <span className="text-black">Apple Pay</span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() =>
            makeThePayment(
              reservation,
              setIsLoading,
              actions.setReservation,
              router
              // tabbyAddress
            )
          }
          type="button"
          disabled={
            isLoading ||
            tpVMASelected ||
            tpGPaySelected ||
            tpAPaySelected ||
            tabbySelected
          }
          className={`w-full px-4 py-3 text-white duration-300 rounded-bl-xl rounded-br-xl ${
            tpVMASelected || tpGPaySelected || tpAPaySelected || tabbySelected
              ? "bg-gray-400"
              : "bg-bermuda-100 hover:bg-bermuda-200"
          }`}
        >
          {isLoading ? "Processing..." : "Proceed To Pay"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummaryAction;
