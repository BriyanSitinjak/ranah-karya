/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: "Ranah Karya",
  description: "Creative excellence in printing, advertising, and interior design",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const ROUTES = {
  home: "/",
  printing: "/printing-advertising",
  interior: "/interior-design",
  clients: "/clients",
  about: "/about",
  contact: "/contact",
} as const;


