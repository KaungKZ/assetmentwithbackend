import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ModalCloseButton from '../../../buttons/ModalCloseButton';
import { ubuntu } from '../../../../../lib/func/fonts';
import { Form, Formik } from 'formik';
import Input from '../../../forms/Input';
import Textarea from '../../../forms/Textarea';
import Select from '../../../forms/Select';
import { twMerge } from 'tailwind-merge';
import { affiliateInitialValues, validateAffiliateValues } from '../data';
import SocialMediaLabel from '../../../forms/social-media/SocialMediaInput';
import { FaInstagram } from 'react-icons/fa';
import SocialMediaInput from '../../../forms/social-media/SocialMediaInput';

const AffiliateRegistrationModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative overflow-hidden text-left w-full transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-md`}
              >
                <ModalCloseButton setOpen={setOpen} className="sm:w-4 sm:h-4" />

                <div className="px-4 py-3">
                  <h3
                    className={`text-center border-b border-gray-300 pb-4 uppercase ${ubuntu.className}`}
                  >
                    Partner Registration
                  </h3>

                  <div className="mt-4">
                    <Formik
                      initialValues={affiliateInitialValues}
                      validationSchema={validateAffiliateValues}
                      onSubmit={(values) => {
                        console.log(values);
                      }}
                    >
                      {({ isSubmitting, errors }) => {
                        console.log(errors);
                        return (
                          <Form className="space-y-3">
                            <div className="grid gap-3 sm:grid-cols-2">
                              <div>
                                <Input
                                  font={ubuntu.className}
                                  label="First name"
                                  name="first_name"
                                />
                              </div>
                              <div>
                                <Input
                                  font={ubuntu.className}
                                  label="Last name"
                                  name="last_name"
                                />
                              </div>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                              <div>
                                <Input
                                  font={ubuntu.className}
                                  label="Phone no."
                                  name="phone_no"
                                />
                              </div>
                              <div>
                                <Input
                                  font={ubuntu.className}
                                  label="Email"
                                  name="email"
                                />
                              </div>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                              <div>
                                <Input
                                  font={ubuntu.className}
                                  label="Website Url"
                                  name="website_url"
                                  optional="(Optional)"
                                  isRequired={false}
                                />
                              </div>
                              <div>
                                <Select label="Emirates" name="emirates">
                                  <option value="">Select Emirate</option>
                                  <option value="abu_dhabi">Abu Dhabi</option>
                                  <option value="dubai">Dubai</option>
                                  <option value="sharjah">Sharjah</option>
                                  <option value="ajman">Ajman</option>
                                  <option value="umm_al_quwain">
                                    Umm Al Quwain
                                  </option>
                                  <option value="ras_al_khaimah">
                                    Ras Al Khaimah
                                  </option>
                                  <option value="fujairah">Fujairah</option>
                                </Select>
                              </div>
                            </div>
                            <div>
                              <div>
                                <label className="flex items-center justify-between text-sm font-medium text-gray-700">
                                  <span
                                    className={`${ubuntu.className} font-normal`}
                                  >
                                    Mention a minimum of one of your
                                    platforms&apos; links
                                    <span className="text-red-500"> *</span>
                                  </span>
                                </label>

                                <div className="flex flex-wrap justify-start gap-2 mt-1">
                                  <SocialMediaInput
                                    name="instagram"
                                    label="Instagram"
                                  />
                                  <SocialMediaInput
                                    name="facebook"
                                    label="Facebook"
                                  />
                                  <SocialMediaInput
                                    name="linkedin"
                                    label="LinkedIn"
                                  />
                                  <SocialMediaInput
                                    name="tiktok"
                                    label="Tiktok"
                                  />
                                  <SocialMediaInput
                                    name="youtube"
                                    label="YouTube"
                                  />
                                  <SocialMediaInput
                                    name="other"
                                    label="Other"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="pb-2">
                              <Textarea
                                font={ubuntu.className}
                                label="How will you promote our service?"
                                name="how_our_services_will_be_promoted"
                                rows={3}
                              />
                            </div>

                            <div className="flex justify-center pt-4 pb-1 border-t border-gray-300">
                              <button
                                type="submit"
                                className={twMerge(
                                  'px-3 py-2 bg-gray-700 hover:bg-gray-800 duration-300 text-white border border-gray-800 rounded-md text-sm w-[150px]'
                                )}
                              >
                                Register
                              </button>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AffiliateRegistrationModal;
