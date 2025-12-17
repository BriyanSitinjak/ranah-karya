'use client';

import { motion } from 'framer-motion';
import HeroCard from '@/components/HeroCard';
import { services } from '@/data/services';

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-slate-50">
      {/* Hero */}
      <section className="flex flex-1 items-center w-full">
        <div className="container mx-auto px-4 py-10 md:px-6 md:py-16">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Printing · Advertising · Interior Design
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Visual solutions for brands and spaces.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Ranah Karya helps businesses communicate clearly through
              high-quality printed materials, compelling brand visuals, and
              interior design that feels aligned with who you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="container mx-auto w-full max-w-5xl px-4 pb-10 md:px-6 md:pb-16"
      >
        <motion.div
          className="mb-6 flex flex-col items-center text-center md:mb-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            Services
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
            Two main service pillars: printing & advertising, and interior
            design. Each can be tailored to your brand, scale, and budget.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 md:gap-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          {services.map((service) => (
            <HeroCard key={service.id} service={service} />
          ))}
        </motion.div>
      </section>

      {/* Company Profile */}
      <section className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">
          <motion.div
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Company Profile
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-600 md:text-base">
              Ranah Karya is a printing, advertising and interior design studio
              focused on practical outcomes. We collaborate with SMEs,
              corporates, and individuals to translate ideas into clear, visual
              outputs—whether that&apos;s signage, campaign materials, or a
              refreshed interior space.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Our process is straightforward: understand your objectives,
              define the visual direction, then execute with attention to
              detail and production quality.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


