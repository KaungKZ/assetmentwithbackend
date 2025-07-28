import { useRouter } from 'next/router';
import { footerItems } from './footerItems';
import Copyright from './parts/Copyright';
import FooterWrapper from './parts/FooterWrapper';
import GridContent from './parts/GridContent';

const Footer = () => {
  const router = useRouter();

  return router.asPath === '/login' ? (
    <FooterWrapper copyright={<Copyright />} />
  ) : (
    <FooterWrapper
      gridContent={<GridContent footerItems={footerItems} />}
      copyright={<Copyright />}
    />
  );
};

export default Footer;
