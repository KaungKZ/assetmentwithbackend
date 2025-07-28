import Link from 'next/link';
import PackagePrice from '../../../landing-pages/try-scuba-diving/national-day/PackagePrice';
import Image from 'next/image';
import CustomImage from '../../../CustomImage';

const Card = ({ data, priceClassName = '', promoPriceClassName = '' }) => {
  return (
    <Link
      href={data.cta_link || '#'}
      style={{
        backgroundImage: data.bgImg ? `url(${data.bgImg})` : 'none',
      }}
      className={`duration-300 rounded-lg shadow-lg bg-no-repeat bg-cover hover:bg-gray-100`}
    >
      <div className="h-[240px] relative overflow-hidden rounded-tl-lg rounded-tr-lg">
        <CustomImage
          src={data.image_url}
          alt={data.title}
          wrapperClassName="h-full"
        />

        {data.twoInOne && (
          <div className="absolute bottom-0 w-full pb-4 text-center">
            <span className="px-2 py-1 mb-6 text-sm font-bold text-red-700 bg-white rounded-lg">
              2-IN-1
            </span>
          </div>
        )}
      </div>

      <div className={`px-8 pt-6 pb-8 text-center h-auto`}>
        <h3
          className={`text-2xl font-semibold ${
            data.bgImg ? 'text-black' : 'text-bgray'
          } leading-[36px]`}
        >
          {data.titlePrefix && (
            <span className={data.bgImg ? 'text-black' : 'text-red-700'}>
              {data.titlePrefix}
            </span>
          )}{' '}
          {data.title} <br /> {data.title2}
        </h3>

        <PackagePrice
          price={data.price}
          promoPrice={data.promoPrice}
          priceClassName={priceClassName}
          promoPriceClassName={promoPriceClassName}
        />

        <p
          className={`mb-4 ${
            data.bgImg ? 'text-black font-[400]' : 'text-bgray font-thin'
          }`}
          dangerouslySetInnerHTML={{ __html: data.tagline }}
        />
        {data.tagline2 && (
          <p
            className={`mb-4 -mt-2 font-bold ${
              data.bgImg ? 'text-black' : 'text-bgray'
            }`}
          >
            {data.tagline2}
          </p>
        )}

        <span
          className={`transition-all font-[300] duration-300 ${
            data.bgImg
              ? 'text-black hover:font-[500]'
              : 'text-bermuda-200 hover:text-bermuda-300'
          }`}
        >
          <span className={`${data.bgImg ? 'underline' : 'text-inherit'}`}>
            {data.cta_text}
          </span>{' '}
          <span className="ml-1.5">{data.cta_icon}</span>
        </span>
      </div>
    </Link>
  );
};

export default Card;
