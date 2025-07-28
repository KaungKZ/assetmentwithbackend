/* eslint-disable @next/next/no-img-element */

import { ubuntu } from '../../../../lib/func/fonts';

const ProgramDetails = () => {
  return (
    <div className="mt-16 text-center">
      <h2 className={`${ubuntu.className} text-xl mb-5`}>
        Bermuda’s affiliate marketing program
      </h2>

      <p className={`${ubuntu.className} font-thin text-base px-4`}>
        The Bermuda Diving Center Affiliate Program helps content creators,
        publishers, and bloggers monetize their traffic. With a huge selection
        of diving trips, snorkeling adventures and ocean experiences available
        in Bermuda, affiliates use easy link-building tools to direct their
        audience to their recommendations, and earn from qualifying purchases
        and programs.
      </p>

      <div className="grid grid-cols-3 gap-6 px-16 mt-16">
        <div className="px-5">
          <div className="relative flex justify-center overflow-hidden rounded-lg">
            <img
              src="/images/affiliate/register.png"
              alt="Register at Affiliate Program"
              className="object-cover h-full mb-5 border border-gray-200 rounded-full w-36"
            />
          </div>

          <h3
            className={`${ubuntu.className} flex items-center gap-2 justify-center font-bold mt-3`}
          >
            <span className="px-2 py-1 text-xs text-white bg-black rounded-full">
              1
            </span>
            Register
          </h3>

          <p className={`${ubuntu.className} font-thin text-sm mt-3`}>
            Join tens of thousands of creators, publishers and bloggers who are
            earning with the Bermuda Diving Center Affiliates Program.
          </p>
        </div>

        <div className="px-5">
          <div className="relative flex justify-center overflow-hidden rounded-lg">
            <img
              src="/images/affiliate/recommend.png"
              alt="Recommend Affiliate Program"
              className="object-cover h-full mb-5 border border-gray-200 rounded-full w-36"
            />
          </div>

          <h3
            className={`${ubuntu.className} flex items-center gap-2 justify-center font-bold mt-3`}
          >
            <span className="px-2 py-1 text-xs text-white bg-black rounded-full">
              2
            </span>
            Recommend
          </h3>

          <p className={`${ubuntu.className} font-thin text-sm mt-3`}>
            Share Bermuda&apos;s best services and products with your audience.
            We have customized affiliate marketing system for large publishers,
            individual bloggers and social media influencers.
          </p>
        </div>

        <div className="px-5">
          <div className="relative flex justify-center overflow-hidden rounded-full">
            <img
              src="/images/affiliate/earn.png"
              alt="Earn Affiliate Program"
              className="object-cover h-full mb-5 border border-gray-200 rounded-full w-36"
            />
          </div>

          <h3
            className={`${ubuntu.className} flex items-center gap-2 justify-center font-bold mt-3`}
          >
            <span className="px-2 py-1 text-xs text-white bg-black rounded-full">
              3
            </span>
            Earn
          </h3>

          <p className={`${ubuntu.className} font-thin text-sm mt-3`}>
            Earn the associate commissions from every qualifying purchases and
            programs. Our competitive conversion rates help maximize earnings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
