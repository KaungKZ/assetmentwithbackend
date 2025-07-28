/* eslint-disable @next/next/no-img-element */
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import SimpleModal from "../../modals/SimpleModal";
import Input from "../../forms/v2/Input";
import SimpleButton from "../../buttons/SiimpleButton";
import * as yup from "yup";
import { requiredText } from "../../../../lib/func/text";
import axios from "../../../../lib/axios";
import CheckoutContext from "../../../../lib/store/checkout/CheckoutContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CheckoutTabbyModal = ({ open, setOpen }) => {
  const { reservation, actions } = useContext(CheckoutContext);
  const router = useRouter();

  return (
    <SimpleModal open={open} setOpen={setOpen} width="sm:w-[400px]">
      <Formik
        initialValues={{ city: "", postal_code: "", address: "" }}
        onSubmit={async (values) => {
          try {
            await axios
              .post("/api/v2/web/payment/tabby/place-order", {
                ...reservation,
                ...values,
              })
              .then((res) => {
                // console.log(res);
                const tabbyRedirectUrl = res.data.data.redirect_url;

                toast.success("You will be redirected to Tabby Payment Page.");

                setTimeout(() => {
                  router.push(tabbyRedirectUrl);
                }, 1000);
              });
          } catch (error) {
            toast.error("Something went wrong. Please contact us immediately.");
            console.log(error);
          }
        }}
        validationSchema={yup.object().shape({
          city: yup.string().required(requiredText()),
          postal_code: yup.string().required(requiredText()),
          address: yup.string().required(requiredText()),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="pb-2 mb-2 border-b border-gray-300">
              {/* <h4 className="text-gray-600">Tabby Payment</h4>
              <p className="text-xs text-gray-500">
                Please enter your address and proceed with the payment.
              </p> */}
              <div className="flex gap-2">
                <span>Make the payment</span>
                <img
                  src="/images/payment/tabby-logo.png"
                  alt="Tabby Logo"
                  className="w-[50px] h-auto"
                />
              </div>
              <p className="text-xs text-gray-500">
                Pay in 4. No interest, no fees.
              </p>
            </div>

            <div>
              <div>
                <Input name="address" label="Address" />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input name="city" label="City" errorPosition="down" />
                </div>
                <div className="flex-1">
                  <Input
                    name="postal_code"
                    label="Postal Code"
                    errorPosition="down"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-1 pt-3 mt-4 border-t border-gray-300">
              <SimpleButton
                onClick={setOpen}
                type="button"
                className="text-gray-700 bg-transparent border border-gray-500 hover:bg-gray-200"
              >
                Cancel
              </SimpleButton>

              <SimpleButton display={isSubmitting}>
                {isSubmitting ? "Processding" : "Pay Now"}
              </SimpleButton>
            </div>
          </Form>
        )}
      </Formik>
    </SimpleModal>
  );
};

export default CheckoutTabbyModal;
