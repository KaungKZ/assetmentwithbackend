import LandingPageLayout from "../../../components/layouts/LandingPageLayout";
import Footer from "../../../components/ui/landing-pages/v2/footer";
import axios from "../../../lib/axios";
import GoogleServiceInstance from "../../../utils/services/GoogleService";
import { useCallback, useEffect } from "react";
import { getPackageVatTotal } from "../../../lib/func/money";
import { shuffleArray } from "../../../lib/func/array";
import OpenWaterCourse from "../../../components/ui/landing-pages/open-water-course";
import { content } from "../../../components/ui/pages/courses/start-learning/openWaterCourse";

const OpenWaterCoursePage = ({ course, google }) => {
  const checkoutPrice = useCallback(() => {
    if (course) {
      if (course?.promo_price > 0) {
        return course?.promo_price;
      } else {
        return course?.price;
      }
    }
  }, [course]);
  const packageVatTotal = getPackageVatTotal(checkoutPrice(), 1);

  useEffect(() => {
    localStorage.setItem(
      "reservation",
      JSON.stringify({
        heading: course.short_name,
        id: course.id,
        price: course?.price,
        promoPrice: course?.promo_price,
        from: course ? course.from : course?.type,
        noOfPeople: 1,
        addOnsTotal: 0,
        subTotal: checkoutPrice() * 1 + packageVatTotal,
        packageVatTotal,
        total: checkoutPrice() * 1 + packageVatTotal,
        addOns: shuffleArray(course?.add_ons),
        registered_from: "public_web",
        currentStep: 1,
        paymentMethod: "",
      })
    );
  }, [course, checkoutPrice, packageVatTotal]);

  return (
    <div className="font-light font-inter">
      <OpenWaterCourse google={google} content={content} />

      <Footer />
    </div>
  );
};

export default OpenWaterCoursePage;

export const getServerSideProps = async () => {
  let course = null;
  let google = null;

  try {
    const res = await axios.get("/api/web/cms/courses/15");
    google = await GoogleServiceInstance.getReviews();

    course = res.data.data;
  } catch (e) {
    console.log(e.response);
  }

  return {
    props: {
      course,
      google,
    },
  };
};

OpenWaterCoursePage.getLayout = function getLayout(page) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
