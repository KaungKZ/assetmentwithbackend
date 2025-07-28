import { useField } from 'formik';

const AgreementCheckbox = ({
  label,
  isRequired = true,
  disabled = false,
  optional,
  link,
  height = 'h-[200px]',
  lang = 'en',
  div,
  ...props
}) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  const isEng = lang === 'en';

  return (
    <div>
      <div
        className={
          isEng
            ? 'flex items-center justify-start gap-x-2'
            : 'flex items-center justify-end flex-row-reverse gap-x-2'
        }
      >
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
          dir={isEng ? 'ltr' : 'rtl'}
        >
          {link || (
            <span>
              {label || 'I understand & agree with the followings.'}{' '}
              {isRequired && <span className="text-red-500">*</span>}
            </span>
          )}
          <span className="text-gray-500">{optional}</span>
        </label>
      </div>

      {isError ? (
        <p
          className="mt-1 text-xs text-red-600"
          id="email-error"
          dir={isEng ? 'ltr' : 'rtl'}
        >
          {meta.error}
        </p>
      ) : null}

      {div && (
        <div
          className={`overflow-scroll ${height} text-xs mt-2 py-3 px-2 border border-gray-400 rounded`}
          dir={isEng ? 'ltr' : 'rtl'}
        >
          {div}
        </div>
      )}
    </div>
  );
};

export default AgreementCheckbox;
