import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
export type CourseHighlight = {
  id: number;
  mainTitle: string;
  title: string;
  text: string;
  tag: string[];
  tagText: string[];
  image: string | StaticImageData;
};

export type CourseType = {
  title: string;
  desc: string;
  image: string | StaticImageData;
};

export type Course = {
  id: number;
  short_name: string;
  price: number;
  promo_price: number;
  from?: string;
  type?: string;
  add_ons?: any[];
};

export type PackageType = {
  id: number;
  title: string;
};

export type MarqueeImage = {
  id: number;
  image: string | StaticImageData;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type Review = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
  image: string | StaticImageData;
  sourceName: string;
};

export type DivePackage = {
  type: string;
  id: number;
  packageName: string;
  adventure: string;
  price: string;
  include: string[];
};

export type ContactInfo = {
  id: number;
  icon: IconType;
  name: string;
  source: string;
  contactLink: string;
};

export type NewFeature =
  | "PADI ELearning"
  | "DAN Insurance"
  | "Training Sessions"
  | "Traning Days"
  | "Full Scuba Gear"
  | "Towels, Slippers"
  | "Popcorn, Coffee, Slush"
  | "Completion Certificate"
  | "Membership Discounts"
  | "Depth License"
  | "Last Session With Boat"
  | "Diver Log Book"
  | "Physical License Card"
  | "Refresh Course (1 Year)"
  | "Night Diving"
  | "Underwater Navigation"
  | "30M Deep Dive"
  | "Peak Performance Buoyancy (PPB)"
  | "Wreck Dive";

export type PackageFeatureValue = string | boolean;

export interface PackageFeatures {
  "PADI ELearning": PackageFeatureValue;
  "DAN Insurance": PackageFeatureValue;
  "Training Sessions": PackageFeatureValue;
  "Traning Days": PackageFeatureValue;
  "Full Scuba Gear": PackageFeatureValue;
  "Towels, Slippers": PackageFeatureValue;
  "Popcorn, Coffee, Slush": PackageFeatureValue;
  "Completion Certificate": PackageFeatureValue;
  "Membership Discounts": PackageFeatureValue;
  "Depth License": PackageFeatureValue;
  "Last Session With Boat": PackageFeatureValue;
  "Diver Log Book": PackageFeatureValue;
  "Physical License Card": PackageFeatureValue;
  "Refresh Course (1 Year)": PackageFeatureValue;
  "Night Diving": PackageFeatureValue;
  "Underwater Navigation": PackageFeatureValue;
  "30M Deep Dive": PackageFeatureValue;
  "Peak Performance Buoyancy (PPB)": PackageFeatureValue;
  "Wreck Dive": PackageFeatureValue;
}

export interface Package {
  id: number;
  name: string;
  title: string;
  desc: string;
  price: string;
  original_price: string;
  vat: boolean;
  tag?: string;
  features: PackageFeatures;
}
