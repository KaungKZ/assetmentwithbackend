import { Form, Formik } from 'formik';
import SimpleButton from '../../../../buttons/SiimpleButton';
import Input from '../../../../forms/Input';
import * as yup from 'yup';
import axios from '../../../../../../lib/axios/authenticated';
import { useContext } from 'react';
import ProfileContext from '../../state/ProfileContext';
import { toast } from 'react-toastify';

const requiredText = 'This field is required.';
const minChar = 'Minimum: 6 characters';

const PasswordReset = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <div>
      <h4 className="text-lg">Change Password</h4>

      <Formik
        initialValues={{
          current_password: '',
          new_password: '',
          confirm_password: '',
        }}
        validationSchema={yup.object().shape({
          current_password: yup.string().min(6, minChar).required(requiredText),
          new_password: yup.string().min(6, minChar).required(requiredText),
          confirm_password: yup.string().min(6, minChar).required(requiredText),
        })}
        onSubmit={async (values, { resetForm }) => {
          await axios
            .post(
              `/api/web/profile/${profile.member_no}/change-password`,
              values
            )
            .then((res) => {
              // return console.log(res.data);
              toast.success(res.data.message);
              resetForm();
            })
            .catch((err) => {
              // return console.log(err.response.data);
              toast.error(err.response.data.message);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 mt-6">
            <div className="lg:w-96">
              <Input
                name="current_password"
                label="Current Password"
                type="password"
              />
            </div>

            <div className="lg:w-96">
              <Input name="new_password" label="New Password" type="password" />
            </div>

            <div className="lg:w-96">
              <Input
                name="confirm_password"
                label="Confirm Password"
                type="password"
              />
            </div>

            <div className="pt-2">
              <SimpleButton disabled={isSubmitting}>
                {isSubmitting ? 'Updating' : 'Update Password'}
              </SimpleButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordReset;
