import {
  ContactInfo,
  CourseHighlight,
  CourseType,
  DivePackage,
  FAQ,
  MarqueeImage,
  NewFeature,
  Package,
  PackageType,
  Review,
} from "./types/index";

import { BiSolidMapPin } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiMaildotru } from "react-icons/si";
import { getAssetsUrl } from "../../../../../lib/func/image";
import { siteConfig } from "../../../../../lib/config";
export const courseHighlights: CourseHighlight[] = [
  {
    id: 1,
    mainTitle: "Initial Knowledge",
    title: "eLearning (Theory)",
    text: "Register for your Open Water Course and access the PADI eLearning portal. Learn at your own pace with instructor support.",
    tag: ["Requirements", "Minimum age"],
    tagText: ["Ability to swim, medically fit for diving", "10 years or older"],
    image: "/images/landing-pages/padi-open-water-course/highlight1.webp",
  },
  {
    id: 2,
    mainTitle: "Practical Knowledge",
    title: "Pool & Open Water Sessions",
    text: "After completing the PADI eLearning, you'll have two days of pool sessions followed by two days of open water sessions with expert instructors.",
    tag: ["Duration"],
    tagText: ["3 - 4 days"],
    image: "/images/landing-pages/padi-open-water-course/highlight2.webp",
  },
  {
    id: 3,
    mainTitle: "Certified Diver",
    title: "Certification",
    text: "Complete the eLearning and adventure dive components to earn your PADI Open Water Diver certification, allowing you to dive up to 18 meters (59 feet) and explore new diving opportunities.",
    tag: [],
    tagText: [],
    image: "/images/landing-pages/padi-open-water-course/highlight3.webp",
  },
];

export const courseType: CourseType[] = [
  {
    title: "Dive Deeper",
    desc: "Explore depths of up to 18 meters (59 feet) underwater.",
    image: "/images/landing-pages/padi-open-water-course/cust1.webp",
  },
  {
    title: "Discover Underwater Wonders",
    desc: "Immerse yourself in the mesmerizing beauty of the ocean.",
    image: "/images/landing-pages/padi-open-water-course/cust2.webp",
  },
  {
    title: "Master Essential Skills",
    desc: "Learn the fundamentals of safe and confident scuba diving.",
    image: "/images/landing-pages/padi-open-water-course/cust3.webp",
  },
  {
    title: "Get Certified",
    desc: "Earn a globally recognized certification to dive independently.",
    image: "/images/landing-pages/padi-open-water-course/cust4.webp",
  },
  {
    title: "Join a Thriving Dive Community",
    desc: "Connect with passionate divers and explore breathtaking destinations worldwide.",
    image: "/images/landing-pages/padi-open-water-course/cust5.webp",
  },
];

export const packageType: PackageType[] = [
  { id: 1, title: "PADI Open Water eLearning" },
  { id: 2, title: "DAN Insurance" },
  { id: 3, title: "Free Use Of Full Scuba Gear" },
  { id: 4, title: "Free Use Of Towels And Slippers" },
  { id: 5, title: "Refreshments – Popcorn, Juices, Coffee, Slush, Water" },
  { id: 6, title: "Certification Of Completion" },
  { id: 7, title: "15% Discounts For All Equipments And Services" },
  { id: 8, title: "Privileged Dive Trips Every Weekend At A Discounted Price" },
];

export const marqueeImage: MarqueeImage[] = [
  {
    id: 1,
    image: "/images/landing-pages/padi-open-water-course/marquee1.webp",
  },
  {
    id: 2,
    image: "/images/landing-pages/padi-open-water-course/marquee2.webp",
  },
  {
    id: 3,
    image: "/images/landing-pages/padi-open-water-course/marquee3.webp",
  },
  {
    id: 4,
    image: "/images/landing-pages/padi-open-water-course/marquee4.webp",
  },
  {
    id: 5,
    image: "/images/landing-pages/padi-open-water-course/marquee5.webp",
  },
  {
    id: 6,
    image: "/images/landing-pages/padi-open-water-course/marquee8.webp",
  },
  {
    id: 7,
    image: "/images/landing-pages/padi-open-water-course/marquee7.webp",
  },
  {
    id: 8,
    image: "/images/landing-pages/padi-open-water-course/marquee8.webp",
  },
];

export const faqData: FAQ[] = [
  {
    id: 1,
    question: "What is the PADI Open Water certification?",
    answer:
      "The PADI Open Water certification is a beginner level scuba diving certification that allows you to dive up to 18 meters (59 feet) deep with a buddy. It is recognized worldwide and is the most popular scuba certification.",
  },
  {
    id: 2,
    question:
      "How long does it take to complete the PADI Open Water certification?",
    answer:
      "The PADI Open Water certification typically takes about 3-4 days to complete. It involves a combination of eLearning, pool training, and open water dives.",
  },
  {
    id: 3,
    question:
      "What are the Requirements for the PADI Open Water certification?",
    answer:
      "To enroll in the PADI Open Water course, you must be at least 10 years old, in good physical health, and able to swim.",
  },
  {
    id: 4,
    question:
      "Do I need to have my own scuba gear to take the PADI Open Water course?",
    answer:
      "No, you don't need to have your own scuba gear. We provide gear as part of the course fee. However, it is recommended that you purchase your own mask, snorkel, and fins for a better fit and comfort.",
  },
  {
    id: 5,
    question: "What does the PADI Open Water course cover?",
    answer:
      "The PADI Open Water course covers the fundamentals of scuba diving, including equipment setup and maintenance, dive planning, underwater communication, and safety procedures. You will also learn scuba diving skills in confined water (pool) and open water dives.",
  },
  {
    id: 6,
    question: "Is the PADI Open Water certification recognized worldwide?",
    answer:
      "Yes, all PADI certifications are recognized worldwide and is the most widely recognized scuba certification.",
  },
  {
    id: 7,
    question:
      "What are the benefits of getting certified as a PADI Open Water diver?",
    answer:
      "As a certified PADI Open Water diver, you can explore the underwater world with confidence and safety. You will have access to a wide range of dive sites and can participate in various diving activities. Additionally, you can continue your scuba education with advanced courses and specialty courses.",
  },
  {
    id: 8,
    question: "Available Languages",
    answer: "English Arabic* Hindi* Tagalog* Urdu* alayalam*",
  },
];

export const reviews: Review[] = [
  {
    author_name: "Alejandro Leon Quiroz Callejas",
    author_url:
      "https://www.google.com/maps/contrib/115204624090366644029/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUqQ9sbxZZwb2v9kG3-yNl2qqzEbqVaAV5VRSSSiL9Rdt4ea0Uz=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a month ago",
    text:
      "Great service, amazing education, very thorough customer service and support.\n" +
      "\n" +
      "All the instructors and staff are very kind, understanding and supportive, there was not a single moment where a question was not answered.\n" +
      "Special thanks to Jaber, Greg, Ben and Noel, the best instructors to have, every dive was interesting and fun.\n" +
      "10/10 would recommend if you’re looking to start your diving journey!",
    time: 1743065612,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/google.svg",
    sourceName: "Google Review",
  },
  {
    author_name: "Stuart Hooper-Smith",
    author_url:
      "https://www.google.com/maps/contrib/101807591632340683265/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocI0T1HzzG4aiceSbTi53jCcK7K4ZQPQoWeHNgf7xRhxGj0xug=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "2 months ago",
    text:
      "My experience at Bermuda Dive Centre has been fantastic.  All the tutors are highly skilled, professional and friendly.\n" +
      "I would recommend anyone wishing to gain their Open Water certification to come here.\n" +
      "I rate them 100%.",
    time: 1740136575,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/trip.svg",
    sourceName: "Tripadvisor",
  },
  {
    author_name: "Vanessa Rocco",
    author_url:
      "https://www.google.com/maps/contrib/111878170976885954475/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjVE1jKprBN7izKsv52JTSWKg4rerfFgUv1yo1HvHLmurwf8NKLzHw=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "4 months ago",
    text:
      "PADI Open Water. The experience was amazing! The team members are the kindest souls. I had never even done snorkeling so i was a little bit nervous. Their calm and funny attitude while still being safety-focused put me immediately at ease.\n" +
      "The aesthetic of where you do the pool exercises is beautiful!\n" +
      "I chose the “boat” exam as an add on and would highly recommend, especially if you’ve never done diving before.\n" +
      "Special thanks to Noel, Greg and Ben for allowing me in the scuba community",
    time: 1734340021,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/google.svg",
    sourceName: "Google Review",
  },
  {
    author_name: "Alhassan Saeed",
    author_url:
      "https://www.google.com/maps/contrib/107563420710096924372/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjXsOzeHL1QP_u6zL6XwIt2LXM_sjKFpEpWWl5HEqgzP9FqhtKo=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a week ago",
    text: "Very great lesson I had. It' was very impactful and I really enjoyed the training and I do really appreciate the lessons as well. Thank u all the instructors and entire management",
    time: 1745311468,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/trip.svg",
    sourceName: "Tripadvisor",
  },
  {
    author_name: "Senem Akarsu",
    author_url:
      "https://www.google.com/maps/contrib/104703537068279458824/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocKWCO2KjsSmuKNSmoISovnw4gYoNEARb7P_6--STnhOfjt96dY=s128-c0x00000000-cc-rp-mo-ba3",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "Truly super nice crew working there. Always helpful. Find Ahmed and John to assist. If they pick on you, that means they've accepted you as part of their family😁Consequently, I had a wonderful time completing my certification. I had a great time with my instructors as well -- Boris (if you want he can go military style💪 on you 😁) Ben (might leave you to save yourself (just kidding 😂))and Nivid (will probably save you). Can't wait to go on the ocean clean up dives with them 😊",
    time: 1744374329,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/google.svg",
    sourceName: "Google Review",
  },
  {
    author_name: "Vanessa Rocco",
    author_url:
      "https://www.google.com/maps/contrib/111878170976885954475/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjVE1jKprBN7izKsv52JTSWKg4rerfFgUv1yo1HvHLmurwf8NKLzHw=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "4 months ago",
    text:
      "PADI Open Water. The experience was amazing! The team members are the kindest souls. I had never even done snorkeling so i was a little bit nervous. Their calm and funny attitude while still being safety-focused put me immediately at ease.\n" +
      "The aesthetic of where you do the pool exercises is beautiful!\n" +
      "I chose the “boat” exam as an add on and would highly recommend, especially if you’ve never done diving before.\n" +
      "Special thanks to Noel, Greg and Ben for allowing me in the scuba community",
    time: 1734340021,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/google.svg",
    sourceName: "Google Review",
  },
  {
    author_name: "Alhassan Saeed",
    author_url:
      "https://www.google.com/maps/contrib/107563420710096924372/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjXsOzeHL1QP_u6zL6XwIt2LXM_sjKFpEpWWl5HEqgzP9FqhtKo=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a week ago",
    text: "Very great lesson I had. It' was very impactful and I really enjoyed the training and I do really appreciate the lessons as well. Thank u all the instructors and entire management",
    time: 1745311468,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/trip.svg",
    sourceName: "Tripadvisor",
  },
  {
    author_name: "Senem Akarsu",
    author_url:
      "https://www.google.com/maps/contrib/104703537068279458824/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocKWCO2KjsSmuKNSmoISovnw4gYoNEARb7P_6--STnhOfjt96dY=s128-c0x00000000-cc-rp-mo-ba3",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "Truly super nice crew working there. Always helpful. Find Ahmed and John to assist. If they pick on you, that means they've accepted you as part of their family😁Consequently, I had a wonderful time completing my certification. I had a great time with my instructors as well -- Boris (if you want he can go military style💪 on you 😁) Ben (might leave you to save yourself (just kidding 😂))and Nivid (will probably save you). Can't wait to go on the ocean clean up dives with them 😊",
    time: 1744374329,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/google.svg",
    sourceName: "Google Review",
  },
  {
    author_name: "Vanessa Rocco",
    author_url:
      "https://www.google.com/maps/contrib/111878170976885954475/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjVE1jKprBN7izKsv52JTSWKg4rerfFgUv1yo1HvHLmurwf8NKLzHw=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "4 months ago",
    text:
      "PADI Open Water. The experience was amazing! The team members are the kindest souls. I had never even done snorkeling so i was a little bit nervous. Their calm and funny attitude while still being safety-focused put me immediately at ease.\n" +
      "The aesthetic of where you do the pool exercises is beautiful!\n" +
      "I chose the “boat” exam as an add on and would highly recommend, especially if you’ve never done diving before.\n" +
      "Special thanks to Noel, Greg and Ben for allowing me in the scuba community",
    time: 1734340021,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/google.svg",
    sourceName: "Google Review",
  },
  {
    author_name: "Alhassan Saeed",
    author_url:
      "https://www.google.com/maps/contrib/107563420710096924372/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjXsOzeHL1QP_u6zL6XwIt2LXM_sjKFpEpWWl5HEqgzP9FqhtKo=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a week ago",
    text: "Very great lesson I had. It' was very impactful and I really enjoyed the training and I do really appreciate the lessons as well. Thank u all the instructors and entire management",
    time: 1745311468,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/trip.svg",
    sourceName: "Tripadvisor",
  },
  {
    author_name: "Senem Akarsu",
    author_url:
      "https://www.google.com/maps/contrib/104703537068279458824/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocKWCO2KjsSmuKNSmoISovnw4gYoNEARb7P_6--STnhOfjt96dY=s128-c0x00000000-cc-rp-mo-ba3",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "Truly super nice crew working there. Always helpful. Find Ahmed and John to assist. If they pick on you, that means they've accepted you as part of their family😁Consequently, I had a wonderful time completing my certification. I had a great time with my instructors as well -- Boris (if you want he can go military style💪 on you 😁) Ben (might leave you to save yourself (just kidding 😂))and Nivid (will probably save you). Can't wait to go on the ocean clean up dives with them 😊",
    time: 1744374329,
    translated: false,
    image: "/images/landing-pages/padi-open-water-course/google.svg",
    sourceName: "Google Review",
  },
];

export const divePackages: DivePackage[] = [
  {
    type: "Solo Explorer",
    id: 1,
    packageName: "Solo Explorer",
    adventure: "1 Dive Adventurer",
    price: "1,499",
    include: [
      "Embark on your own underwater adventure",
      "Perfect for independent spirits",
      "Learn at your own pace",
      "Earn internationally recognized certification",
    ],
  },
  {
    type: "Dive Buddy Pack",
    id: 2,
    packageName: "Dive Buddy Pack",
    adventure: "2 Dive Adventurers",
    price: "1,299",
    include: [
      "Share the adventure with a buddy",
      "Learn and explore together",
      "Fun and memorable experience",
      "Earn certification side by side",
    ],
  },
];

export const contacts: ContactInfo[] = [
  {
    id: 1,
    icon: BiSolidMapPin,
    name: "Villa 604, Al Wasl Road Jumeirah 3, Dubai, United Arab Emirates",
    source: "",
    contactLink: "https://maps.app.goo.gl/zb8qADAw1k3dewXi8",
  },
  {
    id: 2,
    icon: BsFillTelephoneFill,
    name: "+971 432 1 0104",
    source: "(Landline)",
    contactLink: "tel:+971501234567",
  },
  {
    id: 3,
    icon: MdOutlinePhoneIphone,
    name: "+971 50 119 4050",
    source: "(Call/WhatsApp)",
    contactLink: `https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Scuba+Diving+Inquiry%0A${siteConfig.site.origin}/lp/try-scuba-diving`,
  },
  {
    id: 4,
    icon: SiMaildotru,
    name: "info@scubadiving.ae",
    source: "",
    contactLink: "mailto:info@scubadiving.ae",
  },
];

export const newFeatures: NewFeature[] = [
  "PADI ELearning",
  "DAN Insurance",
  "Training Sessions",
  "Traning Days",
  "Full Scuba Gear",
  "Towels, Slippers",
  "Popcorn, Coffee, Slush",
  "Completion Certificate",
  "Membership Discounts",
  "Depth License",
  "Last Session With Boat",
  "Diver Log Book",
  "Physical License Card",
  "Refresh Course (1 Year)",
  "Night Diving",
  "Underwater Navigation",
  "30M Deep Dive",
  "Peak Performance Buoyancy (PPB)",
  "Wreck Dive",
];

export const packagesNew: Package[] = [
  {
    id: 1,
    title: "PREMIUM",
    name: "PREMIUM",
    price: "1,500",
    original_price: "1,500",

    vat: true,
    tag: "Save 40%",
    desc: "Essential training for beginners looking to start their scuba diving journey.",
    features: {
      "PADI ELearning": "Included",
      "DAN Insurance": true,
      "Training Sessions": "Flexible 4 sessions",
      "Traning Days": "4 days",
      "Full Scuba Gear": "Included",
      "Towels, Slippers": true,
      "Popcorn, Coffee, Slush": "Unlimited",
      "Completion Certificate": true,
      "Membership Discounts": "15% Discount",
      "Depth License": "Up to 18 Meters",
      "Last Session With Boat": false,
      "Diver Log Book": false,
      "Physical License Card": false,
      "Refresh Course (1 Year)": "450 AED Per 6 months",
      "Night Diving": null,
      "Underwater Navigation": null,
      "30M Deep Dive": null,
      "Peak Performance Buoyancy (PPB)": null,

      "Wreck Dive": null,
    },
  },
  {
    id: 2,
    name: "PREMIUM",
    title: "PREMIUM PLUS",

    price: "1,900",
    original_price: "1,900",

    vat: true,
    tag: "Save 46%",
    desc: "Ideal for those wanting added perks and a more enhanced dive experience.",
    features: {
      "PADI ELearning": "Included",
      "DAN Insurance": true,
      "Training Sessions": "Flexible up to 6 sessions",
      "Traning Days": "4 days",
      "Full Scuba Gear": "Included",
      "Towels, Slippers": true,
      "Popcorn, Coffee, Slush": "Unlimited",
      "Completion Certificate": true,
      "Membership Discounts": "20% Discount",
      "Depth License": "Up to 18 Meters",
      "Last Session With Boat": true,
      "Diver Log Book": true,
      "Physical License Card": true,
      "Refresh Course (1 Year)": "Free up to 1 year",
      "Night Diving": null,
      "Underwater Navigation": null,
      "30M Deep Dive": null,
      "Peak Performance Buoyancy (PPB)": null,

      "Wreck Dive": null,
    },
  },
  {
    id: 3,
    title: "COMBO",

    name: "COMBO",
    price: "3,200",
    original_price: "1,600", // modified
    vat: true,
    tag: "Save 47%",
    desc: "Open Water Course + Advanced Open Water Course",
    features: {
      "PADI ELearning": "2 Included",
      "DAN Insurance": true,
      "Training Sessions": "Flexible 7 sessions",
      "Traning Days": "4 + 2 days",
      "Full Scuba Gear": "Included",
      "Towels, Slippers": true,
      "Popcorn, Coffee, Slush": "Unlimited",
      "Completion Certificate": true,
      "Membership Discounts": "20% Discount",
      "Depth License": "Up to 30 Meters",
      "Last Session With Boat": true,
      "Diver Log Book": true,
      "Physical License Card": true,
      "Refresh Course (1 Year)": "Free up to 1 year",
      "Night Diving": true,
      "Underwater Navigation": true,
      "30M Deep Dive": true,
      "Peak Performance Buoyancy (PPB)": true,

      "Wreck Dive": true,
    },
  },
];

export const googleExtraData = [
  {
    author_name: "Alejandro Leon Quiroz Callejas",
    author_url:
      "https://www.google.com/maps/contrib/115204624090366644029/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUqQ9sbxZZwb2v9kG3-yNl2qqzEbqVaAV5VRSSSiL9Rdt4ea0Uz=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a month ago",
    text:
      "Great service, amazing education, very thorough customer service and support.\n" +
      "\n" +
      "All the instructors and staff are very kind, understanding and supportive, there was not a single moment where a question was not answered.\n" +
      "Special thanks to Jaber, Greg, Ben and Noel, the best instructors to have, every dive was interesting and fun.\n" +
      "10/10 would recommend if you’re looking to start your diving journey!",
    time: 1743065612,
    translated: false,
  },
  {
    author_name: "Stuart Hooper-Smith",
    author_url:
      "https://www.google.com/maps/contrib/101807591632340683265/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocI0T1HzzG4aiceSbTi53jCcK7K4ZQPQoWeHNgf7xRhxGj0xug=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "2 months ago",
    text:
      "My experience at Bermuda Dive Centre has been fantastic.  All the tutors are highly skilled, professional and friendly.\n" +
      "I would recommend anyone wishing to gain their Open Water certification to come here.\n" +
      "I rate them 100%.",
    time: 1740136575,
    translated: false,
  },
  {
    author_name: "Vanessa Rocco",
    author_url:
      "https://www.google.com/maps/contrib/111878170976885954475/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjVE1jKprBN7izKsv52JTSWKg4rerfFgUv1yo1HvHLmurwf8NKLzHw=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "4 months ago",
    text:
      "PADI Open Water. The experience was amazing! The team members are the kindest souls. I had never even done snorkeling so i was a little bit nervous. Their calm and funny attitude while still being safety-focused put me immediately at ease.\n" +
      "The aesthetic of where you do the pool exercises is beautiful!\n" +
      "I chose the “boat” exam as an add on and would highly recommend, especially if you’ve never done diving before.\n" +
      "Special thanks to Noel, Greg and Ben for allowing me in the scuba community",
    time: 1734340021,
    translated: false,
  },
  {
    author_name: "Alhassan Saeed",
    author_url:
      "https://www.google.com/maps/contrib/107563420710096924372/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjXsOzeHL1QP_u6zL6XwIt2LXM_sjKFpEpWWl5HEqgzP9FqhtKo=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a week ago",
    text: "Very great lesson I had. It' was very impactful and I really enjoyed the training and I do really appreciate the lessons as well. Thank u all the instructors and entire management",
    time: 1745311468,
    translated: false,
  },
  {
    author_name: "Senem Akarsu",
    author_url:
      "https://www.google.com/maps/contrib/104703537068279458824/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocKWCO2KjsSmuKNSmoISovnw4gYoNEARb7P_6--STnhOfjt96dY=s128-c0x00000000-cc-rp-mo-ba3",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "Truly super nice crew working there. Always helpful. Find Ahmed and John to assist. If they pick on you, that means they've accepted you as part of their family😁Consequently, I had a wonderful time completing my certification. I had a great time with my instructors as well -- Boris (if you want he can go military style💪 on you 😁) Ben (might leave you to save yourself (just kidding 😂))and Nivid (will probably save you). Can't wait to go on the ocean clean up dives with them 😊",
    time: 1744374329,
    translated: false,
  },
  {
    author_name: "sheji shereef",
    author_url:
      "https://www.google.com/maps/contrib/104703537068279458824/reviews",
    language: "en",
    original_language: "en",

    time: 1744374329,
    translated: false,
    rating: 5,
    profile_photo_url: getAssetsUrl(
      "/images/pages/home/testi/sheji-sherif.jpg"
    ),
    relative_time_description: null,
    source: "Tripadvisor",

    text: "Wonderful experience… after the dive, u will feel that heaven is in under the sea❤️Must try onces in a life time✌️",
  },
  {
    author_name: "Adeel S",
    author_url:
      "https://www.google.com/maps/contrib/104703537068279458824/reviews",
    language: "en",
    original_language: "en",

    time: 1744374329,
    translated: false,
    rating: 5,
    profile_photo_url: getAssetsUrl("/images/pages/home/testi/adeel-s.jpg"),
    relative_time_description: null,
    source: "Tripadvisor",

    text: "Good experience...great staff. Easy booking and convenient place. It was our first diving experience and we all loved it",
  },
  {
    author_name: "Always E",
    author_url:
      "https://www.google.com/maps/contrib/104703537068279458824/reviews",
    language: "en",
    original_language: "en",

    time: 1744374329,
    translated: false,
    rating: 5,
    profile_photo_url: getAssetsUrl("/images/pages/home/testi/always-e.jpg"),
    relative_time_description: null,
    source: "Tripadvisor",

    text: "Amazing ! Great people and very kind. Professional and give step by step instructions.Highly recommend.",
  },
];
