import { useField } from 'formik';
import { BiInfoCircle } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

const Input = ({
  label,
  type,
  isRequired = true,
  disabled = false,
  font = '',
  optional,
  sd,
  lang = 'en',
  ...props
}) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  const isEng = lang === 'en';

  return (
    <>
      {label &&
        (isEng ? (
          <label
            htmlFor={props.id || props.name}
            className="flex items-center justify-between text-sm font-medium text-gray-700"
          >
            <span className={`${font || ''} font-normal`}>
              {label} {isRequired && <span className="text-red-500">*</span>}
            </span>
            <span className={twMerge('text-gray-500 font-light', font)}>
              {optional}
            </span>
          </label>
        ) : (
          <label
            htmlFor={props.id || props.name}
            className="flex items-center justify-between text-sm font-medium text-gray-700"
          >
            <span className={twMerge('text-gray-500 font-light', font)}>
              {optional}
            </span>
            <span className={`${font || ''} font-normal`}>
              {isRequired && <span className="text-red-500">*</span>} {label}
            </span>
          </label>
        ))}
      <div className="input-wrapper">
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            {...field}
            {...props}
            className={twMerge(
              `block w-full rounded-md focus:ring-0 focus:border-bermuda-200 font-light py-2 sm:text-sm`,
              isError
                ? 'pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500 border-red-300'
                : ' hover:border-bermuda-100 border-gray-300',
              font || ''
            )}
            autoComplete={`${props.name}`}
            aria-invalid="true"
            aria-describedby={`${props.id || props.name}-error`}
            disabled={disabled}
            type={type || 'text'}
          />
          {isError ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <BiInfoCircle
                className="w-5 h-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          ) : null}
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
      <span className="text-[10px]">{sd}</span>
    </>
  );
};

export default Input;
