import { useField } from 'formik';

const Checkbox = ({
  label,
  isRequired = true,
  disabled = false,
  optional,
  link,
  ...props
}) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <>
      <div className="flex items-center justify-start gap-x-2">
        <div>
          <div className="relative">
            <input
              {...field}
              {...props}
              className={`h-4 w-4 rounded border-gray-300 text-bermuda-100 cursor-pointer focus:ring-0`}
              autoComplete={`${props.name}`}
              aria-invalid="true"
              aria-describedby={`${props.id || props.name}-error`}
              disabled={disabled}
              type="checkbox"
            />
          </div>
        </div>
        <label
          htmlFor={props.id || props.name}
          className="flex items-center justify-between text-sm font-medium text-gray-700"
        >
          {link || (
            <span>
              {label} {isRequired && <span className="text-red-500">*</span>}
            </span>
          )}
          <span className="text-gray-500">{optional}</span>
        </label>
      </div>

      {isError ? (
        <p className="mt-1 text-xs text-red-600" id="email-error">
          {meta.error}
        </p>
      ) : null}
    </>
  );
};

export default Checkbox;
