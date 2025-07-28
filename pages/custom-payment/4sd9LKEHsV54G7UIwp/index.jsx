import { Form, Formik } from 'formik';
import { useState } from 'react';
import Script from 'next/script';
import { twMerge } from 'tailwind-merge';
import Input from '../../../components/ui/forms/Input';
import SimpleButton from '../../../components/ui/buttons/SiimpleButton';
import GuestLayout from '../../../components/layouts/GuestLayout';
import {
  customPaymentInitValues,
  customPaymentValidateValues,
} from '../../../components/ui/pages/custom-payment/data';
import { getMoney } from '../../../lib/func/money';
import axios from '../../../lib/axios';

const CustomPaymentPage = ({ data }) => {
  const [tpLink, setTpLink] = useState(null);

  return (
    <div className="container flex items-center justify-center py-16">
      <div className="sm:w-[350px] px-5 py-6 w-full border border-gray-200 rounded">
        <div className="flex flex-col items-center mb-6 space-y-2">
          <h1 className="text-lg text-center">Freediving Course with Zarir</h1>
          <p className="text-sm">
            Amount: <span className="text-black">{getMoney(data.price)}</span>
          </p>
        </div>

        <div className="flex flex-col space-y-5">
          <Formik
            initialValues={customPaymentInitValues}
            validationSchema={customPaymentValidateValues}
            onSubmit={async (values) => {
              try {
                const res = await axios.post(
                  '/api/web/custom-payment/get-payment-link',
                  values
                );

                if (res.status === 200) {
                  setTpLink(res.data.data);
                  console.log(res.data.data);
                }
              } catch (err) {
                console.log(err.response.data);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-3">
                <div>
                  <Input name="firstName" label="First Name" />
                </div>
                <div>
                  <Input name="lastName" label="Last Name" />
                </div>

                <div>
                  <Input name="mobile" label="Phone Number" />
                </div>
                <div>
                  <Input name="email" label="Email Address" />
                </div>

                <div className="pt-2">
                  <SimpleButton
                    className={twMerge(
                      'w-full py-3 rounded',
                      tpLink && 'bg-gray-400 hover:bg-gray-400 cursor-default'
                    )}
                    disabled={isSubmitting || tpLink}
                  >
                    {isSubmitting ? 'Processing' : 'Proceed To Pay'} (
                    {getMoney(data.price)})
                  </SimpleButton>
                </div>
              </Form>
            )}
          </Formik>
          {tpLink ? (
            <>
              <div className="px-3 pt-3 pb-1 text-gray-500 border border-gray-300 rounded">
                <form
                  action={tpLink.paymentInfoUrl}
                  className="paymentWidgets"
                  data-brands="VISA MASTER AMEX"
                ></form>
              </div>

              <Script id="wpwlOptions">
                {`
            var wpwlOptions = {
                style: "plain"
            };
          `}
              </Script>
              <Script
                src={`${process.env.NEXT_PUBLIC_TP_BASE_URL}/v1/paymentWidgets.js?checkoutId=${tpLink.checkoutId}`}
              ></Script>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CustomPaymentPage;

export const getServerSideProps = async () => {
  let data = null;

  try {
    const res = await axios.get('/api/web/custom-payment/get-data');

    data = res.data.data;
  } catch (e) {
    console.log(e.response);
  }

  return {
    props: {
      data,
    },
  };
};

CustomPaymentPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
