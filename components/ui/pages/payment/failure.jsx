import { useRouter } from 'next/router';
import { HiOutlineXCircle } from 'react-icons/hi';
import SimpleButton from '../../buttons/SiimpleButton';

const PaymentFailure = () => {
  const router = useRouter();

  return (
    <div className="bg-fixed lg:min-h-[calc(100vh-97px)] bg-cover bg-center">
      <div className="backdrop-brightness-[0.8] lg:min-h-[calc(100vh-97px)] w-full">
        <div className="container flex flex-col items-center justify-center w-full lg:min-h-[calc(100vh-97px)] py-16">
          <div className="bg-gray-100/80 w-full lg:w-[450px] shadow rounded px-6 lg:px-12 py-11 my-10 lg:my-0">
            <h1 className="flex items-center justify-start gap-2 text-lg text-red-600">
              <HiOutlineXCircle size={28} /> PAYMENT FAILED!
            </h1>

            <div className="flex flex-col gap-4 mt-5">
              <p className="text-base text-gray-500">
                We are sorry! Your payment transaction is not successful.
              </p>
              <p className="text-base text-gray-500">
                Please contact us immediately to resolve this.
              </p>
            </div>

            <div className="flex gap-4 mt-6 text-white">
              <SimpleButton onClick={() => router.push('/contact')}>
                Contact Now
              </SimpleButton>
              <SimpleButton opposite onClick={() => router.push('/')}>
                Back To Home
              </SimpleButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
