import React from 'react';
import { useFormikContext } from 'formik';
import { twMerge } from 'tailwind-merge';

const FileUpload = ({
  label,
  name,
  isRequired = true,
  disabled = false,
  optional,
  inputClassName,
  sd,
  errorPosition = 'up',
}) => {
  const { setFieldValue, handleBlur, errors, touched } = useFormikContext();

  const errMsg = touched[name] && errors[name] ? errors[name] : '';

  // Custom change handler for file inputs
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue(name, file);
  };

  return (
    <>
      <div className="input-wrapper">
        <div className="relative mt-1 space-y-1 rounded-md shadow-sm">
          <div className="flex items-center justify-between">
            {label && (
              <div className="space-x-1">
                <label className="text-sm text-gray-500">{label}</label>
                {isRequired ? <span className="text-red-500">*</span> : ''}
                {optional ? (
                  <span className="text-xs text-gray-400">(Optional)</span>
                ) : (
                  ''
                )}
              </div>
            )}

            {!!errMsg && errorPosition === 'up' ? (
              <span className="text-[11px] text-red-500">{errMsg}</span>
            ) : null}
          </div>

          <input
            type="file"
            name={name}
            className={twMerge(
              'block w-full rounded-md border px-2 focus:outline-none duration-300 py-[7px] sm:text-sm',
              errMsg
                ? 'text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500 border-red-300'
                : 'hover:border-gray-400 focus:border-gray-400 focus:ring-0 border-gray-300',
              inputClassName
            )}
            onChange={handleFileChange}
            onBlur={handleBlur(name)}
            disabled={disabled}
            aria-invalid="true"
            aria-describedby={`${name}-error`}
          />
          {!!errMsg && errorPosition === 'down' ? (
            <span className="text-[11px] text-red-500">{errMsg}</span>
          ) : null}
        </div>
      </div>
      <span className="text-[10px]">{sd}</span>
    </>
  );
};

export default FileUpload;
