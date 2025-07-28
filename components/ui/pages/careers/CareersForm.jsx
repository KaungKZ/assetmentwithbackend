import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { initialValues, validateInitialValues } from './data';
import Input from '../../forms/v2/Input';
import PhoneInput from '../../forms/v2/PhoneInput';
import Checkbox from '../../forms/v2/Checkbox';
import SimpleButton from '../../buttons/SiimpleButton';
import FileUpload from '../../forms/v2/FileUpload';
import axios from '../../../../lib/axios';
import useRecaptcha from '../../../../lib/hooks/useRecaptcha';
import { toast } from 'react-toastify';

const CareersForm = () => {
  const { isHuman, runRecaptchaCheck } = useRecaptcha();

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        runRecaptchaCheck();

        if (failure) {
          setFailure(false);
        }

        if (!isHuman)
          return toast.error(
            'Please verify you are not a robot. Or refresh the page and try again.'
          );

        try {
          const formData = new FormData();

          // Append each value in the form to the formData object
          for (const key in values) {
            // For file inputs, ensure the value is a File object
            if (values[key] instanceof File) {
              formData.append(key, values[key]);
            } else {
              // For other inputs, convert the value to a string if necessary
              formData.append(key, values[key].toString());
            }
          }

          const res = await axios.post('/api/web/careers/submit', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          toast.success(
            'You have submitted the job application form successfully.'
          );

          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
          }, 1000 * 10);

          console.log(res);
        } catch (err) {
          console.log(err);

          toast.error(err.response.data.message);
          setFailure(true);
        }
      }}
      validationSchema={validateInitialValues}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Input name="first_name" label="First Name" />
            </div>
            <div>
              <Input name="last_name" label="Last Name" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <PhoneInput name="phone_no" label="Phone Number" />
            </div>
            <div>
              <Input name="email" label="Email Address" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Input
                type="date"
                name="earliest_start_date"
                label="Earliest Start Date"
              />
            </div>
            <div>
              <Input name="position" label="Position Title" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FileUpload name="resume" label="CV / Resume" type="file" />
            </div>
            <div>
              <FileUpload
                name="cover_letter"
                label="Cover Letter"
                optional="Optional"
                type="file"
                isRequired={false}
              />
            </div>
          </div>

          <div>
            <Checkbox
              name="agreement"
              label="I confirm that the information provided is accurate and complete to the best of my knowledge."
            />
          </div>

          <div className="flex justify-end sm:justify-start">
            <SimpleButton disabled={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Submit Form'}
            </SimpleButton>
          </div>

          <div>
            {success ? (
              <span className="text-sm text-green-600">
                You have successfully submitted the job application.
              </span>
            ) : failure ? (
              <span className="text-sm text-red-500">
                One or more fields have error. Please try again.
              </span>
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CareersForm;
