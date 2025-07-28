import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import useAuth from '../../../../lib/hooks/useAuth';
import SimpleButton from '../../buttons/SiimpleButton';
import Checkbox from '../../forms/Checkbox';
import Input from '../../forms/Input';
import { initialValues, validateInitialValues } from './validation';

const LoginSection = () => {
  const [error, setError] = useState();
  const { login } = useAuth();

  return (
    <div>
      <div className="mb-5 text-center">
        <h1 className="text-lg font-bold lg:text-xl">Welcome Back!</h1>
        <p>Login to continue.</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validateInitialValues}
        onSubmit={async (values) => {
          setError();

          await login(values, setError);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col gap-y-4">
              <div>
                <Input name="email" label="Email" />
              </div>
              <div>
                <Input name="password" label="Password" type="password" />
              </div>
              <div className="flex items-center justify-between">
                <Checkbox
                  name="remember"
                  label="Remember me"
                  isRequired={false}
                />

                <Link className="text-sm" href="/password/forgot">
                  Forgot Password
                </Link>
              </div>
            </div>

            <div className="flex justify-center w-full mt-5">
              <SimpleButton width="w-36" disabled={isSubmitting}>
                {isSubmitting ? 'Logging In' : 'Log In'}
              </SimpleButton>
            </div>

            {error && (
              <div className="mt-3 text-sm text-center text-red-500">
                {error}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginSection;
