import { ROUTES } from "@/config/routes";
import type { ComingSoonContent } from "@/types";

export const COMING_SOON_PAGES = {
  about: {
    eyebrow: "About",
    title: "About Us Coming Soon",
    description:
      "We're preparing a concise overview of our background, approach, and team. In the meantime, the home page and services sections give a quick snapshot of what we do.",
  },
  clients: {
    eyebrow: "Clients",
    title: "Client Showcase Coming Soon",
    description:
      "This section will highlight selected collaborations, case studies, and brands we've worked with. For now, please reach out via the contact page for references and work samples.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact Page Coming Soon",
    description:
      "A simple contact form and direct contact details will be added here. For now, please use your preferred channel to reach us once it is defined.",
  },
  printing: {
    eyebrow: "Services · Printing & Advertising",
    title: "Printing & Advertising Coming Soon",
    description:
      "This page will break down our printing and advertising capabilities: small-format, large-format, signage, campaign assets, and more. For now, please use the service cards on the home page as a quick overview.",
  },
  interior: {
    eyebrow: "Services · Interior Design",
    title: "Interior Design Coming Soon",
    description:
      "This page will describe how we approach interior design projects, from discovery and layout planning to material selection and implementation. For now, please refer to the company profile on the home page.",
  },
} as const satisfies Record<string, ComingSoonContent>;

export const COMING_SOON_DEFAULTS = {
  backHref: ROUTES.home,
  backLabel: "Back to Home",
  contactHref: ROUTES.contact,
  contactLabel: "Contact us instead →",
} as const;
