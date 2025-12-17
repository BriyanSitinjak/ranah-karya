import Link from "next/link";
import type { HeroCardProps } from "@/types";

export default function HeroCard({ service }: HeroCardProps) {
  return (
    <Link
      href={service.href}
      className="group relative flex h-80 w-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg md:h-96"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Service
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          {service.title}
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
          {service.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 text-sm font-semibold text-slate-900">
        <span className="inline-flex items-center gap-1.5">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-white">
          {service.id === "printing-advertising" ? "Print & Ads" : "Interior"}
        </span>
      </div>
    </Link>
  );
}


