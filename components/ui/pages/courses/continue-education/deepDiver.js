import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/deep-diver.png'),
      alt: 'PADI Deep Diver Speciality Banner - Bermuda',
    },
    heading: 'PADI Deep Diver Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Deep Diver Speciality',
    },
    description:
      'Exploring the depths with PADI Deep Diver Speciality course at Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Deep Diver Speciality',
    description: [
      <p key={1}>
        The PADI Deep Diver Speciality course is designed to help divers gain
        the knowledge and skills necessary to safely plan and execute dives to
        depths of up to 40 meters (131 feet).
      </p>,
      <p key={2}>
        At Bermuda Diving Center, we offer this course to experienced divers who
        are looking to challenge themselves and explore the depths of the ocean.
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
            During the first part of the course, you will learn about the
            different aspects of deep diving, including the effects of pressure,
            gas narcosis, and decompression sickness.
          </p>,
          <p key={2}>
            You will also learn how to plan deep dives, including selecting
            proper equipment, gas management, and emergency procedures.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value: 'PADI Advanced Open Water Diver or qualifying certification',
          },
          { name: 'Minimum age', value: '15 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/deep-diver/2.png'),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool & Open Water Sessions',
        paragraphs: [
          <p key={1}>
            Apply the knowledge you gained in confined and open water dives. You
            will practice essential skills such as buoyancy control, navigation,
            and emergency procedures in shallow water before progressing to
            deeper dives.
          </p>,
          <p key={2}>
            Our experienced instructors will guide you through the dives and
            help you gain confidence and comfort in the underwater environment.
          </p>,
        ],
        list: [{ name: 'Duration', value: '2 - 3 days' }],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/deep-diver/3.png'),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            After completing the knowledge development and practical application
            portions of the course, you will take a final exam to test your
            understanding of the materials covered.
          </p>,
          <p key={2}>
            Upon passing the exam and demonstrating the required skills, you
            will be certified as a PADI Deep Diver Speciality by Bermuda Diving
            Center.
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
          'Explore depths up to 40 meters (131 feet) and discover hidden underwater treasures.',
          'Gain advanced knowledge and skills to safely navigate deeper dives.',
          'Learning how to use backup emergency tanks at the depth of 5 meters (16 feet)',
          'Expand your diving limits and challenge yourself as a diver.',
          'Prepare for future diving adventures and certifications requiring deep dives.',
        ],
      },
    ],
    includes: [
      'PADI Deep Diver eLearning',
      'DAN insurance',
      'Free use of full scuba gear',
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
        question: 'What is the PADI Deep Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Deep Diver course is designed to teach you the skills and
              knowledge needed to safely plan and execute deep dives between 18
              - 40 meters (59 - 131 feet).
            </p>
          </div>
        ),
      },
      {
        question: 'What are the Requirements for the PADI Deep Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Deep Diver course, you must be a PADI
              Advanced Open Water Diver or equivalent and at least 15 years old.
            </p>
          </div>
        ),
      },
      {
        question: 'What will I learn in the PADI Deep Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              During the course, you will learn about deep dive planning,
              organization, procedures, techniques, and potential problems. You
              will also develop skills for diving in deeper water, including how
              to manage your gas supply, deal with nitrogen narcosis, and use
              specialized equipment.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI Deep Diver course take?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Deep Diver course typically takes 2 - 3 days to complete,
              including eLearning, pool sessions, and open water dives.
            </p>
          </div>
        ),
      },
      {
        question: 'What equipment do I need for the PADI Deep Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              In addition to standard scuba gear, it is recommended to have a
              primary dive light and a backup light. However, Bermuda Diving
              Center provide full gear as part of the course fee.
            </p>
          </div>
        ),
      },
      {
        question:
          'What certification will I receive after completing the PADI Deep Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              After completing the course, you will receive the PADI Deep Diver
              certification, which qualifies you to dive to a maximum depth of
              40 meters (131 feet).
            </p>
          </div>
        ),
      },
      {
        question: 'Is the PADI Deep Diver course difficult?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Deep Diver course is challenging but rewarding. It
              requires discipline and focus, but with the right mindset and a
              good instructor, anyone can successfully complete the course.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the benefits of taking the PADI Deep Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Deep Diver course opens up new opportunities for
              exploration and adventure, allowing you to dive deeper and
              discover new environments and marine life. It also helps you to
              develop advanced diving skills, build confidence, and become a
              safer and more knowledgeable diver.
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
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/sidemount.png'
        ),
        title: 'PADI Sidemount',
        title2: 'Speciality',
        price: '2,499',
        vat: true,
        tagline:
          'Discover a new way to dive and experience the freedom of movement with PADI Sidemount Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/sidemount',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/dive-master.png'
        ),
        title: 'PADI Divemaster',
        title2: 'Speciality',
        price: '4,499',
        vat: true,
        tagline:
          'Transform your passion for diving into a fulfilling career with the PADI Divemaster Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/dive-master',
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
