import Link from "next/link";
import Button from "@/components/ui/Button";
import { COMING_SOON_DEFAULTS } from "@/content/pages";
import type { ComingSoonContent } from "@/types";

export default function ComingSoonPage({
  eyebrow,
  title,
  description,
  backHref = COMING_SOON_DEFAULTS.backHref,
  backLabel = COMING_SOON_DEFAULTS.backLabel,
}: ComingSoonContent) {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-lg rounded-2xl border border-brand-gray/40 bg-brand-white p-6 text-center shadow-sm sm:p-8 md:p-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
          {eyebrow}
        </p>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
          {title}
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-brand-gray-dark sm:text-base">
          {description}
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href={backHref} variant="ghost">
            {backLabel}
          </Button>
          <Link
            href={COMING_SOON_DEFAULTS.contactHref}
            className="text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-dark"
          >
            {COMING_SOON_DEFAULTS.contactLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
