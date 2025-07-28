import React, { useCallback, useEffect, useState } from "react";
import OpenWaterCourse from "../../../components/ui/v2/landing-page/open-water";
import GoogleServiceInstance from "../../../utils/services/GoogleService";
import { NextSeo } from "next-seo";
import { getPackageVatTotal } from "../../../lib/func/money";
import { shuffleArray } from "../../../lib/func/array";
import axios from "../../../lib/axios";
const OpenWaterCoursePage = ({ google, course }) => {
  // const [updatePrice, setUpdatePrice] = useState(course?.price);

  return (
    <div>
      <NextSeo nofollow noindex />
      <OpenWaterCourse
        course={course}
        google={google}
        // setUpdatePrice={setUpdatePrice}
      />
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
