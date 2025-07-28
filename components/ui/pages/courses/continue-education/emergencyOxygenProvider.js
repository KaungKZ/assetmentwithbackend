import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/emergency-oxygen-provider.png'),
      alt: 'PADI Emergency Oxygen Provider Speciality Banner - Bermuda',
    },
    heading: 'PADI Emergency Oxygen Provider Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Emergency Oxygen Provider Speciality',
    },
    description:
      "Learn to Respond to Diving Emergencies with Bermuda Diving Center's PADI Emergency Oxygen Provider Course.",
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Emergency Oxygen Provider Speciality',
    description: [
      <p key={1}>
        As a responsible and safety-focused dive center, Bermuda Diving Center
        offers the PADI Emergency Oxygen Provider course to anyone who wants to
        be prepared to respond to diving emergencies.
      </p>,
      <p key={2}>
        This course is designed to teach divers and non-divers how to recognize
        and respond to diving-related illnesses and injuries, and how to provide
        emergency oxygen to a person in need.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/open-water/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'eLearning',
        paragraphs: [
          <p key={1}>
            You&apos;ll learn about the importance of emergency oxygen, how to
            recognize diving-related illnesses and injuries, and how to properly
            assemble and use an emergency oxygen unit.
          </p>,
        ],
        list: [
          { name: 'Requirements', value: 'Anyone who is interested' },
          {
            name: 'Minimum age',
            value: 'None',
          },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/emergency-oxygen-provider/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Practical Application',
        paragraphs: [
          <p key={1}>
            You&apos;ll practice assembling and using an emergency oxygen unit
            and learn how to respond to various diving-related emergencies,
            including decompression sickness, lung over-expansion injuries, and
            oxygen toxicity.
          </p>,
        ],
        list: [{ name: 'Duration', value: '2 - 4 hours' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/emergency-oxygen-provider/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon successful completion of the course, you&apos;ll receive a PADI
            Emergency Oxygen Provider certification by Bermuda Diving Center,
            which is recognized worldwide and valid for two years.
          </p>,
          <p key={2}>
            With this certification, you&apos;ll have the confidence and skills
            to respond to a diving emergency if the need ever arises.
          </p>,
        ],
      },
    },
  },
  about: {
    heading: 'About PADI',
    description: [
      <p key={1}>
        PADI is the world’s leading scuba diver training organization.
      </p>,
      <p key={2}>
        PADI is a worldwide organization with 135,000+ certified PADI
        Professionals who have issued over 25 million certifications globally.
        The PADI System of diver education is based on progressive training that
        introduces skills, safety information, and local environmental knowledge
        in stages. PADI courses are student-centered, emphasizing practice and
        real-world application.
      </p>,
    ],
    cols: [
      {
        heading: 'Take This Course If You Want to',
        items: [
          'Learn to administer emergency oxygen and provide crucial first aid.',
          'Enhance your emergency response skills and boost diver safety.',
          'Be prepared to handle diving-related injuries and medical emergencies.',
          'Gain experience handling oxygen equipment',
          'Expand your diving credentials and be a valuable asset in emergencies.',
        ],
      },
    ],
    includes: [
      'PADI Emergency Oxygen Provider eLearning',
      'Use of O2 kit',
      'Refreshments - popcorn, juices, coffee, slush, water',
      'Certification of Completion',
      '15% discounts for all equipments and services',
      'Privileged Dive trips every weekend at a discounted price',
    ],
  },
  featured: {
    heading: 'Enroll Now, Pay Later',
    description: <InstallmentPlan />,
    smHeight: 'h-[1050px]',
    sideImage: {
      src: getAssetsUrl('/images/cashew-installment.png'),
      alt: 'Cashew Installment Payment Plan',
    },
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
    opposite: {
      href: '/contact',
      text: 'Contact Us',
    },
  },
  moreInfo: {
    heading: 'FAQs',

    items: [
      {
        question: 'What is the PADI Emergency Oxygen Provider course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Emergency Oxygen Provider course teaches divers and
              non-divers how to administer emergency oxygen in the event of an
              emergency situation.
            </p>
          </div>
        ),
      },
      {
        question: 'Who can take the PADI Emergency Oxygen Provider course?',
        answer: (
          <div className="wrapper">
            <p>
              Anyone can take the course. It is not limited to scuba divers and
              is suitable for anyone who wants to be prepared to provide oxygen
              to someone in need.
            </p>
          </div>
        ),
      },
      {
        question:
          'What will I learn in the PADI Emergency Oxygen Provider course?',
        answer: (
          <div className="wrapper">
            <p>
              The course will cover the basics of emergency oxygen
              administration, including identifying potential situations where
              oxygen may be needed, selecting and assembling the appropriate
              equipment, and providing care to the victim.
            </p>
          </div>
        ),
      },
      {
        question: 'How long is the PADI Emergency Oxygen Provider course?',
        answer: (
          <div className="wrapper">
            <p>
              The course takes 2 to 4 hours to complete, including eLearning,
              classroom instruction and hands-on practice with equipment.
            </p>
          </div>
        ),
      },
      {
        question:
          'Will I receive a certification upon completion of the PADI Emergency Oxygen Provider course?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, you will receive a PADI Emergency Oxygen Provider
              certification upon successful completion of the course.
            </p>
          </div>
        ),
      },
      {
        question:
          'How often do I need to renew my PADI Emergency Oxygen Provider certification?',
        answer: (
          <div className="wrapper">
            <p>
              Your certification will be valid for two years. After that, you
              will need to take a refresher course to renew your certification.
            </p>
          </div>
        ),
      },
      {
        question: 'Available Languages',
        answer: (
          <div className="wrapper">
            <p>English</p>
            <p>Arabic*</p>
            <p>Hindi*</p>
            <p>Tagalog*</p>
            <p>Urdu*</p>
            <p>Malayalam*</p>

            <p className="text-black">
              * Need to select 1-on-1 add-on at checkout
            </p>
          </div>
        ),
      },
    ],
  },
  relatedData: {
    heading: 'Recommended Courses',
    data: [
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/peak-performance-buoyancy.png'
        ),
        title: 'PADI Peak Performance',
        title2: 'Buoyancy Speciality',
        price: '899',
        vat: true,
        tagline:
          'Unlock your potential, perfect your dive skills with PADI Peak Performance Buoyancy course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/peak-performance-buoyancy',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/underwater-navigation.png'
        ),
        title: 'PADI Underwater Navigation',
        title2: 'Speciality',
        price: '1,099',
        vat: true,
        tagline:
          "Find your way with confidence - PADI's Underwater Navigation course. Navigate, explore, and discover.",
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/underwater-navigation',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/night-diver.png'
        ),
        title: 'PADI Night Diver',
        title2: 'Speciality',
        price: '1,199',
        vat: true,
        tagline:
          "Experience the thrill of diving after dark - PADI's Night Diver course. Explore a new world at night.",
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/night-diver',
      },
    ],
  },
  fixedMenu: {
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
};
