import { Nunito } from '@next/font/google';
import AnimatedText from '../../animation/text/AnimatedText';
import BackToTop from '../../internals/parts/BackToTop';
import WhatsApp from '../../internals/parts/WhatsApp';

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-200 bg-[#fff]">
      {/* <AnimatedText tag="ul" className="flex justify-center mb-4 space-x-4">
        {footerItems.social.map((item, index) => {
          if (index + 1 === footerItems.social.length) return;

          return (
            <li key={item.name}>
              <a
                href={item.href}
                className={`${
                  item.color || 'text-gray-400 hover:text-gray-500'
                } duration-300`}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </AnimatedText> */}

      <AnimatedText
        tag="div"
        className={`${nunito.className} flex text-gray-500 justify-center`}
      >
        All Rights Reserved @ 2023
      </AnimatedText>

      <BackToTop />

      <WhatsApp id="landing-page-floating-whatsapp" />
    </footer>
  );
};

export default Footer;
