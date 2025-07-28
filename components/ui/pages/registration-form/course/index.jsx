import { useRouter } from 'next/router';
import { useContext } from 'react';
import { CourseContext } from '../../../../../lib/store/medical-form/CourseContext';
import MultiStepsForm from '../../../forms/multi-steps';
import WrapWithBg from '../../../internals/wrapper/WrapWithBg';
import Agreements from './steps/Agreements';
import Demographics from './steps/Demographics';
import PersonalDetails from './steps/PersonalDetails';

const CourseRegistrationForm = ({ countries }) => {
  const router = useRouter();
  const { activeStepIndex } = useContext(CourseContext);

  return (
    <WrapWithBg width="lg:w-[420px]" minHeight="min-h-screen">
      <MultiStepsForm
        activeStepIndex={activeStepIndex}
        heading={router.query?.name}
        rightHead="- Registration"
        titles={['Personal Details', 'Demographics', 'Agreements']}
        steps={[
          <PersonalDetails key={1} />,
          <Demographics key={2} countries={countries} />,
          <Agreements key={3} />,
        ]}
        px="px-16 lg:px-20"
      />
    </WrapWithBg>
  );
};

export default CourseRegistrationForm;
