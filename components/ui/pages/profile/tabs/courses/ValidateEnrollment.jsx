import { Form, Formik } from 'formik';
import axios from '../../../../../../lib/axios/authenticated';
import SimpleButton from '../../../../buttons/SiimpleButton';
import Input from '../../../../forms/Input';
import Select from '../../../../forms/Select';
import useSWR from 'swr';
import { initValuesOfEID, validationOfEID } from './validation';
import { useContext } from 'react';
import CourseContext from '../../../../../../lib/store/profile/courses/CourseContext';
import { toast } from 'react-toastify';
import useFetcher from '../../../../../../lib/axios/fetcher';

const ValidateEnrollment = () => {
  const { fetcher } = useFetcher();

  const { data: courses, error } = useSWR(
    '/api/web/profile/courses-list',
    fetcher
  );

  const { setActiveStepIndex, activeStepIndex, setEnrollmentId, setCourseId } =
    useContext(CourseContext);

  return (
    <Formik
      initialValues={initValuesOfEID}
      validationSchema={validationOfEID}
      onSubmit={async (values) => {
        await axios
          .get(
            `/api/web/profile/course/validate-gid?eid=${values.gid}&cid=${values.course_id}`
          )
          .then((res) => {
            // return console.log(res.data.data.eid);
            // toast.success('Enrollment is valid. Complete registration!');

            setCourseId(res.data.data.cid);
            setEnrollmentId(res.data.data.eid);
            setActiveStepIndex(activeStepIndex + 1);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className="flex flex-col gap-4 mb-4">
          <div>
            <Select name="course_id" label="Courses">
              <option value="">Select Course</option>
              {courses?.length > 0 &&
                courses.map((activityParent, index) => (
                  <optgroup key={index} label={activityParent.name}>
                    {activityParent.children.map((activity) => (
                      <option key={activity.id} value={activity.id}>
                        {activity.short_name}
                      </option>
                    ))}
                  </optgroup>
                ))}
            </Select>
          </div>

          <div className="mb-2">
            <Input
              name="gid"
              label="Enrollment ID"
              type="number"
              min={1}
              max={10000000}
            />
          </div>

          <SimpleButton type="submit">
            {isSubmitting ? 'Validating' : 'Validate Enrollment'}
          </SimpleButton>
        </Form>
      )}
    </Formik>
  );
};

export default ValidateEnrollment;
