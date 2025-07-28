import { format } from "date-fns";
import * as yup from "yup";
import axios from "../../../../lib/axios";
import { toast } from "react-toastify";
import { addPlusToPhoneNumber } from "../../../../lib/func/text";
import { getAssetsUrl } from "../../../../lib/func/image";

const requiredTxt = "This field is required.";
const invalidEmail = "Invalid email.";
const phoneNumberRegex = /^(?:[+0]{1})?[0-9]{8,16}$/;
const phoneText = "This phone is invalid.";

/**
 * initial values for reservation form
 */
export const reservationValues = (reservation) => {
  return {
    // personal details
    first_name: "",
    last_name: "",
    phone_no: "",
    whatsapp_no: "",
    email: "",
    // booking details
    booking_date: format(new Date(), "yyyy-MM-dd"),
    slot: "",
    special_request: "",
    // payment details
    age_is_valid: false,
    agree: false,
    i_am_certified: false,
    from: reservation.from,
    package_id: reservation.id,
  };
};

/**
 * validation schema for reservation form
 */
export const validateReservationValues = yup.object().shape({
  // personal details
  first_name: yup.string().required(requiredTxt),
  last_name: yup.string().required(requiredTxt),
  phone_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(20, phoneText)
    .required(requiredTxt),
  whatsapp_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(20, phoneText)
    .required(requiredTxt),
  email: yup.string().email(invalidEmail).required(requiredTxt),
  // booking details
  booking_date: yup.string().when("from", {
    is: (value) => value !== "course",
    then: yup.string().required(requiredTxt),
    otherwise: yup.string(),
  }),
  slot: yup.string().when("from", {
    is: (value) => value !== "course",
    then: yup.string().required(requiredTxt),
    otherwise: yup.string(),
  }),
  special_request: yup.string(),
  // payment details
  age_is_valid: yup.boolean().when("package_id", {
    is: (value) => value !== 14,
    then: yup.boolean().oneOf([true], requiredTxt),
    otherwise: yup.boolean(),
  }),
  i_am_certified: yup.boolean().when("package_id", {
    is: (value) => value === 8,
    then: yup.boolean().oneOf([true], requiredTxt),
    otherwise: yup.boolean(),
  }),
  agree: yup.boolean().oneOf([true], requiredTxt),
});

/**
 * make the initial request to the server
 */
export const initialRequest = async (
  values,
  reservation,
  setCurrentStep,
  setReservation,
  router,
  setSubmitting
) => {
  const bdcs = localStorage.getItem("bdcs"); // sources such as google-ads, meta-ads

  const payload = {
    ...values,
    phone_no: addPlusToPhoneNumber(values.phone_no),
    whatsapp_no: addPlusToPhoneNumber(values.whatsapp_no),
    bdcs,
    ...reservation,
  };

  try {
    await axios
      .post("/api/v2/web/checkout/initial-request", payload)
      .then((res) => {
        const reference_id = res.data.data;

        setReservation && setReservation({ ...payload, reference_id });
        setCurrentStep && setCurrentStep(2); // go to next step - payment

        router.push({
          pathname: router.pathname,
          query: {
            ...router.query,
            reference_id,
            type: reservation.from,
            is_authenticated: true,
          },
        });

        // scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

    return payload;
  } catch (e) {
    toast.error(e.response.data.message);
    setSubmitting(false);
  }
};

/**
 * make cashew payment request
 *
 */
export const makeThePayment = async (
  reservation,
  setIsLoading,
  setReservation,
  router
  // setTransistionTrack,
  // transistionTrack,
  // tabbyAddress
) => {
  // return console.log(reservation);
  setIsLoading(true);

  const pm = reservation.paymentMethod;

  // console.log(reservation);

  // console.log(pm);

  if (!pm) {
    toast.error("Please select a payment method.");
  }

  if (pm === "cashew") {
    // if cashew redirect url is already set
    if (reservation.cashewRedirectUrl) {
      router.push(reservation.cashewRedirectUrl);
    } else {
      // make the request
      try {
        await axios
          .post("/api/v2/web/payment/cashew/place-order", reservation)
          .then((res) => {
            const cashewRedirectUrl = res.data.data.data.url;

            // console.log(cashewRedirectUrl);

            setReservation &&
              setReservation({
                ...reservation,
                cashewRedirectUrl,
              });

            router.push(cashewRedirectUrl);
            // setTransistionTrack(!transistionTrack);
          });

        // redirect to cashew payment page message
        toast.success("You will be redirected to payment page shortly.");
      } catch (error) {
        console.log(error);

        toast.error("Something went wrong. Please try again.");
      }
    }
  } else if (pm === "tp_vma" || pm === "tp_apay") {
    try {
      await axios
        .post(
          "/api/v2/web/payment/total-processing/place-order?method=" + pm,
          reservation
        )
        .then((res) => {
          const checkoutId = res.data.data.checkoutId;
          const paymentInfoUrl = res.data.data.paymentInfoUrl;

          // console.log(res.data.data);

          setReservation &&
            setReservation({
              ...reservation,
              tpVMACheckoutId: pm === "tp_vma" ? checkoutId : "",
              tpAPayCheckoutId: pm === "tp_apay" ? checkoutId : "",
              paymentInfoUrl,
            });

          const vmaSuccessMsg =
            "Please put your card details and click pay now to complete the payment.";
          const aPaySuccessMsg = "Please continue with your Apple Pay details.";
          // setTransistionTrack(!transistionTrack);
          toast.success(pm === "tp_vma" ? vmaSuccessMsg : aPaySuccessMsg);
        });
    } catch (error) {
      // console.log("error", error);
      console.log("error res", error.response);
    }
  } else if (pm === "tabby") {
    // this is implemented directly in the CheckoutTabbyModal
  } else if (pm === "tp_gpay") {
    console.log("tp");
  }

  setIsLoading(false);
  localStorage.removeItem("bdcs");
};

/**
 * data
 */
export const contributionAmountOptions = [
  {
    label: "AED 10",
    amount: 10,
  },
  {
    label: "AED 30",
    amount: 30,
  },
  {
    label: "AED 50",
    amount: 50,
  },
  {
    label: "AED 100",
    amount: 100,
  },
];

export const contributionReasonOptions = [
  {
    label: "Beach Cleanup",
    reason: "beach_cleanup",
    src: getAssetsUrl("/images/pages/checkout/beach-cleanup-bdc.png"),
    description:
      "Join hands with fellow scuba enthusiasts to keep our beaches clean. A small effort can make a big difference.",
  },
  {
    label: "Scuba For Disabled People",
    reason: "scuba_for_disabled_people",
    src: getAssetsUrl("/images/pages/checkout/scuba_for_disabled_people.png"),
    description: "We believe the underwater world should be accessible to all.",
  },
  {
    label: "Ghost Net Removal",
    reason: "ghost_net_removal",
    src: getAssetsUrl("/images/pages/checkout/ghost_net_removal.png"),
    description:
      "Help us remove abandoned fishing nets that endanger marine life. Be a part of the solution, one dive at a time.",
  },
];
