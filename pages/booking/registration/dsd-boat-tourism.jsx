import CourseProvider from '../../../lib/store/medical-form/CourseProvider';
import DSDMedicalForm from '../../../components/ui/pages/registration-form/booking/dsd';
import axios from '../../../lib/axios';

const DSDBoatTourismMedicalPage = ({ countries }) => {
  return (
    <CourseProvider>
      <DSDMedicalForm
        countries={countries}
        type="dsd-boat-tourism"
        from="dsd-boat-tourism"
      />
    </CourseProvider>
  );
};

export default DSDBoatTourismMedicalPage;

export const getServerSideProps = async () => {
  let countries = [];

  try {
    await axios
      .post(`/api/web/booking/registration/data`)
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
