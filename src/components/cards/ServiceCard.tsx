'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Service } from '@/types';

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={service.href}
        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-brand-gray/40 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-xl sm:min-h-[300px] md:p-7"
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-primary/5 transition-transform duration-500 group-hover:scale-150"
          aria-hidden="true"
        />

        <div className="relative space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Service
          </p>
          <h3 className="text-xl font-bold tracking-tight text-brand-dark transition-colors group-hover:text-brand-primary sm:text-2xl">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-brand-gray-dark">
            {service.description}
          </p>
        </div>

        <div className="relative mt-6 flex items-center justify-between border-t border-brand-gray/30 pt-5">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
            Explore
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
          <span className="rounded-full bg-brand-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-white transition-colors group-hover:bg-brand-primary-dark sm:text-xs">
            {service.tag}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
