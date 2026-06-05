'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { COMPANY_PROFILE } from '@/content/home';

export default function CompanyProfileSection() {
  return (
    <section className="border-t border-brand-mint/80 bg-brand-mint/40">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          <SectionHeading
            eyebrow={COMPANY_PROFILE.eyebrow}
            title={COMPANY_PROFILE.title}
            className="mb-4"
          />
          {COMPANY_PROFILE.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-4 text-sm leading-relaxed text-brand-gray-dark md:text-base last:mb-8"
            >
              {paragraph}
            </p>
          ))}
          <Button href={COMPANY_PROFILE.cta.href} variant="ghost">
            {COMPANY_PROFILE.cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
