import Link from 'next/link';
import { useState } from 'react';

const VisionMission = () => {
  const [vision, setVision] = useState(true);

  return (
    <div className="hidden mt-6 md:block">
      <div className="flex text-sm text-white cursor-pointer">
        <div
          onClick={() => setVision(true)}
          className={`px-4 py-1 duration-300 transition-all rounded-tl-full border border-bermuda-300 rounded-bl-full ${
            vision ? 'bg-bermuda-300' : 'text-bermuda-300 bg-white'
          }`}
        >
          Our Vision
        </div>
        <div
          onClick={() => setVision(false)}
          className={`px-4 py-1 duration-300 transition-all rounded-tr-full border border-bermuda-300 rounded-br-full ${
            !vision ? 'bg-bermuda-300' : 'text-bermuda-300 bg-white'
          }`}
        >
          Our Mission
        </div>
      </div>

      <div className="pt-6 font-thin leading-7">
        {vision ? (
          <div>
            <p className="mb-2 font-bold text-bgray">
              Innovating the Dive Experience for Everyone
            </p>
            <p>
              By thinking globally and acting locally, Bermuda Diving Center is
              a whole hearted supporter of{' '}
              <Link href="https://www.padi.com/" className="underline">
                PADI
              </Link>{' '}
              AWARE, and in addition to protecting and conserving the ocean, we
              also aim to better educate all our scuba divers, snorkelers and
              guests when they spend their vacation with us.
            </p>
          </div>
        ) : (
          <div>
            <p className="mb-2 font-bold text-bgray">
              Highest quality of service & training
            </p>
            <p>
              Providing scuba students and those who wish to learn scuba diving
              with the best care and effort is one of our main goals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisionMission;
