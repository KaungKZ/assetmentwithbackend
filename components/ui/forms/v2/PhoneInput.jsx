import { useFormikContext } from 'formik';

import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { twMerge } from 'tailwind-merge';

const PhoneInput = ({
  label,
  isRequired = true,
  sd,
  name,
  lang,
  className,
  wrapperClassName,
  labelWrapperClassName,
}) => {
  const { handleChange, values, errors, handleBlur, touched } =
    useFormikContext();

  const errorMsg = errors[name] && touched[name] ? errors[name] : '';
  const isEng = lang !== 'ar';

  return (
    <>
      <div className="input-wrapper" dir={isEng ? 'ltr' : 'rtl'}>
        <div
          className={twMerge(
            'relative mt-1 rounded-md shadow-sm',
            wrapperClassName
          )}
        >
          <div className={twMerge('space-y-0.5', labelWrapperClassName)}>
            <div className="flex items-center justify-between">
              {label && (
                <label className="text-sm text-gray-700">
                  {label}{' '}
                  {isRequired ? (
                    <span className="text-sm text-red-500">*</span>
                  ) : (
                    ''
                  )}
                </label>
              )}

              {!!errorMsg ? (
                <span className="text-[11px] text-red-500">{errorMsg}</span>
              ) : null}
            </div>

            <ReactPhoneInput
              country={'ae'}
              preferredCountries={['ae']}
              containerClass={`rounded ${
                errorMsg ? 'border border-red-500' : ''
              }`}
              dropdownClass="[&_li]:text-xs"
              inputClass={twMerge(
                `text-gray-600 text-sm !w-full focus:ring-0 ${
                  isEng ? '' : '!pl-2'
                }`,
                className
              )}
              placeholder="+971 501 194 050"
              value={values[name]}
              onChange={handleChange(name)}
              onBlur={handleBlur(name)}
            />
          </div>

          {/* {errorMsg ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <BiInfoCircle
                className="w-5 h-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          ) : null} */}
        </div>
      </div>
      <span className="text-[10px]">{sd}</span>
    </>
  );
};

export default PhoneInput;
