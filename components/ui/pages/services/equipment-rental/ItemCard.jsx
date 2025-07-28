/* eslint-disable @next/next/no-img-element */

import { getAssetsUrl } from '../../../../../lib/func/image';

const ItemCard = ({ image_url, title, price }) => {
  return (
    <div className="flex items-center px-5 py-3 duration-300 rounded-lg shadow cursor-default hover:bg-gray-100 gap-x-5">
      <div className="py-3">
        <img
          src={
            image_url ||
            getAssetsUrl('/images/pages/services/gear-rental/bcd.png')
          }
          alt={title || 'BCD'}
          width={50}
          height={50}
        />
      </div>

      <div className="text-start">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{price}.00 AED / day</p>
      </div>
    </div>
  );
};

export default ItemCard;
