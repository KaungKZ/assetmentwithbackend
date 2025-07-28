import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import axios from "../../../../lib/axios";
import SimpleButton from "../../buttons/SiimpleButton";
import { BiXCircle } from "react-icons/bi";
import Loader from "../../Loader";
import OutlinedButton from "../../buttons/OutlinedButton";
import Link from "next/link";
import {
  sendCheckoutEventToGTM,
  sendPurchasedEventToGTM,
} from "../../../../utils/helpers/gtm";
import { sendPurchasedEventToSnapChat } from "../../../../utils/helpers/snapchat";

const PaymentSuccess = () => {
  const [reservation, setReservation] = useState({});

  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (
        (router.query.order_reference_id &&
          router.query.payment_status &&
          router.query.payment_method &&
          router.query.from) ||
        router.query.payment_id
      ) {
        try {
          await axios
            .post("/api/v2/web/payment/check-order-status", router.query)
            .then((res) => {
              const { data } = res.data;

              setReservation(data);

              if (res.status === 200 && process.env.NODE_ENV === "production") {
                // send checkout event to gtm
                sendPurchasedEventToGTM(data);

                // send checkout event snapchat
                sendPurchasedEventToSnapChat(data);
              }
            });
        } catch (e) {
          console.log(e);
          setReservation({ status: "failed" });
        }
      }
    })();
  }, [router.query]);

  if (Object.keys(reservation).length === 0)
    return (
      <div className="lg:min-h-[calc(100vh-97px)] bg-fixed bg-center bg-cover bg-[#F8F8F8]">
        <Loader />
      </div>
    );

  return (
    <div className="lg:min-h-[calc(100vh-97px)] bg-fixed bg-center bg-cover bg-[#F8F8F8]">
      <div className="backdrop-brightness-[0.8] lg:min-h-[calc(100vh-97px)] w-full">
        <div className="container flex flex-col items-center justify-center w-full lg:min-h-[calc(100vh-97px)] py-16">
          <div className="bg-gray-100/80 w-full lg:w-[450px] shadow rounded px-6 lg:px-12 py-11 my-10 lg:my-0">
            {reservation.status === "confirmed" ? (
              <>
                <h1 className="flex items-center justify-start gap-2 text-lg text-green-600">
                  <HiOutlineCheckCircle size={28} /> PAYMENT SUCCESSFUL!
                </h1>

                <div className="flex flex-col gap-4 mt-5">
                  <p className="text-lg text-black">Congratulations!</p>
                  <p className="text-base text-black">
                    {reservation?.first_name && (
                      <span className="font-semibold text-black capitalize">
                        Hi, {reservation?.first_name}!{" "}
                      </span>
                    )}
                    <span className="text-gray-500">
                      Your payment has been processed successfully and your
                      reservation is confirmed.
                    </span>
                  </p>
                  <p className="text-base text-gray-500">
                    Please check your email inbox for{" "}
                    <span className="text-black">booking details</span>.
                  </p>
                </div>

                <div className="mt-6">
                  <SimpleButton onClick={() => router.push("/")}>
                    Back To Home
                  </SimpleButton>
                </div>
              </>
            ) : (
              <>
                <h1 className="flex items-center justify-start gap-2 text-lg text-red-600">
                  <BiXCircle size={28} /> PAYMENT ERROR!
                </h1>

                <div className="flex flex-col gap-4 mt-5">
                  <p className="text-base text-gray-500">
                    Please{" "}
                    <span className="text-black">
                      go back to checkout page and try again
                    </span>{" "}
                    or{" "}
                    <Link href="/contact" className="text-base">
                      contact us
                    </Link>{" "}
                    immediately to resolve if you think this is an error.
                  </p>
                </div>

                <div className="flex gap-2 mt-6">
                  <SimpleButton onClick={() => router.push("/")}>
                    Back To Home
                  </SimpleButton>
                  <OutlinedButton
                    onClick={() =>
                      router.push(
                        `/reservation?reference_id=${router.query.order_reference_id}&type=${router.query.from}&is_authenticated=true`
                      )
                    }
                  >
                    Go To Checkout
                  </OutlinedButton>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
