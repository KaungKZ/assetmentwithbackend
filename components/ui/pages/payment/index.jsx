/* eslint-disable @next/next/no-img-element */
import { getCookie, hasCookie } from 'cookies-next';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '../../../../lib/axios';
import { transformPhoneNumber } from '../../../../lib/func/phone';

const Payment = () => {
  const [booking, setBooking] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (hasCookie('booking')) {
      setBooking(JSON.parse(getCookie('booking')));
    } else {
      setBooking({ status: 404 });
    }
  }, []);

  if (booking.status === 404 || Object.keys(booking).length === 0)
    return (
      <div>
        Please make a booking first and you will be automatically redirected to
        this page.
      </div>
    );

  const payWithFatoorah = async (paymentId) => {
    await axios
      .post('/api/fv1/myfatoorah/excute', {
        paymentId,
        customer_name: booking.user.full_name,
        total_amount: booking.total,
        customer_email: booking.user.email,
        customer_mobile: transformPhoneNumber(booking.user.phone_no),
        booking_id: booking.id,
      })
      .then((res) => {
        // return console.log(res.data);
        router.push(res.data.data.invoiceURL);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h1 className="text-2xl uppercase">
          {booking.activity.long_name ||
            'TRY DIVE - YACHT CRUISE TICKET (AED 350)'}
        </h1>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-lg font-medium">Personal Details</h2>

            <ul className="flex flex-col mt-4 gap-y-1">
              <li>
                <span className="text-black">Name: </span>
                {booking.user.full_name}
              </li>
              <li>
                <span className="text-black">Phone: </span>
                {booking.user.phone_no}
              </li>
              <li>
                <span className="text-black">Email: </span>
                {booking.user.email}
              </li>
              <li>
                <span className="text-black">Booked At: </span>
                {format(new Date(booking.created_at), 'dd MMM, yyyy | hh:mm a')}
              </li>
            </ul>

            <h2 className="mt-6 text-lg font-medium">Booking Details</h2>

            <ul className="flex flex-col mt-4 gap-y-1">
              <li>
                <span className="text-black">Booking ID: </span>
                {booking.id}
              </li>
              <li>
                <span className="text-black">Booking Date: </span>{' '}
                {format(new Date(booking.booking_date), 'dd MMM, yyyy')}
              </li>
              <li>
                <span className="text-black">Time Slot: </span>{' '}
                {booking.slot === 'morning'
                  ? '9 AM - 12 PM'
                  : booking.slot === 'afternoon'
                  ? '12 PM - 3 PM'
                  : '3 PM - 6 PM'}
              </li>
              <li>
                <span className="text-black">No. of divers: </span>
                {booking.no_of_divers}
              </li>
              <li>
                <span className="text-black">Promotion Code: </span>
                {booking.promotion_code || 'N/A'}
              </li>
              <li>
                <span className="text-black">Special Request: </span>
                {booking.special_request || 'N/A'}
              </li>
              <li>
                <span className="text-black">Notes: </span>
                {booking.notes || 'N/A'}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium">Payment Details</h2>

            <ul className="flex flex-col mt-4 gap-y-1 max-w-[260px]">
              <li className="flex justify-between">
                <span className="text-black">Price:</span> AED {booking.price}
              </li>
              <li className="flex justify-between">
                <span className="text-black">Quantity: </span>
                {booking.no_of_divers}
              </li>
              <li className="flex justify-between">
                <span className="text-black">Discount:</span> N/A
              </li>
              <li className="flex justify-between">
                <span className="text-black">Amount:</span> AED {booking.total}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium">Book Now:</h3>

          <div className="grid grid-cols-3 gap-5 mt-4">
            <div
              onClick={() => payWithFatoorah(6)}
              className="overflow-hidden border border-gray-300 rounded cursor-pointer"
            >
              <img
                src="/images/pages/payment/by/3.jpg"
                alt="Visa, Master, Amex - Bermuda"
                width={300}
                height={80}
                className="w-full duration-300 hover:scale-95"
              />
            </div>
            <div
              onClick={() => payWithFatoorah(11)}
              className="overflow-hidden border border-gray-300 rounded cursor-pointer"
            >
              <img
                src="/images/pages/payment/by/1.jpg"
                alt="Visa, Master, Amex - Bermuda"
                width={300}
                height={80}
                className="w-full duration-300 hover:scale-95"
              />
            </div>
            <div className="relative">
              <div className="overflow-hidden border border-gray-300 rounded cursor-pointer bg-[#f7de47]">
                <img
                  src="/images/pages/payment/by/2.jpg"
                  alt="Visa, Master, Amex - Bermuda"
                  width={300}
                  height={80}
                  className="w-full duration-300 hover:scale-95"
                />
              </div>
              <p className="absolute">
                Installment plan <br />
                (Only for UAE residents)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded">
        <img
          src="/images/pages/payment/2.jpeg"
          alt="Payment - Bermuda Diving Center"
          width={750}
          height={750}
          className="duration-300 hover:scale-95"
        />
      </div>
    </div>
  );
};

export default Payment;
