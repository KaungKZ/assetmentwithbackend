import { useField } from 'formik';
import { BiInfoCircle } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

const Textarea = ({
  label,
  isRequired = false,
  disabled = false,
  optional,
  lang = 'en',
  font,
  ...props
}) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  const isEng = lang === 'en';

  return (
    <>
      {label ? (
        lang === 'en' ? (
          <label
            htmlFor={props.id || props.name}
            className="flex items-center justify-between text-sm font-medium text-gray-700"
          >
            <span className={`${font || ''} font-normal`}>
              {label} {isRequired && <span className="text-red-500">*</span>}
            </span>
            <span className="text-gray-500">{optional}</span>
          </label>
        ) : (
          <label
            htmlFor={props.id || props.name}
            className="flex items-center justify-between text-sm font-medium text-gray-700"
          >
            <span className="text-gray-500">{optional}</span>
            <span className={`${font || ''} font-normal`}>
              {isRequired && <span className="text-red-500">*</span>} {label}
            </span>
          </label>
        )
      ) : null}
      <div>
        <div className="relative mt-1 rounded-md shadow-sm">
          <textarea
            {...field}
            {...props}
            className={twMerge(
              'block w-full rounded-md font-light focus:border-bermuda-200 pr-10 sm:text-sm',
              isError
                ? 'text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500 border-red-300'
                : 'focus:ring-bermuda-100 hover:border-bermuda-100 border-gray-300',
              font || ''
            )}
            autoComplete={`${props.id || props.name}`}
            aria-invalid="true"
            aria-describedby={`${props.id || props.name}-error`}
            disabled={disabled}
          />
          {isError ? (
            <div className="absolute right-0 flex items-center pr-3 pointer-events-none bottom-3">
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
    </>
  );
};

export default Textarea;
