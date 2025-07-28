import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/night-diver.png'),
      alt: 'PADI Night Diver Speciality Banner - Bermuda',
    },
    heading: 'PADI Night Diver Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Night Diver Speciality',
    },
    description:
      'Explore the Mysteries of the Night with PADI Night Diver Speciality at Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Night Diver Speciality',
    description: [
      <p key={1}>
        Experience the thrill of diving in the dark with the PADI Night Diver
        course offered at Bermuda Diving Center.
      </p>,
      <p key={2}>
        This course is designed to enhance your diving skills and open up a
        whole new world of underwater exploration. With experienced instructors
        and state-of-the-art facilities, Bermuda Diving Center helps you to take
        your diving to the next level.
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
            Before you start your night dives, you&apos;ll learn about the
            different techniques and equipment used for diving at night, as well
            as the special considerations that come with diving after dark.
          </p>,
          <p key={2}>
            You&apos;ll also review important safety procedures, including how
            to navigate in low visibility conditions and how to communicate
            effectively with your dive buddy.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value:
              'PADI Open Water Diver or qualifying entry-level certification',
          },
          { name: 'Minimum', value: '12 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/night-diver/2.png'),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool & Open Water Sessions',
        paragraphs: [
          <p key={1}>
            During the confined water and open water session, you&apos;ll
            practice setting up and using dive lights and signals, navigation,
            and communication techniques in a controlled environment.
          </p>,
          <p key={2}>
            Then, you&apos;ll move on to the open water dives, where you&apos;ll
            use your new skills to explore the underwater world at night.
            You&apos;ll also learn how to manage your buoyancy, maintain
            situational awareness, and communicate with your dive buddy.
          </p>,
        ],
        list: [{ name: 'Duration', value: '2 - 3 days' }],
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
            After completing the knowledge development and confined and open
            water dive portions of the course, you&apos;ll receive your PADI
            Night Diver certification from Bermuda Diving Center.
          </p>,
          <p key={2}>
            This certification allows you to dive at night under the supervision
            of a certified dive professional or independently with a buddy,
            depending on your experience level.
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
          'Enhance your confidence and skills in diving during nighttime.',
          'Experience the thrill of diving under the enchanting moonlight.',
          'Learn specialized techniques for navigation and communication in the dark.',
          'Gain unique perspectives and unforgettable memories with night diving.',
        ],
      },
    ],
    includes: [
      'PADI Night Diver eLearning',
      'DAN insurance',
      'Free use of full scuba gear including diving torch',
      'Free use of towels and slippers',
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
        question: 'What is the PADI Night Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Night Diver course is designed to teach you the skills
              and knowledge necessary to safely and confidently dive at night.
              During the course, you&apos;ll learn about night diving equipment,
              techniques, and communication, as well as how to navigate in the
              dark.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the Requirements for the PADI Night Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Night Diver course, you must be at least 12
              years old and have a PADI (Junior) Open Water Diver certification
              or higher.
            </p>
          </div>
        ),
      },
      {
        question: 'What will I learn during the PADI Night Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              During the PADI Night Diver course, you&apos;ll learn about the
              equipment, techniques, and communication necessary for safe night
              diving. You&apos;ll also practice navigation in low light
              conditions and explore the ocean.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI Night Diver course take?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Night Diver course usually takes 2 - 3 days to complete,
              including eLearning and pool sessions as well as at least three
              open water dives.
            </p>
          </div>
        ),
      },
      {
        question: 'What equipment do I need for the PADI Night Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              In addition to standard scuba gear, it is recommended to have a
              primary dive light and a backup light, as well as a tank marker
              light and a surface marker buoy with a light. However, Bermuda
              Diving Center provide full gear as part of the course fee.
            </p>
          </div>
        ),
      },
      {
        question:
          'Can I use my own dive lights for the PADI Night Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, you can use your own dive lights for the PADI Night Diver
              course, as long as they meet the minimum requirements and are in
              good working condition. However, your instructor may also have
              rental lights available for you to use.
            </p>
          </div>
        ),
      },
      {
        question: 'Is night diving safe?',
        answer: (
          <div className="wrapper">
            <p>
              When done properly and with the proper training, night diving can
              be just as safe as diving during the day. However, it&apos;s
              important to follow proper procedures and techniques, such as
              maintaining communication with your dive buddy and keeping track
              of your time and air supply.
            </p>
          </div>
        ),
      },
      {
        question:
          'Can I do the PADI Night Diver course if I wear prescription glasses or contact lenses?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, you can still do the PADI Night Diver course if you wear
              prescription glasses or contact lenses. However, you may need to
              wear a special mask or purchase corrective lenses for your dive
              mask. Your instructor can provide more information on these
              options.
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
          '/images/pages/courses/thumbnails/wreck-diver.png'
        ),
        title: 'PADI Wreck Diver',
        title2: 'Speciality',
        price: '1,499',
        vat: true,
        tagline:
          'Experience the thrill of diving into history and uncovering hidden treasures with PADI Wreck Diver Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/wreck-diver',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/deep-diver.png'
        ),
        title: 'PADI Deep Diver',
        title2: 'Speciality',
        price: '1,499',
        vat: true,
        tagline:
          'Unlock the mysteries of the deep and push your limits with PADI Deep Diver Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/deep-diver',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/search-and-recovery.png'
        ),
        title: 'PADI Search And',
        title2: 'Recovery Speciality',
        price: '1,899',
        vat: true,
        tagline:
          "Be the hero and find what's lost beneath the waves with PADI Search and Recovery Course.",
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/search-and-recovery',
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
