'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/config/routes';
import { HERO_CONTENT } from '@/content/home';
import { fadeUpItem, fadeUpStagger } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent calc(33.33% - 0.5px), white calc(33.33% - 0.5px), white calc(33.33% + 0.5px))',
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-cream/10 md:-right-16 md:top-1/2 md:h-80 md:w-80 md:-translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 right-0 h-32 w-32 bg-brand-mint/30 md:bottom-0 md:h-48 md:w-48"
        style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto grid items-center gap-10 px-4 py-12 md:grid-cols-[1fr_auto] md:gap-12 md:px-6 md:py-20 lg:py-24">
        <motion.div
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          variants={fadeUpStagger}
        >
          <motion.p
            variants={fadeUpItem}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-white/75 sm:text-sm"
          >
            {HERO_CONTENT.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUpItem}
            className="mb-5 text-4xl font-bold uppercase leading-[1.1] tracking-tight text-brand-white sm:text-5xl lg:text-6xl"
          >
            {HERO_CONTENT.title}
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="mb-8 max-w-lg text-sm leading-relaxed text-brand-white/90 sm:text-base"
          >
            {HERO_CONTENT.description}
          </motion.p>
          <motion.div
            variants={fadeUpItem}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href={HERO_CONTENT.primaryCta.href} variant="primary">
              {HERO_CONTENT.primaryCta.label}
            </Button>
            <Button href={HERO_CONTENT.secondaryCta.href} variant="secondary">
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative h-56 w-56 lg:h-64 lg:w-64">
            <div className="absolute inset-0 rounded-full bg-brand-cream/20" />
            <div className="absolute inset-4 rounded-full border border-brand-white/20 bg-brand-cream/10 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-brand-white/90 lg:text-6xl">
                  {HERO_CONTENT.badge.initials}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-brand-white/60">
                  {HERO_CONTENT.badge.subtitle}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href={ROUTES.services}
          className="flex flex-col items-center gap-1 text-brand-white/50 transition-colors hover:text-brand-white/80"
          aria-label="Scroll to services"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-sm"
          >
            ↓
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
