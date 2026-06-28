'use client';

import { motion } from 'framer-motion';
import ClientLogoCard from '@/components/cards/ClientLogoCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { CLIENTS, CLIENTS_PAGE } from '@/content/clients';

export default function ClientsShowcaseSection() {
  return (
    <>
      <section className="container mx-auto w-full max-w-5xl px-4 py-12 md:px-6 md:py-20">
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          <SectionHeading {...CLIENTS_PAGE} titleAs="h1" />
        </motion.div>

        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {CLIENTS.map((client, index) => (
            <li key={client.id}>
              <ClientLogoCard client={client} index={index} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-mint/80 bg-brand-mint/40">
        <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">
          <motion.div
            className="mx-auto flex max-w-xl flex-col items-center text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <p className="mb-6 text-sm leading-relaxed text-brand-gray-dark md:text-base">
              Looking for a partner for your next print, campaign, or interior project?
              We would love to hear about your goals.
            </p>
            <Button href={CLIENTS_PAGE.cta.href} variant="ghost">
              {CLIENTS_PAGE.cta.label}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
