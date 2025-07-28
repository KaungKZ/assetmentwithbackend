import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import SimpleButton from '../../../buttons/SiimpleButton';
import Input from '../../../forms/Input';

import * as yup from 'yup';
import axios from '../../../../../lib/axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const router = useRouter();
  const { token, email } = router.query;

  if (!router.query.token) return;

  return (
    <div>
      <h2 className="text-lg font-bold">Reset your password!</h2>

      <p className="mt-3 text-sm">
        Create a new password and confirm to continue.
      </p>

      <Formik
        initialValues={{
          password: '',
          password_confirmation: '',
          token: token,
          email: email,
        }}
        validationSchema={yup.object().shape({
          password: yup
            .string()
            .min(6, 'Minimum: 6 characters')
            .required('Password is required.'),
          password_confirmation: yup
            .string()
            .min(6, 'Minimum: 6 characters')
            .required('Password confirmation is required.')
            .oneOf([yup.ref('password'), null], 'Passwords do not match'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await axios
            .post('/api/web/auth/reset-password', values)
            .then((res) => {
              toast.success(res.data.message);
              router.push('/login');
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            });

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-5 mt-4">
            <input type="hidden" name="email" />
            <input type="hidden" name="token" />

            <div>
              <Input name="password" label="New password" type="password" />
            </div>

            <div>
              <Input
                name="password_confirmation"
                label="Confirm password"
                type="password"
              />
            </div>

            <div className="mt-1">
              <SimpleButton disabled={isSubmitting} width="w-full">
                {isSubmitting ? 'Resetting' : 'Reset Now'}
              </SimpleButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
