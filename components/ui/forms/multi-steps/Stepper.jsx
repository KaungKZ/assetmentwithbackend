import { Fragment, useEffect } from 'react';
import { arrayFrom } from '../../../../lib/func/array';

const Stepper = ({ steps, activeStepIndex, px }) => {
  useEffect(() => {
    const stepperItems = document.querySelectorAll('.stepper-item');

    stepperItems.forEach((step, i) => {
      if (i < activeStepIndex) {
        step.classList.remove(
          'border-gray-400',
          'bg-bermuda-100',
          'border-bermuda-100'
        );
        step.classList.add('bg-green-600', 'border-green-600', 'text-white');
      } else if (i === activeStepIndex) {
        step.classList.remove('border-gray-400');
        step.classList.add(
          'bg-bermuda-100',
          'border-bermuda-100',
          'text-white'
        );
      } else {
        step.classList.add('border-gray-400');
        step.classList.remove('bg-bermuda-100', 'text-white');
      }
    });
  }, [activeStepIndex]);

  return (
    <>
      <div
        className={`flex flex-row items-center justify-center w-full pb-8 ${
          px || 'px-14 lg:px-24'
        }`}
      >
        {arrayFrom(steps.length).map((num) => (
          <Fragment key={num}>
            <div className="w-7 h-7 pt-0.5 font-medium cursor-default text-center text-sm border-2 border-gray-400 rounded-full stepper-item">
              {num}
            </div>
            {num !== steps.length && (
              <div className="flex-auto border-t-2 border-gray-400"></div>
            )}
          </Fragment>
        ))}
      </div>

      {steps.map((step, index) => index === activeStepIndex && step)}
    </>
  );
};

export default Stepper;
