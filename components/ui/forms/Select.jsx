import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';

const Select = ({
  label,
  isRequired = true,
  labeless = false,
  optional,
  children,
  lang = 'en',
  ...props
}) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  const isEng = lang === 'en';

  return (
    <>
      {!labeless &&
        (isEng ? (
          <label
            htmlFor={props.id || props.name}
            className="flex items-center justify-between mb-1 text-sm font-medium text-gray-700"
          >
            <span>
              {label} {isRequired && <span className="text-red-500">*</span>}
            </span>
            <span className="text-gray-500">{optional}</span>
          </label>
        ) : (
          <label
            htmlFor={props.id || props.name}
            className="flex items-center justify-between mb-1 text-sm font-medium text-gray-700"
          >
            <span className="text-gray-500">{optional}</span>
            <span>
              {isRequired && <span className="text-red-500">*</span>} {label}
            </span>
          </label>
        ))}
      <div className="relative">
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <select
            {...field}
            {...props}
            autoComplete={`${props.id || props.name}`}
            className={`block w-full rounded-md focus:outline-none pr-10 sm:text-sm cursor-pointer ${
              isError
                ? 'text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500 border-red-300'
                : 'focus:ring-bermuda-100 hover:border-bermuda-100 border-gray-300'
            }`}
            dir={isEng ? 'ltr' : 'rtl'}
          >
            {children}
          </select>
        </div>
        {isError ? (
          <p
            className={twMerge(
              'mt-1 text-xs text-red-600',
              isEng ? 'text-left' : 'text-right'
            )}
            id={`${props.name}-error`}
            dir={isEng ? 'ltr' : 'rtl'}
          >
            {meta.error}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Select;
