import { useRouter } from 'next/router';
import GuestLayout from '../../components/layouts/GuestLayout';
import { useEffect, useState } from 'react';
import axios from '../../lib/axios';

import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';
import SimpleButton from '../../components/ui/buttons/SiimpleButton';
import Link from 'next/link';

const PaymentStatusPage = () => {
  const router = useRouter();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const checkOrderStatus = async () => {
      if (router.query.order_reference_id && router.query.payment_status) {
        try {
          await axios
            .post('/api/web/custom-payment/check-payment-status', router.query)
            .then((res) => {
              setStatus(res.data.message === 'Successful' ? true : false);
            });
        } catch (e) {
          setStatus(false);
          console.log(e);
        }
      }
    };

    checkOrderStatus();
  }, [router.query]);

  return (
    <div className="container flex items-center justify-center min-h-[600px] py-16">
      <div className="sm:w-[300px] px-5 py-12 w-full border border-gray-200 rounded">
        <div className="flex flex-col items-center px-4 mb-6 space-y-2">
          <h1 className="text-lg text-center">
            {status ? 'Payment Successful!' : 'Payment Failed!'}
          </h1>
          {status ? (
            <p className="-mt-2 text-sm text-center">
              Reference Number: {router.query.order_reference_id}
            </p>
          ) : null}

          <div className="py-4">
            {status ? (
              <IoCheckmarkCircleOutline size={86} className="text-green-600" />
            ) : (
              <RxCrossCircled size={86} className="text-red-600" />
            )}
          </div>

          <p className="text-sm text-center">
            {status
              ? 'You have made the payment successfully! Thank you.'
              : 'Something went wrong, please contact us immediately!'}
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            className="mt-2"
            href="https://api.whatsapp.com/send/?phone=971506996604&text=Hello,+Ive+paid+the+course+amount+at+Bermuda+website"
          >
            <SimpleButton>WhatsApp</SimpleButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusPage;

PaymentStatusPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
