import { sub } from 'date-fns';
import * as yup from 'yup';

const requiredText = 'This field is required';

const fileSize = 5 * 1024 * 1024; // 5mb
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

const todayOrFutureText = 'Date must be today or future.';
const passedText = 'Time has passed. Choose another!';

const currentTime = new Date();
const currentDate = currentTime.toDateString();
const currentHour = currentTime.getHours();

export const initValuesOfEID = { gid: '', course_id: '' };

export const validationOfEID = yup.object().shape({
  gid: yup.number().required(requiredText),
  course_id: yup.number().required(requiredText),
});

export const initValuesOfReg = (course, hasEnrolledCourses) => {
  return {
    course_id: course.id,
    el_language: '',
    license_photo: '',
    first_agreement: false,
    second_agreement: false,
    third_agreement: false,
    fourth_agreement: false,
    hasEnrolledCourses,
  };
};

export const validationOfReg = yup.object().shape({
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
    .when(
      ['course_id', 'hasEnrolledCourses'],
      (course_id, hasEnrolledCourses, schema) =>
        [14, 15].includes(course_id) || hasEnrolledCourses
          ? schema
          : schema.required(requiredText)
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

export const newDiveInitValues = {
  booking_date: '',
  slot: '',
  notes: '',
};

export const newDiveValidation = yup.object().shape({
  booking_date: yup
    .date()
    .required(requiredText)
    .min(sub(new Date(), { days: 1 }), todayOrFutureText),
  slot: yup
    .string()
    .required(requiredText)
    .when('booking_date', {
      is: (booking_date) => {
        if (booking_date === undefined) return false;
        return booking_date.toDateString() === currentDate;
      },
      then: yup.string().test('invalid-time', passedText, function (value) {
        console.log('hello');
        if (value === 'morning' && currentHour >= 9) {
          return false;
        } else if (value === 'afternoon' && currentHour >= 12) {
          return false;
        } else if (value === 'evening' && currentHour >= 15) {
          return false;
        }
        return true;
      }),
      otherwise: yup.string().oneOf(['morning', 'afternoon', 'evening']),
    }),
  notes: yup.string().max(255, 'Maximum: 255 characters.'),
});
