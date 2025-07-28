import { ErrorMessage, Field } from 'formik';
import { twMerge } from 'tailwind-merge';

const SelectBox = ({
  options,
  label,
  name,
  value,
  lang = 'en',
  optional = false,
}) => {
  const isEng = lang === 'en';

  return (
    <div className="flex flex-col gap-1 text-sm" dir={isEng ? 'ltr' : 'rtl'}>
      {isEng ? (
        <h6>
          {label}{' '}
          {optional ? ' (Optional)' : <span className="text-red-500">*</span>}
        </h6>
      ) : (
        <h6 dir="rtl">
          {label}
          {optional ? ' (Optional)' : <span className="text-red-500">*</span>}
        </h6>
      )}
      <div
        role="group"
        aria-labelledby="my-radio-group"
        className={twMerge('flex gap-2 text-sm items-center')}
      >
        {options?.map((option, index) => (
          <label
            key={index}
            className={`px-2.5 py-1 border border-gray-300 rounded cursor-pointer hover:text-bermuda-100 hover:border-bermuda-100 mt-1 ${
              value == option.value
                ? 'text-white hover:text-white border-bermuda-100  bg-bermuda-200'
                : ''
            }`}
          >
            {option.label}
            <Field
              type="radio"
              name={name}
              value={option.value}
              className="hidden"
            />
          </label>
        ))}
      </div>
      <span className="text-xs text-red-500">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

export default SelectBox;
