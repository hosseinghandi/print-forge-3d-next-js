import type { IconType } from "react-icons";

export type NavLinks = {
  link: string;
  label: string;
  aria: string;
};

export type FeaturesList = {
  Icon: IconType;
  title: string;
  desc: string;
};

export type IconList = Record<string, IconType>;

export type Filter = {
  label: string;
  slug: string;
};
export type FilterList = Filter[];
