import { Form, Formik } from 'formik';
import SimpleButton from '../../../buttons/SiimpleButton';
import Input from '../../../forms/Input';
import Select from '../../../forms/Select';
import Textarea from '../../../forms/Textarea';
import SimpleModal from '../../../modals/SimpleModal';
import * as yup from 'yup';
import axios from '../../../../../lib/axios/authenticated';

const minText = 'Minimum: 6 characters';
const requiredText = 'This field is required';

const RequestProfileUpdateModal = ({ open, setOpen }) => {
  return (
    <SimpleModal
      open={open}
      setOpen={setOpen}
      title="Profile Update Request Ticket"
    >
      <Formik
        initialValues={{ subject: '', priority: '', message: '' }}
        validationSchema={yup.object().shape({
          subject: yup.string().min(6, minText).required(requiredText),
          priority: yup.number().required(requiredText),
          message: yup.string().min(6, minText).required(requiredText),
        })}
        onSubmit={async (values) => {
          await axios.post();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-3 mt-4">
            <div>
              <Input name="subject" label="What do you want to update?" />
            </div>
            <div>
              <Select name="priority" label="Priority">
                <option value="">Select Priority</option>
                <option value={1}>Very Low</option>
                <option value={2}>Low</option>
                <option value={3}>Medium</option>
                <option value={4}>High</option>
                <option value={5}>Very High</option>
              </Select>
            </div>
            <div>
              <Textarea
                name="message"
                label="Why do you want to update?"
                rows={3}
                isRequired={true}
              />
            </div>

            <div className="flex justify-end mt-2">
              <SimpleButton disabled={isSubmitting}>
                {isSubmitting ? 'Submitting' : 'Submit Ticket'}
              </SimpleButton>
            </div>
          </Form>
        )}
      </Formik>
    </SimpleModal>
  );
};

export default RequestProfileUpdateModal;
