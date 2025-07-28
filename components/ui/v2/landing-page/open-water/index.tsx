import React from "react";
import LandingHeader from "./layout/LandingHeader";
import Hero from "./layout/Hero";
import CourseHighlight from "./layout/CourseHighlight";
import AboutPADI from "./layout/AboutPADI";
import ChooseUs from "./layout/ChooseUs";
import PaymentInfo from "./layout/PaymentInfo";
import FAQ from "./layout/FAQ";
import Testimonial from "./layout/Testimonial";
import Package from "./layout/Package";
import LandingFooter from "./layout/LandingFooter";
import WhatsApp from "../../../internals/parts/WhatsApp";
import BackToTop from "../../../internals/parts/BackToTop";

const OpenWaterCourse = ({ course, google }) => {
  return (
    <div>
      <LandingHeader />
      <Hero />
      <CourseHighlight />
      <Package course={course} />
      <AboutPADI />
      <ChooseUs />
      <PaymentInfo course={course} />
      <FAQ />
      <Testimonial google={google} />
      <LandingFooter />
      <div>
        <WhatsApp id />
        <BackToTop />
      </div>
    </div>
  );
};

export default OpenWaterCourse;
