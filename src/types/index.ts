export interface Service {
  id: string;
  tag: string;
  title: string;
  description: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
}

export interface SectionHeadingContent {
  eyebrow: string;
  title: string;
  description?: string;
}

export interface ComingSoonContent {
  eyebrow: string;
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}

export interface CtaLink {
  label: string;
  href: string;
}
