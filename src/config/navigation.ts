import { ROUTES } from "@/config/routes";

export const NAV_ITEMS = [
  {
    label: "Services",
    href: ROUTES.services,
    children: [
      { label: "Printing & Advertising", href: ROUTES.printing },
      { label: "Interior Design", href: ROUTES.interior },
    ],
  },
  { label: "Clients", href: ROUTES.clients },
  { label: "About", href: ROUTES.about },
] as const;

export const FOOTER_ITEMS = [
  { label: "Services", href: ROUTES.services },
  { label: "Clients", href: ROUTES.clients },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
] as const;

export const CTA = {
  label: "Contact Us",
  href: ROUTES.contact,
} as const;
