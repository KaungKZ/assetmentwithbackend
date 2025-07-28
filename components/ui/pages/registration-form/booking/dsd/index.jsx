import { useRouter } from 'next/router';
import { useContext } from 'react';
import { isBoatDive } from '../../../../../../lib/data/data';
import { CourseContext } from '../../../../../../lib/store/medical-form/CourseContext';
import MultiStepsForm from '../../../../forms/multi-steps';
import WrapWithBg from '../../../../internals/wrapper/WrapWithBg';
import MedicalQuestions from './steps/MedicalQuestions';
import PersonalDetails from './steps/PersonalDetails';
import { getHeading } from './validations';
import { twMerge } from 'tailwind-merge';

const DSDMedicalForm = ({ countries, from = 'dsd' }) => {
  const router = useRouter();

  const { activeStepIndex, lang, setLang } = useContext(CourseContext);

  const medicalSubHeading = lang === 'en' ? 'Medical Form' : 'نموذج التسجيل';
  const registrationSubHeading = lang === 'en' ? 'Medical Form' : 'نموذج طبي';

  return (
    <WrapWithBg width="lg:w-[420px]" minHeight="min-h-screen">
      <div className="mb-10">
        <ul className="flex text-center border border-gray-200 rounded-md select-none">
          <li
            className={twMerge(
              'flex-1 block py-2 text-sm duration-300 cursor-pointer hover:text-white hover:bg-bermuda-300 rounded-l-md',
              lang === 'en' ? 'text-white bg-bermuda-200' : ''
            )}
            onClick={() => setLang('en')}
          >
            English
          </li>
          <li
            className={twMerge(
              'flex-1 block py-2 text-sm duration-300 cursor-pointer hover:text-white hover:bg-bermuda-300 rounded-r-md',
              lang === 'ar' ? 'text-white bg-bermuda-200' : ''
            )}
            onClick={() => setLang('ar')}
          >
            العربية
          </li>
        </ul>
      </div>

      <MultiStepsForm
        activeStepIndex={activeStepIndex}
        heading={getHeading(router)}
        subHeading={
          isBoatDive(router.query?.aid)
            ? registrationSubHeading
            : medicalSubHeading
        }
        titles={
          lang === 'en'
            ? ['Personal Details', 'Medical Questionnaire']
            : ['تفاصيل شخصية', 'استبيان طبي']
        }
        steps={[
          <PersonalDetails key={1} countries={countries} />,
          <MedicalQuestions key={2} from={from} />,
        ]}
        px="px-20 lg:px-28"
      />
    </WrapWithBg>
  );
};

export default DSDMedicalForm;
