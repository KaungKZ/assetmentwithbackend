import * as yup from 'yup';

const fileSize = 5 * 1024 * 1024; // 5mb
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

export const data = [
  {
    key: 'eid_front',
    title: 'Emirates ID (Front)',
  },
  {
    key: 'eid_back',
    title: 'Emirates ID (Back)',
  },
  {
    key: 'diving_license',
    title: 'Diving License',
  },
  {
    key: 'nitrox_license',
    title: 'Nitrox License',
  },
];

export const initialValues = {
  eid_front: '',
  eid_back: '',
  diving_license: '',
  nitrox_license: '',
};

export const validateValues = yup.object().shape({
  eid_front: yup
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
    .nullable(),
  eid_back: yup
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
    .nullable(),
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
    .nullable(),
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
    .nullable(),
});
