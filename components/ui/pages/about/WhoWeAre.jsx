/* eslint-disable @next/next/no-img-element */
import { format } from 'date-fns';
import { FaCamera } from 'react-icons/fa';
import { getAssetsUrl } from '../../../../lib/func/image';

const WhoWeAre = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 hidden w-screen left-3/4 bg-gray-50 lg:block" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-bgray sm:text-3xl">
              <span className="text-bermuda-200">Who</span> we are
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
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
                    src={getAssetsUrl('/images/pages/about/image.jpeg')}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>

                <figcaption className="flex mt-3 text-sm text-gray-500">
                  <FaCamera
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    Bermuda Diving Center @ {format(new Date(), 'yyyy')}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto prose text-gray-500 prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <div className="flex flex-col font-thin gap-y-4">
                <p>
                  Dive into a world of excitement with Bermuda Diving Center,
                  your ultimate scuba diving destination in Dubai. Whether
                  you&apos;re a seasoned PADI Diver or a beginner, we&apos;ve
                  got you covered with our experienced PADI divers and
                  instructors. From thrilling wreck dives to mesmerizing wall
                  dives, you&apos;ll have the opportunity to make unforgettable
                  memories and even capture the perfect shot of elusive sea
                  creatures.
                </p>
                <p>
                  Established in 2017, our mission is to elevate the beauty and
                  fun of scuba diving and share our passion for the underwater
                  world. We believe in providing our clients with new and
                  innovative methods to enhance their diving experience, all
                  while delivering professional and technical knowledge in a
                  friendly environment.
                </p>
                <p>
                  We offer our services in a luxurious and welcoming way,
                  appealing to all walks of life, age groups, and genders. Our
                  dive center located at Al Wasl road in Dubai, is fully
                  registered with PADI and equipped with state-of-the-art
                  classrooms, multimedia devices, and a deep in-house swimming
                  pool for skill practices.
                </p>
                <p>
                  We are fully stocked with a wide range of scuba diving and
                  free dive equipment to accommodate all levels of divers. Our
                  in-house maintenance team is highly trained to handle any
                  equipment repairs, and our fast and safe compressor refilling
                  system can refill 30 tanks in just 15 minutes. Join us and
                  experience the best scuba diving Dubai has to offer with
                  Bermuda Diving Center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
