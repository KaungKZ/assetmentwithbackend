import * as yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const requiredText = 'This field is required.';
const emailText = 'This email is invalid.';
const maxText = 'Maximum: 255 characters.';
const phoneText = 'This phone number is invalid.';

export const initialValues = {
  full_name: '',
  email: '',
  phone_no: '',
  subject: '',
  message: '',
};

export const validateValues = yup.object({
  full_name: yup.string().required(requiredText),
  email: yup.string().email(emailText),
  subject: yup.string().required(requiredText),
  phone_no: yup
    .string()
    .matches(phoneRegExp, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  message: yup.string().max(255, maxText).required(requiredText),
});
