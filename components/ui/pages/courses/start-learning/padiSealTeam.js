import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/padi-seal-team.png'),
      alt: 'PADI Seal Team Course Banner - Bermuda',
    },
    heading: 'PADI Seal Team Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Seal Team Course',
    },
    description:
      "Start Your Child's Underwater Adventure with PADI Seal Team Course at Bermuda Diving Center.",
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Seal Team Course',
    description: [
      <p key={1}>
        The PADI Seal Team Course is designed for young adventurers aged between
        8 and 10 years old.
      </p>,
      <p key={2}>
        At Bermuda Diving Center, we provide the perfect learning environment
        and training facilities to introduce your kids to the underwater world.
        Our experienced and qualified instructors will make sure your kids have
        a fun and educational experience, while also learning important diving
        skills.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/padi-seal-team/1.png'
        ),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'Classroom sessions',
        paragraphs: [
          <p key={1}>
            The PADI Seal Team Course consists of five AquaMissions, where kids
            learn about breathing underwater, buoyancy control, underwater
            communication, and other essential diving skills.
          </p>,
          <p key={2}>
            The knowledge development sessions are conducted in a fun and
            interactive manner to keep your kids engaged and excited.
          </p>,
        ],
        list: [
          {
            name: 'Minimum age',
            value: '8 years old',
          },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/padi-seal-team/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool Session',
        paragraphs: [
          <p key={1}>
            Once your kids complete the knowledge development sessions, they
            will take part in five confined water sessions in a swimming pool.
          </p>,
          <p key={2}>
            During these sessions, they will practice the skills they learned in
            the knowledge development sessions under the guidance of our
            experienced instructors.
          </p>,
        ],
        list: [
          {
            name: 'Duration',
            value: '2 Days',
          },
        ],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/padi-seal-team/certificate.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'CERTIFIED DIVER',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completing the eLearning and aqua missions of the course,
            you&apos;ll earn the PADI Seal Team certification.
          </p>,
          <p key={2}>
            This certification allows you to explore more challenges, dive up to
            a depth of 8 meters (26 feet) and opens the door to many new diving
            opportunities.
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
          "Take Your Child's Love for the Water to the Next Level",
          "Develop Your Child's Confidence and Skills in the Water",
          'Discover the Joy of Scuba Diving with Your Kids',
        ],
      },
    ],
    includes: [
      'PADI Seal Team eLearning',
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
        question: 'What is the PADI Seal Team?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Seal Team is an introductory program designed for kids
              ages 8 and above who are interested in scuba diving. It&apos;s a
              fun and engaging way for kids to learn about scuba diving and
              explore the underwater world in a safe and supervised environment.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the requirements to enroll in the PADI Seal Team program?',
        answer: (
          <div className="wrapper">
            <p>
              Kids must be at least 8 years old and comfortable in the water to
              participate in the PADI Seal Team program. They should also have
              basic swimming skills and be able to complete a short swim without
              assistance.
            </p>
          </div>
        ),
      },
      {
        question: 'What will my child learn in the PADI Seal Team program?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Seal Team program consists of five AquaMissions, which
              are underwater pool adventures that teach kids basic scuba skills
              and underwater exploration techniques. Kids will learn how to use
              scuba gear, breathe underwater, swim with fins, and much more.
            </p>
          </div>
        ),
      },
      {
        question: 'Is scuba diving safe for kids?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, scuba diving can be safe for kids when taught by a certified
              PADI instructor in a supervised environment. The PADI Seal Team
              program is designed to be a fun and safe introduction to scuba
              diving for kids.
            </p>
          </div>
        ),
      },
      {
        question:
          'Can my child continue diving after completing the PADI Seal Team program?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, the PADI Seal Team program is a great way for kids to get
              started in scuba diving and can lead to further scuba diving
              certifications in the future. Kids who complete the PADI Seal Team
              program can continue their scuba diving education through the PADI
              Open Water Diver course and other advanced scuba diving
              certifications.
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
          '/images/pages/courses/thumbnails/open-water.png'
        ),
        title: 'PADI Open Water',
        title2: 'Course',
        price: '1,499',
        vat: true,
        tagline:
          'Dive into adventure and explore the wonders of the underwater world with PADI Open Water Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/start-learning/open-water-course',
      },
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
    ],
  },
  fixedMenu: {
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
};
