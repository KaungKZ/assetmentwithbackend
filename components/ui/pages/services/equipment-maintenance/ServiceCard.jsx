/* eslint-disable @next/next/no-img-element */

const ServiceCard = ({ image_url, title, tagline }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center px-5 py-6 space-x-5 duration-300 border border-gray-100 rounded shadow cursor-default hover:bg-gray-100 md:flex-row">
        <div className="flex items-center justify-center px-3">
          <img
            src={image_url || '/images/pages/services/gear-rental/bcd.png'}
            width={50}
            height={50}
            className="w-14 h-14"
            alt={title || 'BCD'}
          />
        </div>
        <div className="mt-3 text-center md:text-start md:mt-0">
          <h3 className="text-xl">{title || 'Regulator Servicing'}</h3>
          <p className="mt-2 text-base">
            {tagline ||
              'Regulators require complete servicing periodically to prevent unsafe operation while you dive'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
