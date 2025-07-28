/* eslint-disable @next/next/no-img-element */

import { BsPlayCircle } from 'react-icons/bs';
import SimpleModal from '../../../modals/SimpleModal';
import { useState } from 'react';

const About = ({
  heading,
  description,
  heading2,
  description2,
  cols,
  includes,
  video,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posterHidden, setPosterHidden] = useState(true);

  return (
    <div className="px-6 py-10 border border-gray-200 lg:p-14">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-4 text-gray-500">
          <h4 className="text-xl md:text-2xl text-bgray">{heading}</h4>
          {description && (
            <div className="flex flex-col font-thin gap-y-4">
              {description.map((tag) => tag)}
            </div>
          )}

          {heading2 && description2 ? (
            <>
              <h4 className="mt-2 text-xl md:text-2xl text-bgray">
                {heading2}
              </h4>
              {description2 && (
                <div className="flex flex-col font-thin gap-y-4">
                  {description2.map((tag) => tag)}
                </div>
              )}
            </>
          ) : null}
        </div>
        <div
          className={`gap-12 border-t border-t-gray-200 pt-10 md:border-0 md:pt-0 lg:grid ${
            cols.length == 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
          }`}
        >
          {cols.map((col, index) => (
            <div key={index} className="text-gray-500">
              <h5 className="text-lg text-bgray">{col.heading}</h5>

              <ul className="flex flex-col gap-1 mt-4 font-thin">
                {col.items.map((item, id) => (
                  <li
                    key={id}
                    className="before:content-['✓'] relative pl-6 before:absolute before:left-0 before:text-bermuda-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 mt-10 border-t border-gray-200">
        <div className="grid gap-6 mt-5 sm:grid-cols-2">
          <div className="col-span-1">
            <h3 className="text-xl">Package includes:</h3>

            <ul className="flex flex-col gap-1 mt-4 text-sm cursor-default">
              {includes.map((include, index) => (
                <li
                  key={index}
                  className="before:content-['✓'] font-thin before:text-bermuda-200 hover:before:text-bermuda-200 pl-6 relative before:left-0 before:absolute"
                >
                  {include}
                </li>
              ))}
            </ul>
          </div>
          {video && (
            <div className="col-span-1">
              {/* Desktop Video */}
              <div className="relative hidden w-full h-auto rounded sm:block">
                <img
                  src={video.poster}
                  alt="Video"
                  className="object-cover w-full h-full rounded"
                />

                <div className="absolute inset-0 flex items-center justify-center duration-300 bg-black/20 hover:bg-black/30 group">
                  <BsPlayCircle
                    size={64}
                    className="text-white duration-300 cursor-pointer group-hover:text-gray-100"
                    onClick={() => setModalOpen(true)}
                  />
                </div>
              </div>

              <SimpleModal
                width="sm:w-[400px]"
                open={modalOpen}
                setOpen={setModalOpen}
                mainPadding="p-0"
              >
                <video controls className="rounded-md shadow-md" autoPlay>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </SimpleModal>

              {/* Mobile Video */}
              <div className="sm:hidden">
                <div className="relative w-full h-[500px] sm:hidden">
                  {!posterHidden ? (
                    <video controls className="rounded-md shadow-md" autoPlay>
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <img
                        src={video.posterPortrait}
                        alt={'Video'}
                        className="z-50 object-cover w-full h-full rounded"
                      />

                      <div className="absolute inset-0 flex items-center justify-center duration-300 bg-black/20 hover:bg-black/30 group">
                        <BsPlayCircle
                          size={64}
                          className="text-white duration-300 cursor-pointer group-hover:text-gray-100"
                          onClick={() => setPosterHidden(false)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
