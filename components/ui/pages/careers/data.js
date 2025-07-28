import * as yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const requiredText = 'This field is required.';
const emailText = 'This email is invalid.';
const phoneText = 'This phone number is invalid.';

export const initialValues = {
  first_name: '',
  last_name: '',
  phone_no: '',
  email: '',
  earliest_start_date: '',
  position: '',
  resume: '',
  cover_letter: '',
  agreement: '',
};

export const validateInitialValues = yup.object().shape({
  first_name: yup.string().required(requiredText),
  last_name: yup.string().required(requiredText),
  phone_no: yup
    .string()
    .matches(phoneRegExp, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  email: yup.string().email(emailText).required(requiredText),
  earliest_start_date: yup
    .date()
    .min(new Date(), `Date must be today or later`)
    .required(requiredText),
  position: yup.string().required(requiredText),
  resume: yup
    .mixed()
    .test({
      name: 'fileSize',
      message: 'Maximum size: 10 MB',
      test: (value) => {
        if (value) {
          console.log(value);
          return value.size <= 10_485_760;
        }
        return true;
      },
    })
    .test({
      name: 'fileType',
      message: 'PDF / Docs are only supported.',
      test: (value) => {
        if (value) {
          return [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ].includes(value.type);
        }
        return true;
      },
    })
    .required(requiredText),
  cover_letter: yup
    .mixed()
    .test({
      name: 'fileSize',
      message: 'Maximum size: 10 MB',
      test: (value) => {
        if (value) {
          console.log(value);
          return value.size <= 10_485_760;
        }
        return true;
      },
    })
    .test({
      name: 'fileType',
      message: 'PDF / Docs are only supported.',
      test: (value) => {
        if (value) {
          return [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ].includes(value.type);
        }
        return true;
      },
    }),
  agreement: yup.boolean().oneOf([true], requiredText).required(requiredText),
});
