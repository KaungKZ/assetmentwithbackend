/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Overlay from '../../Overlay';

const Banner = () => {
  return (
    <div className="relative h-[250px]">
      <img
        src="/images/pages/gallery/banner.jpeg"
        alt="Gallery Banner - Bermuda"
        width={1080}
        height={720}
        className="object-cover w-full h-[250px]"
      />

      <Overlay opacity="bg-bermuda-500/60" />

      <div className="absolute top-0 bottom-0 left-0 right-0 h-full">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-4xl">Gallery</h1>

            <p className="mt-2 mb-4">
              <Link href="/">Home</Link> / Gallery
            </p>

            <p className="lg:w-[600px]">
              Labore ea esse ipsum esse consequat commodo sunt id consequat
              dolor duis. Laborum dolor reprehenderit nostrud in duis eiusmod
              ipsum sint ullamco do adipisicing eu eiusmod. Nisi do eu nisi
              consequat mollit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
