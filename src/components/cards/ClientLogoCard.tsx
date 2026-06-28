'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Client } from '@/types';

type ClientLogoCardProps = {
  client: Client;
  index?: number;
};

export default function ClientLogoCard({ client, index = 0 }: ClientLogoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-gray/40 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg"
    >
      <div className="relative mx-auto mb-4 flex h-24 w-full max-w-[180px] items-center justify-center sm:h-28">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          fill
          sizes="(max-width: 768px) 160px, 180px"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-auto border-t border-brand-gray/30 pt-4 text-center text-sm font-semibold text-brand-dark">
        {client.name}
      </p>
    </motion.article>
  );
}
