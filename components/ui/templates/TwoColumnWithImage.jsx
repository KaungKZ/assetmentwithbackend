/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import CustomImage from '../CustomImage';

const TwoColumnWithImage = ({
  image_url,
  image_height,
  image_alt = 'Bermuda Diving Center',
  reverse = false,
  children,
}) => {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div
        className={`flex-1 ${image_height || 'md:h-[410px]'} overflow-hidden ${
          reverse
            ? 'md:rounded-tl-3xl md:rounded-bl-3xl md:order-2'
            : 'md:rounded-tr-3xl md:rounded-br-3xl'
        }`}
      >
        <CustomImage
          src={image_url}
          alt={image_alt}
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className={`flex-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        {children}
      </div>
    </div>
  );
};

export default TwoColumnWithImage;
