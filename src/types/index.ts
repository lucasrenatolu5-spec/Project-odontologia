import type { ReactNode } from "react";

export interface NavLink {
  href: string;
  label: string;
}

export interface Benefit {
  icon: ReactNode;
  title: string;
  desc: string;
  from: string;
  to: string;
  iconBg: string;
  iconColor: string;
}

export interface Treatment {
  icon: ReactNode;
  title: string;
  desc: string;
  color: string;
}

export interface CaseStudy {
  title: string;
  desc: string;
  img: string;
  duration: string;
  tag: string;
}

export interface Testimonial {
  name: string;
  photo: string;
  rating: number;
  text: string;
  treatment: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: ReactNode;
}

export interface FAQItem {
  q: string;
  a: string;
}

export type WAButtonSize = "sm" | "md" | "lg";
