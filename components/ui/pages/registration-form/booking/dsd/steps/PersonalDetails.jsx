import { Form, Formik } from 'formik';
import { useContext } from 'react';
import {
  equipment_sizes,
  hear_about_us,
} from '../../../../../../../lib/data/data';
import { scrollToTop } from '../../../../../../../lib/func/utils';
import { CourseContext } from '../../../../../../../lib/store/medical-form/CourseContext';
import SimpleButton from '../../../../../buttons/SiimpleButton';
import Input from '../../../../../forms/Input';
import Select from '../../../../../forms/Select';
import Textarea from '../../../../../forms/Textarea';
import SelectBox from '../../../../../internals/parts/SelectBox';
import { initValuesDSD, validateValuesDSD } from '../validations';
import { useRouter } from 'next/router';
import ImageUploader from '../../../../../forms/image-uploader/ImageUploader';
import PhoneInput from '../../../../../forms/v2/PhoneInput';

const PersonalDetails = ({ countries }) => {
  const router = useRouter();
  const { setFormData, formData, setActiveStepIndex, activeStepIndex, lang } =
    useContext(CourseContext);
  const isEng = lang === 'en';
  const activityId = router.query?.aid;

  return (
    <Formik
      initialValues={initValuesDSD(formData)}
      validationSchema={validateValuesDSD(lang, activityId)}
      onSubmit={async (values) => {
        // return console.log(values);

        setFormData(values);

        setActiveStepIndex(activeStepIndex + 1);

        scrollToTop();
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Input type="hidden" name="type" isRequired={false} />

          <div className="flex flex-col gap-4">
            <div>
              <Input
                name="first_name"
                label={isEng ? 'First name' : 'الاسم الأول'}
                lang={lang}
              />
            </div>
            <div>
              <Input
                name="last_name"
                label={isEng ? 'Last name' : 'الاسم الأخير'}
                lang={lang}
              />
            </div>
            <div>
              <Input
                name="email"
                label={isEng ? 'Email' : 'البريد الإلكتروني'}
                lang={lang}
              />
            </div>
            <div>
              <PhoneInput
                name="phone_no"
                label={isEng ? 'Phone No.' : 'رقم الهاتف'}
                lang={lang}
                isRequired
                className="mt-0"
              />
            </div>
            <div>
              <PhoneInput
                name="whatsapp_no"
                label={isEng ? 'WhatsApp No.' : 'رقم الواتساب'}
                lang={lang}
                isRequired
                className="mt-0"
              />
            </div>
            <div>
              <Select
                name="gender"
                label={isEng ? 'Gender' : 'الجنس'}
                lang={lang}
              >
                <option value="">
                  {isEng ? 'Select Gender' : 'اختر الجنس'}
                </option>
                <option value="Male">{isEng ? 'Male' : 'ذكر'}</option>
                <option value="Female">{isEng ? 'Female' : 'أنثى'}</option>
              </Select>
            </div>
            <div>
              <Input
                name="birthday"
                label={isEng ? 'Date of Birth' : 'تاريخ الميلاد'}
                type="date"
                lang={lang}
              />
            </div>
            <div>
              <Select
                name="country_id"
                label={isEng ? 'Nationality' : 'الجنسية'}
                lang={lang}
              >
                <option value="">
                  {isEng ? 'Select Nationality' : 'اختر الجنسية'}
                </option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Select
                name="equipment_size"
                label={isEng ? 'Equipment Size' : 'مقاس المعدات '}
                lang={lang}
              >
                <option value="">
                  {isEng ? 'Select Equipment Size' : 'اختر مقاس المعدات'}
                </option>
                {equipment_sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Textarea
                name="address"
                label={isEng ? 'Address' : 'العنوان'}
                isRequired
                lang={lang}
              />
            </div>

            <div>
              <Select
                name="how_heard_us"
                label={isEng ? 'How did you hear about us?' : 'كيف سمعت عنا؟'}
                lang={lang}
              >
                <option value="">
                  {isEng ? 'Please Select One' : 'الرجاء اختيار واحد'}
                </option>

                {hear_about_us.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <SelectBox
                options={[
                  { label: isEng ? 'Yes' : 'نعم', value: 'true' },
                  { label: isEng ? 'No' : 'لا', value: 'false' },
                ]}
                name="share_on_social"
                label={
                  isEng
                    ? 'Would you like us to share your photos/videos on our social media?'
                    : 'الرجاء اختيار واحدة هل ترغب في مشاركة صورك/فيديوهاتك على وسائل التواصل الاجتماعي الخاصة بنا؟'
                }
                lang={lang}
                value={values.share_on_social}
              />
            </div>

            <div>
              <SelectBox
                options={[
                  {
                    label: isEng ? 'Visitor / Tourist' : 'نعم',
                    value: 'tourist',
                  },
                  {
                    label: isEng ? 'Residence / Citizen' : 'لا',
                    value: 'citizen',
                  },
                ]}
                name="visa_status"
                label={
                  isEng
                    ? 'Please select one of the following.'
                    : 'الرجاء اختيار واحدة هل ترغب في مشاركة صورك/فيديوهاتك على وسائل التواصل الاجتماعي الخاصة بنا؟'
                }
                lang={lang}
                value={values.visa_status}
              />
            </div>

            <div>
              <Input
                name="instagram"
                label={isEng ? 'Instagram' : 'انستغرام'}
                isRequired={false}
                optional={isEng ? '(Optional)' : '(اختياري)'}
                lang={lang}
              />
            </div>

            <div>
              <Input
                name="facebook"
                label={isEng ? 'Facebook' : 'فيسبوك'}
                isRequired={false}
                optional={isEng ? '(Optional)' : '(اختياري)'}
                lang={lang}
              />
            </div>

            <div className="-mb-4">
              <ImageUploader
                label={
                  isEng
                    ? 'Emirates ID / Passport'
                    : 'الهوية الإماراتية / جواز السفر'
                }
                name="emirates_id"
                aspectRatio={5 / 3}
                lang={lang}
                isRequired
              />
            </div>

            <div className="mt-4">
              <SimpleButton width="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Processing' : isEng ? 'Next' : 'التالي'}
              </SimpleButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
