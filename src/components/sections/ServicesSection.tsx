'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/cards/ServiceCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES_SECTION } from '@/content/home';
import { SERVICES } from '@/content/services';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-16 container mx-auto w-full max-w-5xl px-4 py-12 md:px-6 md:py-20"
    >
      <motion.div
        className="mb-8 md:mb-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeading {...SERVICES_SECTION} />
      </motion.div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
