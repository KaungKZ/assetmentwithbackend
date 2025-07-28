import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import axios from '../../../../../../lib/axios/authenticated';
import CourseContext from '../../../../../../lib/store/profile/courses/CourseContext';
import SimpleButton from '../../../../buttons/SiimpleButton';
import Input from '../../../../forms/Input';
import Textarea from '../../../../forms/Textarea';
import SelectSlot from '../../../../internals/parts/SelectSlot';
import ProfileContext from '../../state/ProfileContext';
import { newDiveInitValues, newDiveValidation } from './validation';

const AddNewDiveSession = ({ data, setDiveModalOpen }) => {
  const { refreshRegisteredCourses } = useContext(CourseContext);
  const { profile } = useContext(ProfileContext);

  // console.log(data.course.id);

  return (
    <Formik
      initialValues={newDiveInitValues}
      validationSchema={newDiveValidation}
      onSubmit={async (values) => {
        await axios
          .post('/api/web/profile/course/add-dive-session', {
            ...values,
            sid: profile.id,
            aid: data.course.id,
            cid: data.id,
          })
          .then((res) => {
            setDiveModalOpen(false);
            refreshRegisteredCourses();

            toast.success(res.data.message);
          })
          .catch((err) => {
            console.log(err.response.data);
            toast.error(err.response.data.message);
          });
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="flex flex-col gap-4 mt-4">
          <div>
            <Input name="booking_date" label="Booking Date" type="date" />
          </div>
          <div>
            <SelectSlot slot={values.slot} />
          </div>
          <div>
            <Textarea name="notes" label="Remarks" />
          </div>

          <div className="-mt-3" />
          <SimpleButton disabled={isSubmitting}>
            {isSubmitting ? 'Booking' : 'Book Now'}
          </SimpleButton>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewDiveSession;
