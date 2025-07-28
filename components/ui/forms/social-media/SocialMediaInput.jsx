import { twMerge } from 'tailwind-merge';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';
import { ubuntu } from '../../../../lib/func/fonts';
import Input from '../Input';

const SocialMediaInput = ({ name, label }) => {
  const IconComponents = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    linkedin: FaLinkedin,
    tiktok: FaTiktok,
    youtube: FaYoutube,
    other: AiOutlineLink,
  };

  const IconComponent = IconComponents[name];

  return (
    <div className="flex items-start w-full gap-2">
      <div
        className={twMerge(
          'flex items-center mt-1 gap-1 min-w-[100px] border-gray-300 py-2 select-none px-2 duration-300 text-xs border rounded-md text-gray-600',
          ubuntu.className
        )}
      >
        {IconComponent && <IconComponent size={20} />}
        {label}
      </div>

      <div className="w-full">
        <Input name={name} />
      </div>
    </div>
  );
};

export default SocialMediaInput;
