import { Form, Formik } from 'formik';
import { data, initialValues, validateValues } from './data';
import SimpleButton from '../../../../buttons/SiimpleButton';
import axios from '../../../../../../lib/axios/authenticated';
import { useContext, useEffect, useState } from 'react';
import ProfileContext from '../../state/ProfileContext';
import CustomImageUploader from '../../../../internals/parts/CustomImageUploader';
import { toast } from 'react-toastify';

const Documents = () => {
  const { profile } = useContext(ProfileContext);
  const { eid_front, eid_back, diving_license, nitrox_license } = profile;
  const [images, setImages] = useState({});

  useEffect(() => {
    if (eid_front || eid_back || diving_license || nitrox_license) {
      setImages({
        eid_front: eid_front,
        eid_back: eid_back,
        diving_license: diving_license,
        nitrox_license: nitrox_license,
      });
    }
  }, [eid_front, eid_back, diving_license, nitrox_license]);

  return (
    <div>
      <h2 className="text-lg uppercase">Documents</h2>

      <div className="mt-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validateValues}
          onSubmit={async (values) => {
            const formData = new FormData();

            Object.keys(values).forEach((key) => {
              formData.append(key, values[key]);
            });

            await axios
              .post(
                `/api/web/profile/documents/upload/${profile.member_no}`,
                formData,
                {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                }
              )
              .then((res) => {
                console.log(res.data);
                toast.success(res.data.message);
              })
              .catch((err) => {
                console.log(err.response.data);
              });
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {data.map((item) => (
                  <CustomImageUploader
                    key={item.key}
                    src={
                      Object.keys(images).length > 0 ? images[item.key] : null
                    }
                    title={item.title}
                    field={item.key}
                    setFieldValue={setFieldValue}
                  />
                ))}
              </div>

              {Object.keys(images).length === 0 ||
              Object.values(images).includes(null) ? (
                <div className="mt-6">
                  <SimpleButton disabled={isSubmitting}>
                    {isSubmitting ? 'Uploading' : 'Upload'}
                  </SimpleButton>
                </div>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Documents;
