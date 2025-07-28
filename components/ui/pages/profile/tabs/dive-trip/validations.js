import * as yup from 'yup';

const requiredText = 'This field is required';
const agreedText = 'You must agree to the terms and conditions';

const fileSize = 5 * 1024 * 1024; // 5mb
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

export const initValues = (nitrox_license) => {
  return {
    booking_date: '',
    slot: '',
    dan: '',
    dan_no: '',
    equipment_rental: '',
    weight: '',
    tank: '',
    has_nitrox_license: nitrox_license,
    nitrox_license: null,
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

export const validateValues = yup.object().shape({
  booking_date: yup.date().required(requiredText),
  slot: yup.string().required(requiredText),
  // dan: yup.string().required(requiredText),
  // dan_no: yup.string().when('dan', {
  //   is: 'i_already_have',
  //   then: yup.string().required(requiredText),
  // }),
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
    .when(['tank', 'has_nitrox_license'], {
      is: (tank, has_nitrox_license) =>
        tank === 'nitrox' && !has_nitrox_license,
      then: yup
        .mixed()
        .test('required', 'Nitrox license is required', function (value) {
          return value !== null && value !== undefined;
        }),
      otherwise: yup.mixed(),
    })
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
  mask: yup.string(),
  bcd: yup.string(),
  regulator: yup.string(),
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
