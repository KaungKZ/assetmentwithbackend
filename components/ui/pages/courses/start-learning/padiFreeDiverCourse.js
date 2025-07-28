import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/padi-freediver.png'),
      alt: 'PADI Freediver Course Banner - Bermuda',
    },
    heading: 'PADI Freediver Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Freediver Course',
    },
    description:
      'Discover a Different Way of Underwater Exploration with PADI Freediver Course with Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Freediver Course',
    description: [
      <p key={1}>
        The PADI Freediver Course is designed to help you develop the skills and
        knowledge necessary to become a safe and confident freediver.
      </p>,
      <p key={2}>
        At Bermuda Diving Center, our experienced instructors will guide you
        through each step of the course, ensuring that you have a fun and
        rewarding learning experience.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/open-water/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'eLearning and Classroom sessions',
        paragraphs: [
          <p key={1}>
            The PADI Freediver Course starts with an online eLearning component
            that you can complete at your own pace.
          </p>,
          <p key={2}>
            Once you complete your eLearning, you&apos;ll begin with classroom
            sessions that cover the basics of freediving. You&apos;ll learn
            about the equipment you&apos;ll use, the physiology of freediving,
            and the safety procedures you&apos;ll need to follow.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value:
              'You need adequate swimming skills and comfort in the water. No prior experience is required.',
          },
          { name: 'Minimum age', value: '15 years old or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/padi-freediver/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool Session',
        paragraphs: [
          <p key={1}>
            After the classroom sessions, you&apos;ll move on to the pool for
            practical training. You&apos;ll practice static and dynamic apnea,
            learn proper breathing techniques, and improve your finning skills.
          </p>,
        ],
        list: [{ name: 'Duration', value: '2 - 3 Days' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/padi-freediver/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Experience',
        heading: 'Open Water Session',
        paragraphs: [
          <p key={1}>
            Finally, you&apos;ll take your skills to the open water, where
            you&apos;ll apply what you&apos;ve learned in a real-world setting.
          </p>,
          <p key={2}>
            You&apos;ll work on equalization techniques, improve your diving
            form, and gain the confidence to dive safely and comfortably at
            greater depths.
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
          'Learn about equipment and gear for freediving',
          'Increase confidence and comfort while freediving',
          'Improve breath-holding techniques',
          'Increase dive time and depth',
        ],
      },
    ],
    includes: [
      'PADI eLearning',
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
        question: 'What is PADI Freediver Course?',
        answer: (
          <div className="wrapper">
            <p>
              PADI Freediver Course is a program that teaches you how to hold
              your breath longer and dive deeper while enjoying the underwater
              world with minimal equipment.
            </p>
          </div>
        ),
      },
      {
        question: 'Is the PADI Freediver Course for me?',
        answer: (
          <div className="wrapper">
            <p>
              The course is designed for anyone who wants to improve their
              breath-holding ability and experience the underwater world in a
              more natural and peaceful way. Q: Do I need to have any prior
              experience in freediving? A: No, you don&apos;t need to have any
              previous experience in freediving. The course is designed for
              beginners, but if you have some experience, it will be an
              advantage.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the Requirements for the PADI Freediver Course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Freediver Course, you must be at least 15
              years old, have basic swimming skills and be in good physical
              health.
            </p>
          </div>
        ),
      },
      {
        question: 'What will I learn in the PADI Freediver Course?',
        answer: (
          <div className="wrapper">
            <p>
              You will learn the proper breathing techniques, how to hold your
              breath longer, and how to relax and conserve energy while diving.
              You will also learn about the equipment used in freediving and the
              safety procedures involved.
            </p>
          </div>
        ),
      },
      {
        question: 'Do I need to have any prior experience in freediving?',
        answer: (
          <div className="wrapper">
            <p>
              No, you don&apos;t need to have any previous experience in
              freediving. The course is designed for beginners, but if you have
              some experience, it will be an advantage.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI Freediver Course take?',
        answer: (
          <div className="wrapper">
            <p>
              The course can be completed in two to three days, depending on the
              schedule and the student&apos;s progress.
            </p>
          </div>
        ),
      },
      {
        question: 'Do I need to bring my own equipment for the course?',
        answer: (
          <div className="wrapper">
            <p>
              No, all the necessary equipment will be provided by the dive
              center.
            </p>
          </div>
        ),
      },
      {
        question: 'Is certification required to go freediving?',
        answer: (
          <div className="wrapper">
            <p>
              Certification is not required, but it is strongly recommended to
              ensure that you have the proper knowledge and skills to freedive
              safely.
            </p>
          </div>
        ),
      },
      {
        question: 'How do I get certified as a PADI Freediver?',
        answer: (
          <div className="wrapper">
            <p>
              To get certified, you must successfully complete the knowledge
              development sessions, confined water sessions, and open water
              sessions. You will also need to pass the final exam and meet the
              performance requirements set by the instructor.
            </p>
          </div>
        ),
      },
      {
        question: 'Available Languages',
        answer: (
          <div className="wrapper">
            <p>English</p>
            <p>Arabic</p>
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
          '/images/pages/courses/thumbnails/ow-scuba-instructor.png'
        ),
        title: 'PADI OW Scuba',
        title2: 'Instructor Course',
        price: '10,999',
        vat: true,
        tagline:
          'Teach others to explore the amazing world beneath the waves with the PADI Open Water Scuba Instructor Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/ow-scuba-instructor',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/search-and-recovery.png'
        ),
        title: 'PADI Search And',
        title2: 'Recovery Course',
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
          '/images/pages/courses/thumbnails/reactivate.png'
        ),
        title: 'PADI Refresher',
        title2: 'Course',
        price: '499',
        vat: true,
        tagline:
          'Refresh your skills and regain your confidence to dive with the PADI Refresher Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/refresher/reactivate',
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
