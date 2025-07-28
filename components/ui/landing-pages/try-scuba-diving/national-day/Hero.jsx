/* eslint-disable @next/next/no-img-element */
import { Lora, Nunito } from '@next/font/google';
import { BiChevronsDown } from 'react-icons/bi';
import AnimatedText from '../../../animation/text/AnimatedText';
import useAnimation from '../../../../../lib/hooks/useAnimation';
import AnimatedImage from '../../../animation/image/AnimatedImage';
import { animated } from 'react-spring';
import Confetti from 'react-confetti';
import useWidth from '../../../../../lib/hooks/useWidth';
import { useState, useEffect } from 'react';
import useHeight from '../../../../../lib/hooks/useHeight';
import { getAssetsUrl } from '../../../../../lib/func/image';

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const HeroSection = () => {
  const { width } = useWidth();
  const { height } = useHeight();

  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const { vertical, fadeIn } = useAnimation({});

  const learnMoreHandler = () => {
    const learnMore = document.getElementById('packages');
    learnMore.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <Confetti
        width={width <= 450 ? width : 450}
        height={height}
        recycle={confettiActive}
        numberOfPieces={500}
      />

      <animated.div
        className="absolute left-0 right-0 z-40 flex justify-center bottom-10"
        style={{ ...vertical, ...fadeIn }}
        onClick={learnMoreHandler}
      >
        <span className="p-1 bg-gray-100 rounded-full cursor-pointer opacity-30">
          <BiChevronsDown size={24} />
        </span>
      </animated.div>

      <div className="h-screen">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          src={getAssetsUrl('/videos/landing-pages/try-dive.mp4')}
        />
        <div className="absolute inset-0 h-full bg-black opacity-60"></div>
      </div>

      <div className="absolute left-0 right-0 flex justify-center top-7">
        <AnimatedImage
          src={getAssetsUrl('/images/logo-white.png')}
          alt="Logo Bermuda"
          className="w-[80px]"
          style={fadeIn}
        />
      </div>

      <AnimatedText
        tag="div"
        className="absolute inset-0 flex flex-col items-center justify-center px-8 space-y-4 text-center text-white"
      >
        <div
          className={`block text-xs font-thin uppercase select-none border-white border rounded-full px-3 py-1`}
          style={fadeIn}
        >
          UAE National Day Promotion
        </div>

        <h1
          className={`text-3xl text-white font-bold ${lora.className}`}
          style={fadeIn}
        >
          Try Scuba Diving
        </h1>

        <p className={`text-white ${nunito.className}`} style={fadeIn}>
          The best unforgettable scuba diving experience in Dubai.
        </p>

        <div className="flex space-x-2">
          <animated.button
            style={fadeIn}
            onClick={learnMoreHandler}
            className={`primary-btn ${nunito.className} text-[14px]`}
          >
            LEARN MORE
          </animated.button>
        </div>
      </AnimatedText>
    </div>
  );
};

export default HeroSection;
