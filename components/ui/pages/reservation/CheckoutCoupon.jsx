import { useContext, useState } from 'react';
import axios from '../../../../lib/axios';
import CheckoutContext from '../../../../lib/store/checkout/CheckoutContext';
import { toast } from 'react-toastify';

const CheckoutCoupon = () => {
  const { actions, reservation } = useContext(CheckoutContext);
  const [couponCode, setCouponCode] = useState('');

  const validateCouponCode = async () => {
    if (!couponCode) {
      actions.setCoupon({});
      return toast.error('Please enter your discount code!');
    }

    if (reservation.discount > 0) {
      return toast.error('Please remove current code and try again!');
    }

    try {
      const res = await axios.post(`/api/web/coupons/validate`, {
        couponCode,
        activityId: reservation.id,
      });
      toast.success(res.data.message);
      actions.setCoupon(res.data.data);
      setCouponCode('');

      //   console.log(res.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err.response.data);
    }
  };

  return (
    <div className="p-8 mb-8 bg-white shadow-md rounded-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          type="text"
          placeholder="Enter discount code"
          className="flex-1 px-2 py-2 text-sm border border-gray-400 rounded focus:ring-0 hover:border-gray-500 focus:border-gray-600"
        />

        <button
          onClick={validateCouponCode}
          type="button"
          className="px-5 py-2.5 text-xs text-white duration-300 border rounded border-bermuda-100 bg-bermuda-100 hover:bg-bermuda-200"
        >
          Apply Discount
        </button>
      </div>
    </div>
  );
};

export default CheckoutCoupon;
