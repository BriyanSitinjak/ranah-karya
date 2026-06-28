import type { Metadata } from "next";
import ClientsPage from "@/components/pages/ClientsPage";
import { CLIENTS_PAGE } from "@/content/clients";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: CLIENTS_PAGE.title,
  description: CLIENTS_PAGE.description,
  openGraph: {
    title: `${CLIENTS_PAGE.title} | ${SITE_CONFIG.shortName}`,
    description: CLIENTS_PAGE.description,
  },
};

export default function Page() {
  return <ClientsPage />;
}
