import { ErrorMessage, Field } from 'formik';
import { twMerge } from 'tailwind-merge';

const SelectSlot = ({ slot, dsd = false }) => {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <div className="flex items-center gap-1">
        <h6>Time Slot</h6>
        <span className="text-red-500">*</span>
      </div>

      <div
        role="group"
        aria-labelledby="my-radio-group"
        className={`flex ${
          dsd ? 'justify-start' : 'justify-between'
        } gap-4 text-xs`}
      >
        <label
          className={twMerge(
            `px-2.5 py-2 border border-gray-300 rounded cursor-pointer hover:text-bermuda-100 duration-300 hover:border-bermuda-100`,
            slot === 'morning' &&
              'text-white border-bermuda-200 bg-bermuda-200 hover:text-white hover:bg-bermuda-300'
          )}
        >
          {dsd ? '8am - 12pm (Morn)' : '9am - 12pm'}
          <Field type="radio" name="slot" value="morning" className="hidden" />
        </label>
        <label
          className={twMerge(
            `px-2.5 py-2 border border-gray-300 rounded cursor-pointer hover:text-bermuda-100 duration-300 hover:border-bermuda-100`,
            slot === 'afternoon' &&
              'text-white border-bermuda-200 bg-bermuda-200 hover:text-white hover:bg-bermuda-300'
          )}
        >
          {dsd ? '1pm - 5pm (Aftn)' : '12pm - 3pm'}
          <Field
            type="radio"
            name="slot"
            value="afternoon"
            className="hidden"
          />
        </label>
        {!dsd && (
          <label
            className={twMerge(
              `px-2.5 py-2 border border-gray-300 rounded cursor-pointer hover:text-bermuda-100 duration-300 hover:border-bermuda-100`,
              slot === 'evening' &&
                'text-white border-bermuda-200 bg-bermuda-200 hover:text-white hover:bg-bermuda-300'
            )}
          >
            3pm - 6pm
            <Field
              type="radio"
              name="slot"
              value="evening"
              className="hidden"
            />
          </label>
        )}
        {dsd && (
          <label
            className={twMerge(
              `px-2.5 py-2 border border-gray-300 rounded cursor-pointer hover:text-bermuda-100 duration-300 hover:border-bermuda-100`,
              slot === 'night' &&
                'text-white border-bermuda-200 bg-bermuda-200 hover:text-white hover:bg-bermuda-300'
            )}
          >
            Night
            <Field type="radio" name="slot" value="night" className="hidden" />
          </label>
        )}
      </div>
      <span className="text-xs text-red-500">
        <ErrorMessage name="slot" />
      </span>
    </div>
  );
};

export default SelectSlot;
