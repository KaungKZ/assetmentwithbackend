import React, { useState } from 'react';

import Image from 'next/image';
import SimpleButton from '../../../buttons/SiimpleButton';
import { Nunito } from '@next/font/google';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import AnimatedText from '../../../animation/text/AnimatedText';
import { validationSchema } from '../../../landing-pages/try-scuba-diving/CallToAction';
import { toast } from 'react-toastify';
import axios from '../../../../../lib/axios';
import { siteConfig } from '../../../../../lib/config';

const nunito = Nunito({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const GiftCard = ({ title }) => {
  const [callbackOpened, setCallbackOpened] = useState(false);
  const [callbackRequested, setCallbackRequested] = useState(false);

  return (
    <div className="mt-10 border border-gray-100 pt-28 md:py-16 mb-28 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-50">
      <div className="container flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex order-2 md:order-1 flex-col justify-center flex-1 pt-6 md:pt-[100px]">
          <div className="space-y-4 text-center md:text-start">
            <p className={`text-2xl ${nunito.className}`}>
              Give the Gift of Choice!
            </p>

            <h2
              className={`md:text-6xl text-4xl font-bold leading-[50px] md:leading-[70px] ${nunito.className}`}
            >
              Special Christmas Gift Card Offer!
            </h2>

            <div>
              <p className={`${nunito.className}`}>
                Available with every purchase. Hurry, offer valid until 10th
                January!
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 pt-2 md:flex-row md:pt-6">
              <Link
                href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=I+would+like+to+claim+Christmas+Gift+Card+for+${title}.`}
              >
                {/* <Link
                href="https://shop.scubadiving.ae/product/gift-card"
                target="_blank"
              > */}
                <SimpleButton
                  lg
                  className={`bg-gradient-to-br hover:to-green-800 from-green-700 via-green-700/90 to-green-700 ${nunito.className}`}
                >
                  Claim Your Gift Card
                </SimpleButton>
              </Link>
              or
              <SimpleButton
                lg
                className={`hover:bg-gradient-to-br bg-transparent text-green-700 border-[1px] border-green-800  hover:text-white duration-300 from-green-700 via-green-700/90 to-green-700 ${nunito.className}`}
                onClick={() => {
                  setCallbackOpened(!callbackOpened);

                  if (callbackRequested) {
                    setCallbackRequested(false);
                  }
                }}
              >
                Request A Callback
              </SimpleButton>
            </div>

            <div className="h-[100px]">
              {callbackOpened ? (
                <div className="max-w-[410px]">
                  <Formik
                    initialValues={{ phoneNumber: '' }}
                    onSubmit={async (values, { resetForm }) => {
                      // return console.log(values);

                      try {
                        const res = await axios.post(
                          '/api/web/contact-request',
                          { ...values, from: 'Gift Card Banner' }
                        );

                        resetForm();

                        setCallbackOpened(false);
                        setCallbackRequested(true);

                        setTimeout(() => {
                          setCallbackRequested(false);
                        }, 8000);

                        toast.success('Phone Callback Requested Successfully.');
                        console.log(res.data);
                      } catch (err) {
                        toast.error('Something went wrong. Try again later.');
                        console.log(err.response.data);
                      }
                    }}
                    validationSchema={validationSchema}
                  >
                    {({
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      values,
                      errors,
                    }) => (
                      <Form className="space-y-2">
                        <div>
                          <div className="flex items-end">
                            <input
                              name="phoneNumber"
                              className="flex-1 px-4 py-2 border border-green-700 rounded-full rounded-r-none focus:outline-none"
                              placeholder="E.g. +971 501 194 050"
                              value={values.phoneNumber}
                              onBlur={handleBlur('phoneNumber')}
                              onChange={handleChange('phoneNumber')}
                            />
                            <button
                              disabled={isSubmitting}
                              type="submit"
                              className="px-4 py-2.5 hover:to-green-800 from-green-700 border border-green-700 via-green-700/90 to-green-700 bg-gradient-to-br font-thin text-sm text-white rounded-full rounded-l-none"
                            >
                              {isSubmitting ? 'Requesting' : 'Request Now'}
                            </button>
                          </div>

                          {errors.phoneNumber ? (
                            <div className="pl-2">
                              <span className="text-xs text-red-600">
                                {errors.phoneNumber}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              ) : callbackRequested ? (
                <div>
                  <p className="pl-1 text-sm text-green-700 border-l-[3px] border-l-green-700">
                    Phone callback requested successfully. We will get back to
                    you shortly.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="relative flex-1 order-1 w-full md:order-2">
          <Image
            width={1200}
            height={675}
            src="/images/gift-card.png"
            alt="Gift Card Image"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
