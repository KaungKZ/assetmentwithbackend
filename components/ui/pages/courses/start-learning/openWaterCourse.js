import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/open-water.png'),
      alt: 'PADI Open Water Course Banner - Bermuda',
    },
    heading: 'PADI Open Water Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Open Water Course',
    },
    description:
      "Start Your Scuba Diving Journey with Bermuda Diving Center's PADI Open Water License",
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Open Water Course',
    description: [
      <p key={1}>
        Bermuda Diving Center offers the PADI Open Water course as the most
        popular and widely recognized scuba certification in the world and the
        first scuba certification level to explore the world of underwater.
        You&apos;ll be able to complete the course within 3 - 4 days.
      </p>,
      <p key={2}>
        The training program offers comprehensive instruction on dive theory,
        equipment, and essential techniques to ensure safe open water diving.
        Divers aged 10 and above are eligible to participate, and upon
        completion, they can dive to a maximum depth of 18 meters (59 feet).
        Join us at Bermuda Diving Center to begin your scuba diving journey
        today.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/open-water/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'Initial Knowledge',
        heading: 'eLearning',
        paragraphs: [
          <p key={1}>
            As the initial stage. Once you get registered with Bermuda Diving
            Center for your open water course, you&apos;ll recieve access to
            PADI eLearning portal.
          </p>,
          <p key={2}>
            Gain access to the PADI eLearning portal for self-paced scuba diving
            principles and terminology. Connect with instructors for assistance
            as you learn.
          </p>,
        ],
        descriptions: [
          'Register for your Open Water Course and access the PADI eLearning portal. Learn at your own pace with instructor support.',
        ],
        list: [
          {
            name: 'Requirements',
            value: 'Able to swim, medically fit for diving',
          },
          { name: 'Minimum age', value: '10 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/open-water/2.png'),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical Knowledge',
        heading: 'Pool & Open Water Session',
        paragraphs: [
          <p key={1}>
            After completing the PADI eLearning, join us for two days of pool
            sessions to practice essential scuba diving skills. Following that,
            two days of open water sessions where our experienced instructors
            will guide you through dive equipment, planning, communication, and
            safety procedures.
          </p>,
        ],
        descriptions: [
          "After completing the PADI eLearning, you'll have two days of pool sessions followed by two days of open water sessions with expert instructors.",
        ],
        list: [{ name: 'Duration', value: '3 - 4 days' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/advanced-open-water/certificate.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completing the eLearning and adventure dive components of the
            course, you&apos;ll earn the PADI Open Water Diver certification.
          </p>,
          <p key={2}>
            This certification allows you to explore underwater world, dive up
            to a depth of 18 meters (59 feet), and opens the door to many new
            diving opportunities.
          </p>,
        ],
        descriptions: [
          'Complete the eLearning and adventure dive components to earn your PADI Open Water Diver certification, allowing you to dive up to 18 meters (59 feet) and explore new diving opportunities.',
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
          'Explore depths up to 18 meters (59 feet) underwater.',
          'Explore the mesmerizing wonders of the underwater world.',
          'Learn essential skills for safe and confident scuba diving.',
          'Earn a globally recognized certification to dive independently.',
          'Join a passionate global community of divers and explore amazing destinations.',
        ],
      },
    ],
    includes: [
      'PADI Open Water eLearning',
      'DAN insurance',
      'Free use of full scuba gear',
      'Free use of towels and slippers',
      'Refreshments - popcorn, juices, coffee, slush, water',
      'Certification of Completion',
      '15% discounts for all equipments and services',
      'Privileged Dive trips every weekend at a discounted price',
    ],
    video: {
      poster: getAssetsUrl('/images/pages/courses/open-water/poster.png'),
      posterPortrait: getAssetsUrl(
        '/images/pages/courses/open-water/poster-portrait.png'
      ),
      src: getAssetsUrl('/videos/courses/open-water.mp4'),
    },
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
        question: 'What is the PADI Open Water certification?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Open Water certification is a beginner level scuba diving
              certification that allows you to dive up to 18 meters (59 feet)
              deep with a buddy. It is recognized worldwide and is the most
              popular scuba certification.
            </p>
          </div>
        ),
      },
      {
        question:
          'How long does it take to complete the PADI Open Water certification?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Open Water certification typically takes about 3-4 days
              to complete. It involves a combination of eLearning, pool
              training, and open water dives.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the Requirements for the PADI Open Water certification?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Open Water course, you must be at least 10
              years old, in good physical health, and able to swim.
            </p>
          </div>
        ),
      },
      {
        question:
          'Do I need to have my own scuba gear to take the PADI Open Water course?',
        answer: (
          <div className="wrapper">
            <p>
              No, you don&apos;t need to have your own scuba gear. We provide
              gear as part of the course fee. However, it is recommended that
              you purchase your own mask, snorkel, and fins for a better fit and
              comfort.
            </p>
          </div>
        ),
      },
      {
        question: 'What does the PADI Open Water course cover?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Open Water course covers the fundamentals of scuba
              diving, including equipment setup and maintenance, dive planning,
              underwater communication, and safety procedures. You will also
              learn scuba diving skills in confined water (pool) and open water
              dives.
            </p>
          </div>
        ),
      },
      {
        question: 'Is the PADI Open Water certification recognized worldwide?',
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
        question:
          'What are the benefits of getting certified as a PADI Open Water diver?',
        answer: (
          <div className="wrapper">
            <p>
              As a certified PADI Open Water diver, you can explore the
              underwater world with confidence and safety. You will have access
              to a wide range of dive sites and can participate in various
              diving activities. Additionally, you can continue your scuba
              education with advanced courses and specialty courses.
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
          '/images/pages/courses/thumbnails/advanced-open-water.png'
        ),
        title: 'PADI Advanced Open',
        title2: 'Water Course',
        price: '1,499',
        vat: true,
        tagline:
          'Become a confident, skilled diver and explore deeper realms with PADI Advanced Open Water certification.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/advanced-open-water-course',
      },
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
          'Unleash the power of longer dives and greater depths with PADI Enriched Air Diver Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/enriched-air-diver',
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
