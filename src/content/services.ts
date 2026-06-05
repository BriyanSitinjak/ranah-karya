import { ROUTES } from "@/config/routes";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "printing-advertising",
    tag: "Print & Ads",
    title: "Printing & Advertising",
    description:
      "High-quality print production and impactful advertising assets for your brand: business cards, brochures, banners, and more.",
    href: ROUTES.printing,
  },
  {
    id: "interior-design",
    tag: "Interior",
    title: "Interior Design",
    description:
      "Thoughtful, functional interior concepts for commercial and residential spaces with a focus on brand identity.",
    href: ROUTES.interior,
  },
];
