import { useField } from 'formik';

const Select = ({
  label,
  isRequired = true,
  labeless = false,
  optional,
  children,
  ...props
}) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <>
      <div className="relative">
        {label && (
          <label className="block mb-1 text-sm text-gray-500">{label}</label>
        )}

        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <select
            {...field}
            {...props}
            autoComplete={`${props.id || props.name}`}
            className={`block w-full rounded-md focus:outline-none py-3.5 pr-10 sm:text-sm cursor-pointer ${
              isError
                ? 'text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500 border-red-300'
                : 'hover:border-gray-400 focus:border-gray-400 focus:ring-0 border-gray-300'
            }`}
          >
            {children}
          </select>
        </div>
        {isError ? (
          <p className="mt-1 text-xs text-red-600" id="email-error">
            {meta.error}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Select;
