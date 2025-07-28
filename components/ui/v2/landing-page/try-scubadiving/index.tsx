import React from "react";
import LandingHeader from "./layout/LandingHeader";
import Hero from "./layout/Hero";
import CourseHighlight from "./layout/CourseHighlight";
import AboutPADI from "./layout/AboutPADI";
import ChooseUs from "../open-water/layout/ChooseUs";
import PaymentInfo from "../open-water/layout/PaymentInfo";
import FAQ from "./layout/FAQ";
import Testimonial from "../open-water/layout/Testimonial";
import Package from "./layout/Package";
import LandingFooter from "../open-water/layout/LandingFooter";
import DivingExp from "./layout/DivingExp";
import WhatsApp from "../../../../../components/ui/internals/parts/WhatsApp";
import BackToTop from "../../../../../components/ui/internals/parts/BackToTop";
const ScubaDiving = ({
  google,
  setUpdatePrice,
  setUpdateId,
  setPromoPrice,
}) => {
  return (
    <div>
      <LandingHeader />
      <Hero />

      <CourseHighlight />
      <Package
        setUpdatePrice={setUpdatePrice}
        setUpdateId={setUpdateId}
        setPromoPrice={setPromoPrice}
      />
      <AboutPADI />
      <ChooseUs />
      <PaymentInfo />
      <FAQ />
      <Testimonial google={google} />
      <DivingExp />
      <LandingFooter />
      <div>
        <WhatsApp id />
        <BackToTop />
      </div>
    </div>
  );
};

export default ScubaDiving;
