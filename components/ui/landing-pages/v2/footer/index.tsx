import React from 'react';

import Image from 'next/image';
import { getAssetsUrl } from '../../../../../lib/func/image';
import { BiLogoFacebook, BiLogoLinkedin, BiSolidMapPin } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { SiMaildotru } from 'react-icons/si';
import { IoLogoTiktok } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[url("/images/landing-pages/footer.webp")] text-center relative bg-cover bg-no-repeat bg-center'>
      <div className="text-white bg-black/50">
        <div className="container space-y-10 pt-[78px] pb-6">
          <div className="flex flex-col items-center gap-10">
            <Image
              src={getAssetsUrl('/images/logo-white.png')}
              alt="Footer Logo Bermuda"
              width={206}
              height={153}
            />

            <h2 className="text-3xl font-normal text-white font-kalnia lg:max-w-[425px]">
              Ready to Dive into an Underwater Adventure?
            </h2>

            <p className="lg:max-w-[490px] text-base">
              At Bermuda Diving Center, we’re excited to connect with scuba
              enthusiasts and are here to answer any questions you may have.
            </p>
          </div>

          <div className="flex justify-center gap-10">
            {items.map((item) => {
              const { Icon, label, link, suffix } = item;

              return (
                <div
                  key={label}
                  className="lg:max-w-[285px] flex items-center flex-col gap-4"
                >
                  <div className="h-8">{Icon}</div>
                  <div className="flex flex-col gap-1">
                    {link ? (
                      <Link
                        href={link}
                        className="text-base text-white hover:text-white/90"
                      >
                        {label}
                      </Link>
                    ) : (
                      <p className="text-base">{label}</p>
                    )}
                    {suffix && <p className="text-xs">{suffix}</p>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-[50px]">
            <div className="border-t flex justify-between items-center pt-6 border-t-[#cccccc]">
              <div className="flex items-center gap-4">
                <span className="text-xs">Share On:</span>{' '}
                <div className="flex gap-5">
                  {social.map((item) => (
                    <Link
                      href={item.link}
                      key={item.label}
                      className="flex items-center justify-center w-6 h-6 bg-white rounded-full hover:bg-white/90"
                    >
                      <span className="sr-only">{item.label}</span>
                      {item.Icon}
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-sm">
                © 2025 Bermuda Diving Center. All rights reserved.
              </p>

              <div className="flex items-start gap-6">
                {legal.map((item) => (
                  <Link
                    className="text-xs text-white hover:text-white/90"
                    href={item.link}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const legal = [
  {
    label: 'Terms & Conditions',
    link: 'https://scubadiving.ae/terms-and-conditions',
  },
  {
    label: 'Privacy Policy',
    link: 'https://scubadiving.ae/privacy-policy',
  },
];

const items = [
  {
    Icon: <BiSolidMapPin size={35} />,
    label: 'Villa 604, Al Wasl Road Jumeirah 3, Dubai, United Arab Emirates',
  },
  {
    Icon: <BsFillTelephoneFill size={27} />,
    label: '+971 432 1 0104',
    link: 'tel:+971 432 1 0104',
    suffix: '(Landline)',
  },
  {
    Icon: <MdOutlinePhoneIphone size={32} />,
    label: '+971 50 119 4050',
    link: 'tel:+971 50 119 4050',
    suffix: '(Call/WhatsApp)',
  },
  {
    Icon: <SiMaildotru size={32} />,
    label: 'info@scubadiving.ae',
    link: 'mailto:info@scubadiving.ae',
  },
];

const social = [
  {
    Icon: <BiLogoFacebook fill="#333333" size={14} />,
    label: 'Facebook',
    link: 'https://www.facebook.com/bermuda.ae',
  },
  {
    Icon: <FaInstagram fill="#333333" size={12} />,
    label: 'Instagram',
    link: 'https://www.instagram.com/scubadiving.ae/',
  },
  {
    Icon: <BiLogoLinkedin fill="#333333" size={13} />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/company/scubadiving-ae/',
  },
  {
    Icon: <IoLogoTiktok fill="#333333" size={12} />,
    label: 'TikTok',
    link: 'https://www.tiktok.com/@scubadiving.ae',
  },
];
