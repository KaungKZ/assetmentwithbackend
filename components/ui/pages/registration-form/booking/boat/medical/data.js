import { differenceInYears, format, sub } from 'date-fns';
import * as yup from 'yup';

const requiredText = 'This field is required';
const phoneText = 'This phone is invalid';
const agreedText = 'You must agree to the terms and conditions';

const fileSize = 5 * 1024 * 1024; // 5mb
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

const phoneNumberRegex = /^(?:[+0]{1})?[0-9]{6,14}$/;

export const initValuesBoat = (data) => {
  return {
    first_name: data?.first_name || '',
    last_name: data?.last_name || '',
    gender: data?.gender || '',
    email: data?.email || '',
    phone_no: data?.phone_no || '',
    whatsapp_no: data?.whatsapp_no || '',
    birthday:
      data?.birthday || format(sub(new Date(), { years: 10 }), 'yyyy-MM-dd'),
    country_id: data?.country_id || '',
    birthplace: data?.birthplace || '',
    address: data?.address || '',
    emergency_contact_no: data?.emergency_contact_no || '',
    emergency_contact_name: data?.emergency_contact_name || '',
    how_heard_us: data?.how_heard_us || '',
    share_on_social: data?.share_on_social || '',
    visa_status: data?.visa_status || '',
    instagram: data?.instagram || '',
    facebook: data?.facebook || '',
    activityId: data?.activityId || '8',
    emirates_id: data?.emirates_id || '',
    diving_license: data?.diving_license || '',
  };
};

export const validateValuesBoat = yup.object().shape({
  first_name: yup.string().required(requiredText),
  last_name: yup.string().required(requiredText),
  gender: yup.string().required(requiredText),
  email: yup.string().email('Invalid email').required(requiredText),
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
  birthday: yup
    .date()
    .required(requiredText)
    .test('age', 'You must be at least 10 years old', (value) => {
      const age = differenceInYears(new Date(), value);
      return age >= 10;
    }),
  country_id: yup.string().required(requiredText),
  birthplace: yup.string().required(requiredText),
  address: yup.string().required(requiredText),
  emergency_contact_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  emergency_contact_name: yup.string().required(requiredText),
  how_heard_us: yup.string().required(requiredText),
  share_on_social: yup.string().required(requiredText),
  visa_status: yup.string().required(requiredText),
  instagram: yup.string(),
  facebook: yup.string(),
  activityId: yup.string().required(requiredText),
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
  diving_license: yup
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

export const initValuesDiveDetails = (data) => {
  return {
    equipment_rental: '',
    weight: '',
    tank: '',
    nitrox_license: '',
    mask: '',
    bcd: '',
    regulator: '',
    fins: '',
    wetsuit: '',
    rental_terms_conditions: '',
    liability_release: '',
    accept_the_risk_and_participate: '',
    bermuda_terms_conditions: '',
    last_logged_date: '',
    agree_all_the_terms: '',
    understand_refund_policy: '',
    have_own_smb: '',
  };
};

export const validateValuesDiveDetails = yup.object().shape({
  equipment_rental: yup.string().required(requiredText),
  weight: yup.string().when('equipment_rental', {
    is: (er) => ['yes', 'no'].includes(er),
    then: yup.string().required(requiredText),
  }),
  tank: yup.string().when('equipment_rental', {
    is: (er) => ['yes', 'no'].includes(er),
    then: yup.string().required(requiredText),
  }),
  nitrox_license: yup
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
    .when('tank', {
      is: 'nitrox',
      then: yup.mixed().required(requiredText),
    }),
  mask: yup.string().when('equipment_rental', {
    is: 'yes',
    then: yup.string().required(requiredText),
  }),
  bcd: yup.string(),
  regulator: yup.string().when('equipment_rental', {
    is: 'yes',
    then: yup.string().required(requiredText),
  }),
  fins: yup.string(),
  wetsuit: yup.string(),
  rental_terms_conditions: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  liability_release: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  accept_the_risk_and_participate: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  bermuda_terms_conditions: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  last_logged_date: yup.date().required(requiredText),
  agree_all_the_terms: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  understand_refund_policy: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  have_own_smb: yup.boolean().oneOf([true], agreedText).required(requiredText),
});
