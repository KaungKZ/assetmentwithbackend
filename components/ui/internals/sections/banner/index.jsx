/* eslint-disable @next/next/no-img-element */
import Script from 'next/script';
import { getMoney } from '../../../../../lib/func/money';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import { useEffect, useRef } from 'react';
import { getAssetsUrl } from '../../../../../lib/func/image';

const Banner = ({
  image,
  heading,
  description,
  breadcrumb,
  leftAlign = true,
  button,
  buttonWrapperClassName,
  tagline,
  txtBoxMT = 'mt-[50px]',
  price,
  promoPrice,
  size,
  tabbyPresent = true,
  featuredText,
}) => {
  const tabbyRef = useRef(null);

  const { src, alt, width, height } = image;
  const router = useRouter();
  const tabbyId = router.pathname.replaceAll('/', '-').slice(1);

  useEffect(() => {
    if (typeof window === 'undefined' || !tabbyRef.current) return;

    const callback = (mutationsList, observer) => {
      for (let i = 0; i < 1; i++) {
        if (mutationsList[i].type === 'childList') {
          const span = tabbyRef.current.querySelector('span');
          if (span) {
            const spanShadow = span.shadowRoot;

            const tabbySnippet = spanShadow.querySelector('div');

            if (tabbySnippet) {
              tabbySnippet.style.backgroundColor = 'transparent';

              observer.disconnect();
            }
          }
        }
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(tabbyRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {tabbyPresent && (
        <Script id={tabbyId}>
          {`
          new TabbyPromo({
            selector: '#${tabbyId}',
            price: ${promoPrice || price},
          });
        `}
        </Script>
      )}

      <div className={`relative ${size || 'h-[660px]'}`}>
        <img
          src={src || getAssetsUrl('/images/pages/banner.png')}
          alt={alt || 'Bermuda Diving Center'}
          width={width || 1440}
          height={height || 550}
          className={`object-cover w-full ${size || 'h-[660px]'}`}
        />

        <div className="absolute inset-0 h-full bg-black/70">
          <div
            className={`flex container items-center ${
              leftAlign ? 'justify-start' : 'justify-center'
            } h-full`}
          >
            <div
              className={`${
                leftAlign ? 'text-left' : 'text-center'
              } text-white ${txtBoxMT}`}
            >
              {featuredText && (
                <p className="mb-3 text-xs font-thin tracking-wide">
                  *{featuredText}
                </p>
              )}

              {promoPrice && promoPrice > 0 ? (
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative sm:text-xl">
                      <span className="absolute inset-0 mb-2 sm:mb-3.5 transform border-b-2 border-red-600" />
                      {getMoney(price)}
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 text-sm bg-red-600 rounded-full md:items-end sm:text-xl md:text-2xl">
                      {getMoney(promoPrice)}
                      <span className="block text-[10px] -mb-[3px]">
                        (+VAT)
                      </span>
                    </span>
                  </div>
                </div>
              ) : price && price > 0 ? (
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-end gap-1 px-4 py-2 text-base bg-red-600 rounded-full sm:text-xl">
                      {getMoney(price)}
                      <span className="block text-[10px] -mb-[3px]">
                        (+VAT)
                      </span>
                    </span>
                  </div>
                </div>
              ) : null}
              {tagline && (
                <span className="block mb-2 text-gray-300">{tagline}</span>
              )}
              <h1 className={`text-xl uppercase lg:text-2xl text-white`}>
                {heading}
              </h1>
              <p className="mt-2 text-base">{breadcrumb}</p>
              {description && (
                <p className="mt-4 lg:w-[600px] font-thin text-[15px] tracking-wide">
                  {description}
                </p>
              )}

              {button && (
                <div className={twMerge('mt-12', buttonWrapperClassName)}>
                  {button}
                </div>
              )}

              {tabbyPresent && (
                <div className="max-w-md mt-8">
                  <div id={tabbyId} ref={tabbyRef}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
