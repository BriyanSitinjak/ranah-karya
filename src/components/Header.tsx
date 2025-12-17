'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Printing & Advertising', href: '/printing-advertising' },
      { label: 'Interior Design', href: '/interior-design' },
    ],
  },
  { label: 'Clients', href: '/clients' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href: string) =>
    href !== '#services' && pathname.startsWith(href);

  function handleDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }
  function closeDropdown() {
    setOpenDropdown(null);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900"
          onClick={closeMenu}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
            RK
          </span>
          <span className="hidden text-base md:inline">Ranah Karya</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                  onClick={() => handleDropdown(link.label)}
                  onBlur={closeDropdown}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === link.label}
                >
                  <span>{link.label}</span>
                  <span className="text-xs">
                    {openDropdown === link.label ? '▴' : '▾'}
                  </span>
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                            onClick={() => {
                              closeDropdown();
                              closeMenu();
                            }}
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
                className={`rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-gray-100 ${
                  isActive(link.href)
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <motion.span
            animate={isMenuOpen ? 'open' : 'closed'}
            className="relative block h-5 w-5"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: -4 },
                open: { rotate: 45, y: 0 },
              }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gray-900"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gray-900"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 4 },
                open: { rotate: -45, y: 0 },
              }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gray-900"
            />
          </motion.span>
        </button>
      </nav>

      {/* Mobile Nav Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-b border-gray-200 bg-white md:hidden"
          >
            <div className="container mx-auto space-y-1 px-4 pb-4 pt-2 text-sm font-medium text-gray-700">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="space-y-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-gray-50"
                      onClick={() => handleDropdown(link.label)}
                      aria-haspopup="menu"
                      aria-expanded={openDropdown === link.label}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs">
                        {openDropdown === link.label ? '▴' : '▾'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="space-y-1 rounded-lg bg-gray-50 px-2 py-1"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => {
                                closeMenu();
                                closeDropdown();
                              }}
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
                    className={`block rounded-lg px-3 py-2 hover:bg-gray-50 ${
                      isActive(link.href)
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'text-gray-700'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


