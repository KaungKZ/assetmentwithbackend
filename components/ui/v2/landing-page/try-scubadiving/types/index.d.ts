export type ScubaCourseType = {
  title: string;
  desc: string;
  image: string | StaticImageData;
};

export type ScubaPackageType = {
  id: number;
  title: string;
};

export type ScubaCourseHighlight = {
  id: number;
  mainTitle: string;
  title: string;
  text: string;
  tag: string[];
  tagText: string[];
  image: string | StaticImageData;
};

export type ScubaNewFeature =
  | "Boat Trip"
  | "Dives"
  | "Underwater Photos"
  | "Diving Eqiupments"
  | "Maximum Depth"
  | "Towels, Slippers (For Use)"
  | "Popcorn, Coffee, Slush"
  | "Completion Certificate"
  | "Course Discounts"
  | "Classroom Session"
  | "Boat Ride"
  | "Lunch And Fruits"
  | "Snorkeling"
  | "Pick & Drop Off (Dubai)"
  | "1-On-1 Private Instructor";

export type ScubaPackageFeatureValue = string | boolean;
export interface ScubaPackageFeatures {
  "Boat Trip": ScubaPackageFeatureValue;
  Dives: ScubaPackageFeatureValue;
  "Underwater Photos": ScubaPackageFeatureValue;
  "Diving Eqiupments": ScubaPackageFeatureValue;
  "Maximum Depth": ScubaPackageFeatureValue;
  "Towels, Slippers (For Use)": ScubaPackageFeatureValue;
  "Popcorn, Coffee, Slush": ScubaPackageFeatureValue;
  "Completion Certificate": ScubaPackageFeatureValue;
  "Course Discounts": ScubaPackageFeatureValue;
  "Classroom Session": ScubaPackageFeatureValue;
  "Boat Ride": ScubaPackageFeatureValue;
  "Lunch And Fruits": ScubaPackageFeatureValue;
  Snorkeling: ScubaPackageFeatureValue;
  "Pick & Drop Off (Dubai)": ScubaPackageFeatureValue;

  "1-On-1 Private Instructor": ScubaPackageFeatureValue;
}

export interface ScubaPackage {
  id: number;
  name: string;
  desc: string;
  price: string;
  vat: boolean;
  tag?: string;
  features: PackageFeatures;
}
