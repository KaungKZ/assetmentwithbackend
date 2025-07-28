import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { CourseContext } from '../../../../../../lib/store/medical-form/CourseContext';
import SimpleButton from '../../../../buttons/SiimpleButton';
import Input from '../../../../forms/Input';
import {
  personalDetailsInitialValues,
  personalDetailsValidation,
} from '../validations';
import ImageUploader from '../../../../forms/image-uploader/ImageUploader';
import PhoneInput from '../../../../forms/v2/PhoneInput';
import SelectBox from '../../../../internals/parts/SelectBox';

const PersonalDetails = () => {
  const router = useRouter();

  const { setFormData, setActiveStepIndex, activeStepIndex } =
    useContext(CourseContext);

  return (
    <Formik
      initialValues={personalDetailsInitialValues(router.query?.cid)}
      validationSchema={personalDetailsValidation}
      onSubmit={(values) => {
        const formValues = { ...values, gid: router.query?.gid };

        setFormData(formValues);

        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Input type="hidden" name="course_id" isRequired={false} />

          <div className="flex flex-col gap-4">
            <div>
              <Input name="first_name" label="First name" />
            </div>
            <div>
              <Input name="last_name" label="Last name" />
            </div>
            <div>
              <PhoneInput name="phone_no" label="Phone No." isRequired />
            </div>
            <div>
              <PhoneInput name="whatsapp_no" label="WhatsApp No." isRequired />
            </div>

            <div>
              <ImageUploader
                name="profile_picture"
                label="Profile Picture"
                aspectRatio={3 / 4}
                isRequired
              />
            </div>

            <div>
              <ImageUploader
                label="Emirates ID / Passport"
                name="emirates_id"
                aspectRatio={5 / 3}
                isRequired
              />
            </div>

            <div>
              <SelectBox
                options={[
                  {
                    label: 'Visitor / Tourist',
                    value: 'tourist',
                  },
                  {
                    label: 'Residence / Citizen',
                    value: 'citizen',
                  },
                ]}
                name="visa_status"
                label="Please select one of the following."
                value={values.visa_status}
              />
            </div>

            <div className="mt-4">
              <SimpleButton width="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Processing' : 'Next'}
              </SimpleButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
