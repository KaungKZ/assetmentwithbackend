import { sub, subYears } from 'date-fns';
import * as yup from 'yup';

const requiredText = 'This field is required';
const emailText = 'This email is invalid.';
const max50 = 'Maximum: 50 characters.';
const phoneText = 'This phone is invalid';
const ageLimit =
  'A minimum age of 8 years old or a maximum age of 10 years old is required.';

const phoneNumberRegex = /^(?:[+0]{1})?[0-9]{6,14}$/;

const fileSize = 5 * 1024 * 1024; // 5mb
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

export const personalDetailsInitialValues = (course_id) => {
  return {
    first_name: '',
    last_name: '',
    phone_no: '',
    whatsapp_no: '',
    course_id: course_id,
    visa_status: '',
    profile_picture: null,
    emirates_id: null,
  };
};

export const demographicsInitialValues = {
  email: '',
  gender: '',
  birthday: '',
  birthplace: '',
  country_id: '',
};

export const agreementsInitialValues = (course_id) => {
  return {
    course_id: course_id,
    el_language: '',
    license_photo: '',
    first_agreement: false,
    second_agreement: false,
    third_agreement: false,
    fourth_agreement: false,
  };
};

export const personalDetailsValidation = yup.object().shape({
  first_name: yup.string().max(50, max50).required(requiredText),
  last_name: yup.string().max(50, max50).required(requiredText),
  phone_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  whatsapp_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  course_id: yup.string().required(requiredText),
  visa_status: yup.string().required(requiredText),
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
});

export const demographicsValidation = (course_id) => {
  return yup.object().shape({
    email: yup.string().email(emailText).max(50, max50).required(requiredText),
    gender: yup.string().required(requiredText),
    birthday:
      course_id === '14'
        ? yup
            .date()
            .required(requiredText)
            .max(subYears(new Date(), 8), ageLimit)
            .min(subYears(new Date(), 10), ageLimit)
        : yup.date().required(requiredText),
    birthplace: yup.number().required(requiredText),
    country_id: yup.number().required(requiredText),
  });
};

export const agreementsValidation = yup.object().shape({
  el_language: yup.string().required(requiredText),
  license_photo: yup
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
    .when('course_id', (course_id, schema) =>
      !['14', '15'].includes(course_id) ? schema.required(requiredText) : schema
    ),
  first_agreement: yup
    .boolean()
    .equals([true], requiredText)
    .required(requiredText),
  second_agreement: yup
    .boolean()
    .equals([true], requiredText)
    .required(requiredText),
  third_agreement: yup
    .boolean()
    .equals([true], requiredText)
    .required(requiredText),
  fourth_agreement: yup
    .boolean()
    .equals([true], requiredText)
    .required(requiredText),
  media_for_promotion: yup
    .boolean()
    .equals([true], requiredText)
    .required(requiredText),
});
