import CourseProvider from '../../../lib/store/medical-form/CourseProvider';
import axios from '../../../lib/axios';
import CertifiedBoatDiveTourismForm from '../../../components/ui/pages/registration-form/booking/boat/medical';

const CertifiedBoatDiveTourismMedicalPage = ({ countries }) => {
  return (
    <CourseProvider>
      <CertifiedBoatDiveTourismForm countries={countries} />
    </CourseProvider>
  );
};

export default CertifiedBoatDiveTourismMedicalPage;

export const getServerSideProps = async ({ query }) => {
  let countries = [];

  try {
    await axios
      .post(`/api/web/booking/registration/data`, query)
      .then((res) => {
        countries = res.data.data.countries;
      })
      .catch((err) => console.log(err));

    return {
      props: {
        countries,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
