import { ROUTES } from "@/config/routes";
import type { Client } from "@/types";

export const CLIENTS_PAGE = {
  eyebrow: "Clients",
  title: "Brands We Work With",
  description:
    "A selection of businesses and organizations that have trusted us with their printing, advertising, and interior design needs.",
  cta: {
    label: "Start a Project",
    href: ROUTES.contact,
  },
} as const;

export const CLIENTS: Client[] = [
  {
    id: "aleza",
    name: "Aleza",
    logo: "/clients/aleza.png",
  },
  {
    id: "ats-hardware",
    name: "ATS Hardware",
    logo: "/clients/ats_hardware.png",
  },
  {
    id: "euronindo",
    name: "Euronindo",
    logo: "/clients/euronindo.png",
  },
  {
    id: "inter-x-folder",
    name: "Inter X Folder",
    logo: "/clients/inter_x_folder.jpeg",
  },
  {
    id: "pt-eropa-fragrance-indonesia",
    name: "PT Eropa Fragrance Indonesia",
    logo: "/clients/pt_eropa_fragance_indonesia.jpeg",
  },
];
