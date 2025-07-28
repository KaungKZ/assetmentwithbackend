import React from 'react';

import { Form, Formik } from 'formik';
import Input from '../../../forms/v2/Input';
import SimpleButton from '../../../buttons/SiimpleButton';
import { Lora, Nunito } from '@next/font/google';
import * as yup from 'yup';
import axios from '../../../../../lib/axios';
import { toast } from 'react-toastify';
import AnimatedText from '../../../animation/text/AnimatedText';
import PhoneInput from '../../../forms/v2/PhoneInput';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const CallToAction = () => {
  return (
    <div
      className={`px-8 pt-10 border-b border-gray-200 pb-10 bg-white ${nunito.className}`}
    >
      <AnimatedText tag="div" className="mb-2">
        <h3 className={`${lora.className}`}>Phone Callback Request</h3>
        <p className="text-xs">
          Please enter your phone number and click on the button. We will call
          you back shortly.
        </p>
      </AnimatedText>

      <Formik
        initialValues={{ phoneNumber: '' }}
        onSubmit={async (values, { resetForm }) => {
          // console.log(values);

          try {
            const res = await axios.post('/api/web/contact-request', {
              ...values,
              from: 'National Day Landing Page',
            });

            resetForm();

            toast.success('Phone Callback Requested Successfully.');
            console.log(res.data);
          } catch (err) {
            console.log(err.response.data);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-2">
            <AnimatedText tag="div">
              <PhoneInput
                name="phoneNumber"
                inputClassName="py-2 text-sm"
                placeholder="E.g. +971 50 119 4050"
              />
            </AnimatedText>

            <AnimatedText tag="div">
              <SimpleButton className="w-full rounded-lg">
                {isSubmitting ? 'Requesting' : 'Request Now'}
              </SimpleButton>
            </AnimatedText>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CallToAction;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const phoneText = 'This phone number is invalid.';
const requiredText = 'This field is required.';

const validationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, phoneText)
    .max(15, phoneText)
    .required(requiredText),
});
