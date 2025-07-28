import CourseTemplate from '../../../../components/ui/templates/courses';
import axios from '../../../../lib/axios';
import Footer from '../../../../components/ui/landing-pages/app/Footer';
import Header from '../../../../components/ui/landing-pages/app/Header';
import RelatedPackages from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/RelatedPackages';
import { relatedPackagesForAquaFun } from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/data';
import { content } from '../../../../components/ui/pages/dsd/landing-page/aquafun';

const LPDhowAquaFunPage = ({ dive }) => {
  return (
    <div>
      <Header nationalDay />

      <CourseTemplate pageData={content} course={dive} noRelated />

      <RelatedPackages data={relatedPackagesForAquaFun} />

      <Footer />
    </div>
  );
};

export default LPDhowAquaFunPage;

export const getServerSideProps = async () => {
  let dive = null;

  try {
    const res = await axios.get('/api/web/cms/courses/42');

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
