import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { hear_about_us } from '../../../../../../../../lib/data/data';
import { scrollToTop } from '../../../../../../../../lib/func/utils';
import { CourseContext } from '../../../../../../../../lib/store/medical-form/CourseContext';
import SimpleButton from '../../../../../../buttons/SiimpleButton';
import Input from '../../../../../../forms/Input';
import Select from '../../../../../../forms/Select';
import Textarea from '../../../../../../forms/Textarea';
import SelectBox from '../../../../../../internals/parts/SelectBox';
import { initValuesBoat, validateValuesBoat } from '../data';
import ImageUploader from '../../../../../../forms/image-uploader/ImageUploader';
import PhoneInput from '../../../../../../forms/v2/PhoneInput';

const PersonalDetails = ({ countries }) => {
  const { setFormData, formData, setActiveStepIndex, activeStepIndex } =
    useContext(CourseContext);

  return (
    <Formik
      initialValues={initValuesBoat(formData)}
      validationSchema={validateValuesBoat}
      onSubmit={async (values) => {
        setFormData(values);

        setActiveStepIndex(activeStepIndex + 1);

        scrollToTop();
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div className="flex flex-col gap-4">
            <div>
              <Input name="first_name" label="First name" />
            </div>
            <div>
              <Input name="last_name" label="Last name" />
            </div>
            <div>
              <Select name="gender" label="Gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
            <div>
              <Input name="email" label="Email" />
            </div>
            <div>
              <PhoneInput name="phone_no" label="Phone No." isRequired />
            </div>
            <div>
              <PhoneInput name="whatsapp_no" label="WhatsApp No." isRequired />
            </div>
            <div>
              <Input name="birthday" label="Date of Birth" type="date" />
            </div>
            <div>
              <Select name="country_id" label="Nationality">
                <option value="">Select Nationality</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Select name="birthplace" label="Country of Birth">
                <option value="">Select Nationality</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Textarea name="address" label="Address" isRequired />
            </div>

            <div>
              <PhoneInput
                name="emergency_contact_no"
                label="Emergency Contact Number"
                isRequired
              />
            </div>
            <div>
              <Input
                name="emergency_contact_name"
                label="Emergency Contact Name"
              />
            </div>

            <div>
              <Select name="how_heard_us" label="How did you hear about us?">
                <option value="">Please Select One</option>

                {hear_about_us.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <SelectBox
                options={[
                  { label: 'Yes', value: 'true' },
                  { label: 'No', value: 'false' },
                ]}
                name="share_on_social"
                label="Would you like us to share your photos/videos on our social media?"
                value={values.share_on_social}
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

            <div>
              <Input
                name="instagram"
                label="Instagram"
                isRequired={false}
                optional="(Optional)"
              />
            </div>

            <div>
              <Input
                name="facebook"
                label="Facebook"
                isRequired={false}
                optional="(Optional)"
              />
            </div>

            <div className="-mb-2">
              <ImageUploader
                label="Emirates ID / Passport"
                name="emirates_id"
                aspectRatio={5 / 3}
                isRequired
              />
            </div>

            <div className="-mb-4">
              <ImageUploader
                label="Diving License"
                name="diving_license"
                aspectRatio={5 / 3}
                isRequired
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
