import { Form, Formik } from 'formik';
import Input from '../../../../forms/Input';
import Select from '../../../../forms/Select';
import SelectBox from '../../../../internals/parts/SelectBox';
import SelectSlot from '../../../../internals/parts/SelectSlot';
import SimpleModal from '../../../../modals/SimpleModal';
import { initValues, validateValues } from './validations';
import { equipment_sizes, fins_sizes } from '../../../../../../lib/data/data';
import AgreementCheckbox from '../../../../forms/checkbox/Agreement';
import { agreements } from '../../../registration-form/booking/boat/validation';
import SimpleButton from '../../../../buttons/SiimpleButton';
import axios from '../../../../../../lib/axios/authenticated';
import { useContext } from 'react';
import ProfileContext from '../../state/ProfileContext';
import { toast } from 'react-toastify';
import DiveTripContext from '../../../../../../lib/store/profile/dive-trip/DiveTripContext';
import ImageUploader from '../../../../internals/parts/ImageUploader';

const AddNew = ({ open, setOpen }) => {
  const { profile } = useContext(ProfileContext);
  const { refreshBookedDives, togglePaymentModal, setBooking } =
    useContext(DiveTripContext);

  return (
    <SimpleModal
      width="md:w-[370px]"
      title="Add New Dive Trip"
      open={open}
      setOpen={setOpen}
    >
      <Formik
        initialValues={initValues(profile.nitrox_license)}
        validationSchema={validateValues}
        onSubmit={async (values) => {
          // console.log(values);
          await axios
            .post(
              '/api/web/profile/dive-trip/initialize',
              {
                ...values,
                customer_id: profile.id,
              },
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }
            )
            .then((res) => {
              // return console.log(res.data.data);
              setBooking(res.data.data);
              setOpen(false);

              refreshBookedDives();
              togglePaymentModal();

              toast.success(res.data.message);
            })
            .catch((err) => {
              console.log(err.response.data);
              toast.error(err.response.data.message);
            });

          // return console.log(values);
        }}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col gap-4 mt-3 mb-2">
            <div>
              <Input name="booking_date" label="Divetrip Date" type="date" />
            </div>
            <div>
              <SelectSlot dsd slot={values.slot} />
            </div>

            <div>
              <Select name="dan" label="Do you need diving insurance (DAN)?">
                <option value="">Choose One</option>
                <option value="yes_i_need">
                  Yes, I need 24 HOURS DAN insurance (+40 AED)
                </option>
                <option value="i_already_have">
                  No, I already have DAN insurance
                </option>
                <option value="i_dont_need">
                  No, I don&apos;t need insurance (Not Recommended)
                </option>
              </Select>
            </div>

            {values.dan == 'i_already_have' && (
              <div className="col-span-2">
                <Input name="dan_no" label="Enter your insurance number" />
              </div>
            )}

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

            {values.equipment_rental !== 'snorkel_only' &&
            values.equipment_rental !== '' ? (
              <div className="flex-1">
                <Input name="weight" label="Weight (kg)" />
              </div>
            ) : null}

            {values.equipment_rental !== 'snorkel_only' &&
            values.equipment_rental !== '' ? (
              <div className="flex-1">
                <Select name="tank" label="What tank do you need?">
                  <option value="">Select One</option>
                  <option value="air">Normal air</option>
                  <option value="nitrox">Nitrox (+50 AED per tank)</option>
                </Select>
              </div>
            ) : null}

            {values.has_nitrox_license == null && values.tank == 'nitrox' ? (
              <ImageUploader
                field="nitrox_license"
                setFieldValue={setFieldValue}
                label="Nitrox License"
                aspectRatio="4.5:5.7"
              />
            ) : null}

            {values.equipment_rental == 'yes' && (
              <div className="flex-1">
                <SelectBox
                  options={[
                    { label: 'Yes, I do.', value: 'yes' },
                    { label: "No, I don't.", value: 'no' },
                  ]}
                  label="Do you need mask?"
                  name="mask"
                  value={values.mask}
                  optional
                />
              </div>
            )}

            {values.equipment_rental == 'yes' && (
              <div className="flex-1">
                <Select name="bcd" label="Do you need BCD?" isRequired={false}>
                  <option value="">NO, I DON&apos;T.</option>

                  {equipment_sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Select>
              </div>
            )}

            {values.equipment_rental == 'yes' && (
              <div className="flex-1">
                <SelectBox
                  options={[
                    { label: 'Yes, I do.', value: 'yes' },
                    { label: "No, I don't.", value: 'no' },
                  ]}
                  label="Do you need regulator?"
                  name="regulator"
                  value={values.regulator}
                  optional
                />
              </div>
            )}

            {values.equipment_rental == 'yes' && (
              <div className="flex-1">
                <Select
                  name="fins"
                  label="Do you need fins?"
                  isRequired={false}
                >
                  <option value="">NO, I DON&apos;T.</option>

                  {fins_sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Select>
              </div>
            )}

            {values.equipment_rental == 'yes' && (
              <div className="flex-1">
                <Select
                  name="wetsuit"
                  label="Do you need wetsuit?"
                  isRequired={false}
                >
                  <option value="">NO, I DON&apos;T.</option>

                  {equipment_sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Select>
              </div>
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

            <div>
              <SimpleButton width="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Booking' : 'Book Now'}
              </SimpleButton>
            </div>
          </Form>
        )}
      </Formik>
    </SimpleModal>
  );
};

export default AddNew;
