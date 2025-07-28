import CourseTemplate from '../../../components/ui/templates/courses';
import { content } from '../../../components/ui/pages/dsd/dhowCruise';
import axios from '../../../lib/axios';
import Footer from '../../../components/ui/landing-pages/app/Footer';
import Header from '../../../components/ui/landing-pages/app/Header';
import RelatedPackages from '../../../components/ui/landing-pages/ui/RelatedPackages';
import { relatedPackagesForDriftTrike } from '../../../components/ui/landing-pages/try-scuba-diving/data';

const LPDhowCruisePage = ({ dive }) => {
  return (
    <>
      <Header />

      <CourseTemplate pageData={content} course={dive} noRelated />

      <RelatedPackages data={relatedPackagesForDriftTrike} />

      <Footer />

      <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/80">
        <p className="px-10 text-center text-red-600 uppercase md:text-xl">
          This package is expired!
        </p>
      </div>
    </>
  );
};

export default LPDhowCruisePage;

export const getServerSideProps = async () => {
  let dive = null;

  try {
    const res = await axios.get('/api/web/cms/courses/2');

    dive = res.data.data;
  } catch (e) {
    console.log(e.response);
  }

  return {
    props: {
      dive,
    },
  };
};
