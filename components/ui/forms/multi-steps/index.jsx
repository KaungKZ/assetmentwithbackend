import Stepper from './Stepper';
import StepTitles from './StepTitles';

const MultiStepsForm = ({
  activeStepIndex,
  heading,
  rightHead,
  subHeading,
  titles,
  steps,
  px,
}) => {
  return (
    <>
      <StepTitles
        activeStepIndex={activeStepIndex}
        heading={heading}
        rightHead={rightHead}
        titles={titles}
        subHeading={subHeading}
      />

      <Stepper activeStepIndex={activeStepIndex} steps={steps} px={px} />
    </>
  );
};

export default MultiStepsForm;
