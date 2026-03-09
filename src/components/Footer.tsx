'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: t('nav.home'), href: '/' },
      { label: t('nav.about'), href: '/about' },
      { label: t('nav.contact'), href: '/contact' },
      { label: t('footer.privacy'), href: '/privacy-policy' },
      { label: t('footer.terms'), href: '/terms-conditions' },
    ],
    services: [
      { label: 'Melora', href: '/services/melora' },
      { label: 'JivaPure', href: '/services/jivapure' },
      { label: 'SJ Tech Solution', href: '/services/sj-tech' },
      { label: 'HRMS', href: '/products/hrms' },
      { label: 'ProjectHub', href: '/products/projecthub' },
    ],
  };

  return (
    <footer className="relative border-t border-[var(--card-border)] bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <span className="text-white font-bold text-lg">SJ</span>
              </motion.div>
              <span className="text-lg font-bold text-[var(--foreground)]">
                SJ Group
              </span>
            </Link>
            
            <p className="mt-3 text-sm text-[var(--foreground-muted)] leading-relaxed">
              Pioneering the future of technology with innovative solutions.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] text-sm mb-3">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] text-sm mb-3">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] text-sm mb-3">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <a
                href="mailto:info@sjgroup.com"
                className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@sjgroup.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(+91) 831 887 5772</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Innovation Drive, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--foreground-muted)]">
            © {currentYear} SJ Group. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
