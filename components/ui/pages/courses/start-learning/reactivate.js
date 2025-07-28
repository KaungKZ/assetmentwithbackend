import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/reactivate.png'),
      alt: 'PADI  ReActivate Scuba Refresher course Banner - Bermuda',
    },
    heading: 'PADI  ReActivate Scuba Refresher course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI  ReActivate Scuba Refresher course',
    },
    description:
      "Brush up Your Skills with Bermuda Diving Center's PADI ReActivate Scuba Refresher Program",
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI ReActivate Scuba Refresher course',
    description: [
      <p key={1}>
        Have you been out of the water for a while? Are you feeling a bit rusty
        or unsure of your skills?
      </p>,
      <p key={2}>
        Then the PADI ReActivate Scuba Refresher Program at Bermuda Diving
        Center in Dubai is the perfect course for you. This program is designed
        to help certified divers refresh their knowledge and skills so they can
        feel more comfortable and confident underwater.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/reactivate/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'Knowledge Review',
        paragraphs: [
          <p key={1}>
            The PADI ReActivate Scuba Refresher Program starts with an online
            knowledge review, which allows you to refresh your knowledge of dive
            theory, dive equipment, and dive planning.
          </p>,
          <p key={2}>
            You&apos;ll learn about important dive safety concepts and be able
            to review key skills and techniques.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value:
              'Scuba Diver certification or proof of entry-level diver certification',
          },
          { name: 'Minimum age', value: '10 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/reactivate/2.png'),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool or Open Water Session',
        paragraphs: [
          <p key={1}>
            You&apos;ll review basic dive skills, such as buoyancy control,
            regulator recovery, and mask clearing, and you&apos;ll also have the
            opportunity to practice any specific skills that you feel less
            confident about.
          </p>,
        ],
        list: [{ name: 'Duration', value: '3 hours' }],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/reactivate/3.png'),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completion of the program, you&apos;ll receive a new
            certification card by Bermuda Diving Center that indicates that
            you&apos;ve successfully completed a scuba refresher program
          </p>,
          <p key={2}>
            This is a great way to demonstrate your commitment to dive safety
            and your dedication to refreshing your skills and knowledge.
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
          'Refresh your skills before a trip',
          'Prepare for your next course',
          'Get an updated certification card',
        ],
      },
    ],
    includes: [
      'PADI ReActivate eLearning',
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
        question: 'What is PADI Reactivate?',
        answer: (
          <div className="wrapper">
            <p>
              PADI Reactivate is a refresher course for certified divers who
              haven&apos;t been diving for a while and want to refresh their
              skills and knowledge before returning to the water.
            </p>
          </div>
        ),
      },
      {
        question:
          'How long has it been since my last dive before I need to take the PADI Reactivate course?',
        answer: (
          <div className="wrapper">
            <p>
              It&apos;s recommended that certified divers take the PADI
              Reactivate course if they haven&apos;t been diving for 6 months or
              longer.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the benefits of taking the PADI Reactivate course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Reactivate course refreshes your diving skills,
              knowledge, and confidence so you can enjoy a safer and more
              comfortable diving experience. It&apos;s also a great way to meet
              new dive buddies and get back into the diving community.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI Reactivate course take?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Reactivate course consists of a knowledge review session
              and a confined water skill review session. The course can be
              completed in a half-day.
            </p>
          </div>
        ),
      },
      {
        question: 'What do I need to bring for the PADI Reactivate course?',
        answer: (
          <div className="wrapper">
            <p>
              We provide gear as part of the course fee. However, it is
              recommended that you purchase your own mask, snorkel, and fins for
              a better fit and comfort.
            </p>
          </div>
        ),
      },
      {
        question:
          'Do I need to take a written test for the PADI Reactivate course?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, there is a knowledge review session that includes a written
              test. This is to ensure that you have retained the necessary
              information for safe and enjoyable diving.
            </p>
          </div>
        ),
      },
      {
        question: 'Can I take the PADI Reactivate course online?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, the knowledge review session can be completed online through
              the PADI eLearning platform before the confined water skill review
              session.
            </p>
          </div>
        ),
      },
      {
        question:
          'Is the PADI Reactivate course required before I can go diving again?',
        answer: (
          <div className="wrapper">
            <p>
              It is highly recommended by PADI before certified divers return to
              the water after an extended break.
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
          '/images/pages/courses/thumbnails/dive-master.png'
        ),
        title: 'PADI Divemaster',
        title2: 'Course',
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
