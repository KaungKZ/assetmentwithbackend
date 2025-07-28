import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import axios from '../../../../../../../lib/axios';
import { scrollToTop } from '../../../../../../../lib/func/utils';
import useRecaptcha from '../../../../../../../lib/hooks/useRecaptcha';
import { CourseContext } from '../../../../../../../lib/store/medical-form/CourseContext';
import OutlinedButton from '../../../../../buttons/OutlinedButton';
import SimpleButton from '../../../../../buttons/SiimpleButton';
import AgreementCheckbox from '../../../../../forms/checkbox/Agreement';
import Input from '../../../../../forms/Input';
import SelectBox from '../../../../../internals/parts/SelectBox';
import PadiStatement from '../parts/PadiStatement';
import {
  agreements,
  initValuesMedical,
  medicalQuestions,
  validateValuesMedical,
} from '../validations';
import { twMerge } from 'tailwind-merge';
import { addPlusToPhoneNumber } from '../../../../../../../lib/func/text';

const MedicalQuestions = ({ from }) => {
  const router = useRouter();

  const { isHuman, runRecaptchaCheck } = useRecaptcha();

  const { setFormData, setActiveStepIndex, activeStepIndex, formData, lang } =
    useContext(CourseContext);
  const isEng = lang === 'en';

  const back = () => {
    setActiveStepIndex(activeStepIndex - 1);
    scrollToTop();
  };

  return (
    <Formik
      initialValues={initValuesMedical(formData)}
      validationSchema={validateValuesMedical(lang)}
      // validateOnChange={false}
      onSubmit={async (values) => {
        await runRecaptchaCheck();

        if (!isHuman) {
          toast.error('Please verify that you are not a robot.');
          return;
        }

        await axios
          .post(
            '/api/web/booking/medical',
            {
              ...formData,
              ...values,
              phone_no: addPlusToPhoneNumber(formData.phone_no),
              whatsapp_no: addPlusToPhoneNumber(formData.whatsapp_no),
              gid: router.query?.gid || null,
              aid: router.query?.aid || null,
              from,
            },
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
          .then((res) => {
            router.push(`/congratulations`);

            localStorage.setItem(
              'congratulations',
              JSON.stringify({
                first_name: res.data.data.first_name,
                course_name: res.data.data.course_short_name,
                from: 'dsd_registration',
                form_id: res.data.data.id,
              })
            );

            setFormData({});
          })
          .catch((err) => {
            console.log(err.response.data);
            toast.error(err.response.data.message);
          });
        return;
      }}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <div className="flex flex-col gap-4 mt-4">
            <PadiStatement lang={lang} />

            <div className="-mt-3">
              <Input type="hidden" name="type" isRequired={false} />
            </div>

            <div className="flex flex-col gap-2">
              {medicalQuestions(lang).map((question) => (
                <SelectBox
                  key={question.name}
                  options={[
                    { label: isEng ? 'Yes' : 'نعم', value: 'true' },
                    { label: isEng ? 'No' : 'لا', value: 'false' },
                  ]}
                  name={question.name}
                  label={question.label}
                  value={values[question.name]}
                  lang={lang}
                />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {agreements(lang).map((agreement) => (
                <div key={agreement.name}>
                  <AgreementCheckbox
                    name={agreement.name}
                    label={agreement.label}
                    div={agreement.content}
                    lang={lang}
                  />
                </div>
              ))}
            </div>

            {values.type === 'dsd-boat' ||
            values.type === 'dsd-boat-tourism' ? (
              <>
                <div>
                  <AgreementCheckbox
                    name="agree_all_the_terms"
                    label={
                      isEng
                        ? 'I accept all the informations I provided above are accurate and i agree all the terms and conditions mentioned above.'
                        : 'أقر بأن المعلومات التي قدمتها أعلاه دقيقة وأوافق على جميع الشروط والأحكام المذكورة أعلاه.'
                    }
                    lang={lang}
                  />
                </div>

                <div>
                  <AgreementCheckbox
                    name="understand_refund_policy"
                    label={
                      isEng
                        ? 'I UNDERSTAND AND AGREE THAT ORIGINAL PASSPORT OR EMIRATES ID IS REQUIRED IN THE PORT. I WILL DEFINITELY BRING IT WITH ME. OTHERWISE THE BOOKING AND PAYMENT WILL NOT BE REFUNDABLE.'
                        : 'أنا أفهم وأوافق على أن جواز السفر الأصلي أو الهوية الإماراتية مطلوب في الميناء. سأقوم بجلبه معي بالتأكيد. خلاف ذلك، لن يكون الحجز والدفع قابلين للاسترداد.'
                    }
                    lang={lang}
                  />
                </div>
              </>
            ) : null}

            <div
              className={twMerge(
                'flex items-center gap-3',
                isEng ? '' : 'justify-end'
              )}
            >
              <OutlinedButton onClick={back}>
                {isEng ? 'Back' : 'سابقًا'}
              </OutlinedButton>
              <SimpleButton disabled={isSubmitting}>
                {isSubmitting ? 'Processing' : isEng ? 'Submit' : 'إرسال'}
              </SimpleButton>
            </div>

            {Object.keys(errors).length > 0 && (
              <span
                className="text-xs leading-5 text-red-500"
                dir={isEng ? 'ltr' : 'rtl'}
              >
                {errors.none_agency_disclosure ||
                errors.liabiality_release ||
                errors.bermuda_terms_conditions ||
                errors.agree_all_the_terms ||
                errors.media_for_promotion ||
                errors.understand_refund_policy
                  ? isEng
                    ? `You must agree to all the terms and conditions.`
                    : 'يجب أن توافق على جميع الشروط والأحكام.'
                  : errors.last_logged_date
                  ? isEng
                    ? `Please provide your last logged dive date.`
                    : 'من فضلك، قدم تاريخ آخر غطسة قمت بتسجيلها.'
                  : isEng
                  ? `You've answered "YES" on one or more medical questions, we must request that you consult with a physician/doctor prior to participating in scuba diving activity.`
                  : `لقد أجبت بـ 'نعم' على سؤال أو أكثر في الاستبيان الطبي، ونحن ملزمون بطلب منك مشاورة طبيب قبل المشاركة في النشاطات الغوص.`}
              </span>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MedicalQuestions;
