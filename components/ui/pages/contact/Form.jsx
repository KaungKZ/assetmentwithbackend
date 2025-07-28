import { Form, Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../../../lib/axios';
import useRecaptcha from '../../../../lib/hooks/useRecaptcha';

import SimpleButton from '../../buttons/SiimpleButton';
import Input from '../../forms/Input';
import Textarea from '../../forms/Textarea';

import { initialValues, validateValues } from './validation';

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const { isHuman, runRecaptchaCheck } = useRecaptcha();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateValues}
      onSubmit={async (values, { resetForm }) => {
        runRecaptchaCheck();

        if (!isHuman)
          return toast.error(
            'Please verify you are not a robot. Or refresh the page and try again.'
          );

        await axios
          .post('/api/web/contact', values)
          .then(async (res) => {
            setMessage(res.data.message);
            setStatus(res.status);
            resetForm();

            setTimeout(() => {
              setStatus();
              setMessage('');
            }, 1000 * 7);
          })
          .catch((err) => {
            if (err.response.status === 422) {
              setStatus(err.response.status);
              setMessage('One or more fields are incorrect. Please try again.');
            }
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <Input name="full_name" label="Full name" />
          </div>
          <div>
            <Input name="phone_no" label="Phone" />
          </div>
          <div>
            <Input name="email" label="Email" isRequired={false} />
          </div>
          <div>
            <Input name="subject" label="Subject" />
          </div>
          <div className="sm:col-span-2">
            <Textarea name="message" label="Message" rows={4} />
          </div>
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center sm:col-span-2">
            <div
              className={`order-2 mb-4 text-sm lg:order-1 ${
                status === 200 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message}
            </div>
            <div className="order-1 lg:order-2">
              <SimpleButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending' : 'Send'}
              </SimpleButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
