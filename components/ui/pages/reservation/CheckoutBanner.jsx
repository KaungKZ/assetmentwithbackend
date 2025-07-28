import { getAssetsUrl } from '../../../../lib/func/image';

const CheckoutBanner = ({ bgSrc, bgAlt }) => {
  return (
    <div className={`relative h-[300px] bg-black`}>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bgSrc || getAssetsUrl('/images/pages/banner.png')}
          alt={bgAlt || 'Bermuda Diving Center'}
          width={1440}
          height={550}
          className={`object-cover z-0 w-full opacity-30 h-[300px]`}
        />
      }
    </div>
  );
};

export default CheckoutBanner;
