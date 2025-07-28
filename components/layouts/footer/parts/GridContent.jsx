/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { siteConfig } from '../../../../lib/config';
import Image from 'next/image';
import { getAssetsUrl } from '../../../../lib/func/image';

const GridContent = ({ footerItems }) => {
  return (
    <div className="container">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="pt-12 mx-auto lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <div>
              <Link href="/">
                <Image
                  src={getAssetsUrl('/images/logo.png')}
                  width={80}
                  height={80}
                  alt={siteConfig.site.title}
                  className="w-20 mb-6"
                />
              </Link>
              <p className="text-base text-gray-500">
                Ready to dive into a world of underwater excitement? At Bermuda
                Diving Center, we are eager to connect with scuba enthusiasts
                and answer any inquiries.
              </p>
              <ul className="mt-4 text-gray-500">
                <li className="text-base">Villa 604, Al Wasl Road</li>
                <li className="text-base">Jumeirah 3, Dubai,</li>
                <li className="text-base">United Arab Emirates</li>
                <li>
                  <Link
                    href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Scuba+Diving+Inquiry`}
                    className="text-base text-gray-600 hover:text-gray-600 font-poppins"
                  >
                    Call / WhatsApp:
                  </Link>{' '}
                  <Link
                    href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Scuba+Diving+Inquiry`}
                    className="text-base text-gray-500 hover:text-bermuda-200"
                  >
                    +971 50 119 4050
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+971 432 1 0104"
                    className="text-base text-gray-600 hover:text-gray-600 font-poppins"
                  >
                    Landline:
                  </Link>{' '}
                  <Link
                    href="tel:+971 432 1 0104"
                    className="text-base text-gray-500 hover:text-bermuda-200"
                  >
                    +971 432 1 0104
                  </Link>
                </li>
                <li>
                  <span className="text-base text-gray-600 font-poppins">
                    Email:
                  </span>{' '}
                  <Link
                    href="mailto:info@scubadiving.ae"
                    className="text-base text-gray-500 hover:text-bermuda-200"
                    id="footer-info-email"
                  >
                    info@scubadiving.ae
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex space-x-6">
              {footerItems.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={item.color || 'text-gray-400 hover:text-gray-500'}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-4 md:gap-8">
              {footerItems.menus.map((menu, index) => (
                <div key={index} className="mt-6 first:mt-0 lg:mt-0">
                  {menu.href ? (
                    <Link href={menu.href || '#'}>
                      <h3 className="text-base font-medium text-gray-900">
                        {menu.name}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-base font-medium text-gray-900">
                      {menu.name}
                    </h3>
                  )}
                  <ul role="list" className="mt-4 space-y-1">
                    {menu.children.map((item, itIndex) => (
                      <li key={itIndex}>
                        <Link
                          href={item.href}
                          className="text-[15px] text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContent;
