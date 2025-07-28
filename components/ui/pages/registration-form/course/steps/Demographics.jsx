import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { CourseContext } from '../../../../../../lib/store/medical-form/CourseContext';
import SimpleButton from '../../../../buttons/SiimpleButton';
import Input from '../../../../forms/Input';
import Select from '../../../../forms/Select';
import {
  demographicsInitialValues,
  demographicsValidation,
} from '../validations';

const Demographics = ({ countries }) => {
  const { setFormData, setActiveStepIndex, activeStepIndex, formData } =
    useContext(CourseContext);

  return (
    <Formik
      initialValues={demographicsInitialValues}
      validationSchema={() => demographicsValidation(formData.course_id)}
      onSubmit={(values) => {
        setFormData({ ...values, ...formData });
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-4">
            <div>
              <Input name="email" label="Email" />
            </div>

            <div>
              <Select name="gender" label="Gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </div>

            <div>
              <Input type="date" name="birthday" label="Date of birth" />
            </div>

            <div>
              <Select name="birthplace" label="Place of birth">
                <option>Select Country</option>

                {countries.map((country) => (
                  <option key={country.code} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Select name="country_id" label="Nationality">
                <option>Select Country</option>

                {countries.map((country) => (
                  <option key={country.code} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Select>
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

export default Demographics;
