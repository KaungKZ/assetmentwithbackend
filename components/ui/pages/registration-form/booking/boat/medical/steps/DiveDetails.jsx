import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import axios from '../../../../../../../../lib/axios';
import { scrollToTop } from '../../../../../../../../lib/func/utils';
import useRecaptcha from '../../../../../../../../lib/hooks/useRecaptcha';
import { CourseContext } from '../../../../../../../../lib/store/medical-form/CourseContext';
import OutlinedButton from '../../../../../../buttons/OutlinedButton';
import SimpleButton from '../../../../../../buttons/SiimpleButton';
import AgreementCheckbox from '../../../../../../forms/checkbox/Agreement';
import Input from '../../../../../../forms/Input';
import Select from '../../../../../../forms/Select';
import {
  agreements,
  initValuesDiveDetails,
  validateValuesDiveDetails,
} from '../../validation';
import SelectBox from '../../../../../../internals/parts/SelectBox';
import {
  equipment_sizes,
  fins_sizes,
} from '../../../../../../../../lib/data/data';
import ImageUploader from '../../../../../../forms/image-uploader/ImageUploader';
import { addPlusToPhoneNumber } from '../../../../../../../../lib/func/text';

const DiveDetails = () => {
  const router = useRouter();

  const { isHuman, runRecaptchaCheck } = useRecaptcha();

  const { setFormData, setActiveStepIndex, activeStepIndex, formData } =
    useContext(CourseContext);

  const back = () => {
    setActiveStepIndex(activeStepIndex - 1);
    scrollToTop();
  };

  return (
    <Formik
      initialValues={initValuesDiveDetails(formData)}
      validationSchema={validateValuesDiveDetails}
      onSubmit={async (values) => {
        await runRecaptchaCheck();

        if (!isHuman) {
          toast.error('Please verify that you are not a robot.');
          return;
        }

        await axios
          .post(
            '/api/web/booking/registration',
            {
              ...formData,
              ...values,
              phone_no: addPlusToPhoneNumber(formData.phone_no),
              whatsapp_no: addPlusToPhoneNumber(formData.whatsapp_no),
              gid: router.query?.gid,
              aid: router.query?.aid,
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
      {({ isSubmitting, values, errors, setFieldValue }) => (
        <Form>
          {/* {console.log(errors)} */}
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <Select
                name="equipment_rental"
                label="Do you need equipment rental?"
              >
                <option value="">Select One</option>
                <option value="yes">Yes, I need some or full equipment</option>
                <option value="no">No, I need weights and tanks only</option>
                <option value="snorkel_only">
                  I don&apos;t dive, I will snorkel only
                </option>
              </Select>
            </div>

            {values.equipment_rental === 'no' ||
            values.equipment_rental === 'yes' ? (
              <>
                <div>
                  <Input
                    name="weight"
                    label="How many kilograms (kg) of total weights do you need?"
                  />
                </div>

                <div>
                  <Select name="tank" label="What tank do you need?">
                    <option value="">Select Tank</option>
                    <option value="air">Normal Air</option>
                    <option value="nitrox">Nitrox (+50 AED per tank)</option>
                  </Select>
                </div>
              </>
            ) : (
              ''
            )}

            {values.tank === 'nitrox' && (
              <div>
                <ImageUploader
                  label="Nitrox License"
                  name="nitrox_license"
                  aspectRatio={5 / 3}
                  isRequired
                />
              </div>
            )}

            {values.equipment_rental === 'yes' && (
              <>
                <div>
                  <SelectBox
                    options={[
                      { label: 'Yes, I do.', value: 'yes' },
                      { label: "No, I don't.", value: 'no' },
                    ]}
                    label="Do you need mask?"
                    name="mask"
                    value={values.mask}
                  />
                </div>

                <div>
                  <Select name="bcd" label="Do you need BCD?">
                    <option value="">NO, I DON&apos;T.</option>

                    {equipment_sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <SelectBox
                    options={[
                      { label: 'Yes, I do.', value: 'yes' },
                      { label: "No, I don't.", value: 'no' },
                    ]}
                    label="Do you need regulator?"
                    name="regulator"
                    value={values.regulator}
                  />
                </div>

                <div>
                  <Select name="fins" label="Do you need fins?">
                    <option value="">NO, I DON&apos;T.</option>

                    {fins_sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Select name="wetsuit" label="Do you need wetsuit?">
                    <option value="">NO, I DON&apos;T.</option>

                    {equipment_sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                </div>
              </>
            )}

            <div className="flex flex-col gap-3 mt-1">
              {agreements.map((agreement, index) => (
                <div key={agreement.name}>
                  <AgreementCheckbox
                    height={index === 0 ? 'h-[170px]' : 'h-[200px]'}
                    name={agreement.name}
                    label={agreement.label}
                    div={agreement.content}
                  />
                </div>
              ))}
            </div>

            <div>
              <Input
                name="last_logged_date"
                label="DATE OF YOUR LAST LOGGED DIVE:"
                type="date"
              />
            </div>

            <div>
              <AgreementCheckbox
                name="agree_all_the_terms"
                label="I accept all the informations I provided above are accurate and i agree all the terms and conditions mentioned above."
              />
            </div>

            <div>
              <AgreementCheckbox
                name="understand_refund_policy"
                label="I UNDERSTAND AND AGREE THAT ORIGINAL PASSPORT OR EMIRATES ID IS REQUIRED IN THE PORT. I WILL DEFINITELY BRING IT WITH ME. OTHERWISE THE BOOKING AND PAYMENT WILL NOT BE REFUNDABLE."
              />
            </div>

            <div>
              <AgreementCheckbox
                name="have_own_smb"
                label={`I ACKNOLEDGE THAT I NEED TO HAVE MY OWN "SMB" (surface marker buoy) WITH ME WHEN I AM JOINING THE BOAT TRIP.`}
              />
            </div>

            <div className="flex items-center gap-3">
              <OutlinedButton onClick={back}>Back</OutlinedButton>
              <SimpleButton disabled={isSubmitting}>
                {isSubmitting ? 'Processing' : 'Submit'}
              </SimpleButton>
            </div>

            {Object.keys(errors).length > 0 && (
              <span className="text-xs leading-5 text-red-500">
                Please fill all the required fields.
              </span>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DiveDetails;
