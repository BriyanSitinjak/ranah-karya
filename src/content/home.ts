import { ROUTES } from "@/config/routes";

export const HERO_CONTENT = {
  eyebrow: "Creative Studio · Printing · Interior Design",
  title: "Build Your Idea",
  description:
    "Integrated printing, advertising, and interior design specialist. We help businesses communicate clearly through high-quality materials, compelling brand visuals, and spaces aligned with who you are.",
  primaryCta: { label: "Explore Services", href: ROUTES.services },
  secondaryCta: { label: "Get in Touch", href: ROUTES.contact },
  badge: { initials: "RK", subtitle: "Est. Creative" },
} as const;

export const SERVICES_SECTION = {
  eyebrow: "What We Do",
  title: "Services",
  description:
    "Two main service pillars tailored to your brand, scale, and budget.",
} as const;

export const COMPANY_PROFILE = {
  eyebrow: "About Us",
  title: "Company Profile",
  paragraphs: [
    "PT. Ranah Karya Ekasindo is a printing, advertising and interior design studio focused on practical outcomes. We collaborate with SMEs, corporates, and individuals to translate ideas into clear, visual outputs.",
    "Our process is straightforward: understand your objectives, define the visual direction, then execute with attention to detail and production quality.",
  ],
  cta: { label: "Learn More About Us", href: ROUTES.about },
} as const;
