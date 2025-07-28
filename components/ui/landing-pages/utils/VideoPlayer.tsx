/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

interface VideoPlayerProps {
  poster?: string;
  src: string;
}

const VideoPlayer = ({ poster, src }: VideoPlayerProps) => {
  return (
    <div className="col-span-1">
      {/* Desktop Video */}
      <div className="max-w-[900px] h-[554px] mx-auto relative rounded-[30px]">
        <img
          src={
            poster || '/images/landing-pages/open-water-course/hero-image.webp'
          }
          alt="Open Water Course Video"
          loading="lazy"
          className="object-cover z-0 w-full h-full rounded-[30px]"
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <BsPlayCircle
            size={86}
            className="text-white duration-300 cursor-pointer group-hover:text-gray-100"
          />
        </div>
      </div>
      {/* <div className="relative hidden w-full h-auto rounded sm:block">
        {poster && (
          <Image
            src={poster}
            alt="Video"
            className="object-cover w-full h-full rounded"
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center duration-300 bg-black/20 hover:bg-black/30 group">
          <BsPlayCircle
            size={64}
            className="text-white duration-300 cursor-pointer group-hover:text-gray-100"
            // onClick={() => setModalOpen(true)}
          />
        </div>
      </div> */}

      {/* <video controls className="rounded-md shadow-md" autoPlay>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

      {/* Mobile Video */}
      {/* <div className="sm:hidden">
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
                  </div> */}
    </div>
  );
};

export default VideoPlayer;
