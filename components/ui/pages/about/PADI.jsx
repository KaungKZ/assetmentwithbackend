/* eslint-disable @next/next/no-img-element */

import { getAssetsUrl } from '../../../../lib/func/image';

const PADI = () => {
  return (
    <div className="mt-10 overflow-hidden bg-white">
      <div className="relative px-4 pb-16 mx-auto lg:pt-16 max-w-7xl sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 hidden w-screen right-3/4 bg-gray-50 lg:block" />
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1">
            <svg
              className="absolute top-0 left-0 hidden -mt-20 -ml-20 lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="object-cover object-center rounded-lg shadow-lg"
                    src={getAssetsUrl('/images/pages/about/padi.jpeg')}
                    alt="PADI Logo"
                    width={450}
                    height={200}
                  />
                </div>
                <div className="mt-4 ml-64 aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="object-cover object-center rounded-lg"
                    src={getAssetsUrl(
                      '/images/pages/home/partners/padi-aware.png'
                    )}
                    alt="PADI Aware"
                    width={150}
                    height={150}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="mb-6 -mt-16 text-2xl font-bold leading-8 tracking-tight text-bgray sm:text-3xl">
              PADI
            </h3>
            <div className="mx-auto prose text-gray-500 prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <div className="flex flex-col font-thin gap-y-4">
                <p className="font-normal text-bgray">
                  PADI is the world’s leading scuba diver training organization.
                </p>
                <p>
                  With more than 6,500 PADI Dive Centers and Resorts, and more
                  than 135,000 individual PADI Professionals who have issued
                  more than 25 million certifications around the world, you’ll
                  find PADI diver courses and scuba diving services nearly
                  everywhere.
                </p>
                <p>
                  The PADI System of diver education is based on progressive
                  training that introduces skills, safety-related information
                  and local environmental knowledge to student divers in stages.
                  PADI courses are student-centered and provide maximum practice
                  and realistic application.
                </p>
                <p>
                  Project Aware is a non-profit registered 501c in the United
                  States and worldwide. Project Aware is about protecting
                  worldwide aquatic systems and educating current divers and
                  future generations to care and conserve our aquatic
                  eco-systems.
                </p>
                <p>
                  By thinking globally and acting locally, Bermuda Diving Center
                  is a whole hearted supporter of Project AWARE, and in addition
                  to protecting and conserving the ocean, we also aim to better
                  educate all our scuba divers, snorkelers and guests when they
                  spend their vacation with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PADI;
