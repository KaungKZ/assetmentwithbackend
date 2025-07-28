import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import axios from '../../../../../../lib/axios/authenticated';
import { eLearningLanguages } from '../../../../../../lib/data/data';
import CourseContext from '../../../../../../lib/store/profile/courses/CourseContext';
import SimpleButton from '../../../../buttons/SiimpleButton';
import AgreementCheckbox from '../../../../forms/checkbox/Agreement';
import Select from '../../../../forms/Select';
import ImageUploader from '../../../../internals/parts/ImageUploader';
import {
  agreement_four,
  agreement_one,
  agreement_three,
  agreement_two,
  media_for_promotion,
} from '../../../registration-form/course/data';
import ProfileContext from '../../state/ProfileContext';
import { initValuesOfReg, validationOfReg } from './validation';

const Registration = ({ course, setAddCourseModalOpen }) => {
  const { refreshRegisteredCourses, togglePaymentModalOpen } =
    useContext(CourseContext);
  const { profile } = useContext(ProfileContext);

  return (
    <div className="mt-5">
      <Formik
        initialValues={initValuesOfReg(course, profile.hasEnrolledCourses)}
        validationSchema={validationOfReg}
        onSubmit={async (values, { setSubmitting }) => {
          // return console.log(values);
          try {
            await axios
              .post(
                '/api/web/profile/course/enroll-register',
                {
                  ...values,
                  sid: profile.id,
                },
                {
                  headers: { 'Content-Type': 'multipart/form-data' },
                }
              )
              .then((res) => {
                // return console.log(res.data.data);
                toast.success(res.data.message);

                refreshRegisteredCourses();
                setAddCourseModalOpen(false);
                togglePaymentModalOpen();
              });
          } catch ($e) {
            toast.error(err.response.data.message);
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            <input type="hidden" name="course_id" />
            <input type="hidden" name="hasEnrolledCourses" />

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

            {course.id == 14 ||
            course.id == 15 ||
            profile.hasEnrolledCourses ? null : (
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

            <SimpleButton disabled={isSubmitting}>
              {isSubmitting ? 'Enrolling' : 'Enroll Now'}
            </SimpleButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
