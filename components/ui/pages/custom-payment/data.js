import * as yup from 'yup';
import { requiredText } from '../../../../lib/func/text';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const phoneText = 'This phone number is invalid.';

export const customPaymentInitValues = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
};

export const customPaymentValidateValues = yup.object().shape({
  firstName: yup.string().required(requiredText()),
  lastName: yup.string().required(requiredText()),
  mobile: yup
    .string()
    .matches(phoneRegExp, phoneText)
    .max(15, phoneText)
    .required(requiredText()),
  email: yup.string().email().required(requiredText()),
});
