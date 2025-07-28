import GuestLayout from '../../components/layouts/GuestLayout';
import PaymentSuccess from '../../components/ui/pages/payment/success';

const PaymentSuccessPage = () => {
  return <PaymentSuccess />;
};

export default PaymentSuccessPage;

PaymentSuccessPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
