import * as yup from 'yup';

const requiredText = 'This field is required.';
const max50Text = 'Maximum: 30 characters.';
const min6Text = 'Minimum: 6 characters.';
const emailText = 'Please enter a valid email.';

export const initialValues = {
  email: '',
  password: '',
  remember: false,
};

export const validateInitialValues = yup.object().shape({
  email: yup
    .string()
    .email(emailText)
    .max(50, max50Text)
    .required(requiredText),
  password: yup.string().min(6, min6Text).required(requiredText),
  remember: yup.boolean(),
});
