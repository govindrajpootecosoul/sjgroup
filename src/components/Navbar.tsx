'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import SjLogo from './SJ Group.png';

interface NavItem {
  labelKey: string;
  href: string;
  children?: { labelKey: string; href: string; descriptionKey?: string }[];
}

const navItems: NavItem[] = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.about', href: '/about' },
  {
    labelKey: 'nav.services',
    href: '/services',
    children: [
      { labelKey: 'services.melora.title', href: '/services/melora', descriptionKey: 'services.melora.subtitle' },
      { labelKey: 'services.jivapure.title', href: '/services/jivapure', descriptionKey: 'services.jivapure.subtitle' },
      { labelKey: 'services.sjtech.title', href: '/services/sj-tech', descriptionKey: 'services.sjtech.subtitle' },
    ],
  },
  { labelKey: 'nav.products', href: '/products' },
  { labelKey: 'nav.contact', href: '/contact' },
];

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Check if we're on the home page for transparent nav
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Determine nav styling based on page and scroll
  const navBackground = isHomePage && !isScrolled
    ? 'bg-transparent'
    : 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--nav-border)]';
  
  // Desktop nav text colors
  const textColor = 'text-white';
  const activeTextColor = 'text-[#ff8a33] font-semibold';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-transparent"
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={SjLogo}
                  alt="SJ Group logo"
                  className="w-10 h-10 object-contain"
                  priority
                />
              </motion.div>
              <span className={`text-xl font-bold transition-all duration-300 ${
                isHomePage && !isScrolled ? 'text-white' : 'text-[var(--foreground)]'
              } group-hover:text-[var(--primary)]`}>
                SJ Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navItems.map((item) => (
                <div key={item.labelKey} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.labelKey ? null : item.labelKey)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(item.href) ? activeTextColor : `${textColor} hover:text-[#DAE0F2]`
                      }`}
                    >
                      {t(item.labelKey)}
                      <motion.div
                        animate={{ rotate: activeDropdown === item.labelKey ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(item.href) ? activeTextColor : `${textColor} hover:text-[#DAE0F2]`
                      }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.labelKey && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-[var(--card-bg)] rounded-2xl p-2 border border-[var(--card-border)] shadow-lg"
                      >
                        {item.children.map((child, index) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="p-3 rounded-xl hover:bg-[var(--background-secondary)] transition-all duration-200 group"
                            >
                              <div className="font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                                {t(child.labelKey)}
                              </div>
                              {child.descriptionKey && (
                                <div className="text-xs text-[var(--foreground-muted)] mt-0.5">
                                  {t(child.descriptionKey)}
                                </div>
                              )}
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-12 h-12 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-[var(--foreground)]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-[var(--foreground)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-[var(--background)] border-l border-[var(--glass-border)] p-6 pt-24 overflow-y-auto"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.labelKey}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.labelKey ? null : item.labelKey)}
                          className="flex items-center justify-between w-full p-4 rounded-xl text-lg font-medium text-[var(--foreground)] hover:bg-[var(--background-secondary)] transition-all"
                        >
                          {t(item.labelKey)}
                          <motion.div
                            animate={{ rotate: activeDropdown === item.labelKey ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.labelKey && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1 py-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-3 rounded-xl text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-secondary)] transition-all"
                                  >
                                    <div className="font-medium">{t(child.labelKey)}</div>
                                    {child.descriptionKey && (
                                      <div className="text-xs opacity-70 mt-0.5">{t(child.descriptionKey)}</div>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block p-4 rounded-xl text-lg font-medium transition-all ${
                          isActive(item.href)
                            ? 'text-[var(--primary)] bg-[var(--primary-muted)]'
                            : 'text-[var(--foreground)] hover:bg-[var(--background-secondary)]'
                        }`}
                      >
                        {t(item.labelKey)}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
