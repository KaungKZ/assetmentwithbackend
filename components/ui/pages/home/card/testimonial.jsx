/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { nofChars } from '../../../../../lib/func/text';
import Image from 'next/image';

const Card = ({ data }) => {
  return (
    <Link
      href={
        data.source === 'Tripadvisor'
          ? 'https://www.tripadvisor.com/Attraction_Review-g295424-d17651775-Reviews-Bermuda_Diving_Center-Dubai_Emirate_of_Dubai.html'
          : 'https://www.google.com/maps/place/Bermuda+Diving+Center/@25.1848041,55.235355,17z/data=!4m8!3m7!1s0x3e5f6949281ab43d:0x25ccd5bf3b0e3048!8m2!3d25.1848041!4d55.2379299!9m1!1b1!16s%2Fg%2F11fj1r66ss?entry=ttu'
      }
      className="block text-[#6b7280] hover:text-[#6b7280] p-6 duration-300 border-2 border-gray-100 rounded-lg shadow hover:bg-gray-50"
      target="_blank"
    >
      <div className="flex gap-3">
        <div className="overflow-hidden rounded-full w-[50px] h-[50px]">
          <Image
            src={data.profile_photo_url}
            alt={data.author_name}
            width={50}
            height={50}
            className="object-cover w-full h-full duration-300 hover:scale-105"
          />
        </div>
        <div>
          <p className="text-lg">{data.author_name}</p>
          <p className="text-sm">{data.source || 'Google Reviews'}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="mb-2 text-base">
          &ldquo;{nofChars(data.text, 120)}&rdquo;
        </p>

        <div className="flex items-center justify-between">
          <button className="px-2 py-1 text-xs text-gray-600 border border-gray-600 rounded-lg hover:text-gray-600 hover:bg-gray-100">
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
