import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/advanced-open-water.png'),
      alt: 'PADI Advanced Open Water Course Banner - Bermuda',
    },
    heading: 'PADI Advanced Open Water Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Advanced Open Water Course',
    },
    description:
      "Take Your Diving Skills to the Next Level with Bermuda Diving Center's PADI Advanced Open Water Course",
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Advanced Open Water Course',
    description: [
      <p key={1}>
        Ready to take your scuba diving skills to the next level? The PADI
        Advanced Open Water course at Bermuda Diving Center in Dubai is the
        perfect opportunity to do so.
      </p>,
      <p key={2}>
        This course is designed to build on your existing scuba diving knowledge
        and skills, and introduce you to new types of diving adventures. With
        our experienced and friendly instructors, you&apos;ll gain the
        confidence and skills to explore deeper and more challenging dive sites.
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
            The PADI Advanced Open Water course starts with an online eLearning
            component that you can complete at your own pace.
          </p>,
          <p key={2}>
            The eLearning component includes knowledge development segments for
            each of the five adventure dives included in the course. The five
            dives include deep diving, underwater navigation, and three
            additional adventure dives of your choice.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value: 'Open Water Diver/Junior Open Water Diver',
          },
          {
            name: 'Minimum age',
            value: '12 years or older',
          },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/advanced-open-water/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical Knowledge',
        heading: 'Adventure Dives',
        paragraphs: [
          <p key={1}>
            The second step involves completing five adventure dives, including
            the two core dives (Deep Diving and Underwater Navigation) and three
            additional adventure dives of your choice.
          </p>,
          <p key={2}>
            During the adventure dives, you&apos;ll apply the knowledge and
            skills learned during the eLearning component to real-world diving
            situations.
          </p>,
        ],
        list: [
          {
            name: 'Duration',
            value: '2 - 3 days',
          },
        ],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/advanced-open-water/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completing the eLearning and adventure dive components of the
            course, you&apos;ll earn the PADI Advanced Open Water Diver
            certification.
          </p>,
          <p key={2}>
            This certification allows you to explore more challenging dive
            sites, dive up to a depth of 30 meters (98 feet), diving at night
            and opens the door to many new diving opportunities.
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
          'Explore deeper depths up to 30 meters (98 feet) underwater.',
          'Experience thrilling night dives and learn navigation techniques.',
          'Dive into the world of wreck diving and discover hidden treasures.',
          'Take your diving skills to the next level with specialized diving techniques.',
        ],
      },
    ],
    includes: [
      'PADI Advanced Open Water eLearning',
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
        question: 'What is PADI Advanced Open Water course?',
        answer: (
          <div className="wrapper">
            <p>
              PADI Advanced Open Water is an extension of the Open Water course
              designed to develop your diving skills and increase your
              confidence underwater. It consists of five adventure dives,
              including 30 meters (98 feet) deep dive, night dive and navigation
              dive, plus two other dives of your choosing.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the Requirements for the PADI Advanced Open Water course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Advanced Open Water course, you must have a
              PADI Open Water Diver certification (or equivalent) and be at
              least 12 years old.
            </p>
          </div>
        ),
      },
      {
        question:
          'How long does the PADI Advanced Open Water course take to complete?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Advanced Open Water course typically takes two to three
              days to complete, depending on the dive site and schedule.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the five adventure dives included in the PADI Advanced Open Water course?',
        answer: (
          <div className="wrapper">
            <p>
              The five adventure dives include a deep dive, navigation dive, and
              three other dives that can be chosen from a list of options, such
              as wreck diving, drift diving, peak performance buoyancy, night
              diving, and more.
            </p>
          </div>
        ),
      },
      {
        question:
          'Can I complete the PADI Advanced Open Water course while on vacation?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, the PADI Advanced Open Water course is often completed while
              on vacation, as it allows divers to gain experience and explore
              new dive sites.
            </p>
          </div>
        ),
      },
      {
        question:
          'What equipment do I need for the PADI Advanced Open Water course?',
        answer: (
          <div className="wrapper">
            <p>
              It is recommended to have basic scuba gear. However, Bermuda
              Diving Center provide full gear as part of the course fee. You may
              also need a dive computer and a surface marker buoy (SMB).
            </p>
          </div>
        ),
      },
      {
        question:
          'Is the PADI Advanced Open Water certification recognized worldwide?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, all PADI certifications are recognized worldwide and is the
              most widely recognized scuba certification.
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
          '/images/pages/courses/thumbnails/rescue-diver.png'
        ),
        title: 'PADI Rescue Diver',
        title2: 'Course',
        price: '1,799',
        vat: true,
        tagline:
          'Experience the ultimate personalized scuba diving adventure with our VIP Package, a one-on-one instructor.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/rescue-diver-course',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/enriched-air-diver.png'
        ),
        title: 'PADI Enriched Air Diver',
        title2: '(Nitrox) Course',
        price: '799',
        vat: true,
        tagline:
          'Explore the vast ocean and sail in luxury with our Scuba Dive + Yacht Cruise Ticket package!',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/enriched-air-diver',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/emergency-oxygen-provider.png'
        ),
        title: 'PADI Emergency Oxygen',
        title2: 'Provider Course',
        price: '799',
        vat: true,
        tagline:
          'Be the life-saving hero, learn PADI Emergency Oxygen Provider course today!',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/emergency-oxygen-provider',
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
