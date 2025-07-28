import React, { useCallback, useEffect, useState } from "react";
import OpenWaterCourse from "../../../components/ui/v2/landing-page/open-water";
import GoogleServiceInstance from "../../../utils/services/GoogleService";
import { NextSeo } from "next-seo";
import { getPackageVatTotal } from "../../../lib/func/money";
import { shuffleArray } from "../../../lib/func/array";
import axios from "../../../lib/axios";
import ScubaDiving from "../../../components/ui/v2/landing-page/try-scubadiving";
const ScubaDivingPage = ({ google, course }) => {
  const [updatePrice, setUpdatePrice] = useState(course?.price);
  const [promoPrice, setPromoPrice] = useState(course?.promo_price);
  const [updateId, setUpdateId] = useState(course?.id);
  const checkoutPrice = useCallback(() => {
    if (course) {
      if (course?.promo_price > 0) {
        return promoPrice;
      } else {
        return updatePrice;
      }
    }
  }, [course, updatePrice, promoPrice]);

  const packageVatTotal = getPackageVatTotal(checkoutPrice(), 1);
  useEffect(() => {
    localStorage.setItem(
      "reservation",
      JSON.stringify({
        heading: course?.short_name,
        id: updateId,
        price: updatePrice,
        promoPrice: promoPrice,
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
  }, [
    updatePrice,
    checkoutPrice,
    packageVatTotal,
    course,
    updateId,
    promoPrice,
  ]);
  return (
    <div>
      <NextSeo nofollow noindex />
      <ScubaDiving
        google={google}
        setUpdatePrice={setUpdatePrice}
        setUpdateId={setUpdateId}
        setPromoPrice={setPromoPrice}
      />
    </div>
  );
};
export default ScubaDivingPage;

export const getServerSideProps = async () => {
  let course = null;
  let google = null;

  try {
    const res = await axios.get("/api/web/cms/courses/36");
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
