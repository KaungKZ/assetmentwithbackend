import CourseTemplate from '../../../../components/ui/templates/courses';
import axios from '../../../../lib/axios';
import Footer from '../../../../components/ui/landing-pages/app/Footer';
import Header from '../../../../components/ui/landing-pages/app/Header';
import { relatedPackagesForBasic } from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/data';
import { content } from '../../../../components/ui/pages/dsd/landing-page/basic';
import RelatedPackages from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/RelatedPackages';

const LPBasicPage = ({ dive }) => {
  return (
    <div>
      <Header nationalDay />

      <CourseTemplate pageData={content} course={dive} noRelated />

      <RelatedPackages data={relatedPackagesForBasic} />

      <Footer />
    </div>
  );
};

export default LPBasicPage;

export const getServerSideProps = async () => {
  let dive = null;

  try {
    const res = await axios.get('/api/web/cms/courses/36');

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
