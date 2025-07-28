import { useState } from 'react';
import SimpleButton from '../../../buttons/SiimpleButton';
import { FaPlay } from 'react-icons/fa';
import VideoModal from './VideoModal';
import { IoLogoWhatsapp } from 'react-icons/io5';
import Link from 'next/link';
import CustomImage from '../../../CustomImage';
import { getAssetsUrl } from '../../../../../lib/func/image';
import { siteConfig } from '../../../../../lib/config';

const HeroSection = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="relative flex items-center h-[calc(100vh-100px)] md:h-screen 3xl:h-[1100px] overflow-hidden">
      {videoModalOpen && (
        <VideoModal open={videoModalOpen} setOpen={setVideoModalOpen} />
      )}

      <CustomImage
        src={getAssetsUrl('/images/pages/home/hero-2.png')}
        wrapperClassName="absolute inset-0 object-cover object-left w-full h-full -z-10"
        alt="Hero Image"
        priority
      />

      <div className="absolute inset-0 z-0 bg-black opacity-10"></div>

      <div className="container inset-0 z-10 flex items-center">
        <div className="mt-12 md:w-[600px]">
          <p className="text-[18px] text-white transform translate-0">
            EXPLORE THE DEEP BLUE!
            <span className="block w-4 border-t-2 border-t-white"></span>
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl leading-[40px] md:leading-[50px] text-white">
            Discover Exciting Scuba Adventures at Bermuda Diving Center
          </h1>
          <p className="mt-4 text-lg font-thin text-white">
            Experience personalized scuba trips that cater to every skill level
            at affordable prices. Join us at Bermuda Diving Center and discover
            the wonders of the underwater world.
          </p>

          <div className="flex gap-2 mt-10">
            <Link
              href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Scuba+Diving+Inquiry`}
            >
              <SimpleButton lg className="flex items-center gap-x-2">
                Chat with us on WhatsApp <IoLogoWhatsapp size={30} />
              </SimpleButton>
            </Link>

            <SimpleButton
              color="bg-white hover:bg-gray-100 text-bermuda-300"
              lg
              opposite
              onClick={() => setVideoModalOpen(true)}
              className="w-[50px] relative rounded-full"
              id="hero-popup-video"
              aria-label="Play Our Adventure Video"
            >
              <FaPlay size={16} className="absolute top-[17px] right-[15px]" />
            </SimpleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
