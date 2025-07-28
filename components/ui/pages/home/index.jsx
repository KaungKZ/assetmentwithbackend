import dynamic from "next/dynamic";
import Divider from "../../internals/parts/Divider";
import HeroSection from "./hero";

const Partners = dynamic(() => import("./partners"));
const AboutSection = dynamic(() => import("./about"));
const DiveOffersSection = dynamic(() => import("./dive-offers"));
const StatsSection = dynamic(() => import("./stats"));
const CoursesSection = dynamic(() => import("./courses"));
const ServiceSection = dynamic(() => import("./service"));
const Testimonials = dynamic(() => import("./testimonials"));

const HomeLayout = ({ data }) => {
  return (
    <div>
      <HeroSection />

      <Partners />

      <Divider />

      <AboutSection />

      <Divider />

      <DiveOffersSection data={data.cms} />

      <StatsSection />

      <CoursesSection data={data.cms.courses} />

      <Divider />

      <ServiceSection />

      <Divider />

      <Testimonials data={data.google} />
    </div>
  );
};

export default HomeLayout;
