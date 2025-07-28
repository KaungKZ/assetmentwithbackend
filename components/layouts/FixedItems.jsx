import { useRouter } from 'next/router';
import BackToTop from '../ui/internals/parts/BackToTop';
import WhatsApp from '../ui/internals/parts/WhatsApp';

const FixedItems = () => {
  const router = useRouter();

  return (
    <div>
      {router.pathname.includes('/custom-payment') ? null : <WhatsApp />}

      <BackToTop />
    </div>
  );
};

export default FixedItems;
