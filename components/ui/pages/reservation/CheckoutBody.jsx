import { Form, Formik } from "formik";
import {
  initialRequest,
  reservationValues,
  validateReservationValues,
} from "./data";
import CheckoutPersonalDetails from "./CheckoutPersonalDetails";
import CheckoutBookingDetails from "./CheckoutBookingDetails";
import CheckoutAddOns from "./CheckoutAddOns";
import CheckoutAddedAddonList from "./CheckoutAddedAddonList";
import CheckoutPackageDetails from "./CheckoutPackageDetails";
import CheckoutPaymentDetails from "./CheckoutPaymentDetails";
import { useContext, useEffect, useRef, useState } from "react";
import CheckoutContext from "../../../../lib/store/checkout/CheckoutContext";
import CheckoutSummaryPackageDetails from "./CheckoutSummaryPackageDetails";
import CheckoutSummarySelectedAddOns from "./CheckoutSummarySelectedAddOns";
import CheckoutSummaryAction from "./CheckoutSummaryAction";
import { getPackageVatTotal } from "../../../../lib/func/money";
import { useRouter } from "next/router";
import useWidth from "../../../../lib/hooks/useWidth";
import { useSearchParams } from "next/navigation";

const CheckoutBody = () => {
  const searchParam = useSearchParams();
  const { reservation, actions } = useContext(CheckoutContext);
  const [initailData, setInitailData] = useState({});

  const hasSetAddOn = useRef(false);

  useEffect(() => {
    if (hasSetAddOn.current) return;

    const id = searchParam.get("id");
    const addOns = reservation?.addOns;
    if (!id || !addOns) return;

    const addon = addOns.find((item) => item.id === Number(id));
    if (Number(id) === 19 && addon) {
      const modifiedAddon = {
        ...addon,
        promo_price: null,
        price: 1600 + getPackageVatTotal(1600, 1), // modified
      };
      actions.setAddOn(modifiedAddon);
      hasSetAddOn.current = true;
    }
  }, [searchParam]);

  const initialPay = async (
    values,
    reservation,
    actions,
    router,
    setSubmitting
  ) => {
    const data = await initialRequest(
      values,
      reservation,
      actions?.setCurrentStep,
      actions?.setReservation,
      router,
      setSubmitting
    );
    setInitailData(data);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.snaptr === "function") {
      window.snaptr("track", "ADD_CART", {
        price: initailData.price,
        currency: "AED",
        item_ids: [`${initailData.id}`],
        item_category: "watersports",
        number_items: initailData.noOfPeople || 1,
        user_email: initailData.email,
        user_phone_number: initailData.phone_no,
      });
    }
  }, [initailData]);

  const router = useRouter();
  const { width } = useWidth();

  const tpVMASelected =
    reservation.paymentMethod === "tp_vma" && reservation.tpVMACheckoutId;
  const tpGPaySelected =
    reservation.paymentMethod === "tp_gpay" && reservation.tpGPayCheckoutId;
  const tpAPaySelected =
    reservation.paymentMethod === "tp_apay" && reservation.tpAPayCheckoutId;

  return (
    <div
      className={`bg-[#f2f2f2] duration-200 select-none ${
        tpVMASelected
          ? "min-h-[1700px]"
          : tpGPaySelected
          ? "min-h-[1460px]"
          : tpAPaySelected
          ? "min-h-[1460px]"
          : reservation.paymentMethod === "tabby"
          ? "min-h-[1500px]"
          : "min-h-[1400px]"
      }`}
    >
      <div className="container relative">
        {reservation.currentStep === 1 ? (
          <Formik
            initialValues={reservationValues(reservation)}
            validationSchema={validateReservationValues}
            onSubmit={(values, { setSubmitting }) => {
              initialPay(values, reservation, actions, router, setSubmitting);
              // initialRequest(
              //   values,
              //   reservation,
              //   actions?.setCurrentStep,
              //   actions?.setReservation,
              //   router,
              //   setSubmitting
              // );
            }}
          >
            {({ values, setFieldValue, errors, isSubmitting }) => (
              <Form>
                <input type="hidden" name="from" />
                <input type="hidden" name="package_id" />

                <div className="absolute left-0 right-0 px-3 2xl:px-20 -top-20">
                  <div className="grid gap-8 mx-5 sm:grid-cols-3">
                    <div className="flex flex-col order-2 gap-8 sm:order-1 sm:col-span-2">
                      <CheckoutPersonalDetails />
                    </div>
                    <div className="order-1 sm:col-span-1 sm:order-2">
                      <CheckoutPackageDetails />
                    </div>
                  </div>
                </div>

                <div className="sm:grid grid-cols-3 gap-y-8 sm:gap-x-8 pt-[735px] sm:pt-[215px] pb-16">
                  <div className="flex flex-col col-span-2 gap-8">
                    {reservation.from !== "course" && (
                      <CheckoutBookingDetails
                        formikValues={values}
                        setFieldValue={setFieldValue}
                      />
                    )}

                    <CheckoutAddOns />
                  </div>

                  <div className="flex flex-col w-full col-span-1 gap-8 mt-24 sm:mt-0">
                    <CheckoutAddedAddonList />

                    <CheckoutPaymentDetails
                      formikErrors={errors}
                      isSubmitting={isSubmitting}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <>
            <div className="absolute left-0 right-0 2xl:px-7 -top-20">
              <div className="grid gap-8 mx-8 sm:grid-cols-3">
                <div className="flex flex-col gap-8 sm:col-span-2">
                  <CheckoutSummaryPackageDetails />
                </div>
                <div className="hidden sm:col-span-1 sm:block">
                  {width > 640 ? <CheckoutSummaryAction /> : null}
                </div>
              </div>
            </div>

            <div className="sm:grid grid-cols-3 gap-8 pt-[206px] sm:pt-[182px] pb-16">
              <div className="flex flex-col col-span-2 gap-8">
                <CheckoutSummarySelectedAddOns />

                <div className="sm:hidden">
                  {width < 640 ? <CheckoutSummaryAction /> : null}
                </div>
              </div>

              <div className="flex flex-col col-span-1 gap-8"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutBody;
