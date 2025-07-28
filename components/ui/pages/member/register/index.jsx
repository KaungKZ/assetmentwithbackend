import { Form, Formik } from "formik";
import SimpleButton from "../../../buttons/SiimpleButton";
import Input from "../../../forms/Input";
import Select from "../../../forms/Select";
import useSWR from "swr";
import SelectBox from "../../../internals/parts/SelectBox";
import { initValues, validateSchema } from "./data";
import useFetcher from "../../../../../lib/axios/fetcher";
import useRecaptcha from "../../../../../lib/hooks/useRecaptcha";
import axios from "../../../../../lib/axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { scrollToTop } from "../../../../../lib/func/utils";
import useCountries from "../../../../../lib/hooks/useCountries";
import Checkbox from "../../../forms/Checkbox";
import Link from "next/link";
import Message from "../../../Message";
import { BiTime } from "react-icons/bi";
import { useRouter } from "next/router";
// import ImageUploader from '../../../internals/parts/ImageUploader';
import ImageUploader from "../../../forms/image-uploader/ImageUploader";
import Loader from "../../../Loader";

const certifiedOptions = [
  { label: "Yes, I am", value: "yes" },
  { label: "No, I am not", value: "no" },
];

const MemberRegister = () => {
  const router = useRouter();
  const { fetcher } = useFetcher();
  const { data: courses, isLoading } = useSWR("/api/web/courses", fetcher);
  const [member, setMember] = useState("");
  const { countries, isLoading: loading } = useCountries();

  const { isHuman, runRecaptchaCheck } = useRecaptcha();

  if (isLoading) return <Loader />;

  return member ? (
    <Message
      icon={<BiTime size={80} />}
      iconColor="text-yellow-500"
      heading={``}
      line1={
        <span>
          Hello, {member}! You have successfully registered as a member of
          Bermuda Diving Center.
          <span className="text-black">
            {" "}
            You will receive an email with your login details as soon as
            it&apos;s approved
          </span>
          .
        </span>
      }
      action={
        <SimpleButton onClick={() => router.push("/")}>Go Home</SimpleButton>
      }
    />
  ) : (
    <div>
      <div className="mb-5 text-center">
        <h1 className="mb-2 text-lg font-bold lg:text-xl">
          Member Registration
        </h1>
        <p className="text-base">
          By submitting this form, you will become a member at &apos;Bermuda
          Diving Center&apos;.
        </p>
      </div>

      <Formik
        initialValues={initValues}
        validationSchema={validateSchema}
        onSubmit={async (values) => {
          // return console.log(values);
          await runRecaptchaCheck();

          // remove comment temporary

          // if (!isHuman)
          //   return toast.error(
          //     'Please click the "Next" button again. Or refresh the page.'
          //   );

          await axios
            .post("/api/web/member-registration", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              // return console.log(res.data.data);
              setMember(res.data.data);
              scrollToTop();
            })
            .catch((err) => {
              console.log(err.response.data);
              toast.error(err.response.data.message);
            });
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="w-full">
                <Input label="First name" name="first_name" />
              </div>
              <div className="w-full">
                <Input label="Last name" name="last_name" />
              </div>
              <div className="w-full">
                <Input label="Date of Birth" name="birthday" type="date" />
              </div>
              <div className="w-full">
                <Select name="birthplace" label="Place of Birth">
                  <option value="">Select Place of Birth</option>
                  {!loading &&
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                </Select>
              </div>
              <div className="w-full">
                <Select name="gender" label="Gender">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </div>
              <div className="w-full">
                <Select name="country_id" label="Nationality">
                  <option value="">Select Nationality</option>
                  {!loading &&
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                </Select>
              </div>
              <div className="w-full">
                <Input
                  label="Phone Number"
                  name="phone_no"
                  sd="(Eg. +971xxxxxxxxx)"
                />
              </div>
              <div className="w-full">
                <Input label="Email" name="email" />
              </div>
              <div className="-mb-2">
                <ImageUploader
                  name="profile_picture"
                  label="Personal Picture"
                  aspectRatio={3 / 4}
                  isRequired
                />
              </div>
              <div className="-mb-2">
                <ImageUploader
                  name="emirates_id"
                  label="Emirates ID / Passport"
                  aspectRatio={5 / 3}
                  isRequired
                />
              </div>
              <div className="w-full">
                <Input
                  label="Create New Password"
                  name="password"
                  type="password"
                />
              </div>
              <div>
                <SelectBox
                  options={certifiedOptions}
                  label="Are you a certified diver?"
                  name="certified"
                  value={values.certified}
                />
              </div>
            </div>

            {values.certified === "yes" && (
              <div className="pt-6 my-6 border-t border-t-gray-200">
                <h2>License Details</h2>
                <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                  <div className="w-full">
                    <Select name="awarding_body" label="Certification Agency">
                      <option value="">Select a certification agency</option>
                      <option value="PADI">PADI</option>
                      <option value="SSI">SSI</option>
                      <option value="NAUI">NAUI</option>
                      <option value="TDI">TDI</option>
                      <option value="SDI">SDI</option>
                      <option value="IANTD">IANTD</option>
                      <option value="CMAS">CMAS</option>
                      <option value="BSAC">BSAC</option>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Select
                      name="activity_id"
                      label="Level of latest certification"
                    >
                      <option value="">Select a certification</option>
                      {courses?.data?.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.license_name}
                        </option>
                      ))}
                    </Select>
                  </div>

                  {values.awarding_body && (
                    <div className="w-full -mt-2">
                      <ImageUploader
                        name="diving_license"
                        label="Diving License"
                        aspectRatio={5 / 3}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-5">
              <Checkbox
                name="agree_terms"
                link={
                  <span>
                    I agree to the{" "}
                    <Link
                      className="text-sm"
                      href="/terms-and-conditions"
                      target="_blank"
                    >
                      terms and conditions
                    </Link>
                    .
                  </span>
                }
              />
            </div>

            <div className="flex justify-center mt-5">
              <SimpleButton disabled={isSubmitting}>
                {isSubmitting ? "Registering" : "Make me a member!"}
              </SimpleButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MemberRegister;
