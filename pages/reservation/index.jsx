import GuestLayout from "../../components/layouts/GuestLayout";
import CheckoutLayout from "../../components/ui/pages/reservation/CheckoutLayout";

const CheckoutPage = () => {
  // console.log("checkout page");
  return <CheckoutLayout />;
};

export default CheckoutPage;

CheckoutPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
