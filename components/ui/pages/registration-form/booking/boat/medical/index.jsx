import { useContext } from 'react';
import { CourseContext } from '../../../../../../../lib/store/medical-form/CourseContext';
import MultiStepsForm from '../../../../../forms/multi-steps';
import WrapWithBg from '../../../../../internals/wrapper/WrapWithBg';
import PersonalDetails from './steps/PersonalDetails';
import DiveDetails from './steps/DiveDetails';

const CertifiedBoatDiveTourismForm = ({ countries }) => {
  const { activeStepIndex } = useContext(CourseContext);

  return (
    <WrapWithBg width="lg:w-[420px] " minHeight="min-h-screen">
      <MultiStepsForm
        activeStepIndex={activeStepIndex}
        heading="Certified Boat Trip Tourism"
        titles={['Personal Details', 'Dive Details']}
        steps={[
          <PersonalDetails key={1} countries={countries} />,
          <DiveDetails key={2} />,
        ]}
        subHeading="(Registration)"
        px="px-24 lg:px-28"
      />
    </WrapWithBg>
  );
};

export default CertifiedBoatDiveTourismForm;
