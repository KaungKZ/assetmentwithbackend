import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';

const SelectSlot = ({
  slot,
  label,
  className,
  borderColor,
  type,
  disableDwn,
  disableMrn,
  disableAft,
  disableEvn,
  disableNgt,
}) => {
  const [field, meta] = useField('slot');
  const error = meta.touched && meta.error;
  const isBoatDSD = type === 'boat-dsd';
  const isCertified = type === 'certified-dive-trip';

  return (
    <div className={`flex flex-col text-sm ${className}`}>
      {label && (
        <label
          className={`block mb-1 text-sm ${
            error ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          {label}{' '}
          {disableMrn && disableAft && disableEvn ? (
            <span className="block text-xs text-red-500 sm:inline-block">
              (All slots are full. Please select another date!)
            </span>
          ) : (
            ''
          )}
        </label>
      )}

      <div
        role="group"
        aria-labelledby="my-radio-group"
        className={`flex flex-col sm:flex-row justify-between ${
          type && 'flex-col md:flex-row'
        } gap-x-2 gap-y-1`}
      >
        {/* <label
          className={twMerge(
            'md:px-4 px-1.5 whitespace-nowrap text-sm py-3.5 w-full text-center border rounded',
            disableDwn
              ? 'text-gray-400 cursor-default'
              : 'hover:border-bermuda-100 hover:text-bermuda-200 cursor-pointer',
            slot === 'dawn'
              ? 'text-white bg-bermuda-200 hover:bg-bermuda-300 hover:text-white hover:border-transparent'
              : borderColor || 'border-gray-300',
            error && !disableDwn && 'border-red-400 text-red-400'
          )}
        >
          6 AM - 9 AM
          <input
            {...field}
            type="radio"
            name="slot"
            value={disableDwn ? '' : 'dawn'}
            className="hidden"
          />
        </label> */}
        <label
          className={twMerge(
            'md:px-4 px-1.5 whitespace-nowrap text-sm py-3.5 duration-300 w-full text-center border rounded',
            disableMrn
              ? 'text-gray-400 cursor-default'
              : 'hover:border-bermuda-100 hover:text-bermuda-200 cursor-pointer',
            slot === 'morning'
              ? 'text-white bg-bermuda-200 hover:bg-bermuda-300 hover:text-white hover:border-transparent'
              : borderColor || 'border-gray-300',
            error && !disableMrn && 'border-red-400 text-red-400'
          )}
        >
          {isBoatDSD
            ? 'Morning (8 AM - 12 PM)'
            : isCertified
            ? '8 AM - 12 PM'
            : '9 AM - 12 PM'}
          <input
            {...field}
            type="radio"
            name="slot"
            value={disableMrn ? '' : 'morning'}
            className="hidden"
          />
        </label>
        <label
          className={twMerge(
            'md:px-4 whitespace-nowrap px-1.5 duration-300 text-sm py-3.5 w-full text-center border rounded',
            disableAft
              ? 'text-gray-400 cursor-default'
              : 'hover:border-bermuda-100 hover:text-bermuda-200 cursor-pointer',
            slot === 'afternoon'
              ? 'text-white bg-bermuda-200 hover:bg-bermuda-300 hover:text-white hover:border-transparent'
              : borderColor || 'border-gray-300',
            error && !disableAft && 'border-red-400 text-red-400'
          )}
        >
          {isBoatDSD
            ? 'Afternoon (1 PM - 5 PM)'
            : isCertified
            ? '1 PM - 5 PM'
            : '12 PM - 3 PM'}
          <input
            {...field}
            type="radio"
            name="slot"
            value={disableAft ? '' : 'afternoon'}
            className="hidden"
          />
        </label>
        {!isBoatDSD && !isCertified && (
          <label
            className={twMerge(
              'md:px-4 px-1.5 text-sm py-3.5 border duration-300 w-full text-center rounded',
              disableEvn
                ? 'text-gray-400 cursor-default'
                : 'cursor-pointer hover:text-bermuda-200 hover:border-bermuda-100',
              slot === 'evening'
                ? 'text-white bg-bermuda-200 hover:bg-bermuda-300 hover:text-white hover:border-transparent'
                : borderColor || 'border-gray-300',
              error && !disableEvn && 'border-red-400 text-red-400'
            )}
          >
            3 PM - 6 PM
            <input
              {...field}
              type="radio"
              name="slot"
              value={disableEvn ? '' : 'evening'}
              className="hidden"
            />
          </label>
        )}

        {isCertified && (
          <label
            className={twMerge(
              'md:px-4 px-1.5 text-sm py-3.5 border w-full text-center rounded',
              disableNgt
                ? 'text-gray-400 cursor-default'
                : 'cursor-pointer hover:text-bermuda-200 hover:border-bermuda-100',
              slot === 'night'
                ? 'text-white bg-bermuda-200 hover:bg-bermuda-300 hover:text-white hover:border-transparent'
                : borderColor || 'border-gray-300',
              error && !disableNgt && 'border-red-400 text-red-400'
            )}
          >
            6 PM - 10 PM{' '}
            <span
              className={`text-xs
              ${
                slot === 'night'
                  ? 'text-bermuda-100 border-bermuda-100'
                  : 'text-gray-500'
              }
              ${
                error && !disableNgt && 'border-red-400 text-red-400'
              } sm:hidden`}
            >
              (Night Dive)
            </span>
            <input
              {...field}
              type="radio"
              name="slot"
              value={disableNgt ? '' : 'night'}
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default SelectSlot;
