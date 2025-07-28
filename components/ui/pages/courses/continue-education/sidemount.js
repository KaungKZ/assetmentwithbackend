import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/sidemount.png'),
      alt: 'PADI Sidemount Speciality Banner - Bermuda',
    },
    heading: 'PADI Sidemount Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Sidemount Speciality',
    },
    description:
      'Exploring Diving Techniques with PADI Sidemount Diver Course at Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Sidemount Speciality',
    description: [
      <p key={1}>
        Diving enthusiasts looking to explore different diving techniques should
        consider the PADI Sidemount Diver course at Bermuda Diving Center.
      </p>,
      <p key={2}>
        Sidemount diving is an increasingly popular technique that involves
        wearing tanks on the sides of the body instead of on the back. This
        allows for greater flexibility and streamlining while underwater, making
        it an excellent option for both recreational and technical diving.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/open-water/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'eLearning and Classroom learning',
        paragraphs: [
          <p key={1}>
            The PADI Sidemount Diver course at Bermuda Diving Center includes
            eLearning and classroom sessions that cover the fundamentals of
            sidemount diving, including equipment setup, dive planning, and
            safety considerations.
          </p>,
          <p key={2}>
            The instructors at Bermuda Diving Center are highly experienced and
            knowledgeable, providing students with a comprehensive understanding
            of sidemount diving techniques.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value: 'Open Water Diver or qualifying certification',
          },
          { name: 'Minimum age', value: '15 years' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/sidemount/2.png'),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool & Open Water Sessions',
        paragraphs: [
          <p key={1}>
            After completing the classroom sessions, students will participate
            in confined and open water dives. These dives allow students to
            apply what they have learned in a controlled environment before
            taking on more challenging open water dives.
          </p>,
          <p key={2}>
            Students will learn how to properly set up their sidemount gear,
            achieve proper buoyancy, and safely maneuver through the water.
          </p>,
        ],
        list: [{ name: 'Duration', value: '9 hours' }],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/sidemount/3.png'),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon successful completion of the classroom sessions and dives,
            students will earn their PADI Sidemount Diver certification from
            Bermuda Diving Center.
          </p>,
          <p key={2}>
            This certification allows divers to use two or more diving tanks to
            explore new underwater environments and gain confidence in their
            diving abilities.
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
          'Enhance your diving versatility and comfort with sidemount configuration.',
          'Experience a streamlined profile for improved maneuverability and trim.',
          'Access tight spaces and navigate through narrow passages with ease.',
          'Extend your dive times and carry additional equipment for longer explorations.',
          'Gain valuable skills for technical diving and cave diving pursuits.',
        ],
      },
    ],
    includes: [
      'PADI Sidemount eLearning',
      'DAN insurance',
      'Free use of sidemount scuba gear',
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
        question: 'What is PADI Sidemount diving?',
        answer: (
          <div className="wrapper">
            <p>
              PADI Sidemount diving is a configuration where divers wear their
              tanks mounted on either side of their body, instead of on their
              back, which provides greater flexibility and comfort.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the benefits of PADI Sidemount diving?',
        answer: (
          <div className="wrapper">
            <p>
              The main benefits of PADI Sidemount diving include better buoyancy
              control, easier and safer tank access, and more streamlined
              equipment configuration. It also allows divers to carry more tanks
              for longer dives or decompression stops.
            </p>
          </div>
        ),
      },
      {
        question: 'Is PADI Sidemount diving suitable for beginners?',
        answer: (
          <div className="wrapper">
            <p>
              PADI Sidemount diving can be suitable for beginners who have
              completed the PADI Open Water Diver course or equivalent. However,
              it is recommended that divers gain experience with traditional
              back-mounted tanks before attempting Sidemount diving.
            </p>
          </div>
        ),
      },
      {
        question: 'What kind of equipment do I need for PADI Sidemount diving?',
        answer: (
          <div className="wrapper">
            <p>
              Sidemount divers require special Sidemount harnesses, regulators,
              and tank mounting systems. However, Bermuda Diving Center provide
              full gear as part of the course fee. You may also need a dive
              computer and a surface marker buoy (SMB).
            </p>
          </div>
        ),
      },
      {
        question: 'What kind of dives can I do with PADI Sidemount diving?',
        answer: (
          <div className="wrapper">
            <p>
              PADI Sidemount diving can be used for a wide range of dives,
              including reef, wreck, and cave diving. It is particularly useful
              for technical dives that require longer bottom times or multiple
              tanks.
            </p>
          </div>
        ),
      },
      {
        question: 'Do I need special training to learn PADI Sidemount diving?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, PADI offers a Sidemount Diver course that teaches the skills,
              knowledge, and techniques required for Sidemount diving. It is
              recommended that divers complete this course before attempting
              Sidemount diving.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the safety considerations for PADI Sidemount diving?',
        answer: (
          <div className="wrapper">
            <p>
              As with any scuba diving configuration, safety is paramount in
              Sidemount diving. Proper training, equipment, and planning are
              essential to ensure a safe and enjoyable diving experience.
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
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/assistant-instructor.png'
        ),
        title: 'PADI Assistant',
        title2: 'Instructor Speciality',
        price: '4,499',
        vat: true,
        tagline:
          'Elevate your diving career and share your love for the underwater world with PADI Assistant Instructor Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/assistant-instructor',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/ow-scuba-instructor.png'
        ),
        title: 'PADI OW Scuba',
        title2: 'Instructor Speciality',
        price: '10,999',
        vat: true,
        tagline:
          'Teach others to explore the amazing world beneath the waves with the PADI Open Water Scuba Instructor Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/ow-scuba-instructor',
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
