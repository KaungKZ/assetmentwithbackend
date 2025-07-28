import GuestLayout from '../../components/layouts/GuestLayout';
import PaymentFailure from '../../components/ui/pages/payment/failure';

const PaymentFailurePage = () => {
  return <PaymentFailure />;
};

export default PaymentFailurePage;

PaymentFailurePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
