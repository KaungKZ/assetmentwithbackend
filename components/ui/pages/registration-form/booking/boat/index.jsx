import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { CourseContext } from '../../../../../../lib/store/medical-form/CourseContext';
import MultiStepsForm from '../../../../forms/multi-steps';
import WrapWithBg from '../../../../internals/wrapper/WrapWithBg';
import DiveDetails from './steps/DiveDetails';
import PersonalDetails from './steps/PersonalDetails';

const BoatDiveRegistration = ({ countries, activityId }) => {
  const router = useRouter();

  const { activeStepIndex, setFormData } = useContext(CourseContext);

  useEffect(() => {
    setFormData({ activityId });
  }, [setFormData, activityId]);

  return (
    <WrapWithBg width="lg:w-[420px] " minHeight="min-h-screen">
      <MultiStepsForm
        activeStepIndex={activeStepIndex}
        heading={router.query?.name}
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

export default BoatDiveRegistration;
