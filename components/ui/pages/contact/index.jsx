import Link from 'next/link';
import { lazy, Suspense } from 'react';
import { BiMobileAlt } from 'react-icons/bi';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

import 'yet-another-react-lightbox/styles.css';
import { getAssetsUrl } from '../../../../lib/func/image';
import { siteConfig } from '../../../../lib/config';

const ContactForm = lazy(() => import('./Form'));

const ContactSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div
              style={{
                backgroundImage: `url(${getAssetsUrl('/images/404.png')})`,
              }}
              className="relative overflow-hidden bg-right-top bg-no-repeat bg-cover rounded"
            >
              <div className="w-full h-full px-6 py-10 backdrop-brightness-[.4] sm:px-10 xl:p-12">
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Contact Us</h3>
                <p className="max-w-3xl mt-6 text-base text-indigo-50">
                  We&apos;d love to hear from you. Send us a message and
                  we&apos;ll respond as soon as possible.
                </p>
                <dl className="mt-5 space-y-3">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex items-center text-base text-indigo-50">
                    <HiOutlinePhone
                      className="flex-shrink-0 w-6 h-6 text-indigo-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      <Link
                        href="tel:+97143210104"
                        className="text-white hover:text-gray-300"
                      >
                        +971 4 3210 104
                      </Link>
                      ,
                      <Link
                        href="tel:+971501194050"
                        className="block text-white hover:text-gray-300"
                      >
                        +971 50 119 4050
                      </Link>
                    </span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-indigo-50">
                    <HiOutlineEnvelope
                      className="flex-shrink-0 w-6 h-6 text-indigo-200"
                      aria-hidden="true"
                    />
                    <Link
                      className="ml-3 text-white hover:text-gray-300"
                      href="mailto:info@scubadiving.ae"
                    >
                      info@scubadiving.ae
                    </Link>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-indigo-50">
                    <FaWhatsapp
                      className="flex-shrink-0 w-6 h-6 text-indigo-200"
                      aria-hidden="true"
                    />
                    <Link
                      className="ml-3 text-white hover:text-gray-300"
                      href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Scuba+Diving+Inquiry`}
                    >
                      +971 50 119 4050
                    </Link>
                  </dd>
                </dl>
                <ul role="list" className="flex mt-5 space-x-6">
                  <li>
                    <a
                      className="text-indigo-200 hover:text-indigo-100"
                      href="https://www.facebook.com/bermuda.ae"
                    >
                      <span className="sr-only">Facebook</span>
                      <FaFacebookSquare size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-200 hover:text-indigo-100"
                      href="https://www.instagram.com/scubadiving.ae/"
                    >
                      <span className="sr-only">Instagram</span>
                      <FaInstagram size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-200 hover:text-indigo-100"
                      href="https://www.youtube.com/@bermudadivingcenter9602"
                    >
                      <span className="sr-only">YouTube</span>
                      <FaYoutube size={24} />
                    </a>
                  </li>
                </ul>

                <div className="pt-6 mt-8 text-white border-t border-white">
                  For complains and suggestions:
                  <dd className="flex items-center mt-2 text-base text-indigo-50">
                    <BiMobileAlt
                      className="flex-shrink-0 w-6 h-6 text-indigo-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      <Link
                        href="tel:+971566969069"
                        className="text-white hover:text-gray-300"
                      >
                        +971 56 696 9069
                      </Link>
                    </span>
                  </dd>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 rounded sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                Send us a message
              </h3>

              <Suspense fallback={<div>Loading...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
