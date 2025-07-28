import { useField } from 'formik';
import { BiInfoCircle } from 'react-icons/bi';

const InputWithoutLabel = ({
  type,
  disabled = false,
  optional,
  width,
  ...props
}) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <div style={{ width }}>
      <div className="input-wrapper">
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            {...field}
            {...props}
            className={`block w-full rounded-md focus:outline-none py-2 sm:text-sm ${
              isError
                ? 'pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500 border-red-300'
                : 'focus:ring-bermuda-100 hover:border-bermuda-100 border-gray-300'
            }`}
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
          <p className="mt-1 text-xs text-red-600" id="email-error">
            {meta.error}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default InputWithoutLabel;
