import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import { siteConfig } from '../../lib/config';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import axios from '../../lib/axios';
import LandingPageCoursesSection from '../../components/ui/pages/courses/landing-page';
import Link from 'next/link';
import SimpleButton from '../../components/ui/buttons/SiimpleButton';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { getAssetsUrl } from '../../lib/func/image';

const CoursesPage = ({ courses }) => {
  return (
    <>
      <NextSeo
        title={`All PADI Scuba Diving Courses in Dubai, UAE | Bermuda Diving Center`}
        description="All PADI Scuba Diving Courses in Dubai, UAE. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/courses`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_SELF_URL}/courses`,
          locale: 'en_gb',
          siteName: siteConfig.site.title,
        }}
      />

      <Banner
        image={{
          src: getAssetsUrl('/images/cms/courses-banner.png', 'aws-web'),
          alt: 'PADI Courses & Specialities',
        }}
        heading="PADI Courses & Specialities"
        // tagline="Your passion, our expertise: dive perfection at one stop"
        breadcrumb={<Breadcrumb lv1T={'Courses & Specialities'} />}
        description="Every bit of knowledge, beginner to professionals – your diving dreams start and continuous with us forever at Bermuda Diving Center."
        size="h-[550px]"
        tabbyPresent={false}
        buttonWrapperClassName="mt-8"
        button={
          <Link
            className="inline-block"
            href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Hello%2C+%0D%0AI+would+like+to+inquire+about+the+PADI+Courses+%26+Specialitiies.`}
          >
            <SimpleButton lg className="flex items-center gap-x-2">
              Need Help? WhatsApp Us! <IoLogoWhatsapp size={30} />
            </SimpleButton>
          </Link>
        }
      />

      <LandingPageCoursesSection collections={courses} />
    </>
  );
};

export default CoursesPage;

export const getServerSideProps = async () => {
  let courses = null;

  try {
    const res = await axios.get('/api/web/cms/courses');

    courses = res.data.data;
    courses.map((col) => col.children.sort((a, b) => a.order - b.order));
  } catch (e) {
    console.log(e.response);
  }

  return {
    props: {
      courses,
    },
  };
};

CoursesPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
