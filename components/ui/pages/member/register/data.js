import { format, subYears } from 'date-fns';
import * as yup from 'yup';

const requiredText = 'This field is required';
const phoneText = 'This phone is invalid';

const fileSize = 5 * 1024 * 1024; // 5mb
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
const phoneNumberRegex = /^(?:[+0]{1})?[0-9]{6,14}$/;

export const initValues = {
  first_name: '',
  last_name: '',
  birthday: format(subYears(new Date(), 10), 'yyyy-MM-dd'),
  birthplace: '',
  gender: '',
  country_id: '',
  phone_no: '',
  email: '',
  password: '',
  certified: '',
  profile_picture: '',
  emirates_id: '',
  awarding_body: '',
  activity_id: '',
  diving_license: '',
  agree_terms: '',
};

export const validateSchema = yup.object().shape({
  first_name: yup.string().required(requiredText),
  last_name: yup.string().required(requiredText),
  birthday: yup.string().required(requiredText),
  birthplace: yup.string().required(requiredText),
  gender: yup.string().required(requiredText),
  country_id: yup.string().required(requiredText),
  phone_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  email: yup.string().email('Email is invalid.').required(requiredText),
  password: yup.string().min(6, 'Min: 6 characters.').required(requiredText),
  certified: yup.string().required(requiredText),
  profile_picture: yup
    .mixed()
    .test({
      name: 'fileSize',
      message: 'Maximum size: 5 MB',
      test: (value) => {
        if (value) {
          return value.size <= fileSize;
        }
        return true;
      },
    })
    .test({
      name: 'fileType',
      message: 'Invalid file type',
      test: (value) => {
        if (value) {
          return allowedMimeTypes.includes(value.type);
        }
        return true;
      },
    })
    .required(requiredText),
  emirates_id: yup
    .mixed()
    .test({
      name: 'fileSize',
      message: 'Maximum size: 5 MB',
      test: (value) => {
        if (value) {
          return value.size <= fileSize;
        }
        return true;
      },
    })
    .test({
      name: 'fileType',
      message: 'Invalid file type',
      test: (value) => {
        if (value) {
          return allowedMimeTypes.includes(value.type);
        }
        return true;
      },
    })
    .required(requiredText),
  awarding_body: yup
    .string()
    .when('certified', (certified, schema) =>
      certified === 'yes' ? schema.required(requiredText) : schema
    ),
  activity_id: yup
    .string()
    .when('certified', (certified, schema) =>
      certified === 'yes' ? schema.required(requiredText) : schema
    ),
  diving_license: yup
    .mixed()
    // .when(['certified', 'awarding_body'], {
    //   is: (certified, awarding_body) =>
    //     certified === 'yes' && awarding_body !== null,
    //   then: yup
    //     .mixed()
    //     .test('required', 'Diving license is required', function (value) {
    //       return value !== null && value !== undefined;
    //     }),
    //   otherwise: yup.mixed(),
    // })
    .test({
      name: 'fileSize',
      message: 'Maximum size: 5 MB',
      test: (value) => {
        if (value) {
          return value.size <= fileSize;
        }
        return true;
      },
    })
    .test({
      name: 'fileType',
      message: 'Invalid file type',
      test: (value) => {
        if (value) {
          return allowedMimeTypes.includes(value.type);
        }
        return true;
      },
    }),
  agree_terms: yup.boolean().oneOf([true], 'You must agree to the terms'),
});
