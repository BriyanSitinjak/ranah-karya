import Link from "next/link";
import { FOOTER_ITEMS } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-gray/40 bg-brand-dark text-brand-white">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-sm font-semibold tracking-wide">
            {SITE_CONFIG.name}
          </p>
          <p className="mt-1 text-xs text-brand-gray">{SITE_CONFIG.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {FOOTER_ITEMS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-gray transition-colors hover:text-brand-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
