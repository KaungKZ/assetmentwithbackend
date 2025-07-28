import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import axios from '../../../../../../lib/axios';
import { eLearningLanguages } from '../../../../../../lib/data/data';
import { CourseContext } from '../../../../../../lib/store/medical-form/CourseContext';
import SimpleButton from '../../../../buttons/SiimpleButton';
import AgreementCheckbox from '../../../../forms/checkbox/Agreement';
import Input from '../../../../forms/Input';
import Select from '../../../../forms/Select';
import ImageUploader from '../../../../internals/parts/ImageUploader';
import {
  agreement_four,
  agreement_one,
  agreement_three,
  agreement_two,
  media_for_promotion,
} from '../data';
import { agreementsInitialValues, agreementsValidation } from '../validations';

const Agreements = () => {
  const router = useRouter();

  const { formData } = useContext(CourseContext);

  return (
    <Formik
      initialValues={agreementsInitialValues(formData.course_id)}
      validationSchema={agreementsValidation}
      onSubmit={async (values) => {
        await axios
          .post(
            '/api/web/courses/registration',
            {
              ...formData,
              ...values,
              cid: router.query.cid,
              gid: router.query.gid,
            },
            {
              headers: { 'Content-Type': 'multipart/form-data' },
            }
          )
          .then((res) => {
            // return console.log(res.data);

            localStorage.setItem(
              'congratulations',
              JSON.stringify({
                first_name: res.data.data.student.first_name,
                course_name: res.data.data.course.short_name,
                from: 'course_registration',
              })
            );

            router.push(`/congratulations`);
          })
          .catch((err) => {
            if (err.response.status === 401) {
              router.push(router.asPath);
            } else if (err.response.status === 402) {
              toast.error(err.response.data.message);
            } else {
              console.log(err.response);
            }
          });
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <Input type="hidden" name="course_id" isRequired={false} />

          <div className="flex flex-col gap-4">
            <div>
              <Select name="el_language" label="eLearning Language">
                <option value="">Select Language</option>

                {eLearningLanguages.map((lang) => (
                  <option key={lang.key} value={lang.key}>
                    {lang.name}
                  </option>
                ))}
              </Select>
            </div>

            {formData?.course_id === '14' ||
            formData?.course_id === '15' ? null : (
              <div className="-mb-1">
                <ImageUploader
                  setFieldValue={setFieldValue}
                  field="license_photo"
                  label="License Photo"
                />
              </div>
            )}

            <AgreementCheckbox name="first_agreement" div={agreement_one} />

            <AgreementCheckbox name="second_agreement" div={agreement_two} />

            <AgreementCheckbox name="third_agreement" div={agreement_three} />

            <AgreementCheckbox name="fourth_agreement" div={agreement_four} />

            <AgreementCheckbox
              name="media_for_promotion"
              div={media_for_promotion}
            />

            <div className="mt-4">
              <SimpleButton width="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting' : 'Dive into a New Adventure'}
              </SimpleButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Agreements;
