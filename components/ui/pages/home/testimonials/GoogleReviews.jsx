import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa6';

const GoogleReviews = ({ data }) => {
  return (
    <Link
      href="https://www.google.com/maps/place/Bermuda+Diving+Center/@25.1848041,55.235355,17z/data=!4m8!3m7!1s0x3e5f6949281ab43d:0x25ccd5bf3b0e3048!8m2!3d25.1848041!4d55.2379299!9m1!1b1!16s%2Fg%2F11fj1r66ss?entry=ttu"
      className="p-3 border-2 flex items-center hover:bg-gray-50 duration-300 gap-2 border-[#fbbc04] rounded"
      target="_blank"
      id="google-reviews-link"
    >
      <div>
        <Image
          src="/images/google-logo.png"
          width={50}
          height={50}
          alt="Google Reviews"
        />
      </div>

      <div>
        <p className="flex items-center gap-1">
          <span className="text-gray-900">
            {data.user_ratings_total.toLocaleString('en-US')}
          </span>
          <span className="text-sm text-gray-900">Google Reviews</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-[16px] text-gray-900">{data.rating}</span>
          <span className="flex items-center gap-1">
            <FaStar className="text-[#fbbc04]" />
            <FaStar className="text-[#fbbc04]" />
            <FaStar className="text-[#fbbc04]" />
            <FaStar className="text-[#fbbc04]" />
            <FaStar className="text-[#fbbc04]" />
          </span>
        </p>
      </div>
    </Link>
  );
};

export default GoogleReviews;
