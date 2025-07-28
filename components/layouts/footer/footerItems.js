import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaTripadvisor,
} from 'react-icons/fa';

export const footerItems = {
  menus: [
    {
      name: 'Quick Links',
      children: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Terms & Conditions', href: '/terms-and-conditions' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      name: 'Discover Scuba Diving',
      children: [
        {
          name: 'AquaFun Promo',
          href: '/discover-scuba-diving/try-dive/aquafun',
        },
        {
          name: 'Dhow Cruise Promo',
          href: '/discover-scuba-diving/try-dive/dhow-cruise',
        },
        {
          name: 'Luxury Scuba Diving',
          href: '/discover-scuba-diving/try-dive/luxury',
        },
        {
          name: 'VIP Scuba Diving',
          href: '/discover-scuba-diving/try-dive/vip',
        },
        {
          name: 'Basic Try Dive',
          href: '/discover-scuba-diving/try-dive/basic',
        },
        {
          name: 'Bubblemaker (For Kids)',
          href: '/discover-scuba-diving/try-dive/bubblemaker',
        },
      ],
    },
    {
      name: 'Courses',
      href: '/courses',
      children: [
        {
          name: 'PADI Open Water',
          href: '/courses/start-learning/open-water-course',
        },
        {
          name: 'Advanced Open Water',
          href: '/courses/continue-education/advanced-open-water-course',
        },
        {
          name: 'Rescue Diver + EFR',
          href: '/courses/continue-education/rescue-diver-course',
        },
        {
          name: 'PADI Freediver',
          href: '/courses/freedive/padi-freediver-course',
        },
        {
          name: 'PADI ReActivate',
          href: '/courses/refresher/reactivate',
        },
        {
          name: 'Search And Recovery',
          href: '/courses/continue-education/search-and-recovery',
        },
        {
          name: 'Seal Team (For Kids)',
          href: '/courses/start-learning/padi-seal-team',
        },
      ],
    },
    {
      name: 'Become A Pro',
      children: [
        {
          name: 'Divemaster',
          href: '/courses/become-a-pro/dive-master',
        },
        {
          name: 'Assistant Instructor',
          href: '/courses/become-a-pro/assistant-instructor',
        },
        {
          name: 'OW Scuba Instructor',
          href: '/courses/become-a-pro/ow-scuba-instructor',
        },
        {
          name: 'IDC Staff Instructor',
          href: '/courses/become-a-pro/idc-staff-instructor',
        },
      ],
    },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/scubadiving.ae/',
      icon: (props) => <FaInstagram {...props} />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/bermuda.ae',
      icon: (props) => <FaFacebook {...props} />,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@scubadiving.ae',
      icon: (props) => <FaTiktok {...props} />,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@bermudadivingcenter9602',
      icon: (props) => <FaYoutube {...props} />,
    },
    {
      name: 'TripAdviser',
      // color: 'text-[#00af87] hover:text-green-700',
      href: 'https://www.tripadvisor.com/Attraction_Review-g295424-d17651775-Reviews-Bermuda_Diving_Center-Dubai_Emirate_of_Dubai.html',
      icon: (props) => <FaTripadvisor {...props} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/scubadiving-ae/',
      icon: (props) => <FaLinkedin {...props} />,
    },
  ],
};
