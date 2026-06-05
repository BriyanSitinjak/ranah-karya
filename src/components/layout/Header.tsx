'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '@/components/layout/BrandLogo';
import Button from '@/components/ui/Button';
import { CTA, NAV_ITEMS } from '@/config/navigation';
import { ROUTES } from '@/config/routes';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href: string) => {
    if (href === ROUTES.services) return pathname === ROUTES.home;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-brand-primary-dark/20 bg-brand-primary shadow-sm">
      <nav className="container mx-auto flex h-14 items-center justify-between gap-4 px-4 md:h-16 md:px-6">
        <BrandLogo onClick={closeMenu} />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((link) =>
            'children' in link ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-white/15 ${
                    isActive(link.href)
                      ? 'text-brand-white'
                      : 'text-brand-white/90'
                  }`}
                >
                  {link.label}
                  <span className="text-[10px] opacity-70">▾</span>
                </Link>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-40 w-52 pt-1"
                    >
                      <div className="overflow-hidden rounded-xl border border-brand-gray/30 bg-brand-cream py-1 shadow-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-brand-dark transition-colors hover:bg-brand-mint/70"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-white/15 ${
                  isActive(link.href)
                    ? 'bg-brand-white/20 text-brand-white'
                    : 'text-brand-white/90'
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
          <Button
            href={CTA.href}
            variant="primary"
            className="ml-2 px-4! py-2! text-xs"
          >
            {CTA.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-white transition-colors hover:bg-brand-white/15 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <motion.span
            animate={isMenuOpen ? 'open' : 'closed'}
            className="relative block h-4 w-5"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: -5 },
                open: { rotate: 45, y: 0 },
              }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-brand-white"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-brand-white"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 5 },
                open: { rotate: -45, y: 0 },
              }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-brand-white"
            />
          </motion.span>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-brand-white/10 lg:hidden"
          >
            <div className="container mx-auto space-y-1 px-4 py-3">
              {NAV_ITEMS.map((link) =>
                'children' in link ? (
                  <div key={link.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-brand-white hover:bg-brand-white/10"
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === link.label ? null : link.label,
                        )
                      }
                    >
                      {link.label}
                      <span className="text-xs opacity-70">
                        {openDropdown === link.label ? '▴' : '▾'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-3"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-3 py-2 text-sm text-brand-white/90 hover:bg-brand-white/10"
                              onClick={closeMenu}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-brand-white/10 ${
                      isActive(link.href)
                        ? 'bg-brand-white/15 text-brand-white'
                        : 'text-brand-white/90'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <div className="pt-2">
                <Button
                  href={CTA.href}
                  variant="primary"
                  className="w-full"
                  onClick={closeMenu}
                >
                  {CTA.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
