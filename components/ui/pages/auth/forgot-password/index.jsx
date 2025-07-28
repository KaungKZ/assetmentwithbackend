import { Form, Formik } from 'formik';
import SimpleButton from '../../../buttons/SiimpleButton';
import Input from '../../../forms/Input';

import * as yup from 'yup';
import axios from '../../../../../lib/axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="text-center">
      {!emailSent ? (
        <>
          <h2 className="text-lg font-bold">Forgot your password?</h2>

          <p className="mt-3 text-sm">
            No problem. Enter your email, click reset, and we&apos;ll send you a
            link to get back in.
          </p>

          <Formik
            initialValues={{ email: '' }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email('Please enter a valid email address.')
                .required('Email address is required.'),
            })}
            onSubmit={async (values, { resetForm }) => {
              await axios
                .post('/api/web/auth/forgot-password', values)
                .then((res) => {
                  // toast.success(res.data.message);
                  setEmailSent(true);

                  resetForm();
                })
                .catch((err) => {
                  toast.error(err.response.data.message);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-5">
                <div>
                  <Input name="email" label="Enter your email" />
                </div>

                <div className="w-full mt-4">
                  <SimpleButton disabled={isSubmitting} width="w-full">
                    {isSubmitting ? 'Requesting' : 'Send Reset Link'}
                  </SimpleButton>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <h2 className="text-lg font-bold">Check your email!</h2>
          <p className="mt-4 mb-2 text-sm text-green-700">
            We have sent you an email with a link to reset your password. Please
            check your inbox.
          </p>
          <p className="mt-4 text-sm">
            Sometimes, it could take a few minutes to arrive. So, it&apos;s a
            good idea to give it a moment before trying again.
          </p>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
