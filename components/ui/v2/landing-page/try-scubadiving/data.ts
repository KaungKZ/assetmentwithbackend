import {
  ScubaCourseHighlight,
  ScubaCourseType,
  ScubaNewFeature,
  ScubaPackage,
  ScubaPackageType,
} from "./types";


import { FAQ } from "../open-water/types";
export const ScubacourseType: ScubaCourseType[] = [
  {
    title: "Begin Your Diving Experience",
    desc: "Discover if scuba diving is the right adventure for you.",
    image: "/images/landing-pages/padi-open-water-course/cust1.webp",
  },
  {
    title: "Breathe Beneath the Surface",
    desc: "Experience what it feels like to breathe underwater for the first time.",
    image: "/images/landing-pages/padi-open-water-course/cust2.webp",
  },
  {
    title: "Explore a Hidden World",
    desc: "Discover the beauty and wonder of the underwater environment.",
    image: "/images/landing-pages/padi-open-water-course/cust3.webp",
  },
  {
    title: "Hands-On Learning",
    desc: "Use real scuba gear and gain a basic understanding of how it works.",
    image: "/images/landing-pages/padi-open-water-course/cust4.webp",
  },
  {
    title: "Build Confidence for the Future",
    desc: "Learn essential skills that prepare you for your next scuba diving adventure.",
    image: "/images/landing-pages/padi-open-water-course/cust5.webp",
  },
];

export const ScubapackageType: ScubaPackageType[] = [
  { id: 1, title: "Comfortable transportation from our dive center to the dive site" },
  { id: 2, title: "Full use of high-quality scuba gear" },
  { id: 3, title: "Towels and slippers for your convenience" },
  { id: 4, title: "Refreshments including popcorn, juices, coffee, slush, and water" },
  { id: 5, title: "Underwater photos and videos to capture your experience" },
  { id: 6, title: "Certification of completion" },

];

export const ScubacourseHighlights: ScubaCourseHighlight[] = [
  {
    id: 1,
    mainTitle: "Basic Knowledge",
    title: "Classroom Briefing",
    text: "At Bermuda Diving Center, we prioritize proper training for a safe and enjoyable dive. Learn scuba gear basics, hand signals, and safety in a quick, comprehensive briefing—so you feel confident before entering the water.",
    tag: ["Duration"],
    tagText: ["30 mins"],
    image: "/images/landing-pages/try-scubadiving/highlight1.webp",
  },
  {
    id: 2,
    mainTitle: "Practical Knowledge",
    title: "Shallow Water Training",
    text: "Practice your scuba skills in shallow waters with the support of our expert instructors. Learn how to use your gear confidently and safely as you take your first steps underwater—knowing you're in experienced and trusted hands with Bermuda Diving Center.",
    tag: ["Duration"],
    tagText: ["30 mins"],
    image: "/images/landing-pages/try-scubadiving/highlight2.webp",
  },
  {
    id: 3,
    mainTitle: "Discover Underwater",
    title: "Scuba Diving Experience",
    text: "The moment you've been waiting for is here! Begin your scuba diving adventure with expert instructors, diving from shallow waters to depths of 6–8 meters (20–26 feet). Swim alongside vibrant marine life and enjoy close-up encounters—captured in unforgettable photos and videos to cherish forever.",
    tag: ["Duration"],
    tagText: ["30 - 45 mins"],
    image: "/images/landing-pages/try-scubadiving/highlight3.webp",
  },
];

export const ScubafaqData: FAQ[] = [
  {
    id: 1,
    question: "Available Languages?",
    answer:
      "English, Arabic, Hindi, Tagalog, Urdu, Malayalam.",
  },
  {
    id: 2,
    question:
      "Time Commitment?",
    answer: "Entire program: 3 - 4 hours",
  },
  {
    id: 3,
    question:
      "Swimming skills are required?",
    answer:
      "Having knowledge of swimming skills are not required to try scuba diving.",
  },
  {
    id: 4,
    question:
      "What we can see underwater?",
    answer:
      "There is different kinds of sea creatures to see underwater in our diving sit: Angel fish, Goby fish, Pistol shrimp, shells, hermit crabs, sea urchins, sea horsesand if you're lucky Turtles.",
  },
  {
    id: 5,
    question: "Is it possible to dive with contact lens or glasses?",
    answer:
      "Underwater everything looks 33% visually larger than outside of the water. Using soft contact lenses are fine. Anyway we will provide you pre-powered masks upon your requests, free of charge.",
  },
  {
    id: 6,
    question: "What's the minimum age?",
    answer:
      "Minimum 10 years and above",
  },
  {
    id: 7,
    question:
      "Can we celebrate our special occasions?",
    answer:
      "Underwater proposals, birthday surprises and anniversary celebrations are done as a complimentary based on prior requests.",
  },
  {
    id: 8,
    question: "Should i buy scuba gear?",
    answer: "No, We will provide all the equipments needed for the dive. All you have to bring is your swim wear.",
  },
];

export const ScubanewFeatures: ScubaNewFeature[] = [
  "Boat Trip",
  "Dives",
  "Underwater Photos",
  "Diving Eqiupments",
  "Maximum Depth",
  "Towels, Slippers (For Use)",
"Completion Certificate",
 "Course Discounts",
  "Classroom Session",
  "Boat Ride",
  "Lunch And Fruits",
  "Snorkeling",
  "Pick & Drop Off (Dubai)",
"1-On-1 Private Instructor",]


export const ScubapackagesNew: ScubaPackage[] = [
  {
    id: 1,
    name: "BASIC TRY DIVE",
    price: "395",
    vat: true,
    tag: "500",
    desc: "Great for first-timers seeking a simple and safe dive from the beach.",
    features: {
      "Boat Trip":false,
  "Dives":"1 Beach Dive",
  "Underwater Photos":true,
  "Diving Eqiupments":true,
  "Maximum Depth":"6-8 meters",
  "Towels, Slippers (For Use)":true,

  "Completion Certificate":true,
  "Course Discounts": "15% Discount",
  "Classroom Session":true,
  "Boat Ride":false,
  "Lunch And Fruits":false,
  "Snorkeling":false,
  "Pick & Drop Off (Dubai)":false,

  "1-On-1 Private Instructor":false,
    },
  },
  {
    id: 2,
    name: "BOAT TRY DIVE",
    price: "495",
    vat: true,
    tag: "1,199",
    desc: "Ideal for those ready to explore both pool and sea diving with added value.",
       features: {
      "Boat Trip":true,
  "Dives":"1 Pool Dive + 1 Open Sea Dive",
  "Underwater Photos":true,
  "Diving Eqiupments":true,
  "Maximum Depth":"10-12 meters",
  "Towels, Slippers (For Use)":true,

  "Completion Certificate":true,
  "Course Discounts": "20% Discount",
  "Classroom Session":true,
  "Boat Ride":true,
  "Lunch And Fruits":true,
  "Snorkeling":false,
  "Pick & Drop Off (Dubai)":false,
 
  "1-On-1 Private Instructor":false,
    },
  },
  {
    id: 3,
    name: "VIP BOAT TRY DIVE ",
    price: "900",
    vat: true,
    tag: "1,500",
    desc: "Ultimate dive experience with personal instructor and extra amenities.",
    features: {
      "Boat Trip":true,
  "Dives":"1 Pool Dive + 1 Open Sea Dive",
  "Underwater Photos":true,
  "Diving Eqiupments":true,
  "Maximum Depth":"10-12 meters",
  "Towels, Slippers (For Use)":true,

  "Completion Certificate":true,
   "Course Discounts": "20% Discount",
  "Classroom Session":true,
  "Boat Ride":true,
  "Lunch And Fruits":true,
  "Snorkeling":true,
  "Pick & Drop Off (Dubai)":true,

  "1-On-1 Private Instructor":"1-On-1 instructor",
    },
  },
];
export const ScubaserviceImgList = [
   { id: 1, src: "/images/landing-pages/try-scubadiving/serviceImg1.webp" },
  { id: 2, src: "/images/landing-pages/try-scubadiving/serviceImg2.webp" },
  { id: 3, src: "/images/landing-pages/try-scubadiving/serviceImg3.webp" },
  { id: 4, src: "/images/landing-pages/try-scubadiving/serviceImg4.webp" },
  { id: 5, src: "/images/landing-pages/try-scubadiving/serviceImg5.webp" },
  { id: 6, src: "/images/landing-pages/try-scubadiving/serviceImg6.webp" },
  { id: 7, src: "/images/landing-pages/try-scubadiving/serviceImg7.webp" },
  { id: 8, src: "/images/landing-pages/try-scubadiving/serviceImg8.webp" },
  { id: 9, src: "/images/landing-pages/try-scubadiving/serviceImg9.webp" },
  { id: 10, src: "/images/landing-pages/try-scubadiving/serviceImg10.webp" },
  { id: 11, src: "/images/landing-pages/try-scubadiving/serviceImg11.webp" },
  { id: 12, src: "/images/landing-pages/try-scubadiving/serviceImg12.webp" },
  { id: 13, src: "/images/landing-pages/try-scubadiving/serviceImg13.webp" },
  { id: 14, src: "/images/landing-pages/try-scubadiving/serviceImg14.webp" },
  { id: 15, src: "/images/landing-pages/try-scubadiving/serviceImg15.webp" },
]

